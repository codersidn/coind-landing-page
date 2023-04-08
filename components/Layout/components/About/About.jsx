import React from 'react'

export default function About() {
    return (
        <React.Fragment>
            <section className="py-5 grey lighten-4" id="about">
                <div className="container">
                    <div className="wow fadeIn">
                        <h2 className="h1 h1-responsive text-center my-5">Tentang Kami</h2>
                        <p className="lead text-dark text-center w-responsive mx-auto mb-5">Kami adalah komunitas pembelajaran online secara gratis yang berhubungan dengan dunia IT, pembelajaran yang kita sediakan, berupa materi ebook, video, belajar bersama
mentor secara langsung, tujuan kami adalah agar semakin banyak programmer di indonesia.</p>
                    </div>
                    <div className="row">
                        {/* <div className="col-md-4 mb-md-0 mb-5 wow zoomIn" data-wow-delay=".1s">
                            <div className="row">
                                <div className="col-lg-2 col-md-3 col-2"><i className="fa fa-briefcase orange-text fa-2x"></i></div>
                                <div className="col-lg-10 col-md-9 col-10">
                                    <h4 className="h4">Experience</h4>
                                    <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p><a className="btn btn-default btn-sm ml-0" href="#">Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-md-0 mb-5 wow zoomIn" data-wow-delay=".3s">
                            <div className="row">
                                <div className="col-lg-2 col-md-3 col-2"><i className="fa fa-cogs indigo-text fa-2x"></i></div>
                                <div className="col-lg-10 col-md-9 col-10">
                                    <h4 className="h4">Flexibility</h4>
                                    <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p><a className="btn btn-default btn-sm ml-0" href="#">Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-md-0 mb-5 wow zoomIn" data-wow-delay=".5s">
                            <div className="row">
                                <div className="col-lg-2 col-md-3 col-2"><i className="fa fa-trophy green-text fa-2x"></i></div>
                                <div className="col-lg-10 col-md-9 col-10">
                                    <h4 className="h4">Results </h4>
                                    <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p><a className="btn btn-default btn-sm ml-0" href="#">Learn more</a>
                                </div>
                            </div>
                        </div> */}
                    </div><center><img className="img-fluid wow slideInUp" src="img/coind-about.png" alt="iphone image" /></center>
                </div>
            </section>
        </React.Fragment>
    )
}
