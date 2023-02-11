const sorteador = () => {
    const valorMinimo = document.getElementById('valorMinimo');
    const valorMaximo = document.getElementById('valorMaximo');
    const resultado = document.querySelector('.resultado');

    const sortear = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    document.addEventListener('click', (event) => {
        const elemento = event.target;
        if (elemento.classList.contains('sortear')) {
            resultado.innerHTML = sortear(Number(valorMinimo.value), Number(valorMaximo.value));
        };
    });
};
sorteador();
