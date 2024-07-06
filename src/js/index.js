// toogle Navbar //
document.getElementById('menu-toggle').addEventListener('click', function () {
    var navbar = document.getElementById('navbar-multi-level');
    navbar.classList.toggle('hidden');
});

document.querySelectorAll('[data-dropdown-toggle]').forEach(function (dropdownToggle) {
    dropdownToggle.addEventListener('click', function () {
        var target = document.getElementById(this.getAttribute('data-dropdown-toggle'));
        target.classList.toggle('hidden');
    });
});



//silder swiper js  //

var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000, // التغيير كل 3 ثواني
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    speed: 500, // سرعة الانتقال بين الشرائح (بالمللي ثانية)
    effect: 'fade', // يمكنك استخدام تأثيرات أخرى مثل 'slide' أو 'cube' أو 'coverflow' أو 'flip'
});