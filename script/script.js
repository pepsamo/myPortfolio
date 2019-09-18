// const nav = document.querySelector('nav');
// const jumbo = document.querySelector('main');
// const classScroll = 'scrollable';

// const navOffset = nav.offsetTop;
// const addScroolEv= () => {
//     if(window.pageYOffset > navOffset) {
//         nav.classList.add(classScroll);
//         jumbo.style.paddingTop('102px');
//     }
//     else {
//         nav.classList.remove(classScroll);
//     }
// }

// window.addEventListener("scroll", addScroolEv);

//Add close button when the menu burger is clicked
const closed =  "fa-times";
const burger = "fa-bars";

const $menu = document.querySelector("#menu");
const icon = document.querySelector(".fas");

const changeButton = (element) => {
    let btnClass = element.target.className; 
    if(btnClass.includes(burger)) {
        icon.classList.toggle(burger);
        icon.classList.toggle(closed);
        console.log(btnClass);
    }
    else {
        icon.classList.toggle(closed);
        icon.classList.toggle(burger);
    }
}
$menu.addEventListener("click", changeButton);