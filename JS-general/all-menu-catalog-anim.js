function openCatalog(){
    let button = document.getElementsByClassName('catalog');
    let closeBttn = document.querySelector('.catalog-menu .button-close');
    let catalog = document.querySelector('.catalog-menu');
    let bg = document.querySelector('.dark-bg');
    let buttonMenu = document.querySelector('.mid-header .all-menus');
    let closeBttnMenu = document.querySelector('.all-menu .button-close');
    let menu = document.querySelector('.all-menu');
    let bgNew = document.querySelector('.dark-bg');
    let flag = false;
    let buttonMenuMobile = document.querySelector('.all-menus-mobile');

    for(let i = 0; i < 2; i++){

        /*действие при нажатии на кнопку каталог*/
        button[i].addEventListener('click',() => {
            bg.style.opacity = '1';
            bg.style.visibility = 'visible';
            setTimeout(() => {
                catalog.style.transform = 'translateX(0%)';
                catalog.style.opacity = '1';
                catalog.style.visibility = 'visible';
            },200)
            flag = !flag;
            window.scrollTo(0,0);
        })
    }

    /*действие при нажатии на закрытие каталога*/
    closeBttn.addEventListener('click',() => {
        catalog.style.transform = 'translateX(-100%)';
        catalog.style.opacity = '0';
        catalog.style.visibility = 'hidden';
        setTimeout(() => {
            bg.style.opacity = menu.style.opacity == '1' ? '1' : '0';
            bg.style.visibility = menu.style.visibility == 'visible' ? 'visvle' : 'hidden';
        },200)
        flag = !flag;
        window.scrollTo(0,0);
    })


    /*действие при нажатии на меню*/
    buttonMenu.addEventListener('click',() => {
        bgNew.style.opacity = '1';
        bgNew.style.visibility = 'visible';

        menu.style.padding = '30px';
        menu.style.left = 'unset';
        menu.style.right = '0px';
        menu.style.top = '0px';
        setTimeout(() => {
            menu.style.width = window.innerWidth > 1000 ? '600px' : '100%';
            menu.style.opacity = '1';
            menu.style.visibility = 'visible';
            menu.style.transform = 'translateX(0%)';
        },200)
        flag = !flag;
        window.scrollTo(0,0);
    })


    /*действие при нажатии на мобильное меню*/
    buttonMenuMobile.addEventListener('click',() => {
        bgNew.style.opacity = '1';
        bgNew.style.visibility = 'visible';

        menu.style.padding = '30px';
        menu.style.left = 'unset';
        menu.style.right = '0px';
        menu.style.top = '0px';
        setTimeout(() => {
            menu.style.width = window.innerWidth > 1000 ? '600px' : '100%';
            menu.style.opacity = '1';
            menu.style.visibility = 'visible';
            menu.style.transform = 'translateX(0%)';
        },200)
        flag = !flag;
        window.scrollTo(0,0);
    })


    /*действие при нажатии кнопку закрыть мобильное меню*/
    closeBttnMenu.addEventListener('click',() => {
        catalog.style.transform = 'translateX(-100%)';
        menu.style.transform = 'translateX(100%)';
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
        flag = !flag;
        setTimeout(() => {
            menu.style.padding = '0px';
            bgNew.style.opacity = '0';
            bgNew.style.visibility = 'hidden';
        },300);
        setTimeout(() => {
            menu.style.width = '0px';
            menu.style.right = 'unset';
            menu.style.top = 'unset';
            menu.style.left = '0px';
        }, 500)
        window.scrollTo(0,0);
    })
    
    /*действие при нажатии на фон*/
    bg.addEventListener('click',() => {
        
        catalog.style.transform = 'translateX(-100%)';
        catalog.style.opacity = '0';
        catalog.style.visibility = 'hidden';
        menu.style.transform = 'translateX(100%)';
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
        menu.style.padding = '0px';

        setTimeout(() => {
            bg.style.opacity = '0';
            bg.style.visibility = 'hidden';
        },200)

        setTimeout(() => {
            menu.style.width = '0px';
            menu.style.right = 'unset';
            menu.style.top = 'unset';
            menu.style.left = '0px';
        }, 500)
        flag = !flag;
        window.scrollTo(0,0);
    })

}

openCatalog();
