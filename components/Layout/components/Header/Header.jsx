import React from 'react'

export default function Header() {
    return (
        <React.Fragment>  
                <section className="view" id="intro">
                <div className="full-bg-img d-flex align-items-center">
                <div className="container">
                    <div className="row no-gutters">
                    <div className="col-md-10 col-lg-6 text-center text-md-left margins">
                        <div className="white-text">
                        <div className="wow fadeInRight" data-wow-delay="0.3s">
                            <h1 className="h1 h1-responsive">Pengen belajar ngoding tapi bingung mulai dari mana?</h1>
                            <div className="h6">
                            Kami menyediakan platform bagi kamu yang ingin belajar bersama mentor yang berpengalaman,
dengan materi-materi yang masih relevan digunakan saat ini, dan semuanya bisa kamu nikmati
di aplikasi mobile kami.
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row no-gutters wow fadeInRight" data-wow-delay="0.3s">
                    <div className="col-lg-2 col-md-3 col-sm-12 mr-md-4 justify-content-center d-flex mb-3">
                        <a href="https://play.google.com/store/apps/details?id=com.creation.coderindonesia"> <img className="img-fluid hoverable" src="img/google-play.png" alt="google play logo" /></a>
                        </div>
                    {/* <div className="col-lg-2 col-md-3 col-sm-12 justify-content-center d-flex">
                        <a href="#"> 
                            <img className="img-fluid hoverable" src="img/app-store.png" alt="app store logo"/>
                        </a>
                    </div> */}
                    </div>
                    <div className="row no-gutters">
                    <div className="col-md-10 col-lg-6 text-center text-md-left margins">
                        <div className="white-text">
                        <div className="wow fadeInRight" data-wow-delay="0.3s">
                            <div className="h6">
                                <i>
                            * Tersedia di semua perangkat Android
                            </i>
                            </div>
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
