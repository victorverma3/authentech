import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Activities</h1>

      <Link to="/add-activity">
        <button style={{ borderRadius: '8px', border: '1px solid transparent', padding: '0.6em 1.2em', fontSize: '1em', fontWeight: 500, backgroundColor: '#1a1a1a', color: '#fff', cursor: 'pointer', transition: 'border-color 0.25s', textDecoration: 'none' }}>Add Activity</button>
      </Link>
    </div>
  )
}

export default Home
