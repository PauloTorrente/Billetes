function calcularBilletesMonedas(importe) {
    if (typeof importe !== 'number' || isNaN(importe)) {
        console.log('El importe debe ser un número.');
        return;
    }

    const denominaciones = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    const billetesMonedas = {};

    let resto = importe;

    for (let i = 0; i < denominaciones.length; i++) {
        const denominacion = denominaciones[i];
        const cantidad = Math.floor(resto / denominacion);
        if (cantidad !== 0) {
            billetesMonedas[denominacion.toFixed(2) + '€'] = cantidad;
        }
        resto %= denominacion;
    }

    console.log('Billetes y monedas:');
    for (const [denominacion, cantidad] of Object.entries(billetesMonedas)) {
        console.log(`${cantidad} ${denominacion}`);
    }
}

calcularBilletesMonedas(1234.56);