const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      current: 0,
      slides: [
        {
          image: "01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
    }
  },
  mounted() {
    const slides = document.querySelectorAll(".slide");
    slides[0].classList.add("active");
  },
  methods: {
    nextSlide() {
      const slides = document.querySelectorAll(".slide");
      const slideCount = slides.length;
      slides[this.current].classList.remove("active");
      slides[this.current].classList.remove("fade-in");
      this.current = (this.current + 1) % slideCount;
      slides[this.current].style.transition = "opacity 0.5s ease-in-out";
      slides[this.current].style.opacity = 0;
      setTimeout(() => {
        slides[this.current].style.opacity = 1;
      }, 100);
      slides[this.current].classList.add("active");
      slides[this.current].classList.add("fade-in");
    },
    prevSlide() {
      const slides = document.querySelectorAll(".slide");
      const slideCount = slides.length;
      slides[this.current].classList.remove("active");
      slides[this.current].classList.remove("fade-in");
      this.current = (this.current - 1 + slideCount) % slideCount;
      slides[this.current].style.transition = "opacity 0.5s ease-in-out";
      slides[this.current].style.opacity = 0;
      setTimeout(() => {
        slides[this.current].style.opacity = 1;
      }, 100);
      slides[this.current].classList.add("active");
      slides[this.current].classList.add("fade-in");
      slides[(this.current + 1) % slideCount].classList.remove("active");
    }
  }
});

app.mount(".carosello");
