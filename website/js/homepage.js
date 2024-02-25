
//Parte do cabeçario e menu responsivo ===================


var header = document.getElementById ('headerid');
var nav_header = document.getElementById('nav_headerid');
var main = document.getElementById ('mainid');
var showSidebar = false;

function onclick_sidebar() {
    showSidebar = !showSidebar
    console.log(showSidebar);
    if (showSidebar) {
        nav_header.style.marginLeft = '-10vw';
        nav_header.style.animationName = 'showSidebar';
        main.style.filter = 'blur(2px)';
    }

    else{
        nav_header.style.marginLeft = '-100vw';
        nav_header.style.animationName = '';
        main.style.filter = '';


    }
}

function closeSidebar() {
    if (showSidebar) {
        onclick_sidebar();
    }
}

window.addEventListener('resize', function(event) {
    if (this.window.innerWidth > 768 && showSidebar) {
        onclick_sidebar();
    }
})


//=========================================================


