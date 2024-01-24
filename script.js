
function calcular(){
    var valor1 = parseInt(document.getElementById('campo1').value, 10);
    
    document.getElementById('resultado').value = Math.trunc(3.5 * valor1 * 1440 / 1000 *5 * 1.1 * 1.1) + " " +"Kcal";
}

function calcular2() {
    var valor2 = parentInt(document.getElementById('calculo2').value, 10);

    document.getElementById('resultado3').value = Math.trunc(getElementById('calculo2') * getElementById('calculo3') * getElementById('calculo4')) + " " + "Kcal";
}