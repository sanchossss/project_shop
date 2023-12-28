
function changePhoto(){
    let bigPhoto = document.getElementsByClassName('big-photo');
    let smallPhoto = document.getElementsByClassName('small-photo');

    let w = bigPhoto.style.width;
    let h = bigPhoto.style.height;

    smallPhoto.array.forEach(e => {
        e.style.width = w;
        e.style.height = h;
    });


}