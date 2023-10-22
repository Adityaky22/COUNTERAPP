const counter = document.querySelector('#count');

function decrement(){
    let value = parseInt(counter.innerHTML);
    value = value-1;
    counter.innerHTML = value;
};

function increment(){
    let value = parseInt(counter.innerHTML);
    value = value+1;
    counter.innerHTML = value;
};

