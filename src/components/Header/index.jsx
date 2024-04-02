import logo from "./../../assets/images/main-logo.svg";
import information from "./../../assets/images/more-info.svg";
import "./style.scss";

export default function Header(){
    return <header>
        <div className="container">
            <nav>
                <div className="footer-wrapper">
                <a href="#"><img src={logo} alt="main-logo" /></a>
                <ul class="footer-ul">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">TENTANG KAMI</a></li>
                    <li><a href="#">KURSUS</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li class="blog-wrapper">
                        <p>BLOG</p>
                        <img src={information} alt="information-img" />
                    </li>
                    <li><button>Login</button></li>
                </ul>
                </div>
            </nav>
        </div>
    </header>
}