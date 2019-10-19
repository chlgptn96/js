//javascript의 객체
const person = new Object();
//javascript는 동적 타이핑 언어, 객체 기반 언어이기 때문에 필요할 때 언제든 속성 추가가 가능
person.name = "이즈리얼";
person.age = "28";
person.showInfo = function () {
    let message = "Name : " +this.name +  " , Age : " + this.age;
    console.log(message);
}

person.showInfo(); //속성 접근

// *****JSON을 이용한 객체의 생성*****
// JSON은 JavaScript 객체 표현법이기는 하지만 범용적으로 사용되는 데이텨 형식 ( 매우 중요 )
// 속성은 키 : 값의 쌍으로 이루어지고 값은 숫자, 문자열, 날짜, boolean, 배열, 객체 등
const person2 = {
    name : "유미",
    age : 24,
    showInfo : function () {
        console.log("Name: ", this.name, ", Age: ", this.age);
    }
}
person2.showInfo();

//---------Prototype
const Member = function (name, position) {
    this.name = name;
    this.position = position;  
};

let m1 = new Member("피즈","미드");
let m2 = new Member("다리우스","탑");

console.log("m1 : " , m1);
console.log("m2 : " , m2);

//동적 타이핑 언어여서 필요할 때 언제든 속성을 추가할 수 있다.
m1.sayHello = function () {
    console.log(this.name, "님이 당신을 부릅니다.");
    
} // 개별 객체에 추가된 속성 ( 공유 안됨 )
m1.sayHello();
console.log("m1 : ", m1);
console.log("m2 : ", m2);
//  m2.sayHello(); --> Error

// 모든 개별 객체가 공유할 수 있는 메모리 공간 : Prototype
Member.prototype.introduce = function () {
    console.log("Name : ", this.name);
    console.log("Position : ", this.position);
}

m1.introduce();
m2.introduce();

console.log("m1 : ", m1);
console.log(m1.constructor);
console.log(Member.prototype);

// String 객체의 프로토타입 확인
console.log(String.prototype);

// 기존 객체들도 동적으로 속성과 메서드를 추가하여 기능을 확장할 수 있다.
String.prototype.sayHello = function () {
    return "Hello, "+ this;
}
console.log("둘리".sayHello());