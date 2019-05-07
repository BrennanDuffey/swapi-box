import React from 'react';
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css'

const MyCrawlComponent = ({ film }) => {
  return (
    <Crawl
      title={film.title}
      subTitle={film.release_date}
      text={film.opening_crawl}
    />
  )
}



export default MyCrawlComponent;