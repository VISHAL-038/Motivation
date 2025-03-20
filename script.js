document.addEventListener("DOMContentLoaded", () => {
    const introText = document.querySelector(".intro-text");
    const slideshowContent = document.querySelector(".slideshow-content");
    const photo = document.querySelector(".photo");
    const quote = document.querySelector(".quote");

    const slides = [
        { img: "images/palak1.jpg", text: "“Palak, you’re a star—everything will shine in time.”" },
        { img: "images/palak2.jpg", text: "“You’re stronger than the storms—calm is coming.”" },
        { img: "images/palak3.jpg", text: "“Hope is your superpower, Palak—hold on tight.”" },
        { img: "images/palak4.jpg", text: "“Peace is on its way—just breathe.”" },
        { img: "images/palak5.jpg", text: "“Courage runs through you—face anything.”" },
        { img: "images/palak6.jpg", text: "“You’re the light in the dark—keep glowing.”" },
        { img: "images/palak7.jpg", text: "“Your dreams are unstoppable—chase them.”" },
        { img: "images/palak8.jpg", text: "“You can break, but you’ll always rebuild.”" },
        { img: "images/palak9.jpg", text: "“Joy finds you, Palak—smile through it all.”" },
        { img: "images/palak10.jpeg", text: "“Everything will be fine—you’re enough.”" }
    ];

    let currentSlide = 0;

    // Intro animation: Show for 5 seconds
    gsap.from(introText, { 
        opacity: 0, 
        scale: 0.5, 
        duration: 1, 
        ease: "back.out(1.7)" 
    });
    gsap.to(introText, { 
        opacity: 0, 
        scale: 1.2, 
        duration: 1, 
        delay: 4, // 1s in + 4s stay = 5s total
        ease: "power2.in",
        onComplete: () => {
            introText.style.display = "none"; // Hide intro
            slideshowContent.style.display = "block"; // Show slideshow
            startSlideshow(); // Start slideshow
        }
    });

    function startSlideshow() {
        // Initial slide animation
        gsap.from(photo, { scale: 0.5, opacity: 0, duration: 1, ease: "elastic.out(1, 0.5)" });
        gsap.from(quote, { opacity: 0, y: 20, duration: 1, delay: 0.3 });

        // Start slideshow loop
        setInterval(updateSlide, 10000);
    }

    function updateSlide() {
        gsap.to(photo, { 
            opacity: 0, 
            scale: 0.8, 
            duration: 0.8, 
            ease: "power2.in",
            onComplete: () => {
                photo.src = slides[currentSlide].img;
                quote.textContent = slides[currentSlide].text;
                switch (currentSlide) {
                    case 0:
                        gsap.fromTo(photo, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" });
                        gsap.fromTo(quote, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 });
                        break;
                    case 1:
                        gsap.fromTo(photo, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
                        gsap.fromTo(quote, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, delay: 0.3 });
                        break;
                    case 2:
                        gsap.fromTo(photo, { rotation: 360, opacity: 0 }, { rotation: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" });
                        gsap.fromTo(quote, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 });
                        break;
                    case 3:
                        gsap.fromTo(photo, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "bounce.out" });
                        gsap.fromTo(quote, { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 1, delay: 0.3 });
                        break;
                    case 4:
                        gsap.fromTo(photo, { opacity: 0, filter: "blur(10px)" }, { opacity: 1, filter: "blur(0px)", duration: 1, ease: "power2.out" });
                        gsap.fromTo(quote, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 });
                        break;
                    case 5:
                        gsap.fromTo(photo, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(2)" });
                        gsap.fromTo(quote, { opacity: 0, rotation: 10 }, { opacity: 1, rotation: 0, duration: 1, delay: 0.3 });
                        break;
                    case 6:
                        gsap.fromTo(photo, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
                        gsap.fromTo(quote, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 });
                        break;
                    case 7:
                        gsap.fromTo(photo, { rotationX: 90, opacity: 0 }, { rotationX: 0, opacity: 1, duration: 1, ease: "power2.out" });
                        gsap.fromTo(quote, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, delay: 0.3 });
                        break;
                    case 8:
                        gsap.fromTo(photo, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: "power2.inOut" });
                        gsap.fromTo(quote, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 });
                        break;
                    case 9:
                        gsap.fromTo(photo, { scale: 0.5, rotation: -360, opacity: 0 }, { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" });
                        gsap.fromTo(quote, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 });
                        break;
                }
            }
        });
        gsap.to(quote, { opacity: 0, y: 20, duration: 0.8 });

        currentSlide = (currentSlide + 1) % slides.length;
    }
});