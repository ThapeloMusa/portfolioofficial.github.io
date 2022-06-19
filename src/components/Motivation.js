import React from 'react';

const Motivation = () => {
  return (
    <section className="page-section bg-dark text-white mb-0" id="motivation">
    <div className="container">
        {/* <!-- About Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-white">Motivation</h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
        </div>
        {/* <!-- About Section Content--> */}
        <div className="row">
            <div className="col-lg-4 ms-auto"><p className="lead">I wish to work as a software engineer at SovTech for several reasons. The first is that SovTech has a proven track record of success and a wealth of expertise, and I believe I can learn and grow as a software engineer there.

The second reason is because I conducted some research on SovTech and saw how successful you are year after year, so I'd like to work for an organization like yours with big ambitions for the future.</p></div>
            <div className="col-lg-4 me-auto"><p className="lead">Third, during my research, I looked online at the feedback and reviews you receive from your clients and employees, and they love your services, which tells me that you do everything to a very high standard. Finally, I am looking forward to working for an organization that is always looking to improve and push the boundaries of innovation.One of the main reasons I want to work at SovTech is that I want to constantly improve, grow, and develop as part of a team.</p></div>
        </div>
        {/* <!-- About Section Button--> */}
        {/*<div className="text-center mt-4">
            <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                <i className="fas fa-download me-2"></i>
                Free Download!
            </a>
  </div>*/}
    </div>
</section>
  )
}

export default Motivation;
