import React from 'react'
import { Router } from '@reach/router'
import DetailedView from '../components/DetailedView'

const Detail = () => (
  <Router>
    <DetailedView path="/detail/movie/:id" type="movie" />
  </Router>
)

export default Detail
