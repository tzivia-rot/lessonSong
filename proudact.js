productInBasket()
$.ajax({
    method: 'GET',
    url: '/proudact.json',
    success: (data) => {
        const kind = JSON.parse(sessionStorage.getItem('kind'));
        for (let i = 0; i < data.length; i++) {
            if (kind === 'physical' && data[i].kind === 'physical' || kind === 'digital' &&
                data[i].kind === 'digital' || kind === 'proudact') {
                const div = document.createElement('div');
                proudact.append(div);
                div.classList.add('card');
                const img = document.createElement('img');
                div.append(img);
                img.classList.add('card-img-top');
                const type = document.createElement('img');
                div.append(type);
                type.classList.add('card-img-top');
                const text = document.createElement('h3');
                div.append(text);
                text.classList.add('card-text')
                const price = document.createElement('h2');
                div.append(price);
                const button = document.createElement('button');
                div.append(button);
                const a = document.createElement('a');
                button.append(a);
                button.onclick
                a.href = `basket.html`;
                button.classList.add('button');
                img.src = `proudact/${data[i].id}.jpg`;
                if (data[i].type === 'number') {
                    type.src = `proudact/${'misparimlogoc'}.jpg`;
                    button.classList.add('whiteblue');
                }
                else {
                    if (data[i].type === 'word') {
                        type.src = `proudact/${'milimlogoc'}.jpg`;
                        button.classList.add('yellow');
                    }
                    else {
                        if (data[i].type === 'concept') {
                            type.src = `proudact/${'concept'}.jpg`;
                            button.classList.add('perpul');
                        }
                        else
                            type.src = `proudact/${'letters'}.jpg`;
                        button.classList.add('red');
                    }
                }
                text.innerHTML = data[i].description;
                price.innerHTML = data[i].price + '₪';
                button.innerHTML = "להוספה לסל";
            }
        }
        basketAdd(data);
    }
})

function basketAdd(data) {
    const buttonAdd = document.querySelectorAll('.button');
    const proudactBag = JSON.parse(localStorage.getItem('prodact')) || [];
    for (let i = 0; i < buttonAdd.length; i++) {
        buttonAdd[i].onclick = () => {
            const newBag = data[i];
            proudactBag.push(newBag);
            localStorage.setItem('prodact', JSON.stringify(proudactBag));
            productInBasket();
        }
    }

}

function productInBasket() {
    let sum = JSON.parse(localStorage.getItem('prodact')) || [];
    let length = sum.length;
    count.innerHTML = length;
}


