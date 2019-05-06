import React from 'react';
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css'

const MyCrawlComponent = ({ film }) => {
  const text = film.opening_crawl + '\n' + film.title + '\n' + film.release_date;
  console.log(text)
  return (
    <Crawl
      title={film.title}
      subTitle={film.release_date}
      text={film.opening_crawl}
    />
  )
}



export default MyCrawlComponent;