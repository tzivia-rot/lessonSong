productInBasket();

setTimeout(() => {
    const boolean=JSON.parse(sessionStorage.getItem('firstAlert'))||[];
    if(boolean.length===0){
    popup.style='display: inline;';
    const body = document.querySelector('body');
    body.style.overflowY = 'hidden';
    sessionStorage.setItem('firstAlert', JSON.stringify(true));
    }
}, 800);

function release(){
    const body=document.querySelector('body');
    body.style.overflowY = 'scroll';
}

function productInBasket(){
    let sum=JSON.parse(localStorage.getItem('prodact'))||[];
    let length=sum.length;
    count.innerHTML=length;
}

