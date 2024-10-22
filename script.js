document.addEventListener('DOMContentLoaded', () => {
    const avanca = document.querySelectorAll('.btn-proximo');

    avanca.forEach(button => {
        button.addEventListener('click', function() {
            if (this.id === 'fake_button') {
                this.remove();
                const simButton = document.querySelector('.btn-proximo[data-proximo="1"]');
                simButton.style.margin = '0 auto'; 
                simButton.style.display = 'block'; 
                simButton.style.width = '50%';  
            } else {
                const atual = document.querySelector('.ativo');
                const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
                atual.classList.remove('ativo');
                document.getElementById(proximoPasso).classList.add('ativo');
            }
        });
    });

    document.getElementById("showCalculatorButton").addEventListener("click", function() {
        document.getElementById("calculator").style.display = "block";
    });

    document.getElementById("calculateButton").addEventListener("click", function() {
        const laserSelect = document.getElementById("laserSelect");
        let comprimentoOnda = parseFloat(laserSelect.value);
        let distanciaAnt = parseFloat(document.getElementById("x").value);
        let distanciaCen = parseFloat(document.getElementById("y").value);


        if (distanciaAnt > 0 && distanciaCen > 0) {
            let Calculo = ((distanciaAnt ** 2 + distanciaCen ** 2) ** (1 / 2)) * comprimentoOnda / distanciaCen;
            let conversaoMM = Calculo * 1000;

            document.getElementById("result").innerText = "Resultado ≅ " + Calculo.toFixed(7) + " m" + " ou " + conversaoMM.toFixed(4) + " mm";

        } else {
            document.getElementById("result").innerText = "Por favor, insira valores válidos.";
        }
    });

    const toggleButton = document.getElementById('toggleButton');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            const content = document.getElementById('content');
            content.classList.toggle('transparent');
            content.classList.toggle('visible');
        });
    }
});
