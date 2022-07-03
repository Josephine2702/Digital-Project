class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header container">
        <div class="header__logo">
            <img src="./assets/image/logo.png" alt="logo">
        </div>
        <nav class="header__nav">
            <a class="header__link" href="/main.html"><span>MAIN</span></a>
            <a class="header__link" href="/gallery.html">GALLERY</a>
            <a class="header__link" href="/our_projects.html">PROJECTS</a>
            <a class="header__link" href="/sertif.html">CERTIFICATIONS</a>
            <a class="header__link" href="/contacts.html">CONTACTS</a>
        </nav>
    </header>
    `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="footer__content container">
            <div class="footer__logo">
                <img src="./assets/image/logo_foter.png" alt="logo">
            </div>
            <div class="footer__info">
                <h3>Information</h3>
                <ul class="footer__info-container">
                <li class="footer__info-list">
                    <a class="footer__info-link" href="./main.html">Main</a></li>
                <li class="footer__info-list">
                    <a class="footer__info-link" href="./gallery.html">Gallery</a></li>
                <li class="footer__info-list">
                    <a class="footer__info-link" href="./our_projects.html">Projects</a></li>
                <li class="footer__info-list">
                    <a class="footer__info-list" href="./sertif.html">Certifications</a></li>
                <li class="footer__info-list">
                    <a class="footer__info-list" href="./contacts.html">Contacts</a></li>           
            </ul>
            </div>
            <div class="footer__contacts">
                <h3 class="footer__contacts-title">Contacts</h3>
                <ul class="footer__contacts-item">
                    <li class="footer__contacts-item">
                        <a class="footer__contacts-link" href="#">
                            <img src="./assets/icon/map.png" alt="map">1234 Sample Street
                <div class="footer__contacts-link-break">Austin Texas 78681</div> </a></li>
                    <li class="footer__contacts-item">
                        <a class="footer__contacts-link" href="tel:512.333.2222">
                            <img src="./assets/icon/telefon.png" alt="telefon">
                            512.333.2222
                        </a></li>
                    <li class="footer__contacts-item">
                        <img src="./assets/icon/email.png" alt="email">
                        <a class="footer__contacts-link" href="mailto:sampleemail@gmail.com">sampleemail@gmail.com</a></li>
                    
                </ul>
            </div>
            <div class="footer__sm">
                <h3 class="footer__sm-title">Social Media</h3>
                <ul class="footer__sm-content">
                    <li class="footer__sm">
                        <a class="footer__sm-links" href="#">
                            <img src="./assets/icon/facebook.png" alt="facebook">
                        </a></li>
                    <li class="footer__sm">
                        <a class="footer__sm-links" href="#"><img src="./assets/icon/twitter.png" alt="twitter"></a></li>
                    <li class="footer__sm"><a class="footer__sm-links" href=""> <img src="./assets/icon/LinkedIn.png" alt="linkedin"></a></li>
                    <li class="footer__sm"><a class="footer__sm-links" href=""> <img src="./assets/icon/pininterest.png" alt=""></a></li>
                </ul>
            </div>
            </div>
        
            <div class="footer__rights">
            <p class="footer__rights-titel">© 2021 All Rights Reserved</p> 
        </div>    
    </footer>
        `
    }
}

customElements.define('my-footer', MyFooter)