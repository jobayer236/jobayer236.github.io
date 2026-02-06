// নেভিগেশন বারে ক্লিক করলে স্মুথ স্ক্রল তো CSS দিয়েই হচ্ছে, 
// এখানে আমরা স্ক্রল করলে মেনু হাইলাইট বা ছোট অ্যানিমেশন যোগ করতে পারি।

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#1a252f';
        header.style.padding = '0.5rem 0';
    } else {
        header.style.background = '#2c3e50';
        header.style.padding = '1rem 0';
    }
});

// কনসোলে একটি ওয়েলকাম মেসেজ (ঐচ্ছিক)
console.log("Welcome to Md Jobayer Hossan's Portfolio!");
