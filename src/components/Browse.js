import React, { useEffect } from 'react'
import Header from './Header'
import useFetchNowplayingMovies from '../utils/hooks/hooks'
const Browse = () => {
  useFetchNowplayingMovies();

  return (
    <div>
      <Header></Header>
    </div>
  )
}

export default Browse