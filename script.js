document.addEventListener("DOMContentLoaded", event =>{	
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
