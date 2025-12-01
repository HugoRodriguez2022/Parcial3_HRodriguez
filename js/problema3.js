function determinarNumeros() {
    // Usar el ID del input específico de la página problema2.html
    const numero1 = getInputValue('Numero 1', true); 
    const numero2 = getInputValue('Numero 2', true);

    // Validar que sean 3 dígitos
    if (!/^\d{2}$/.test(numero1)) {
        showResult(resultadoDivId, "Error: Por favor, ingresa exactamente 2 dígitos numéricos pares.", true);
        return;
    }

        if (!/^\d{2}$/.test(numero2)) {
        showResult(resultadoDivId, "Error: Por favor, ingresa exactamente 2 dígitos numéricos impares.", true);
        return;
    }

    let pares = 0;

    for (let i = 0; i < numero1.length; i++) {
        const digito = parseInt(numero1[i]);
        // Un número es par si el residuo al dividir por 2 es 0.
        // Cero (0) se considera un dígito par.
        if (digito % 2 === 0) {
            pares++;
        }
    }

    for (let i = 0; i < numero2.length; i++) {
        const digito = parseInt(numero2[i]);
        if (digito % 2 === 1) {
            Impares++;
        }
    }

    let Numpares = "";
    switch (pares) {
        case 1:
            Numpares = `El numero ${numero1} tiene ${pares} dígito par. .`;
            break;
        case 0:
            Numpares = `El numero ${numero2} tiene ${pares} dígitos pares. .`;
            break;
    }

    showResult(resultadoDivId, categoria, false);
}