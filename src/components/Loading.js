import React from 'react'
import loading from '../Loading.gif'

export default function Loading() {
  return (
    <div>
      <img src={loading} alt="Loading.." className="img-fluid" />
      <p className="lead text-center">Getting Current Weather...</p>
    </div>
  )
}
