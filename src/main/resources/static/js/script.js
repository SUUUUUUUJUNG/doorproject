// JavaScript 파일 연결 여부 확인
console.log("JavaScript 파일이 연결되었습니다.");

// toggleDoor 함수를 전역 함수로 선언
window.toggleDoor = function toggleDoor() {
    console.log("문 클릭 이벤트 실행됨"); // 클릭 이벤트 디버깅 메시지

    const door = document.querySelector(".door");
    const roomBackground = document.querySelector(".room-background");

    if (!door) {
        console.error("문 요소를 찾을 수 없습니다.");
        return;
    }

    // 문 열고 닫기
    door.classList.toggle("open");
    console.log("현재 문 상태:", door.classList.contains("open") ? "열림" : "닫힘");

    if (!roomBackground) {
        console.error("방 배경 요소를 찾을 수 없습니다.");
        return;
    }

    // 방 배경 표시/숨기기
    roomBackground.style.opacity = door.classList.contains("open") ? "1" : "0";
};
