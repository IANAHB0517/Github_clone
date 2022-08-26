// function a(){
//     console.log('A');
// }

var B = function (){
    console.log('A');
}

B()

function slowfunc(callback){
    callback();
}

slowfunc(B);
