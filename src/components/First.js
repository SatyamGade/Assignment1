import React from 'react'
import img from '../images/img.png'
import { Link } from 'react-router-dom'


function First() {
  return (
    <>
      <div className="navImg" style={{ backgroundImage: `url(${img})` }}>
      </div>
      <div className="bgText">
        <h6>NITYANAND CHARAN DAS</h6>
        <h5>Learn key life lessons from the Gita: Mind control and conflict resolution</h5>
      </div>
      <div className="card priceTag">
        <div className="card-body">
          <h5 className="card-title">Course Fee</h5>
          <h1 style={{ fontStyle: 'italic' }}>₹5000</h1>
          <p>What's included:</p>
          <p><i class="fa-solid fa-film mx-1"></i> 5 on demand videos</p>
          <p><i class="fa-solid fa-video mx-1"></i> 2 live stream sessions</p>
          <p><i class="fa-regular fa-message mx-1"></i> Live Q&A sessions</p>
          <p><i class="fa-brands fa-whatsapp mx-1"></i> An active whatsapp community</p>
          <div className="text-center">
            <Link to="/" className="btn btn-primary">Register Today</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default First
