var amount = document.querySelector('.amount');
var price = document.querySelector('.price-gen');
var priceOverall = document.querySelector('.price-ovr');
var cardAmount = document.querySelectorAll('.amount'); 
var addBttn = document.querySelectorAll('.plus');
var removeBttn = document.querySelectorAll('.minus');
var cardsText = document.querySelectorAll('.card-text');



var k = 0;


class ListOfBooks {
    constructor() {
        this.cards = Array.from(document.querySelectorAll('.book-card'));
    }

    delOne() {
        this.cards.forEach((card, index) => {
            const delBttn = card.querySelector('.remove');
            
            delBttn.addEventListener('click', () => {
                card.remove();
                this.cards.splice(index, 1);
                this.updateSummary();
            });
        });
    }

    updateSummary() {
        const amount = document.querySelector('.text-amount');
        const price = document.querySelector('.text-price');

        let totalAmount = 0;
        let totalPrice = 0;

        this.cards.forEach(card => {
            const cardAmount = parseInt(card.querySelector('.amount-gen').textContent, 10);
            const cardPrice = parseInt(card.querySelector('.price-gen').textContent, 10);
            
            totalAmount += cardAmount;
            totalPrice += cardAmount * cardPrice;
        });

        amount.textContent = totalAmount;
        price.textContent = `${totalPrice} руб`;
        priceOverall.textContent = `${totalPrice - 0} руб`;
    }

    Diff() {
        this.cards.forEach((card, index) => {
            const addBttn = card.querySelector('.plus');
            const removeBttn = card.querySelector('.minus');
            const cardAmount = card.querySelector('.value');

            addBttn.addEventListener('click', () => {
                cardAmount.textContent = parseInt(cardAmount.textContent, 10) + 1;
                this.updateSummary();
            });

            removeBttn.addEventListener('click', () => {
                const currentAmount = parseInt(cardAmount.textContent, 10);
                if (currentAmount > 1) {
                    cardAmount.textContent = currentAmount - 1;
                } else {
                    card.remove();
                    this.cards.splice(index, 1);
                }

                this.updateSummary();
            });
        });
    }
}


const list = new ListOfBooks();
list.Diff();
list.delOne();


