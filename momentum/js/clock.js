const clock = document.querySelector("#clock");

function sayHello() {
  console.log("hello");
}

function getClock() {
  const nowHours = String(new Date().getHours()).padStart(2, "0");
  const nowMinutes = String(new Date().getMinutes()).padStart(2, "0");
  const nowSeconds = String(new Date().getSeconds()).padStart(2, "0");
  /* [노마드코더 #5.2]
  padStart()는 string이 가져야 하는 길이를 2로 설정하고, 2보다 작다면 앞쪽에 "0"으로 채움.
  뒤에 추가하고 싶으면 padEnd()를 사용하면 됨. */

  clock.innerText = `${nowHours}시 ${nowMinutes}분 ${nowSeconds}초`;
}

getClock();

setInterval(getClock, 1000); // 1초마다 getClock()을 실행
// setTimeout(sayHello, 5000); // 5초 뒤에 getClock()을 실행
