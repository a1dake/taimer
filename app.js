let date = new Date('Oct 2 2022 00:00:00');

const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

function timer() {
    let now = new Date();
    let ost = date - now;

    let curdays = Math.floor(ost / 1000 / 60 / 60 / 24);
    let curhours = Math.floor(ost / 1000 / 60 / 60) % 24;
    let curminutes = Math.floor(ost / 1000 / 60 ) % 60;
    let curseconds = Math.floor(ost / 1000 ) % 60; 
   
    if (ost < 0) {
        
    } else {
    days.innerText = curdays < 10 ? '0' + curdays : curdays;
    hours.innerText = curhours < 10 ? '0' + curhours : curhours;
    minutes.innerText = curminutes < 10 ? '0' + curminutes : curminutes;
    seconds.innerText = curseconds < 10 ? '0' + curseconds : curseconds;
    }   
}

timer();
setInterval(timer, 1000);
