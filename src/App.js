import { useState, useCallback } from 'react';
import axios from 'axios';
import './App.css';
import NewsList from './components/NewsList';

import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};
//경로에 category URL 있어도 업어도 NewsPage 컴포넌트 보여야 하므로 Route 두번 사용

/*
const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />;
    </>
  );
};
*/

/*
const App = () => {
  const [data, setData] = useState(null);
  
  const onClick = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        setData(response.data);
      });
  };
  
  const onClick = async () => {
    try {
      //내api: 8ecb99af6aa245fbb75f7236399e31d3
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=8ecb99af6aa245fbb75f7236399e31d3',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};
*/
export default App;
