import React from 'react'

export default function Header() {

    return (

        <div>
            <header class="header">

<link logo ="#" class="#"><span>Party</span>Oraginiser</link>

<nav class="navbar">
    <a href="#home">home</a>
    <a href="#service">service</a>
    <a href="#about">about</a>
    <a href="#gallery">gallery</a>
    <a href="#price">price</a>
    <a href="#review">review</a>
    <a href="#contact">contact</a>
</nav>

<div id="menu-bars" class="fas fa-bars"></div>

</header>
<section class="home" id="home">

    <div class="content">
        <h3>its time to celebrate! the best <span> event organizers </span></h3>
        <link btn="#" class="btn">contact us</link>
    </div>

    <div class="swiper-container home-slider">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="/assets/images/slide-1.jpg" alt=""/></div>
            <div class="swiper-slide"><img src="/assets/images/slide-2.jpg" alt=""/></div>
            <div class="swiper-slide"><img src="assets/images/slide-3.jpg" alt=""/></div>
            <div class="swiper-slide"><img src="assets/images/slide-4.jpg" alt=""/></div>
            <div class="swiper-slide"><img src="assets/images/slide-5.jpg" alt=""/></div>
            <div class="swiper-slide"><img src="assets/images/slide-6.jpg" alt=""/></div>
        </div>
    </div>

</section>
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

        </div>
        
    )
}
