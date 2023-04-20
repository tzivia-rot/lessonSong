
// sumOfProdact();
printBasket();
function printBasket() {
    const basketPruduct = JSON.parse(localStorage.getItem('prodact')) || [];
    if (basketPruduct.length === 0) {
        product.innerHTML = 'אין פרטים בסל';
    }
    else {
        for (let i = 0; i < basketPruduct.length; i++) {
            if (!(createBefor(basketPruduct[i].id, basketPruduct, i))) {
                const div = document.createElement('div');
                product.append(div);
                div.classList.add('card');
                const name = document.createElement('h2');
                div.append(name);
                name.classList.add('card-header');
                type(name, basketPruduct[i].type);
                const price = document.createElement('h2');
                price.innerHTML = basketPruduct[i].price;
                div.append(price);
                price.classList.add('card-text');

                const sum = document.createElement('h2');
                div.append(sum);
                sum.classList.add('card-text');

                const div2 = document.createElement('div');
                div.append(div2);
                div2.classList.add('btn-primary')


                sum.classList.add('sum');
                const del = document.createElement('button');
                div2.append(del);
                del.innerHTML = '-';
                del.onclick = () => {
                    remove(i, basketPruduct);
                }
                const count = document.createElement('h2');
                div2.append(count);
                count.innerHTML = amountOfReption(basketPruduct, basketPruduct[i].id);

                sum.innerHTML = 'סכום ביניים:' + count.innerHTML * price.innerHTML * 1;
                price.innerHTML += 'מחיר:';

                const add = document.createElement('button');
                div2.append(add);
                add.innerHTML = '+';
                add.onclick = () => {
                    basketAdd(basketPruduct[i]);
                }
            }
        }
        FinalSum();

    }
}
function createBefor(id, basketPruduct, index) {
    for (let i = 0; i < index; i++) {
        if (basketPruduct[i].id === id) {
            return true;
        }
    }
    return false;
}
function amountOfReption(basketPruduct, id) {
    let count = 0;
    basketPruduct.forEach(element => {
        if (element.id === id) {
            count++;
        }
    });
    return count;
}

function remove(i, basketPruduct) {
    basketPruduct.splice(i, 1);
    localStorage.setItem('prodact', JSON.stringify(basketPruduct));
    product.innerHTML = '';
    printBasket();
}
function type(name, type) {
    if (type === 'giftCard') {
        name.innerHTML = 'giftCard'
    }
    else {
        if (type === 'letters')
            name.innerHTML = 'מוצר:' + 'אותיות שרות'
        else {
            if (type === 'concept')
                name.innerHTML = 'מוצר:' + 'מושגים שרים'
            else {
                if (type === 'number')
                    name.innerHTML = 'מוצר:' + 'מספרים שרים'
                else
                    name.innerHTML = 'מוצר:' + 'מילים שרות'
            }
        }
    }
}
function FinalSum() {
    finalSum.innerHTML = '';
    let amount = 0;
    const sumOfProdact = document.querySelectorAll('.sum');
    sumOfProdact.forEach(s => {
        let arr = s.innerHTML.split(':');
        amount += arr[1] * 1;
    });
    const h2 = document.createElement('h2');
    finalSum.append(h2);
    amount += 35;
    flexRadioDefault1.onchange = () => {
        amount -= 35;
        h2.innerHTML = ' סכ"ה לתשלום:' + amount;

    }
    flexRadioDefault2.onchange = () => {
        amount += 35;
        h2.innerHTML = ' סכ"ה לתשלום:' + amount;

    }
    h2.innerHTML = ' סכ"ה לתשלום:' + amount;

}
function basketAdd(element) {
    const proudactBag = JSON.parse(localStorage.getItem('prodact')) || [];
    proudactBag.push(element);
    localStorage.setItem('prodact', JSON.stringify(proudactBag));
    product.innerHTML = '';
    printBasket()
}

function payment() {
    row.style = 'display: inline;';
}
function finishPaye() {
    sessionStorage.setItem('information', JSON.stringify(fname.value + '$' + adr.value + '$' + city.value));
}
function addForBasket() {
    const body = document.querySelector('body');
    body.style.overflowY = 'scroll';
    cardPrice = sum.value;
    const cardGift = { id: 22, kind: "giftCard", type: "giftCard", price: cardPrice };
    basketAdd(cardGift);
}
setTimeout(() => {
    popup.style = 'display: inline;';
    const body = document.querySelector('body');
    body.style.overflowY = 'hidden';

}, 800);

function release() {
    const body = document.querySelector('body');
    body.style.overflowY = 'scroll';
}


