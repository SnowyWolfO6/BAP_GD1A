const mybutton = document.getElementById('mybutton');
const antwoord = document.getElementById('antwoord');
const Score = document.getElementById('Score');
let checks;
let vraag = 1;
let goed = 0;
let fout = 0;
let scoren;
Mathrandom();
document.getElementById('vraag').innerHTML = vraag;


function Mathrandom() {

  var equals1 = Math.floor((Math.random() * 10) + 1);
  var equals2 = Math.floor((Math.random() * 10) + 1);

  document.getElementById("equals1").innerHTML = equals1;
  document.getElementById("equals2").innerHTML = equals2;

  checks = equals1 * equals2;
}
function Checker(){
    if (checks == antwoord.value) {
      goed++;
      document.getElementById('goed').innerHTML = goed;
      localStorage.setItem("goed", goed);
    }
    else {
      fout++;
      document.getElementById('fout').innerHTML = fout;
      localStorage.setItem("fout", fout);

    }
    document.getElementById("antwoord").value = "";
    Volgende();

}
function Volgende(){
  vraag ++;
  document.getElementById('vraag').innerHTML = vraag;
  localStorage.setItem("vraag", vraag);
  Mathrandom();

}
function CheckScorenPage() {
  location.href = "html bonus/score.html";
}


mybutton.addEventListener('click', Checker, false)
