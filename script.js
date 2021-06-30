function your_func(){
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1";
}
document.addEventListener("DOMContentLoaded", event =>{
    setTimeout(function() { your_func(); }, 2500);
window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1";
    const burger = document.querySelector('.menu_burger');
    const bar1 = document.querySelector('.menu_burger-atas');
    const bar2 = document.querySelector('.menu_burger-bwh');
    const menu_responsive = document.querySelector('.responsive_menu');

    burger.addEventListener('click', () => {
        bar1.classList.toggle('active');
        bar2.classList.toggle('active');
        menu_responsive.classList.toggle('active');
    });
    document.querySelector("#about").addEventListener('click', event => {
        bar1.classList.toggle('active');
        bar2.classList.toggle('active');
        menu_responsive.classList.toggle('active');
})
    document.querySelector("#work").addEventListener('click', event => {
        bar1.classList.toggle('active');
        bar2.classList.toggle('active');
        menu_responsive.classList.toggle('active');
})
})
