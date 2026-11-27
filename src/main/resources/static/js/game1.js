
/*
// 여기서부터는 자바스크립트 나라입니다
//  태그를 쓰면 안됩니다
// 자바스크립트 프로그래밍만 가능합니다

// 1. 어떤 버튼이 눌렸는지 찾기위해 .treasure-card셀렉터를 찾아야합니다
const cards = document.querySelectorAll(".treasure-card");

// 2. 버튼을 누르면 문제를 출력할 패널 찾기
const questionText = document.querySelector("#question-text");

// 3. 버튼을 눌렀는데 어떤 버튼을 눌렸는가 조사.
//  모든 버튼을 조사해야하므로 루프가 필요
// 4. cards는 내부적으로 배열로 관리되므로
//  배열.forEach(처리할 기능(=함수라는 뜻))
//  이용해서 구현

cards.forEach( 
        1. 일단 카드마다 이벤트가 발생하면 처리할 
                    이벤트핸들러 함수를 정의
        // function(card): 여기서 쓰면 다시 안써요
        // function card_choice(card): 다른 곳에서
        //      재사용. 그런데 홈페이지는 페잊별오 실행하기땜에
        //      다른 곳에서 재사용 의미
        // 요즘은 function(card) 형식 즉 익명함수 또는 람다함수가 대세
        // forEach는 for(;;) {...}를 말함
        // cards가 treasure_card 9개를 가지고 있으므로
        // cards의 treasure_card 각 한장을 뽑기 하는방법
        // card는 각 treasure_card 한장
        // 자바스트립트는 함수를 데이터로 내부적으로 감주함
        // let alerctFun = function(){alert("안녕")};
        // a
    function(card) { // 루프가 각각의 카드를 찾는 것
    card.addEventListener("click", function() {
        2. 이정의된 함수를 클릭이벤트와 연결 등록
        // card는 보물상자 버튼하나를 여는 클래스등록
        3. 이벤트 처리 함수를 구현
        card.classList.add("open");
        questionText.textContent = "문제가 열렸어요! 정답을 생각해 보세요.";
    });
}); */

const cards = document.querySelectorAll(".treasure-card"); 
const questionText = document.querySelector("#question-text");

cards.forEach(function (card) {
    card.addEventListener("click", function () {
        card.classList.add("open");
        questionText.textContent = "문제가 열렸어요! 정답을 생각해 보세요.";
    });
}); 

