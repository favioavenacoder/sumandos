function sumarCadenas() {
    const cadenaNumerica = prompt("Introduce una cadena numérica, separada por comas (ej. 1234, 5678, 9012, 3456):");
    const sumando = parseInt(prompt("Introduce un sumando (número entero):"), 10);

    // Convertimos la cadena numérica a un array de números
    let numeros = cadenaNumerica.split(',').map(numero => parseInt(numero.trim(), 10));

    // Sumamos el sumando a cada elemento del array de números
    let resultado = numeros.map(numero => numero + sumando);

    // Mostramos el resultado
    document.getElementById('resultado').innerText = `Resultado: ${resultado.join(', ')}`;
}
