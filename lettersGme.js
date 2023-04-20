const letters = ["צ", "ל", "ט", "מ"];

function show() {
    Instructions.innerHTML = ''
    $.ajax({
        method: 'GET',
        url: '/card.json',
        success: (data) => {
            const currentSignal = randomly();
            const span = document.createElement('span')
            cards.append(span);
            span.innerHTML = currentSignal;
            choseElement(data, currentSignal);
        }
    })
}
function randomly() {
    let x = Math.floor(Math.random() * (letters.length));
    let currentSignal = letters[x];
    letters.splice(x, 1);
    return currentSignal;
}
function choseElement(data, currentSignal) {
    let trueCard
    for (let i = 0; i < data.length; i++) {
        if (data[i].letterBegin === currentSignal) {
            trueCard = data[i];
            break;
        }
    }
    const cardChoose = [];
    randomIndex = Math.floor(Math.random() * 6);
    cardChoose[randomIndex] = trueCard;
    for (let i = 0; i < 6; i++) {
        if (i === randomIndex) {
            createCard(trueCard, currentSignal);
        }
        else {
            let index = Math.floor(Math.random() * data.length);
            if ((data[index].letterBegin != currentSignal) && (noRepite(cardChoose, data[index].id))) {
                createCard(data[index], currentSignal);
                cardChoose[i] = data[index];
            }
            else {
                i--;
            }
        }
    }
}

function noRepite(cardChoose, id) {
    cardChoose.forEach(element => {
        if (element.id === id) {
            return false;
        }
    });
    return true;
}

function createCard(card, currentSignal) {
    const div = document.createElement('div');
    cards.append(div);
    div.classList.add('cards');
    const img = document.createElement('img');
    div.append(img);
    img.classList.add('card-img-top');
    const button = document.createElement('button');
    div.append(button);
    button.classList.add('card-text')
    button.innerHTML = "זה התשובה"
    img.src = `imageForGame/${card.id}.png`;
    button.onclick = () => {
        if (card.letterBegin === currentSignal) {
            alert('מעולה')
            cards.innerHTML = '';
            if (letters.length >= 1)
                show();
            else {
                back();
            }
        }
        else {
            alert('טעות');
            cards.innerHTML = '';
            if (letters.length >= 1)
                show();
            else {
                back();
            }
        }
    }
}

function back() {
    const h1 = document.createElement('h1');
    finalMeseg.append(h1);
    h1.classList.add('finalText');
    h1.innerHTML = 'סיימת את המשחק'
    const h2 = document.createElement('h2');
    finalMeseg.append(h2);
    h2.classList.add('text');
    h2.innerHTML = "ניתן לרכוש משחקים נוספים באתר"
}

