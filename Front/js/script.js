/*
var num1;

let num2;

num3 = 3 

const pi = 3.14

nome, nOme, noMe, nomE, NOME

aritimeticos -> + - * / \\ % ** ++ --
logicos && || !
comparação > < <= >= != == ===
atribuição = += -= *= /=

*/

function boasVindas(){
    // alert('Eu avisei !!')
    // document.write('Seja bem vindo, amigo!!');
}

function somar(){
    //Valor01 = parseInt(document.frmCalc.txtValor01.value);
    //Valor02 = parseInt(document.getElementById('txtValor2').value);

    Valor01 = document.getElementById('txtValor1');
    Valor02 = document.getElementById('txtValor2');
    result = document.getElementById("result");

    if(Valor01.value == ""){
        alert('campo obrigatório');
        Valor01.focus();
        return false;

    }

    soma = parseInt(Valor01.value) + parseInt(Valor02.value);

    result.innerText = soma;
    //document.write(soma);

}
