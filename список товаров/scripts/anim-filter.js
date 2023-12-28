function openFilter(){
    let bg = document.querySelector('.dark-bg');
    let flag = false;
    let button = document.querySelector('.filter-open');
    let filter = document.querySelector('.filter');


    button.addEventListener('click',() => {
        
        filter.style.transform = 'translateX(-100%)';
        filter.style.zIndex = '300';
        bg.style.opacity = '1';
        bg.style.visibility = 'visible';
        filter.style.height = '100%';
        filter.style.top = '0px';
        filter.style.left = '0px';
        setTimeout(() => {
            filter.style.visibility = 'visible';
            filter.style.position = 'fixed';
            filter.style.background = 'white';
            filter.style.padding = '20px 40px';
            filter.style.transform = 'translateX(0%)'
        },400)
    })
    
    /*действие при нажатии на фон*/
    bg.addEventListener('click',() => {
        filter.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            if(window.innerWidth < 1180){
                filter.style.visibility = 'hidden';
                filter.style.position = 'absolute';
                filter.style.background = 'white';
                filter.style.padding = '0px';
            }
            bg.style.opacity = '0';
            bg.style.visibility = 'hidden';
        },400)
    })

}

openFilter();
