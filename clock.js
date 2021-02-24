const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector("h1");

 function getTime(){
     const date = new Date(); //현재의 시간을 가져오려는 것이다.
     const minutes = date.getMinutes();
     const hours = date.getHours();
     const seconds = date.getSeconds();
     clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
         minutes < 10 ? `0${minutes}`:minutes}:${
             seconds < 10 ? '0&{seconds}' : seconds }`;
     //시,분,초가 10초 보다 작을 때 앞에 0을 붙힌다.
 }

function init(){
    getTime();
    setInterval(getTime, 1000) //setInterval(시간을 얻는 부분, 초기화 되는 시간 1000이 1초임)
}
init()