// Navigation bar's default setting
let banner = document.getElementById('banner');
let navSections = document.getElementById('navbar').children;
let sectionEntities = document.getElementsByClassName('section-title');
let activeId = 0;

function deactivate() {
    navSections[activeId].classList.remove('active');
}

function getHandleClickNavBar(i) {
    if (i < navSections.length) {
        return (e) => {
            deactivate();
            navSections[i].classList.add('active');
            activeId = i;
        };
    }
    else {
        return (e) => {};
    }
}

function locateSection(offsetY) {
    for (let i = 0; i < sectionEntities.length; i += 1) {
        if (sectionEntities[i].offsetTop - 130 > offsetY) {
            return i - 1;
        }
    }
    return sectionEntities.length - 1;
}

// Auto-locating for different sections
const smallerNavbarBorder = 100;

window.addEventListener('scroll', (e) => {
    if (window.scrollY >= smallerNavbarBorder) {
        banner.id = 'banner-smaller';
    }
    else {
        banner.id = 'banner';
    }

    let activateFn = getHandleClickNavBar(locateSection(window.scrollY));
    activateFn(e);
});

// Automatically minimize the navigation bar when scrolling down




