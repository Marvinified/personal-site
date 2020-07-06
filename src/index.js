import "./sass/styles.scss";
import 'alpinejs'
// Animations
gsap.from("#one", { duration: 2, x: -100, ease: "bounce.out" });
gsap.from("#two", { delay: 0, duration: 2, y: -650, ease: "bounce.out" });
gsap.to(".scroll-left", { delay: 0, duration: 2, translateX: 30, ease: "ease.out", repeat: -1 });




// Horizontal Scroll
let translateX = 0
document.addEventListener("wheel", (event) => {
    event.preventDefault();

    const factor = 15 * Math.abs(event.deltaY)
    const app = document.querySelector('.app')
    const width = app.clientWidth - window.innerWidth;

    if (event.deltaY > 0) {
        // scroll up
        translateX -= factor
        translateX = Math.abs(translateX) > Math.abs(width) ? -width : translateX
        console.log(gsap)
        console.log("Got")
        console.log({ factor, translateX, width: app.clientWidth, inner: window.innerWidth })
        gsap.to('.app', { duration: 0.5, translateX })
    }

    if (event.deltaY < 0) {
        // scroll down
        translateX += factor
        translateX = translateX > 0 ? 0 : translateX
        gsap.to('.app', { duration: 0.5, translateX })
    }

}, { passive: false })
