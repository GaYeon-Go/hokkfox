// Movie.js
import React from 'react'
import '../styles/Movie.css'

function Movie({id, propsimage, propstitle, propsyear, propssummary, propsgenres}) { //처음부터 구조분해 할당으로 내보낸다.
  return (
    <div className='movie'>
      <img src={propsimage} alt={propstitle} title={propstitle} />
      <div className='movie_data'>
        <h3 className='movie_title'>{propstitle}</h3>
        <h4 className='movie_year'>{propsyear}</h4>
        <ul className='movie_genres'>
          {propsgenres.map((genre,index) => (
            <li className='movie_genre' key={index}>{genre}</li>
          ))}
        </ul>
        <p className='movie_summary'>{propssummary.slice(0,180)}...</p>
      </div>
    </div>
  )
}

export default Movie