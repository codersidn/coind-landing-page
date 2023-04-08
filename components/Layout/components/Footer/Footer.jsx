import React from 'react'

export default function Footer() {
    return (
        <React.Fragment>
            <footer className="page-footer special-color-dark">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-12 pb-3">
                            <div className="flex-center">
                                <a className="px-3" href="https://www.facebook.com/CoderIndo.org"><i className="fa fa-facebook fa-lg white-text"></i></a>
                                <a className="px-3" href="https://www.instagram.com/coderindonesia/"><i className="fa fa-instagram fa-lg white-text"></i></a>
                                <a className="px-3" href="https://discord.gg/TabSUQs"><i><img src="img/ic_discord.png"/></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid text-center">
                        <p className="mb-0">&copy; <a href="/">Coder Indonesia</a>. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}
