import React from 'react'

export default function Screenshots() {
    return (
        <React.Fragment>
            <section className="py-5 grey lighten-4" id="screenshots">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="wow fadeIn">
                                <h2 className="h1 h1-responsive text-center text-md-right my-5">Tampilan Aplikasi</h2>
                                <p className="lead blue-grey-text text-center text-md-right">Beberapa tampilan yang kami perlihatkan dimulai dari artikel, video, sampai schedule, bagi kamu yang penasaran.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="wow fadeInUp">
                                <div className="pt-5">
                                    <div className="carousel slide carousel-fade text-center" id="carousel-screenshot" data-ride="carousel">
                                        <div className="carousel-inner text-center pb-5" role="listbox">
                                            <div className="carousel-item active">
                                                <img className="img-fluid z-depth-2" src="img/s1.jpg" alt="screenshot image"  /></div>
                                            <div className="carousel-item"><img className="img-fluid z-depth-2" src="img/s2.jpg" alt="screenshot image-1" /></div>
                                            <div className="carousel-item"><img className="img-fluid z-depth-2" src="img/s3.jpg" alt="screenshot image-2"  /></div>
                                            <div className="carousel-item"><img className="img-fluid z-depth-2" src="img/s4.jpg" alt="screenshot image-3" /></div>
                                            <div className="carousel-item"><img className="img-fluid z-depth-2" src="img/s5.jpg" alt="screenshot image-4"  /></div>
                                            <div className="carousel-item"><img className="img-fluid z-depth-2" src="img/s6.jpg" alt="screenshot image-5"  /></div>
                                        </div><a className="carousel-control-prev" href="#carousel-screenshot" role="button" data-slide="prev">
                                            <span aria-hidden="true">
                                                <i className="fa fa-arrow-left indigo-text "></i>
                                            </span><span className="sr-only text-blue">Previous</span></a>
                                        <a className="carousel-control-next" href="#carousel-screenshot" role="button" data-slide="next">
                                            <span aria-hidden="true"><i className="fa fa-arrow-right indigo-text ">
                                            </i></span><span className="sr-only">Next</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
