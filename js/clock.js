const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;

    //clock.innerText = new Date().toLocaleTimeString();
    //clock.innerText = new Date().toLocaleTimeString("en-US", {hour12:false});
    //위에는 AM/PM 형태를, 아래는 기존의 형태로, 둘 다 제대로 작동하니, 참고할것
}

getClock();
setInterval(getClock, 1000);