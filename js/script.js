let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
};

// const menuIcon = document.getElementById('menu-icon');
// const navbar = document.querySelector('.navbar');

// function toggleMenu() {
//   if (window.innerWidth <= 991) {
//     // Jika lebar layar kurang dari atau sama dengan 991px
//     menuIcon.textContent = ''; // Kosongkan isi ikon menu
//     navbar.querySelectorAll('a').forEach(link => {
//       menuIcon.appendChild(link); // Tambahkan setiap link ke dalam ikon menu
//       menuIcon.classList.toggle('active');
//     });
//   } else {
//     // Jika lebar layar lebih dari 991px
//     navbar.appendChild(...menuIcon.childNodes); // Kembalikan semua link ke navbar
//     menuIcon.textContent = 'bx bx-menu'; // Kembalikan ikon menu ke semula
//   }
// }

// // Panggil fungsi saat halaman dimuat dan setiap kali ukuran jendela berubah
// window.addEventListener('load', toggleMenu);
// window.addEventListener('resize', toggleMenu);
// menuIcon.addEventListener('click', toggleMenu);


  
