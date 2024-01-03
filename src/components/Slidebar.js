import React from 'react'

function Slidebar() {
    return (
        <>
            <div id="myCarousel" className="carousel slide pointer-event" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{height:'17rem'}}>
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

                        <div className="container">
                            <div className="carousel-caption text-dark ">
                                <h4 className="quoteText">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."</h4>
                                <p>Name of the reviewer.<br></br>Designation of the reviewer</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{height:'17rem'}}>
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

                        <div className="container">
                            <div className="carousel-caption text-dark">
                                <h4 className="quoteText">Another example headline.</h4>
                                <p>Name of the reviewer.<br></br>Designation of the reviewer</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{height:'17rem'}}>
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

                        <div className="container">
                            <div className="carousel-caption text-dark">
                                <h4 className="quoteText">Another example headline.</h4>
                                <p>Name of the reviewer.<br></br>Designation of the reviewer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Slidebar
