import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MovieList from './components/movieList';
import { TvFilm1, TvFilm2, TvFilm3, special, namavaSeries, updatedSeries, stars, directors } from './data';
import MovieItem from './components/movieItem';
import Stars from './components/stars';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <MovieList data={TvFilm1} title="محبوب ترین های فیلیمو" />
    <MovieList data={TvFilm2} title="محبوب ترینهای فیلیمو لیست دوم " />
    <MovieList data={TvFilm3} title="محبوب ترین های فیلیمو لیست سوم" />
    <MovieItem title="ویژه" listName={special} />
    <MovieItem title="سریال های اختصاصی نماوا" listName={namavaSeries} />
    <MovieItem title="سریال های به روز شده" listName={updatedSeries} />
    <Stars title="ستارگان" listName={stars} />
    <Stars title="ستارگان" listName={directors} />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
