//기존 카테고리 값 => useState로 관리
//여기서는 리액트 라우터의 URL 파라미터 사용해서 관리 => 리액트 라우터 적용 시 만들어야 할 페이지는 하나임
//현재 선택된 category 값 URL 파라미터 통해 사용 => Categories 컴포넌트에서 현재 선택된 카테고리 값 알려 줄 필요 없음, onSelect 함수 따로 전달 할 필요 없음

import { useParams } from 'react-router-dom';
import NewsList from '../components/NewsList';
import Categories from '../components/Categories';

const NewsPages = () => {
  const params = useParams();
  //카테고리 선택 안되어 있으면 기본값 all
  const category = params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPages;
