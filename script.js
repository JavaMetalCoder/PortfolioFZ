// =============================================================================
// PORTFOLIO METALCODER - FIXED & RESPONSIVE
// =============================================================================

class PortfolioAnimations {
    constructor() {
      this.init();
    }
  
    init() {
      this.handleLoading();
      this.initNavigation();
      this.initTypingEffect();
      this.initScrollAnimations();
      this.initTerminalAnimation();
      this.initCounterAnimation();
      this.initFormValidation();
      this.initParallaxEffects();
    }
  
    // =============================================================================
    // LOADING SCREEN
    // =============================================================================
    handleLoading() {
      const loadingScreen = document.getElementById('loading-screen');
      const progressBar = document.querySelector('.c-loading__bar');
  
      if (!loadingScreen || !progressBar) return;
  
      // Simulate loading progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          
          setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
              loadingScreen.style.display = 'none';
              document.body.style.overflow = 'visible';
              this.triggerInitialAnimations();
            }, 500);
          }, 500);
        }
        progressBar.style.width = `${progress}%`;
      }, 100);
    }
  
    triggerInitialAnimations() {
      // Trigger hero animations
      const heroElements = document.querySelectorAll('.c-hero__text > *');
      heroElements.forEach((el, index) => {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, index * 200);
      });
  
      // Setup dynamic coding days prima delle animazioni
      this.setupDynamicCodingDays();
  
      // Trigger skill bars animation
      setTimeout(() => {
        this.animateSkillBars();
      }, 1000);
    }
  
    // =============================================================================
    // NAVIGATION
    // =============================================================================
    initNavigation() {
      const navbar = document.getElementById('navbar');
      const hamburger = document.getElementById('hamburger');
      const navMenu = document.getElementById('nav-menu');
      const navLinks = document.querySelectorAll('.c-nav__link');
  
      if (!navbar || !hamburger || !navMenu) return;
  
      // Mobile menu toggle
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('c-nav__toggle--active');
        navMenu.classList.toggle('c-nav__menu--active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('c-nav__menu--active')) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      });
  
      // Close mobile menu when clicking on links
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('c-nav__toggle--active');
          navMenu.classList.remove('c-nav__menu--active');
          document.body.style.overflow = '';
        });
      });
  
      // Close mobile menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && navMenu.classList.contains('c-nav__menu--active')) {
          hamburger.classList.remove('c-nav__toggle--active');
          navMenu.classList.remove('c-nav__menu--active');
          document.body.style.overflow = '';
        }
      });
  
      // Navbar scroll effect
      let lastScrollY = window.scrollY;
      window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
          navbar.style.background = 'rgba(13, 13, 13, 0.98)';
          navbar.style.backdropFilter = 'blur(15px)';
        } else {
          navbar.style.background = 'rgba(13, 13, 13, 0.95)';
          navbar.style.backdropFilter = 'blur(10px)';
        }
  
        // Hide/show navbar on scroll (desktop only)
        if (window.innerWidth > 768) {
          if (currentScrollY > lastScrollY && currentScrollY > 200) {
            navbar.style.transform = 'translateY(-100%)';
          } else {
            navbar.style.transform = 'translateY(0)';
          }
        }
        
        lastScrollY = currentScrollY;
      });
  
      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    }
  
    // =============================================================================
    // TYPING EFFECT
    // =============================================================================
    initTypingEffect() {
      const typingElement = document.querySelector('.c-hero__typing');
      if (!typingElement) return;
  
      const phrases = [
        'Coding è vita.',
        'HTML, CSS, JavaScript',
        'Java & Python lover',
        'React in arrivo...',
        'MetalCoder in azione!'
      ];
  
      let phraseIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
  
      const typeSpeed = 100;
      const deleteSpeed = 50;
      const pauseTime = 2000;
  
      function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
          typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
          charIndex--;
        } else {
          typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
          charIndex++;
        }
  
        let timeout = isDeleting ? deleteSpeed : typeSpeed;
  
        if (!isDeleting && charIndex === currentPhrase.length) {
          timeout = pauseTime;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
  
        setTimeout(type, timeout);
      }
  
      type();
    }
  
    // =============================================================================
    // SCROLL ANIMATIONS
    // =============================================================================
    initScrollAnimations() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            
            // Trigger specific animations based on element type
            if (entry.target.classList.contains('c-about__stat-item')) {
              this.animateCounter(entry.target);
            }
          }
        });
      }, observerOptions);
  
      // Observe elements for scroll animations
      document.querySelectorAll('section').forEach(section => {
        section.classList.add('scroll-reveal');
        observer.observe(section);
      });
  
      document.querySelectorAll('.c-card, .c-service-card, .c-about__stat-item').forEach(card => {
        card.classList.add('scroll-reveal');
        observer.observe(card);
      });
    }
  
    // =============================================================================
    // TERMINAL ANIMATION
    // =============================================================================
    initTerminalAnimation() {
      // Animate skill bars when terminal comes into view
      const terminal = document.querySelector('.c-terminal');
      if (!terminal) return;
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              this.animateSkillBars();
            }, 500);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
  
      observer.observe(terminal);
    }
  
    animateSkillBars() {
      const skillFills = document.querySelectorAll('.c-terminal__skill-fill');
      skillFills.forEach((fill, index) => {
        setTimeout(() => {
          const width = fill.getAttribute('data-width');
          fill.style.width = `${width}%`;
        }, index * 200);
      });
    }
  
    // =============================================================================
    // COUNTER ANIMATION
    // =============================================================================
    initCounterAnimation() {
      this.animatedCounters = new Set();
      this.setupDynamicCodingDays();
    }
  
    setupDynamicCodingDays() {
      // 🔥 DATA DI INIZIO DEL TUO PERCORSO CODING (modifica questa data!)
      // Formato: Anno, Mese (0-11), Giorno
      const codingStartDate = new Date(2024, 11, 1); // 1 Gennaio 2023
      
      // Calcola i giorni trascorsi
      const today = new Date();
      const timeDifference = today.getTime() - codingStartDate.getTime();
      const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
      
      // Trova l'elemento dei giorni di coding (per label invece che per data-count)
      const codingDaysElement = document.querySelector('.c-about__stat-label');
      let codingStatElement = null;
      
      // Trova la stat con label "Giorni di Coding"
      document.querySelectorAll('.c-about__stat-item').forEach(item => {
        const label = item.querySelector('.c-about__stat-label');
        if (label && label.textContent.trim() === 'Giorni di Coding') {
          codingStatElement = item.querySelector('.c-about__stat-number');
        }
      });
      
      if (codingStatElement) {
        codingStatElement.setAttribute('data-count', daysDifference);
        
        // Debug log per vedere il valore
        console.log(`🔥 MetalCoder coding da ${daysDifference} giorni! (dal ${codingStartDate.toLocaleDateString('it-IT')})`);
      } else {
        console.error('❌ Elemento giorni di coding non trovato');
      }
    }
  
    animateCounter(statItem) {
      const numberElement = statItem.querySelector('.c-about__stat-number');
      if (!numberElement || this.animatedCounters.has(numberElement)) return;
  
      this.animatedCounters.add(numberElement);
      const targetNumber = parseInt(numberElement.getAttribute('data-count'));
      const duration = 2000;
      const startTime = performance.now();
  
      // Aggiusta la durata in base al numero per animazioni più fluide
      const adjustedDuration = targetNumber > 500 ? 3000 : 2000;
  
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / adjustedDuration, 1);
        
        // Easing function per animazione smooth
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentNumber = Math.floor(targetNumber * easeOutQuart);
        
        // Formatting per numeri grandi (aggiunge separatori delle migliaia)
        const formattedNumber = currentNumber.toLocaleString('it-IT');
        numberElement.textContent = formattedNumber;
  
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Animazione finale con effetto pulse
          numberElement.style.animation = 'pulse 0.5s ease-in-out';
          setTimeout(() => {
            numberElement.style.animation = '';
          }, 500);
        }
      };
  
      requestAnimationFrame(animate);
    }
  
    // =============================================================================
    // FORM VALIDATION
    // =============================================================================
    initFormValidation() {
      const form = document.querySelector('.c-contact__form');
      if (!form) return;
  
      const inputs = form.querySelectorAll('input, textarea');
      
      inputs.forEach(input => {
        // Add floating label effect
        input.addEventListener('focus', () => {
          input.parentElement.classList.add('focused');
        });
  
        input.addEventListener('blur', () => {
          if (!input.value) {
            input.parentElement.classList.remove('focused');
          }
        });
  
        // Real-time validation
        input.addEventListener('input', () => {
          this.validateField(input);
        });
      });
  
      // Form submission
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        inputs.forEach(input => {
          if (!this.validateField(input)) {
            isValid = false;
          }
        });
  
        if (isValid) {
          this.submitForm(form);
        }
      });
    }
  
    validateField(field) {
      const value = field.value.trim();
      const fieldName = field.name;
      let isValid = true;
      let errorMessage = '';
  
      // Remove existing error
      this.removeFieldError(field);
  
      switch(fieldName) {
        case 'name':
          if (value.length < 2) {
            isValid = false;
            errorMessage = 'Il nome deve contenere almeno 2 caratteri';
          }
          break;
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Inserisci un indirizzo email valido';
          }
          break;
        case 'message':
          if (value.length < 10) {
            isValid = false;
            errorMessage = 'Il messaggio deve contenere almeno 10 caratteri';
          }
          break;
      }
  
      if (!isValid) {
        this.showFieldError(field, errorMessage);
      }
  
      return isValid;
    }
  
    showFieldError(field, message) {
      field.style.borderColor = '#ff0040';
      field.style.boxShadow = '0 0 10px rgba(255, 0, 64, 0.5)';
      
      const errorElement = document.createElement('span');
      errorElement.className = 'field-error';
      errorElement.textContent = message;
      errorElement.style.cssText = `
        color: #ff0040;
        font-size: 0.8rem;
        position: absolute;
        bottom: -20px;
        left: 0;
        opacity: 0;
        transform: translateY(-10px);
        transition: all 0.3s ease;
      `;
      
      field.parentElement.style.position = 'relative';
      field.parentElement.appendChild(errorElement);
      
      // Trigger animation
      setTimeout(() => {
        errorElement.style.opacity = '1';
        errorElement.style.transform = 'translateY(0)';
      }, 10);
    }
  
    removeFieldError(field) {
      field.style.borderColor = 'rgba(0, 255, 65, 0.3)';
      field.style.boxShadow = 'none';
      
      const errorElement = field.parentElement.querySelector('.field-error');
      if (errorElement) {
        errorElement.remove();
      }
    }
  
    submitForm(form) {
      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.innerHTML;
      
      // Show loading state
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Invio in corso...';
      submitButton.disabled = true;
  
      // Simulate form submission (replace with actual form handling)
      setTimeout(() => {
        // Reset form
        form.reset();
        
        // Show success message
        this.showNotification('Messaggio inviato con successo!', 'success');
        
        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        // Reset form state
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
          input.parentElement.classList.remove('focused');
          this.removeFieldError(input);
        });
      }, 2000);
    }
  
    showNotification(message, type = 'info') {
      const notification = document.createElement('div');
      notification.className = `notification notification-${type}`;
      notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
      `;
      
      notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#00ff41' : '#00ffff'};
        color: #0d0d0d;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        gap: 0.5rem;
      `;
  
      document.body.appendChild(notification);
  
      // Animate in
      setTimeout(() => {
        notification.style.transform = 'translateX(0)';
      }, 100);
  
      // Remove after delay
      setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
          notification.remove();
        }, 300);
      }, 4000);
    }
  
    // =============================================================================
    // PARALLAX EFFECTS
    // =============================================================================
    initParallaxEffects() {
      let ticking = false;
  
      const updateParallax = () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.c-hero__matrix, .c-hero__grid');
        
        parallaxElements.forEach((element, index) => {
          const speed = 0.5 + (index * 0.2);
          const yPos = -(scrolled * speed);
          element.style.transform = `translateY(${yPos}px)`;
        });
  
        ticking = false;
      };
  
      const requestParallaxUpdate = () => {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      };
  
      window.addEventListener('scroll', requestParallaxUpdate);
    }
  
    // =============================================================================
    // UTILITY FUNCTIONS
    // =============================================================================
    
    // Throttle function for performance
    throttle(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }
  
    // Debounce function for performance
    debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }
  
    // Add glitch effect to elements
    addGlitchEffect(element) {
      element.addEventListener('mouseenter', () => {
        element.style.animation = 'glitch-hero 0.3s ease-in-out';
      });
  
      element.addEventListener('animationend', () => {
        element.style.animation = '';
      });
    }
  
    // Matrix rain effect (optional enhancement)
    createMatrixRain() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.1;
      `;
  
      document.body.appendChild(canvas);
  
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
  
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
  
      const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
      const matrixArray = matrix.split("");
  
      const fontSize = 10;
      const columns = canvas.width / fontSize;
      const drops = [];
  
      for (let x = 0; x < columns; x++) {
        drops[x] = 1;
      }
  
      const draw = () => {
        ctx.fillStyle = 'rgba(13, 13, 13, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
  
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';
  
        for (let i = 0; i < drops.length; i++) {
          const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
  
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      };
  
      setInterval(draw, 35);
    }
  
    // Enhanced cursor effect
    initCursorEffect() {
      if (window.innerWidth <= 768) return; // Skip on mobile
  
      const cursor = document.createElement('div');
      cursor.className = 'custom-cursor';
      cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: var(--clr-cyber-green);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        transition: transform 0.1s ease;
      `;
  
      document.body.appendChild(cursor);
  
      let mouseX = 0;
      let mouseY = 0;
      let cursorX = 0;
      let cursorY = 0;
  
      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
  
      const animateCursor = () => {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
  
        cursorX += dx * 0.1;
        cursorY += dy * 0.1;
  
        cursor.style.left = cursorX - 10 + 'px';
        cursor.style.top = cursorY - 10 + 'px';
  
        requestAnimationFrame(animateCursor);
      };
  
      animateCursor();
  
      // Scale cursor on hover
      document.querySelectorAll('a, button, .c-card, .c-service-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.style.transform = 'scale(2)';
        });
        el.addEventListener('mouseleave', () => {
          cursor.style.transform = 'scale(1)';
        });
      });
    }
  
    // Handle window resize for responsive adjustments
    handleResize() {
      const handleResizeThrottled = this.throttle(() => {
        // Recalculate terminal skill bar widths on resize
        const skillBars = document.querySelectorAll('.c-terminal__skill-bar');
        skillBars.forEach(bar => {
          if (window.innerWidth <= 480) {
            bar.style.width = '6rem';
          } else if (window.innerWidth <= 768) {
            bar.style.width = '8rem';
          } else {
            bar.style.width = '12.5rem';
          }
        });
  
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
          const hamburger = document.getElementById('hamburger');
          const navMenu = document.getElementById('nav-menu');
          
          if (hamburger && navMenu) {
            hamburger.classList.remove('c-nav__toggle--active');
            navMenu.classList.remove('c-nav__menu--active');
            document.body.style.overflow = '';
          }
        }
      }, 250);
  
      window.addEventListener('resize', handleResizeThrottled);
    }
  }
  
  // =============================================================================
  // INITIALIZE PORTFOLIO
  // =============================================================================
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize main portfolio functionality
    const portfolio = new PortfolioAnimations();
    
    // Initialize resize handler
    portfolio.handleResize();
    
    // Add some easter eggs for developers
    console.log(`
    ███╗   ███╗███████╗████████╗ █████╗ ██╗      ██████╗ ██████╗ ██████╗ ███████╗██████╗ 
    ████╗ ████║██╔════╝╚══██╔══╝██╔══██╗██║     ██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔══██╗
    ██╔████╔██║█████╗     ██║   ███████║██║     ██║     ██║   ██║██║  ██║█████╗  ██████╔╝
    ██║╚██╔╝██║██╔══╝     ██║   ██╔══██║██║     ██║     ██║   ██║██║  ██║██╔══╝  ██╔══██╗
    ██║ ╚═╝ ██║███████╗   ██║   ██║  ██║███████╗╚██████╗╚██████╔╝██████╔╝███████╗██║  ██║
    ╚═╝     ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝
    
    🔥 Benvenuto nel codice del portfolio MetalCoder! 🔥
    
    Se stai leggendo questo, sei un vero developer! 
    Contattami se vuoi collaborare: zagariafabio1999@gmail.com
    
    Built with ❤️ and lots of ☕
    `);
  
    // Add some keyboard shortcuts for developers
    document.addEventListener('keydown', (e) => {
      // Konami Code easter egg
      if (e.ctrlKey && e.shiftKey && e.key === 'M') {
        portfolio.createMatrixRain();
        portfolio.showNotification('Matrix mode activated! 🔥', 'success');
      }
      
      // Developer tools
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        console.log('Portfolio Debug Info:', {
          viewport: `${window.innerWidth}x${window.innerHeight}`,
          scrollPosition: window.pageYOffset,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
          isMobile: window.innerWidth <= 768,
          codingDays: document.querySelector('.c-about__stat-label')?.closest('.c-about__stat-item')?.querySelector('.c-about__stat-number')?.getAttribute('data-count') || 'Not found'
        });
      }
      
      // Force coding days animation (Ctrl+Shift+C)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        portfolio.setupDynamicCodingDays();
        
        // Force animate the coding days counter
        const codingStatItem = Array.from(document.querySelectorAll('.c-about__stat-item')).find(item => {
          const label = item.querySelector('.c-about__stat-label');
          return label && label.textContent.trim() === 'Giorni di Coding';
        });
        
        if (codingStatItem) {
          portfolio.animateCounter(codingStatItem);
          portfolio.showNotification('Giorni di coding aggiornati! 🔥', 'success');
        } else {
          portfolio.showNotification('Errore: elemento non trovato', 'info');
        }
      }
    });
  
    // Performance monitoring
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0];
          console.log(`⚡ Site loaded in ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
        }, 0);
      });
    }
  
    // Initialize enhanced cursor effect (desktop only)
    if (window.innerWidth > 768) {
      portfolio.initCursorEffect();
    }
  
    // Add glitch effects to interactive elements
    document.querySelectorAll('.c-btn').forEach(btn => {
      portfolio.addGlitchEffect(btn);
    });
  
    // Handle touch events for mobile
    if ('ontouchstart' in window) {
      document.addEventListener('touchstart', () => {}, { passive: true });
    }
  });
  
  // =============================================================================
  // SERVICE WORKER REGISTRATION (OPTIONAL)
  // =============================================================================
  