var intentos = 1;
var uno;
var dos;
var verdad;
var op=0;

function elemento(uno, dos) {
    var arr;
  if (uno == 1) {
    if (dos == 'a') {
    arr = document.getElementsByClassName('uno');
    verdad = 1;
    } else{
     verdad = 0;      
    }
  }else if (uno == 'a'){
     if (dos == 1){
     arr = document.getElementsByClassName('uno');
     verdad = 1;
    }else{
     verdad = 0;
     }
  }else if (uno == 2){
     if (dos == 'b'){
     arr = document.getElementsByClassName('dos');
     verdad = 1;
    }else{
     verdad = 0;
     }
  }else if (uno == 'b'){
     if (dos == 2){
     arr = document.getElementsByClassName('dos');
     verdad = 1;
    }else{
     verdad = 0;
     }
  }else if (uno == 3){
     if (dos == 'c'){
     arr = document.getElementsByClassName('tres');
     verdad = 1;
    }else{
     verdad = 0;
     }
  }else if (uno == 'c'){
     if (dos == 3){
     arr = document.getElementsByClassName('tres');
     verdad = 1;
    }else{
     verdad = 0;
     }
  }else if (uno == 4){
     if (dos == 'd'){
     arr = document.getElementsByClassName('cuatro');
     verdad = 1;
    }else{
     verdad = 0;
     }
  }else if (uno == 'd'){
     if (dos == 4){
     arr = document.getElementsByClassName('cuatro');
     verdad = 1;
    }else{
     verdad = 0;
     }
     }else if (uno == 5){
     if (dos == 'e'){
     arr = document.getElementsByClassName('cinco');
     verdad = 1;
     }else{
     verdad = 0;
     }
     }else if (uno == 'e'){
     if (dos == 5){
     arr = document.getElementsByClassName('cinco');
     verdad = 1;
     }else{
     verdad = 0;
     }
     }else if (uno == 6){
     if (dos == 'f'){
     arr = document.getElementsByClassName('seis');
     verdad = 1;
     }else{
     verdad = 0;
     }
     }else if (uno == 'f'){
     if (dos == 6){
     arr = document.getElementsByClassName('seis');
     verdad = 1;
     }else{
     verdad = 0;
     }
  }    
 return arr;
 return verdad;

}


function memoria(i){
  if (intentos == 1){
    uno = i;
    intentos++;
   }else if (intentos == 2){
      dos = i;
      intentos = 1;
      var arr = elemento(uno, dos);
      console.log("uno es "+uno+"\ndos es "+dos+"\nverdad vale: "+verdad+"\nintentos es: "+intentos);
        if (verdad){
          op+=1;
          for (var x = 0; x < arr.length; x++) {
          arr[x].style.opacity = 0;
          }
          if(op>5) {
          alert("fin del juego");
          op=0;
          var i = document.getElementById("reinicio");
          i.style.display = "block";
          }else{
           console.log("juego en linea, intentos restantes:  "+op);
           }
        }else{
 console.log("#");
          }
         }
    }
    
function reiniciar() {
  var i = document.getElementById("reinicio");
  i.style.display = "none";
  var elem = document.getElementsByClassName("uno");
  for (var x = 0; x < elem.length; x++) {
    elem[x].style.opacity = 1;
   }
   var elem = document.getElementsByClassName("dos");
   for (var x = 0; x < elem.length; x++) {
   elem[x].style.opacity = 1;
   }
   var elem = document.getElementsByClassName("tres");
   for (var x = 0; x < elem.length; x++) {
   elem[x].style.opacity = 1;
   }
   var elem = document.getElementsByClassName("cuatro");
   for (var x = 0; x < elem.length; x++) {
   elem[x].style.opacity = 1;
   }
   var elem = document.getElementsByClassName("cinco");
   for (var x = 0; x < elem.length; x++) {
   elem[x].style.opacity = 1;
   }
   var elem = document.getElementsByClassName("seis");
   for (var x = 0; x < elem.length; x++) {
   elem[x].style.opacity = 1;
   }
}