class ScrollAnimator {
    constructor(elementsSelector, animationClass, options = { threshold: 0.1 }) {
        this.elements = document.querySelectorAll(elementsSelector);
        this.animationClass = animationClass;
        this.options = options;
        this.init();
    }

    init() {
        // Create the Intersection Observer with the provided options
        this.observer = new IntersectionObserver(this.handleIntersect.bind(this), this.options);

        // Observe each element
        this.elements.forEach(element => {
            this.observer.observe(element);
        });
    }

    handleIntersect(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(this.animationClass);
                // Optionally, stop observing after the animation has been added
                this.observer.unobserve(entry.target);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize ScrollAnimator for different elements with different durations
    new ScrollAnimator('.section4', 'animate');
    new ScrollAnimator('header', 'animate',{ threshold: 0.1 });
    new ScrollAnimator('.grid-item', 'animate', { threshold: 0.5 },'3s');
    new ScrollAnimator('.hero-content', 'animate');
    new ScrollAnimator('.scroll-animate', 'animate');
    new ScrollAnimator('.section2', 'animate', { threshold: 0.1 }, '2s'); // 2 seconds duration

    new ScrollAnimator('.blog-box', 'animate-customAnimation'); 


    new ScrollAnimator('.blog-box.gird-text', 'animate-fadeIn');
    new ScrollAnimator('.blog-box.images', 'animate-slideInBottom');
    new ScrollAnimator('.blog-box.images1', 'animate-zoomIn');
    new ScrollAnimator('.blog-box.images2', 'animate-rotateIn');
   // new ScrollAnimator('.section5', 'animate-fadeInUp'); // For fade-in-up effect
    new ScrollAnimator('.section5', 'animate-zoomIn'); // For zoom-in effect
   // new ScrollAnimator('.section5', 'animate-slideInRight'); // For slide-in-right effect
 //   new ScrollAnimator('.section5', 'animate-bounceIn'); // For bounce-in effect
});

