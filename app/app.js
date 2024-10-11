const isMobile = {
    Android: function(){
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function(){
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function(){
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function(){
        return navigator.userAgent.match(/Opera mini/i);
    },
    Windows: function(){
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function(){
        return(
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};
// --------------------
if (isMobile.any()){
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length>0){
        for(let index = 0;index < menuArrows.length;index++){
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click",function(){
                menuArrow.parentElement.classList.toggle('_active')
            });
        }
    }

}else{
    document.body.classList.add('_pc');
}
//Бургер
const iconMenu = document.querySelector('.menu__icon');
if(iconMenu){
    const menuRight = document.querySelector('.content-right__nav-bar');
    iconMenu.addEventListener('click',function(){
        iconMenu.classList.toggle('_active');
        menuRight.classList.toggle('_active');
    });
}


// --------------------
// const menuLinks = document.querySelectorAll('.nav-bar__item[data-goto]');
// if(menuLinks.length>0){
//     menuLinks.forEach(menuLink=>{
//         menuLink.addEventListener('click',onMenuLinkClick);
//     });

//     function onMenuLinkClick(e){
//         const menuLink = e.target;
//         if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
//             const gotoBlock = document.querySelector(menuLink.dataset.goto);
//             const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
        
//             window.scrollTo({
//                 top: gotoBlockValue,
//                 behavior: "smooth"
//             });
//             e.preventDefault();
//         }
//     }
// }