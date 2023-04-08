import React, { Fragment } from 'react'

export default function Client() {
    return (
        <React.Fragment>
            <section className="py-5 grey lighten-4" id="client">
                <div className="container py-5">
                    <div className="wow fadeIn">
                        <h2 className="h1 h1-responsive text-center my-5">Feedback</h2>
                        <p className="px-5 mb-5 lead text-center blue-grey-text">Feedback dari kalian semua </p>
                    </div>
                    <div className="wow fadeInUp">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-8 text-center pt-3">
                                <div className="carousel slide carousel-fade" id="carousel-ma" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li className="active" data-target="#carousel-ma" data-slide-to="0"></li>
                                        <li data-target="#carousel-ma" data-slide-to="1"></li>
                                        {/* <li data-target="#carousel-ma" data-slide-to="2"></li> */}
                                    </ol>
                                    <div className="carousel-inner pb-5" role="listbox">
                                        <div className="carousel-item active">
                                            <div className="col"><img className="rounded-circle" src="img/client-1.jpg" alt="image"  />
                                                <p className="pt-4 px-5">"Untuk sistem cara mengajar nya sangat baik, mudah dimengerti dan pasti nya sangat sabar karna untuk membuat kami terutama saya pribadi untuk mengerti apa itu flutter, saya rasa ini pembelajaran yang sangat bagus.
" </p>
                                                <p><strong> Ahmat Ramadana Rayyan, Mahasiswa</strong></p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="col"><img className="rounded-circle" src="img/client-2.jpg" alt="image"  />
                                                <p className="pt-4 px-5">"Pematerinya sangat mengerti kita yang baru belajar, jika kita tidak paham boleh bisa tanya Lewat japri, jika banyak yg tidak paham, maka untuk ada pengulangan materi" </p>
                                                <p><strong> Alfitra Pratama, Mahasiswa , Freelance UI/UX</strong></p>
                                            </div>
                                        </div>
                                        {/* <div className="carousel-item">
                                            <div className="col"><img className="rounded-circle" src="img/client-3.jpg" alt="image"  />
                                                <p className="pt-4 px-5">"Aliquam urna semper euismod est eu quis elementum ad, scelerisque sodales platea tortor sapien fames tellus ullamcorper" </p>
                                                <p><strong> Karen Ford, MD</strong></p>
                                            </div>
                                        </div> */}
                                    </div><a className="justify-content-start carousel-control-prev" href="#carousel-ma" role="button" data-slide="prev"><span aria-hidden="true"><i className="fa fa-caret-left fa-2x indigo-text"></i></span><span className="sr-only text-blue">Previous </span></a><a className="justify-content-end carousel-control-next" href="#carousel-ma" role="button" data-slide="next"><span aria-hidden="true"><i className="fa fa-caret-right fa-2x indigo-text "></i></span><span className="sr-only text-blue">Next</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
