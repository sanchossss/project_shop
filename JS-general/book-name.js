function nameCut() {
    function updateText(book) {
        let name = book.textContent;
        let k = name.length;

        if (k > 20 && window.innerWidth < 541) {
            let nameNew = name.slice(0, 20) + "...";
            book.textContent = nameNew;
        } else {
            // Если условие не выполняется, вернем полный текст
            book.textContent = name;
        }
    }

    // Выбираем все элементы с классом '.book-info .name'
    let books = document.querySelectorAll('.book-info .name');

    // Вызов функции при загрузке страницы для каждой книги
    books.forEach((book) => {
        updateText(book);
    });

    // Вызов функции при изменении размера окна для каждой книги
    window.addEventListener('resize', () => {
        books.forEach((book) => {
            updateText(book);
        });
    });
}

nameCut();


