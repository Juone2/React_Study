import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../component/Categories';
import NewsList from '../component/NewsList';

export default function NewsPage() {
  const params = useParams();
  const category = params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
}
