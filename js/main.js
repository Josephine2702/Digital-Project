class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header">
        <nav class="navbar">
            <div class="nav__logo"><img class="nav__logo" src="./assets/image/logo.png" alt="Logo"></div>
            <ul class="nav__menu">
                <li class="nav__item">
                    <a href="./main.html" class="nav__link"> <span>MAIN</span></a></li>
                <li class="nav__item">
                    <a href="./gallery.html" class="nav__link">GALLERY</a></li>
                <li class="nav__item">
                    <a href="./our_projects.html" class="nav__link">PROJECTS</a></li>
                <li class="nav__item">
                    <a href="./sertif.html" class="nav__link">CERTIFICATIONS</a></li>
                <li class="nav__item">
                    <a href="./contacts.html" class="nav__link">CONTACTS</a></li>
            </ul>
            <div class="hamb">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    </header>
    `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
        <div class="footer__content container">
        <div class="footer__logo">
            <img src="./assets/image/logo_foter.png" alt="logo">
        </div>
        <div class="footer__info">
            <h3 class="info__title">Information</h3>
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

let hamb = document.querySelector(".hamb")
let navMenu = document.querySelector(".nav__menu")

hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamb.classList.toggle("active")
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav__link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamb.classList.remove("active");
    navMenu.classList.remove("active");
}