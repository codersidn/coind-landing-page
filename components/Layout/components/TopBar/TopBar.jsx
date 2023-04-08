import React from 'react'

export default function TopBar() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top scrolling-navbar" id="navbar">
                    <div className="container"><a className="navbar-brand" href="#"><img src="img/coind_new.png"></img></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link" href="#features"><b>Fitur</b></a></li>
                                <li className="nav-item"><a className="nav-link" href="#screenshots"><b>Tampilan</b></a></li>
                                <li className="nav-item"><a className="nav-link" href="#learning"><b>Materi</b></a></li>
                                <li className="nav-item"><a className="nav-link" href="#about"><b>Tentang Kami</b></a></li>
                                <li className="nav-item"><a className="nav-link" href="#team"><b>Tim Kami</b></a></li>
                                <li className="nav-item"><a className="nav-link" href="#client"><b>Feedback</b></a></li>
                                <li className="nav-item"><a className="nav-link" href="#contact"><b>Kontak</b></a></li>
                            </ul><a className="btn btn-default btn-rounded my-0" href="https://wa.me/6285156518690"><b>Hubungi Kami</b></a>
                        </div>
                    </div>
                </nav>
        </React.Fragment>
    )
}
