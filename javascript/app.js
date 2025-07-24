document.addEventListener("DOMContentLoaded", function() {
    const h1 = document.getElementById("digitando");
    const texto = h1.textContent; // Troque pelo texto desejado
    h1.textContent = "";
    let i = 0;

    function digitar() {
        if (i < texto.length) {
            h1.textContent = texto.slice(0, i);
            i++;
            setTimeout(digitar, 100); // Velocidade da digitação (ms)
        } else if (i === texto.length) {
            h1.textContent = texto;
            i++;
            setTimeout(digitar, 100); // Velocidade da digitação (ms)
            setTimeout(() => {
                h1.innerHTML = texto + '<span id="ponto-final">.</span>';
            }, 100);
        }
    }

    digitar();
});