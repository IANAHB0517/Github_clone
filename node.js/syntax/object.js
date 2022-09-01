var members = ['FTE','La.J','Dyangjin'];
console.log(members[0]);

var i =0;
while(i < members.length){
    console.log(`loop` , members[i]);
    i++
}

var roles = {
    'programmer' : 'FTE',
    'musician' : 'La.J',
    'husband' : 'Dyangjin',
}
console.log(roles.musician);

for(var n in roles){
    console.log(`object =>` , n , 'value =>' , roles[n]);
}