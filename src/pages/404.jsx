import React from 'react'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <div style={{ textAlign: 'center', marginTop: '10vh', marginBottom: 'calc(100vh - 300px)' }}>
    <h1>OOPS!</h1>
    <h2>This page does not exist :(</h2>
    <Link to="/">Back to Overview</Link>
  </div>
)

export default NotFoundPage
