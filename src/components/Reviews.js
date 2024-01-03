import React from 'react'
import { Link } from 'react-router-dom'

function Reviews() {
  return (
    <div className="container my-3">
      <div className="reviews">
        <b>This is only for checking the react page is refreshing or not when this component is fired</b>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi molestiae illum quidem inventore ipsum ipsa reiciendis quam accusantium in architecto, minus, laborum sequi debitis sunt recusandae veniam non, minima velit!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus, maiores, nemo ipsam in eveniet aspernatur natus nostrum deleniti dolor aliquam excepturi pariatur, omnis ipsa assumenda amet facilis sequi doloribus!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quo rerum commodi eveniet doloremque. Itaque rem, suscipit ab ipsa quia vitae dignissimos placeat ad maxime culpa. Quia quod similique expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nam corrupti illum eum veritatis quod accusantium voluptate perferendis vel excepturi sit autem exercitationem soluta voluptatem facere aperiam veniam illo. Accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quam et in, a, vel dignissimos atque delectus reprehenderit veritatis amet praesentium minima provident id iste deserunt beatae est. Nemo, officia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolorem impedit qui et veniam aperiam corrupti dicta cupiditate nihil culpa rem architecto aliquam reiciendis ratione, amet velit itaque error corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic cumque esse repellendus, minus facere laudantium, autem voluptate pariatur molestiae vitae quod cupiditate non minima magni iure sunt molestias ullam iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis, laboriosam fugit atque dolorem perferendis ipsam totam pariatur laborum sint voluptatem beatae exercitationem optio aperiam maxime recusandae unde sit? Earum?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi molestiae illum quidem inventore ipsum ipsa reiciendis quam accusantium in architecto, minus, laborum sequi debitis sunt recusandae veniam non, minima velit!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus, maiores, nemo ipsam in eveniet aspernatur natus nostrum deleniti dolor aliquam excepturi pariatur, omnis ipsa assumenda amet facilis sequi doloribus!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quo rerum commodi eveniet doloremque. Itaque rem, suscipit ab ipsa quia vitae dignissimos placeat ad maxime culpa. Quia quod similique expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nam corrupti illum eum veritatis quod accusantium voluptate perferendis vel excepturi sit autem exercitationem soluta voluptatem facere aperiam veniam illo. Accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quam et in, a, vel dignissimos atque delectus reprehenderit veritatis amet praesentium minima provident id iste deserunt beatae est. Nemo, officia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolorem impedit qui et veniam aperiam corrupti dicta cupiditate nihil culpa rem architecto aliquam reiciendis ratione, amet velit itaque error corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic cumque esse repellendus, minus facere laudantium, autem voluptate pariatur molestiae vitae quod cupiditate non minima magni iure sunt molestias ullam iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis, laboriosam fugit atque dolorem perferendis ipsam totam pariatur laborum sint voluptatem beatae exercitationem optio aperiam maxime recusandae unde sit? Earum?
        </p>
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
    </div>
  )
}

export default Reviews
