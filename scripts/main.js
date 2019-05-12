let navigation = document.getElementById('navigation');

function scrollFunction () {
    if (document.body.clientWidth > 1075) {
        if (window.pageYOffset > 40) {
            navigation.style.background = '#222';
        } else {
            navigation.style.background = 'transparent';
        }
    }
}

window.onscroll = scrollFunction;