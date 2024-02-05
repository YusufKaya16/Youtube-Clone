const slider = document.querySelector('.slider');
const sliderList = slider.querySelector('.list-group');
const buttons = Array.from(slider.querySelectorAll('.slider-btn'));
const linkLength = sliderList.querySelector('.list-link').clientWidth;


buttons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        if (event.target.dataset.direction === "left" && parseInt(sliderList.dataset.loc) !== 0) {
            sliderList.dataset.loc = parseInt(sliderList.dataset.loc) - Math.floor(linkLength / 2);
            sliderList.style.transform = `translateX(-${sliderList.dataset.loc + 'px'})`;
        }
        else if (event.target.dataset.direction === "right" && parseInt(sliderList.dataset.loc) !== 156) {
            sliderList.dataset.loc = parseInt(sliderList.dataset.loc) + Math.floor(linkLength / 2);
            sliderList.style.transform = `translateX(-${sliderList.dataset.loc + 'px'})`;
        }
    });
});

const content = document.querySelector('#content');
const navbar = document.querySelector('.navbar');
const sidebarBtn = navbar.querySelector('.sidebar-btn');
const mainContent = content.querySelector('#main-content');
const videoContent = Array.from(mainContent.querySelector('#videos-section').children);

sidebarBtn.addEventListener('click', (event) => {
    content.classList.toggle('toggleSidebar');
    if (!win.matches) {
        mainContent.classList.toggle('col-md-11');
        videoContent.forEach(video => {
            video.classList.toggle('col-lg-3');
        });
    }
});

// media query
const win = window.matchMedia('(max-width: 1200px)');

win.addEventListener('change', (event) => {
    if (win.matches) {
        if (!content.classList.contains('toggleSidebar')) {
            content.classList.add('toggleSidebar');
        }
        else{
            mainContent.classList.remove('col-md-11');
            videoContent.forEach(video => {
                video.classList.remove('col-lg-3');
            });
        }
    }
    else{
        content.classList.remove('toggleSidebar');
    }


});


