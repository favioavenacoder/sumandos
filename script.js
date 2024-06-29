function sumarCadenas() {
    const cadenaNumerica = prompt("Introduce una cadena num�rica, separada por comas (ej. 1234, 5678, 9012, 3456):");
    const sumando = parseInt(prompt("Introduce un sumando (n�mero entero):"), 10);

    // Convertimos la cadena num�rica a un array de n�meros
    let numeros = cadenaNumerica.split(',').map(numero => parseInt(numero.trim(), 10));

    // Sumamos el sumando a cada elemento del array de n�meros
    let resultado = numeros.map(numero => numero + sumando);

    // Mostramos el resultado
    document.getElementById('resultado').innerText = `Resultado: ${resultado.join(', ')}`;
}
