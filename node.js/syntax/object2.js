// array, object

var f = function(){  
    console.log(1+1);
    console.log(1+2);

}

console.log(f);
f();        

var a = [f];
a[0]();

var o = {
    func:f
}

o.func();



                                         // Function 은 다른 구문들과 달리
                                         // 처리 기능을 가짐과 동시에 값으로 사용될 수 있다.


// var i = if(true){console.log(1)};        if 문과 while 문은 값이 될 수 없다

// var w = wile(true){console.log(1)};