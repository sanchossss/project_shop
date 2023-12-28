function addBook() {
    let book = document.querySelector('.card-list .book-card');
    let container = document.querySelector('.card-list');
    let bookClone = book.cloneNode(true);
    for (let i = 2; i < 13; i++) {
        bookClone = bookClone.cloneNode(true);
        bookClone.className = `book-card book-${i}`
        container.appendChild(bookClone);
    }
}

addBook();