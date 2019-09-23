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

//Change the text of the label whenever you click menu to close and viceversa
const menuText = document.querySelector("#menuText");

const changeText = e => {
    const thisElement = e.target;
    //console.log(thisElement);
    const afterClick = thisElement.textContent === "Menu" ? (thisElement.textContent = "Close") : (thisElement.textContent = "Menu");
    //console.log(afterClick); 
    return afterClick;
};

menuText.addEventListener("click", changeText);