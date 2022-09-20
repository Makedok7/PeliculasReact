import '../styles/Header.css';
function Header() {
    return (
        <header className="d-flex flex-row justify-content-evenly pt-3" style={{backgroundImage:'url(/images/banners/banner6.jpg',backgroundSize:"cover"}} >
            <div className="col-4">
                <div className="row justify-content-start">
                    <h1 className="pageTitle text-warp ">CARTELERA</h1>
                </div>
            </div>
            <div className="col-4">
                <nav className="navbar justify-content-end">
                    <ul className="row">
                        <li className="col">
                            <a href="..."><img src='/images/nav-Icons/Inicio.png' alt="Inicio" className="navbar-brand" /></a>
                        </li>
                        <li className="col">
                            <a href="https://www.facebook.com"><img src='/images/nav-Icons/facebook.png' alt="Facebook" className="navbar-brand" /></a>
                        </li>
                        <li className="col">
                            <a href="https://www.instagram.com"><img src='/images/nav-Icons/instagram.png' alt="Instagram" className="navbar-brand" /></a>
                        </li>
                        <li className="col">
                            <a href="https://www.twitter.com"><img src='/images/nav-Icons/twitter.png' alt="Twitter" className="navbar-brand" /></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;