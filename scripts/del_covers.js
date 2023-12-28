function delCovers(){
    window.addEventListener('DOMContentLoaded', () => {
        let bigCover = document.querySelector('.big-cover');
        let smallCovers = document.querySelector('.covers-list-2');

        if (window.innerWidth <= 400){
            bigCover.remove();
            smallCovers.remove();
        }
    })

    window.addEventListener('resize', () => {
        let bigCover = document.querySelector('.big-cover');
        let smallCovers = document.querySelector('.covers-list-2');

        if (window.innerWidth <= 400){
            bigCover.remove();
            smallCovers.remove();
        }
    })
}


delCovers();