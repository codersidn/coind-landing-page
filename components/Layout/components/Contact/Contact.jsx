import React from 'react'

export default function Contact() {
    return (
        <React.Fragment>
            <section id="contact">
                <div>
                    <div className="container">
                        <div className="wow fadeIn">
                            <h2 className="h1 h1-responsive text-center my-5">Kontak Kami</h2>
                            <p className="px-5 mb-5 pb-3 lead text-center blue-grey-text">
                                Silahkan Hubungi Kami Melalui Email</p>
                        </div>
                        <div className="row">
                            <div className="col-md-5 p-5">
                                <ul className="list-unstyled text-center">
                                    <li className="mt-4"><i className="fa fa-map-marker text-default fa-2x"></i>
                                        <p className="mt-2"> <strong>Indonesia</strong></p>
                                    </li>
                                    <li className="mt-4"><i className="fa fa-phone text-default fa-2x"></i>
                                        <p className="mt-2"> <strong>+62 8515 6518 690</strong></p>
                                    </li>
                                    <li className="mt-4"><i className="fa fa-envelope text-default fa-2x"></i>
                                        <p className="mt-2"> <strong>codersidn@gmail.com</strong></p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-7">
                                <div className="card mb-5 wow fadeInLeft" data-wow-delay=".4s">
                                    <div className="card-body px-5">
                                        <form action="#" method="POST">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="md-form">
                                                        <input className="form-control" id="name" type="text" name="name" required="required" />
                                                        <label htmlFor="name">Nama</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="md-form">
                                                        <input className="form-control" id="email" type="text" name="_replyto" required="required" />
                                                        <label htmlFor="email">Email</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="md-form">
                                                        <input className="form-control" id="subject" type="text" name="subject" required="required" />
                                                        <label htmlFor="subject">Subjek</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="md-form">
                                                        <textarea className="md-textarea form-control" id="message" name="message" required="required"></textarea>
                                                        <label htmlFor="message">Pesan</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="center-on-small-only mb-4">
                                                <button className="btn btn-default ml-0" type="submit"><i className="fa fa-paper-plane-o mr-2"></i> Kirim </button>
                                            </div>
                                        </form>
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
