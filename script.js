// const photographyDOM = document.getElementById('photos');
// const videographyDOM = document.getElementById('videos');

// console.log(photographyDOM)
document.addEventListener('DOMContentLoaded', function() {
    
    if(document.title === "VVR CREATIVES GROUP"){
        const photographyDOM = document.getElementById('photos');
        const videographyDOM = document.getElementById('videos');

        photographyDOM.addEventListener('click', function() {
            localStorage.setItem('name','photos')
            window.location.href = 'portfolio.html';

        });

        videographyDOM.addEventListener('click', function() {
            localStorage.setItem('name','videos')
            window.location.href = 'portfolio.html';
        });
    }

    if(document.title === "VVR PORTFOLIO"){
        let index = localStorage.getItem('name')
        console.log(index)
        if (index === "photos"){
            const photoDOM = document.getElementById('photos')
            photoDOM.classList.remove('hide');
        } else if (index === "videos") {
            const videoDOM = document.getElementById('videos')
            videoDOM.classList.remove('hide');
        } else {
            window.location.href = 'index.html';
        }
        
    }
});



// nav
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Toggle Mobile Menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close Menu When a Link is Clicked (Optional)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});

// document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         const targetId = link.getAttribute('href');
//         const targetSection = document.querySelector(targetId);
        
//         window.scrollTo({
//             top: targetSection.offsetTop,
//             behavior: 'smooth'
//         });
//     });
// });