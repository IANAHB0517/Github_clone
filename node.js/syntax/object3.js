// var v1 = 'v1';
// // 10000 code
// v1 = 'FTE';
// var v2 = 'v2';


// 자바스크립트에서의 함수는 값이기도 하다. 그렇기 때문에 배열과 객체에 담을 수 있다.
// 객체는 이름을 가지기 때문에 함수를 이름으로 꺼내놓기가 좋기 때문에 자주 사용된다.

var q = {
    v1:'verse',
    v2:'vibe',
    f1:function (){
        console.log(this.v1);
    },
    f2:function (){
        console.log(this.v2);
    }

}






q.f1();
q.f2();