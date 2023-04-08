import React from 'react'

export default function Features() {
    return (
        <React.Fragment>
            <section className="py-5" id="features">
                <div className="container">
                    <div className="wow fadeIn">
                        <h2 className="h1-responsive h1 text-center my-5">Alasan kenapa kamu harus mengunduh aplikasi kami?</h2>
                        <p className="lead blue-grey-text text-center w-responsive mx-auto mb-5">Karena hampir semua pengetahuan yang kami sediakan gratis. Kamu juga tidak ketinggalan informasi mengenai kelas, seminar, atau workshop baru yang kami sediakan.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 wow fadeInLeft text-center text-lg-left"><img className="img-fluid" src="img/screens-section.png" alt="phone image" /></div>
                        <div className="col-lg-6 pt-5">
                            <div className="row mb-3">
                                <div className="col-1 wow bounceIn"><i className="fa fa-chevron-right fa-lg indigo-text"></i></div>
                                <div className="col-xl-10 col-md-11 col-10 wow fadeInRight">
                                    <h5 className="h4 mb-3">Artikel</h5>
                                    <p className="grey-text">Informasi yang kami suguhkan relevan dan enggak ketinggalan jaman.</p>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-1 wow bounceIn"><i className="fa fa-chevron-right fa-lg indigo-text"></i></div>
                                <div className="col-xl-10 col-md-11 col-10 wow fadeInRight">
                                    <h5 className="h4 mb-3">Video</h5>
                                    <p className="grey-text">Pembelajaran video dari kami dikemas seinteraktif mungkin.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1 wow bounceIn"><i className="fa fa-chevron-right fa-lg indigo-text"></i></div>
                                <div className="col-xl-10 col-md-11 col-10 wow fadeInRight">
                                    <h5 className="h4 mb-3">Jadwal</h5>
                                    <p className="grey-text">Kumpulan jadwal mengenai seminar, workshop, kelas , kopdar(Kopi Darat) yang bisa kamu pilih dan ikuti.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
