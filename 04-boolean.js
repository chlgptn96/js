// 논리값 : true / false
// 주로 조건문을 이용해서 논리값을 판단
let a = 10;
let b1 = a>0;
console.log(a, "> 10 ?" , b1);

//Boolean 객체를 이용하여 논리값을 판단해 볼 수 있다.
console.log(Boolean("JavaScript"));
console.log(Boolean("")); //false

// undefined와 null
// undefined : 선언만 하고 할당되지 않은 상태
// null : 값이 없다고 개발자가 선언한 값

let v1; // 선언만 한 상태
let v2 = null; // 개발자가 임의로 비어있다고 설정한 상태
console.log(v1, v2);

// 값의 비교
// == : 타입과 상관 없이 값을 비교
// === : 값과 함께 타입도 비교한다.
// undefined와 null은 잘 체크하도록 한다

v1 = 2019;
v2 = "2019";

console.log(v1 == v2); //값 비교
console.log(v1 === v2); //값과 함께 타입 비교 -> 추천하는 방식