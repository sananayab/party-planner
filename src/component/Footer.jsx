import React from 'react'

export default function Footer() {
    return (
        <div>
            <section class="contact" id="contact">

<h1 class="heading"> <span>contact</span> us </h1>

<form action="">
    <div class="inputBox">
        <input type="text" placeholder="name"/>
        <input type="email" placeholder="email"/>
    </div>
    <div class="inputBox">
        <input type="number" placeholder="number"/>
        <input type="text" placeholder="subject"/>
    </div>
    <textarea name="" placeholder="your message" id="" cols="30" rows="10"></textarea>
    <input type="submit" value="send message" class="btn"/>
</form>

</section>

 {/* contact section ends  */}

 {/* footer section starts  */}

<section class="footer">

<div class="box-container">

    <div class="box">
        <h3>branches</h3>
        <a href="#"> <i class="fas fa-map-marker-alt"></i> Lahore  </a>
        <a href="#"> <i class="fas fa-map-marker-alt"></i> Islamabad </a>
        <a href="#"> <i class="fas fa-map-marker-alt"></i> Karachi </a>
        <a href="#"> <i class="fas fa-map-marker-alt"></i> Peshwar </a>
        <a href="#"> <i class="fas fa-map-marker-alt"></i> Fasilabad</a>
    </div>

    <div class="box">
        <h3>quick links</h3>
        <a href="#"> <i class="fas fa-arrow-right"></i> home </a>
        <a href="#"> <i class="fas fa-arrow-right"></i> service </a>
        <a href="#"> <i class="fas fa-arrow-right"></i> about </a>
        <a href="#"> <i class="fas fa-arrow-right"></i> gallery </a>
        <a href="#"> <i class="fas fa-arrow-right"></i> price </a>
        <a href="#"> <i class="fas fa-arrow-right"></i> reivew </a>
        <a href="#"> <i class="fas fa-arrow-right"></i> contact </a>
    </div>

    <div class="box">
        <h3>contact info</h3>
        <a href="#"> <i class="fas fa-phone"></i> +123-456-7890 </a>
        <a href="#"> <i class="fas fa-phone"></i> +111-222-3333 </a>
        <a href="#"> <i class="fas fa-envelope"></i> hellofreewebsitecode@gmail.com </a>
        <a href="#"> <i class="fas fa-envelope"></i> hellofreewebsitecode@gmail.com </a>
        <a href="#"> <i class="fas fa-map-marker-alt"></i> Lahore - Pakistan - 758000 </a>
    </div>

    <div class="box">
        <h3>follow us</h3>
        <a href="https://facebook.com/freewebsitecode/"> <i class="fab fa-facebook-f"></i> facebook </a>
        <a href="https://freewebsitecode.com/"> <i class="fab fa-twitter"></i> twitter </a>
        <a href="https://freewebsitecode.com/"> <i class="fab fa-instagram"></i> instagram </a>
        <a href="https://freewebsitecode.com/"> <i class="fab fa-linkedin"></i> linkedin </a>
        <a href="https://www.youtube.com/channel/UC9HlQRmKgG3jeVD_fBxj1Pw/videos"> <i class="fab fa-youtube"></i> youtube </a>
    </div>

</div>

<div class="credit"> created by <span><a href="https://smilepk-github-io.vercel.app">smilepk</a></span> | all rights reserved </div>

</section>

</div>

 

    )
}
