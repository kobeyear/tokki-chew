// Tokki Chew - Interactive Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced parallax effect for hero elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Parallax for cherry blossoms
        const cherryBlossoms = document.querySelectorAll('.cherry-blossom');
        cherryBlossoms.forEach((cherry, index) => {
            const speed = 0.3 + (index * 0.1);
            cherry.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        // Parallax for sparkles
        const sparkles = document.querySelectorAll('.sparkle');
        sparkles.forEach((sparkle, index) => {
            const speed = 0.2 + (index * 0.05);
            sparkle.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        // Parallax for floating hearts
        const hearts = document.querySelectorAll('.floating-heart');
        hearts.forEach((heart, index) => {
            const speed = 0.1 + (index * 0.02);
            heart.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    const elementsToAnimate = document.querySelectorAll('.feature-card, .benefit-item, .testimonial-card');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Dynamic sparkle generation
    function createDynamicSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle dynamic-sparkle';
        sparkle.style.position = 'fixed';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 3000);
    }

    // Generate random sparkles
    setInterval(createDynamicSparkle, 2000);

    // CTA button interactions
    const ctaButtons = document.querySelectorAll('.cta-button, .hero-cta');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add purchase intent tracking here
            console.log('Purchase intent - Tokki Chew');
            
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Floating heart animation enhancement
    const floatingHearts = document.querySelectorAll('.floating-heart');
    floatingHearts.forEach(heart => {
        heart.addEventListener('mouseenter', function() {
            this.style.transform += ' scale(1.2)';
            this.style.boxShadow = '0 0 30px rgba(255, 143, 183, 0.8)';
        });
        
        heart.addEventListener('mouseleave', function() {
            this.style.transform = this.style.transform.replace(' scale(1.2)', '');
            this.style.boxShadow = '0 0 20px rgba(255, 143, 183, 0.4)';
        });
    });

    // Feature card tilt effect
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });

    // Enhanced glass morphism effect on scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.nav');
        const scrolled = window.pageYOffset;
        
        if (scrolled > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.2)';
            nav.style.backdropFilter = 'blur(30px)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.1)';
            nav.style.backdropFilter = 'blur(20px)';
        }
    });

    // Testimonial image glow effect
    const testimonialImage = document.querySelector('.testimonial-image');
    if (testimonialImage) {
        testimonialImage.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 50px rgba(255, 179, 209, 0.6)';
            this.style.transform = 'scale(1.05)';
        });
        
        testimonialImage.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
            this.style.transform = 'scale(1)';
        });
    }

    // Product jar interaction
    const productJar = document.querySelector('.jar-container');
    if (productJar) {
        productJar.addEventListener('click', function() {
            // Add a magical burst effect
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const burst = document.createElement('div');
                    burst.style.position = 'absolute';
                    burst.style.width = '20px';
                    burst.style.height = '20px';
                    burst.style.background = 'linear-gradient(45deg, #FFD700, #FF8FB7)';
                    burst.style.borderRadius = '50%';
                    burst.style.top = '50%';
                    burst.style.left = '50%';
                    burst.style.transform = 'translate(-50%, -50%)';
                    burst.style.pointerEvents = 'none';
                    burst.style.zIndex = '1000';
                    
                    const angle = (i / 8) * Math.PI * 2;
                    const distance = 100;
                    const x = Math.cos(angle) * distance;
                    const y = Math.sin(angle) * distance;
                    
                    this.appendChild(burst);
                    
                    burst.animate([
                        { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
                        { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0)`, opacity: 0 }
                    ], {
                        duration: 1000,
                        easing: 'ease-out'
                    }).onfinish = () => burst.remove();
                }, i * 50);
            }
        });
    }

    // Console welcome message
    console.log('%c✨ Welcome to Tokki Chew!', 'color: #FFB3D1; font-size: 16px; font-weight: bold;');
    console.log('%c🐰 Melt into your glow', 'color: #FF8FB7; font-size: 14px;');
});

// Add ripple effect styles
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: rippleEffect 0.6s linear;
        pointer-events: none;
    }

    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .dynamic-sparkle {
        width: 15px;
        height: 15px;
        background: radial-gradient(circle, #FFD700 0%, transparent 70%);
        border-radius: 50%;
        animation: sparkle 3s ease-in-out forwards;
    }
`;
document.head.appendChild(style);