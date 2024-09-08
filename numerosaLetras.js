function convertirNumeroALetras(num) {
    const unidades = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const decenas = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
    const decenasMayores = ['veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const centenas = ['ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

    if (num < 10) return unidades[num];
    if (num < 20) return decenas[num - 10];
    if (num < 100) {
        return decenasMayores[Math.floor(num / 10) - 2] + (num % 10 !== 0 ? ' y ' + unidades[num % 10] : '');
    }
    if (num < 1000) {
        return (num === 100 ? 'cien' : centenas[Math.floor(num / 100) - 1]) + (num % 100 !== 0 ? ' ' + convertirNumeroALetras(num % 100) : '');
    }
    if (num < 1000000) {
        const miles = Math.floor(num / 1000);
        const resto = num % 1000;
        return (miles === 1 ? 'mil' : convertirNumeroALetras(miles) + ' mil') + (resto !== 0 ? ' ' + convertirNumeroALetras(resto) : '');
    }
    return 'Número fuera de rango';
}

function traducirNumero() {
    const numero = document.getElementById('numero').value;
    const resultadoDiv = document.getElementById('resultado');

    if (numero === '' || isNaN(numero)) {
        resultadoDiv.textContent = 'Por favor, ingresa un número válido.';
    } else {
        const num = parseInt(numero, 10);
        if (num < 0 || num > 999999) {
            resultadoDiv.textContent = 'Por favor, ingresa un número entre 0 y 999999.';
        } else {
            resultadoDiv.textContent = convertirNumeroALetras(num);
        }
    }
}