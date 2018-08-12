var array = ["Привет", "Loftschool"];
array.push('Я изучаю');
array.push("javascript");
console.log(array.length);
for(i=0;i<array.length;i++) {
    console.log(array[i]);
}

var array2 = [4,76, 90, 105,442,79,87,900,74]
for(i=0;i<array2.length;i++) {
    if(array2[i]>100){
    console.log(array2[i]);
}
}

 var obj = {Nam:"Marina", LastName: 'Artyushkova', age:37};
 console.log(obj.Nam);
 console.log(obj['LastName']);
 console.log(obj['age']);

 function hello(obj){
     return "Привет, меня зовут " + obj.Nam + " " +obj.LastName + " и мне" +" "+ obj.age +"лет";
 }
var x = hello(obj);
console.log(x);
 
