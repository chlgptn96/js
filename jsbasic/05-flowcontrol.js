//if문 : 조건 분기
const num = 10;
// 0보다 크면 양수, 0보다 작으면 음수, 0이면 0을 출력

if (num>0){
    console.log(num, "은 양수");
}else if(num<0){
    console.log(num, "은 음수");
}else {
    console.log(num, "은 0");
}

// switch 문
const grade = "C";
// A, B면 Good , C,D면 Pass, F면 Fail, 그 이외의 값이면 ?
let message = null;
switch(grade) {
    case "A":
    case "B":
        message = "Good";
        break; //잊지 말자 break
    case "C":
    case "D":
        message = "Pass";
        break;
    case "F":
        message = "Fail";
    default: // 위에 일치하는 값이 없을 때
        message = "?";
}
console.log("Grade : ", grade, ", Message : ", message);

/* 
논리 연산자
&& (AND 연산) : 둘 다 true여야 true,
|| (OR 연산) : 둘 중 하나만 true면 true,
! (NOT 연산) : 논리값을 부정 true <-> false
*/

// Loop 연습
// 1. 구구단 2단~9단까지 출력 (for버전, while버전)
// 버전 for
for(let dan=2; dan<=9; dan++){
    console.log(dan, "단");
    for(let num=1; num<=9; num++){
        console.log(dan, "*", num, "=" , dan*num);
    }
}

// 버전 while
let dan = 2;
while(dan <=9){
    console.log(dan,"단");
    let num =1;
    while(num<=9){
        console.log(dan, "*", num, "=" , dan*num);
        num++;
    }
    dan++;
}

// 2. 삼각형 그리기 (for 버전, while 버전)

/*
*****
****
***
**
*
*/
// 버전 for

 for(let i=5; i>0; i--){
    let star = "";
     for(let j = 0; j<i; j++){
        star += "*";
    }
    console.log(star);
}

// 버전 while
let i = 5;
while(i>0){
    let star = "";
    let j=i;
    while(j>0){
        star +="*";
        j--;
    }
    console.log(star);
    i--;
}