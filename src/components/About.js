import React from 'react'
import image from '../images/sml.jpg'
import Slidebar from './Slidebar'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <div className="container my-3 mainDiv">
        <div className="about">
          <h4><b>About the course</b></h4>
          <p>This course is all about managing relationships, communication, time management, and forgiveness. Relationships in the workplace can be highly beneficial to the success you achieve in your career. Building and managing strong professional relationships can help you learn and develop skills, work together to achieve common goals, and enjoy your job. Communication refers to the process by which information is exchanged between two or more people (increasingly, machines are also included in communication, but we limit the discussion here to communication between people). Each of the management roles—planning, organizing, leading, and controlling—depends on effective communication. Though adults are working, the students are not spared with work. The students today have many studies to do. Because of this, they are not getting time to enjoy their childhood. Time management for students has become a crucial need. Education has become vast. Therefore proper scheduling of time is important. Forgiveness means different things to different people. But in general, it involves an intentional decision to let go of resentment and anger.</p>

          <h4><b>What to expect from the course</b></h4>
          <ul>
            <li>Learn to mange your relationships</li>
            <li>Better communication</li>
            <li>Time management</li><li>Forgiveness</li>
          </ul>

          <h4><b>Key topics covered</b></h4>
          <p>Following are the some key topics will be covered in this course.</p>
          <ol>
            <li><b>10 written and audio sessions</b> guiding you in decoding the language of numbers so that you can easily receive their insights and messages.</li>
            <li><b>Intuitive exercises and homework</b> walk you through the energies and values of numbers and number sequences so you can become your own authority.</li>
            <li><b>Handy reference</b> to numerical meanings, so you can uncover your soul's gifts, challenges, lessons, and purpose and receive spiritual guidance along your path.</li>
            <li><b>Expert techniques</b> for manifestation offer simple ways to use numbers to co-create with the universe.</li>
          </ol>
        </div>

        <h4 className="my-3"><b>About the instructor</b></h4>
        <div className="aboutInstructor">
          <img src={image} className="img-thumbnail aboutImg" alt="Img" style={{ height: '250px' }} />
          <div className="aboutInstructorText">
            <p>Nityanand Charan Das is a practising monk at the Sri Sri Radha Gopinath Temple, ISKCON Chowpatty, Mumbai, and a visionary who wishes to revolutionize the current urban scenario by aiding people to lead a life of purpose, fulfilment and satisfaction. He also specializes in guiding today's youth to reconnect with their roots and lead a simple yet happy life.</p>
          </div>
          <div className="aboutInstructorText">
            <p>Nityanand Charan Das focuses on making the sacred teachings of our holy scriptures simple so they that resonate with anyone and everyone. His message is simple: 'Spiritual life is not a life of rejection. It is a life of connection.' He says, we do not have to give up anything, we simply have to add this valuable dimension to our life. </p>
          </div>
        </div>

        <div className="my-5 d-flex justify-content-between" id="socials">
          <div>
            <i className="fa-brands fa-facebook"></i><Link to="/" className="mx-1">facebook</Link>
          </div>
          <div>
            <i className="fa-brands fa-instagram"></i><Link to="/" className="mx-1">instagram</Link>
          </div>
          <div>
            <i className="fa-brands fa-youtube"></i><Link to="/" className="mx-1">youtube</Link>
          </div>
          <div>
            <i className="fa-brands fa-twitter"></i><Link to="/" className="mx-1">twitter</Link>
          </div>
        </div>


        {/* Card only for small screen*/}
        <div className="card priceTagForSS my-3">
          <div className="card-body">
            <h5 className="card-title">Course Fee</h5>
            <h1 style={{ fontStyle: 'italic' }}>₹5000</h1>
            <p>What's included:</p>
            <p><i className="fa-solid fa-film mx-1"></i> 5 on demand videos</p>
            <p><i className="fa-solid fa-video mx-1"></i> 2 live stream sessions</p>
            <p><i className="fa-regular fa-message mx-1"></i> Live Q&A sessions</p>
            <p><i className="fa-brands fa-whatsapp mx-1"></i> An active whatsapp community</p>
            <div className="text-center">
              <Link to="/" className="btn btn-primary">Register Today</Link>
            </div>
          </div>
        </div>

        <Slidebar />
      </div>
    </>
  )
}

export default About
