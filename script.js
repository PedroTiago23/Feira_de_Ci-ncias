document.addEventListener('DOMContentLoaded', () => {
    const avanca = document.querySelectorAll('.btn-proximo');

    avanca.forEach(button => {
        button.addEventListener('click', function() {
            // Verifica se o botão clicado é o "Não"
            if (this.id === 'fake_button') {
                
                // Remover o botão "Não"
                this.remove(); // Remove o botão completamente

                // Centraliza o botão "Sim"
                const simButton = document.querySelector('.btn-proximo[data-proximo="1"]');
                simButton.style.margin = '0 auto'; 
                simButton.style.display = 'block'; 
                simButton.style.width = '50%';  // Ajusta a largura do botão "Sim"
            } else {
                // Avança para o próximo passo, se não for o botão "Não"
                const atual = document.querySelector('.ativo');
                const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

                atual.classList.remove('ativo');
                document.getElementById(proximoPasso).classList.add('ativo');
            }
        });
    });

    // Função para mostrar a calculadora
    document.getElementById("showCalculatorButton").addEventListener("click", function() {
        document.getElementById("calculator").style.display = "block";
    });

    // Função para calcular a espessura do fio de cabelo
    document.getElementById("calculateButton").addEventListener("click", function() {
        let franja = 633e-9;
        let DistanciaAnt = parseFloat(document.getElementById("x").value);
        let DistanciaCen = parseFloat(document.getElementById("y").value);

        let Calculo = ((x ** 2 + y ** 2) ** (1 / 2)) * franja / y;
        let Conversaomm = Calculo * 1000;

        document.getElementById("result").innerText = "Resultado ≅ " + DistanciaAnt.toFixed(7) + "m" + " ou " + Conversaomm.toFixed(4) + "mm";
    });

    // Função para alternar visibilidade de conteúdo
    const toggleButton = document.getElementById('toggleButton');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            const content = document.getElementById('content');
            content.classList.toggle('transparent');
            content.classList.toggle('visible');
        });
    }
});
