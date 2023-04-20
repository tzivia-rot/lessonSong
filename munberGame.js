function show() {
    cards.innerHTML = "";
    const sequence = [];
    for (let i = 0; i < 4; i++) {
        sequence[i] = Math.floor(Math.random() * 3);
        const div = document.createElement('div');
        cards.append(div);
        creatKnowElement(i, sequence, div);
    }
    let count = 0;
    for (let i = 4; i < 12; i++) {
        let num = Math.floor(Math.random() * 2);
        if (num === 0 && count < 4) {
            count++;
            const div = document.createElement('div');
            cards.append(div);
            creatKnowElement(i, sequence, div);
        }
        else {
            creatUnknownElement(i, sequence);
        }
    }

}

function creatKnowElement(index, sequence, div) {
    div.classList.add('single')
    const img = document.createElement('img');
    div.append(img);
    img.src = `imageForGame/${'0' + (sequence[index % 4])}.PNG`;
}

function creatUnknownElement(index, sequence) {
    const div = document.createElement('div');
    cards.append(div);
    div.classList.add('set')
    for (let i = 0; i < 3; i++) {
        const button = document.createElement('button');
        div.append(button);
        button.classList.add('button')
        const img = document.createElement('img');
        button.append(img);
        img.src = `imageForGame/${'0' + i}.PNG`;
        button.onclick = () => {
            if (i === sequence[index % 4]) {
                div.innerHTML = "";
                creatKnowElement(index, sequence, div);
                end();
            }
            else {
                alert('😭😭😭😭')
                end();
            }
        }
    }
}

function end() {
    const singleCard = document.querySelectorAll('.single');
    if (singleCard.length === 12) {
        back();
    }
    return;

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