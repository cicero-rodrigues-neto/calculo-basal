
function calcular(){
    var valor1 = parseInt(document.getElementById('campo1').value, 10);
    var calcBasal = 3.5 * valor1 * 1440 / 1000 * 5 * 1.1 * 1.1;

    var decimailCalc = Math.trunc(calcBasal)
    document.querySelector('#resultado').innerHTML = decimailCalc + " " +"Kcal";
    
}

function calcularExercicio() {
    var calc1 = parseInt(document.querySelector('#calculoMet').value);
    var calc2 = parseInt(document.querySelector('#calculoPc').value);
    var calc3 =  Math.abs(document.querySelector('#calculoTempo').value);
    var calc4 = (calc3 / 60);

    var MostrarResultado = parseInt(calc1) * parseInt(calc2) * parseFloat(calc4) * 100;
    var semDecimal = Math.trunc(MostrarResultado);
    document.querySelector('#resultadoAtividade').innerHTML = semDecimal + " " +"Kcal";
}