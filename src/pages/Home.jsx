import Feed from '@/components/Feed/Feed';
import SearchBar from '@/components/SearchBar/SearchBar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [filter, setFilter] = useState('');

  const handleSearch = (searchValue) => {
    setFilter(searchValue); // 검색어를 상태로 설정
  };

  return (
    <div className="flex flex-col items-center dark:bg-black">
      <SearchBar onSearch={handleSearch} />
      <Feed filter={filter} />
      <Link to={'/writing'}>글쓰기</Link>
    </div>
  );
}

export default Home;
