let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});

document.addEventListener("DOMContentLoaded", function(){
    const toggleButton = document.querySelector(".menu-toggle");
    const menuItems = document.querySelector(".menu-link");

    toggleButton.addEventListener("click", function() {
        menuItems.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".menu-link a");

    for (const link of links) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        });
    }
});











// <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
//             <div class="carousel-indicators">
//               <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
//               <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
//               <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
//             </div>
//             <div class="carousel-inner">
//               <div class="carousel-item">
//                 <img src="./images/building.jpg" alt="building-1">
//                 <div class="container">
//                   <div class="carousel-caption text-start">
//                     <h1>Welcome to Green.</h1>
//                     <p class="opacity-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam asperiores eveniet est aspernatur reiciendis. Fugiat optio eaque vitae iure aut.</p>
//                     <p><a class="btn btn-lg btn-primary" href="#">Read More</a></p>
//                   </div>
//                 </div>
//               </div>
//               <div class="carousel-item active carousel-item-start">
//                 <img src="./images/building2.jpeg" alt="building-2">
//                 <div class="container">
//                   <div class="carousel-caption">
//                     <h1>Ready to Explore our City.</h1>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fuga tenetur, neque aspernatur dolorum ipsam officia ea consectetur eos magnam!</p>
//                     <p><a class="btn btn-lg btn-primary" href="#">Read More</a></p>
//                   </div>
//                 </div>
//               </div>
//               <div class="carousel-item carousel-item-next carousel-item-start">
//                 <img src="./images/building3.jpeg" alt="building-3">
//                 <div class="container">
//                   <div class="carousel-caption text-end">
//                     <h1>Have the best experience.</h1>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quod vel veritatis illum explicabo quos.</p>
//                     <p><a class="btn btn-lg btn-primary" href="#">Read More</a></p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
//               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//               <span class="visually-hidden">Previous</span>
//             </button>
//             <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
//               <span class="carousel-control-next-icon" aria-hidden="true"></span>
//               <span class="visually-hidden">Next</span>
//             </button>
//           </div>