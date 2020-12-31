export default function Footer(){
		return <footer className="text-center-xs space--xs"> { /*--css non bootstrap--*/}
            <div className="container">
                <div className="row">
                    <div className="col-sm-7">

                        <ul className="list-inline">
                            <li> <a href="https://www.codepolitan.com/feedback"><span className="h6 type--uppercase">Feedback</span></a> </li>
                            <li> <a href="https://www.codepolitan.com/tnc"><span className="h6 type--uppercase">Terms &amp; Conditions</span></a> </li>
                            <li> <a href="https://www.codepolitan.com/privacy-policy"><span className="h6 type--uppercase">Privacy Policy</span></a> </li>
                            <li> <a href="https://www.codepolitan.com/credit-to-bug-reporter"><span className="h6 type--uppercase">Hall of Fame</span></a> </li>
                            <li> <a href="https://www.rumahkomunitas.com/codepolitan" target="_blank" rel="noreferrer"><span className="h6 type--uppercase">Merchandise</span></a> </li>

                        </ul>
                    </div>
                    <div className="col-sm-5 text-right text-center-xs">
                        <ul className="social-list list-inline list--hover">
                            <li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/codepolitan/"><i className="socicon socicon-facebook icon icon--xs"></i></a></li>
                            <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/codepolitan/"><i className="socicon socicon-instagram icon icon--xs"></i></a></li>
                            <li><a rel="noreferrer" target="_blank" href="https://twitter.com/codepolitan"><i className="socicon socicon-twitter icon icon--xs"></i></a></li>
                            <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/codepolitan"><i className="socicon socicon-linkedin icon icon--xs"></i></a></li>
                            <li><a rel="noreferrer" target="_blank" href="https://www.youtube.com/c/codepolitan"><i className="socicon socicon-youtube icon icon--xs"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-7">
                        <span className="type--fine-print">© <span className="update-year">2020</span> CodePolitan. All rights reserved</span>
                    </div>
                    <div className="col-sm-5 text-right text-center-xs">
                        <a className="type--fine-print" href="mailto:info@codepolitan.com">info@codepolitan.com</a>
                    </div>
                </div>
            </div>
        </footer>
	}