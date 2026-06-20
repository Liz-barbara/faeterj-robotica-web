const led = document.getElementById("led");
const statusText = document.getElementById("status");
const ultimaAtualizacao = document.getElementById("ultimaAtualizacao");

function atualizarDataHora() {
    const agora = new Date();

    ultimaAtualizacao.textContent =
        "Última atualização: " +
        agora.toLocaleString();
}

function ligarLed() {

    led.classList.add("ligado");

    statusText.textContent =
        "🟢 LED LIGADO";

    localStorage.setItem(
        "estadoLed",
        "ligado"
    );

    atualizarDataHora();
}

function desligarLed() {

    led.classList.remove("ligado");

    statusText.textContent =
        "🔴 LED DESLIGADO";

    localStorage.setItem(
        "estadoLed",
        "desligado"
    );

    atualizarDataHora();
}

function restaurarEstado() {

    const estado =
        localStorage.getItem("estadoLed");

    if (estado === "ligado") {
        ligarLed();
    } else {
        desligarLed();
    }
}

restaurarEstado();
