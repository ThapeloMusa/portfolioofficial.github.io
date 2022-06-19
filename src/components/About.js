import React from "react";


const About = () => {
  return (
   <>
   <section className="page-section bg-dark text-white mb-0" id="about">
            <div className="container">
                {/* <!-- About Section Heading--> */}
                <h2 className="page-section-heading text-center ">About</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- About Section Content--> */}
                <div className="row">
                    <div className="col-lg-4 ms-auto"><p className="lead"> I'm <h4>Thapelo Nghayo</h4>, an aspiring software engineer, who constantly seeks out innovative solutions to everyday problems, I hold an Honours degree In computer Science. I am tech enthusiast, Programming has been my passion since I was a child, and to me, programming is about being creative, finding new and accurate ways to solve existing problems, and developing creative solutions.

I enjoy programming and have a good background in javascript, ASP.NET, React Native, Bootstrap, HTML 5, and CSS.
I am capable of developing and deploying applications.  </p></div>
                     
                    <div className="col-lg-4 me-auto" margin-left><p className="lead"> I would be happy to be part of the Software engineering graduate programme at SovTech, Please click on the button below to know why:</p>
                    <a href="#motivation" className="btn-main"> Click</a>
                    </div>
                </div>
                
            </div>
        </section>
   </>
  )
}

export default About;
