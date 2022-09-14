import styles from '../styles/Header.css';
function Header() {
    return (
        <header className={styles.header} class="d-flex flex-row justify-content-evenly pt-3" style={{backgroundImage:'url(/images/banners/banner6.jpg',backgroundSize:"cover"}} >
            <div class="col-4">
                <div class="row justify-content-start">
                    <h1 class="pageTitle text-warp ">CARTELERA</h1>
                </div>
            </div>
            <div class="col-4">
                <nav class="navbar justify-content-end">
                    <ul class="row">
                        <li class="col">
                            <a href="..."><img src='/images/nav-Icons/Inicio.png' alt="Inicio" class="navbar-brand" /></a>
                        </li>
                        <li class="col">
                            <a href="https://www.facebook.com"><img src='/images/nav-Icons/facebook.png' alt="Facebook" class="navbar-brand" /></a>
                        </li>
                        <li class="col">
                            <a href="https://www.instagram.com"><img src='/images/nav-Icons/instagram.png' alt="Instagram" class="navbar-brand" /></a>
                        </li>
                        <li class="col">
                            <a href="https://www.twitter.com"><img src='/images/nav-Icons/twitter.png' alt="Twitter" class="navbar-brand" /></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;