const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector("h1");

 function getTime(){
     const date = new Date(); //현재의 시간을 가져오려는 것이다.
     const minutes = date.getMinutes();
     const hours = date.getHours();
     const seconds = date.getSeconds();
     clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
 }

function init(){
    getTime();

}
init()