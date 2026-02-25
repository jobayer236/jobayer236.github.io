console.log("Welcome to Md Jobayer Hossan's Portfolio!");

// ১. Navbar active link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    // pageYOffset এর বদলে window.scrollY ব্যবহার করা ভালো
    const scrollPos = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// ২. Articles see more / less
function toggleArticle(button) {
    const fullArticle = button.nextElementSibling;
    if (fullArticle.style.display === "block") {
        fullArticle.style.display = "none";
        button.innerText = "See more";
    } else {
        fullArticle.style.display = "block";
        button.innerText = "See less";
    }
}

// ৩. Skills Animation (Scroll Triggered)
const skillsSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.animate-bar');
let animated = false; // যাতে বার-বার এনিমেশন না হয়

function showProgress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.percent;
        progressBar.style.width = value;
    });
}

window.addEventListener('scroll', () => {
    if (!skillsSection) return; // এরর হ্যান্ডলিং

    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    // একবার এনিমেশন হলে animated = true হবে, ফলে মাউস সরালে পার্সেন্টেজ যাবে না
    if (sectionPos < screenPos && !animated) {
        showProgress();
        animated = true; 
    }
});




<script>
  const skillsSection = document.getElementById('skills');
  const progressBars = document.querySelectorAll('.animate-bar');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // সেকশনে আসলে প্রতিটি বারের width সেট করবে
        progressBars.forEach(bar => {
          const percentage = bar.getAttribute('data-percent');
          bar.style.width = percentage;
        });
        // একবার এনিমেশন হয়ে গেলে অবজার্ভ করা বন্ধ করে দিবে (অপশনাল)
        observer.unobserve(skillsSection);
      }
    });
  }, { threshold: 0.3 }); // সেকশন ৩০% দেখা গেলে কাজ শুরু করবে

  observer.observe(skillsSection);
</script>