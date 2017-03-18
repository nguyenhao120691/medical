function tinhtong(a,b){
    return a+b;
}
var x = tinhtong(5,3);
console.log(x);
/////////////////////////
function hello(){
  console.log("Hello world");
}
function goiham(fn){
  fn();
}
goiham(hello);
////////////////////////////
var tong = function(){
  console.log("Tinh tong");
}
tong();
