import React from 'react';
import "./Experience.css";

const Experience = () => {
  return (
    <section className="page-section" id="experience">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Education & Experience </h2>
                
                    <h3 className="section-subheading "> I am an Aspiring full stack software engineer</h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image">{/*<img className="rounded-circle img-fluid" src="assets/wallpaper.jpg" alt="..." />*/}</div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2018-2020</h4>
                                <h4 className="subheading">BSc Computer Science</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted"> I studied my undergraduade degree in Conputer Science, I majored in Databases, Artificial Intelligence, Operating system(OS), Computer Networks, Time Series, Design and analysis of experiments and Linear regression</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">{/*<img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." />*/}</div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2021-2021</h4>
                                <h4 className="subheading">BSc Honours Computer Science</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted"> My postgraduate degree was in computer science. i majored in Software Engineering, Advanced Databases, Computer Networks and AI. My research project was In machine Learning, I develped speech recognition using Python ad Keras</p></div>
                        </div>
                    </li>
                    <li>
                    <div className="timeline-image">{/*<img className="rounded-circle img-fluid" src="porfolio/assets/IMG_0534.jpg" alt="..." />*/}</div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2022</h4>
                                <h4 className="subheading">Data Analyst Intern</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Data Cleaning, Data Visualisation, Data Fusion, Databases Design, Data verification and Quality Control, Experience In SQL, Pentaho ETL tool, Tableu</p></div>
                        </div>
                    </li>
                    {/*<li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
                        {/*<div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>July 2020</h4>
                                <h4 className="subheading">Phase Two Expansion</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                <li className="timeline-inverted">
                        {/*<div className="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                         </div>
                    </li>*/}
                </ul>
            </div>
        </section>

  )
}

export default Experience
