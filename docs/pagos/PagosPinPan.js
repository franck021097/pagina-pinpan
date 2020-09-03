var boton = document.getElementById("Retirar");
boton.addEventListener("click", darDinero);

var texto = document.getElementById("Retiro");
var dinero = texto;
var Cincuenta = 0;
var Veinte = 0;
var Diez = 0;
var sobra = texto;
console.log(dinero);
function billetesDe50(D)
{//while(sobra>=50){s
    sobra.value = sobra.value-50;
    Cincuenta++;
  //  alert("tienes: " + Cincuenta+ " billetes de 50");
  //  return sobra;
}

function billetesDe20(){
//while(sobra>=20){
    sobra.value = sobra.value-20;
    Veinte++;
  //  alert("tienes: " + Veinte + " billetes de 20");
  //  return sobra;

}

function billetesDe10(){
//while(sobra>=10){
    sobra.value = sobra.value-10;
    Diez++;
  //  alert("tienes: " + Diez + " billetes de 10");
 //   return sobra;
}

function darDinero()
{
    if(dinero.value%10 === 0)
    {//ok
        while(sobra.value > 0){
            if(sobra.value >= 50){
                billetesDe50();
            }

            if(sobra.value >= 20 && sobra.value < 50){
                billetesDe20();}

            if(sobra.value >= 10 && sobra.value < 20){
                billetesDe10();}

        }
        tomaElDinero.innerHTML = "tienes: " + Cincuenta + "billetes de cincuenta" + "<br>tienes: " + Veinte + " billetes de veinte" +
                       "<br>tienes: " + Diez + " billetes de diez";
        //document.write("<br>toma tus: " + dinero.value + " vete interesado");
    }
}
