import React from 'react';
import SearchForm from './components/SearchForm';
import MovieCard from './components/MovieCard';
export default function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎬 Movie Search</h1>
      <SearchForm />
      <MovieCard />
    </div>
  );
}

