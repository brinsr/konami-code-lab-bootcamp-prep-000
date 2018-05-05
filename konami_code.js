const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
function init(){
  let index=0;
 document.body.addEventListener('keydown',function(e){
  
  const entry=parseInt(e.detail||e.which);
  if(entry===code[index]){
    index++;
    if(index===code.length-1){
      alert("Congratulations!");
      index=0;
    } else{
      index=0;
    }
  }
},false);
}
  // Write your JavaScript code inside the init() function
  
 



