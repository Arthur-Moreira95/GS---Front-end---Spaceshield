function atualizarHoraBrasilia() {
    const agora = new Date();

    const hora = agora.toLocaleTimeString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    document.getElementById("hora-brasilia").textContent = hora;
}


// CRONÔMETRO PERSISTENTE

let inicioUso = localStorage.getItem("inicioUsoSpaceShield");

if (!inicioUso) {
    inicioUso = Date.now();
    localStorage.setItem("inicioUsoSpaceShield", inicioUso);
}

function atualizarCronometro() {

    const agora = Date.now();

    const tempoPassado =
        Math.floor((agora - inicioUso) / 1000);

    const h =
        String(Math.floor(tempoPassado / 3600)).padStart(2, "0");

    const m =
        String(Math.floor((tempoPassado % 3600) / 60)).padStart(2, "0");

    const s =
        String(tempoPassado % 60).padStart(2, "0");

    const tempoFormatado = `${h}:${m}:${s}`;

    const cronometro =
        document.getElementById("cronometro");

    const uptime =
        document.getElementById("uptime");

    if (cronometro) {
        cronometro.textContent = tempoFormatado;
    }

    if (uptime) {
        uptime.textContent = tempoFormatado;
    }
}


// =====================

atualizarHoraBrasilia();
atualizarCronometro();

setInterval(atualizarHoraBrasilia, 1000);
setInterval(atualizarCronometro, 1000);

// mapa-orbital
const canvas = document.getElementById("orbitalCanvas");

if (canvas) {

const ctx = canvas.getContext("2d");

let zoom = 1;
let offsetX = 0;
let offsetY = 0;
let arrastando = false;
let inicioX = 0;
let inicioY = 0;

function ajustarCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

function desenharMapaOrbital() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centroX = canvas.width / 2 + offsetX;
    const centroY = canvas.height / 2 + offsetY;

    ctx.save();
    ctx.translate(centroX, centroY);
    ctx.scale(zoom, zoom);

    // Fundo estrelado
    ctx.fillStyle = "#050b18";
    ctx.fillRect(-canvas.width, -canvas.height, canvas.width * 2, canvas.height * 2);

    for (let i = 0; i < 120; i++) {
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.fillRect(
            Math.random() * canvas.width - canvas.width / 2,
            Math.random() * canvas.height - canvas.height / 2,
            1,
            1
        );
    }

    // Órbitas
    ctx.strokeStyle = "rgba(0, 191, 255, 0.35)";
    ctx.lineWidth = 1;

    for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.ellipse(0, 0, 120 * i, 55 * i, -0.25, 0, Math.PI * 2);
        ctx.stroke();
    }

    // Terra
    const gradienteTerra = ctx.createRadialGradient(-30, -30, 20, 0, 0, 115);
    gradienteTerra.addColorStop(0, "#58b7ff");
    gradienteTerra.addColorStop(0.5, "#1557a8");
    gradienteTerra.addColorStop(1, "#061a3a");

    ctx.fillStyle = gradienteTerra;
    ctx.beginPath();
    ctx.arc(0, 0, 115, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "rgba(255,255,255,0.25)";
    ctx.stroke();

    // Nave ativa
    ctx.fillStyle = "#00BFFF";
    ctx.beginPath();
    ctx.arc(-190, -85, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#F5F7FA";
    ctx.font = "12px Arial";
    ctx.fillText("ORBITRON", -235, -105);

    // Objeto de risco
    ctx.fillStyle = "#ff3333";
    ctx.beginPath();
    ctx.arc(260, -30, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "rgba(255, 50, 50, 0.8)";
    ctx.beginPath();
    ctx.arc(260, -30, 14, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = "#ff3333";
    ctx.fillText("OBJ-4821", 275, -45);

    // Linha de risco
    ctx.strokeStyle = "rgba(255, 50, 50, 0.5)";
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(-190, -85);
    ctx.lineTo(260, -30);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.restore();
}

canvas.addEventListener("wheel", function(event) {
    event.preventDefault();

    if (event.deltaY < 0) {
        zoom += 0.1;
    } else {
        zoom -= 0.1;
    }

    zoom = Math.min(Math.max(zoom, 0.5), 2.5);
    desenharMapaOrbital();
});

canvas.addEventListener("mousedown", function(event) {
    arrastando = true;
    inicioX = event.clientX - offsetX;
    inicioY = event.clientY - offsetY;
});

canvas.addEventListener("mousemove", function(event) {
    if (!arrastando) return;

    offsetX = event.clientX - inicioX;
    offsetY = event.clientY - inicioY;

    desenharMapaOrbital();
});

canvas.addEventListener("mouseup", function() {
    arrastando = false;
});

canvas.addEventListener("mouseleave", function() {
    arrastando = false;
});

window.addEventListener("resize", function() {
    ajustarCanvas();
    desenharMapaOrbital();
});

ajustarCanvas();
desenharMapaOrbital();

document.getElementById("zoomIn").addEventListener("click", function () {
    zoom += 0.1;
    zoom = Math.min(zoom, 2.5);
    desenharMapaOrbital();
});

document.getElementById("zoomOut").addEventListener("click", function () {
    zoom -= 0.1;
    zoom = Math.max(zoom, 0.5);
    desenharMapaOrbital();
});

document.getElementById("centralizarMapa").addEventListener("click", function () {
    zoom = 1;
    offsetX = 0;
    offsetY = 0;
    desenharMapaOrbital();
});
}

// MUDANÇA NA TEMPERATURA

function adicionarLog(tipo, mensagem) {
    const logs = document.querySelector(".logs-recentes");

    if (!logs) return;

    const agora = new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const novoLog = document.createElement("div");
    novoLog.classList.add("log-item");

    salvarLogParaRelatorio(tipo, mensagem, agora);

    let classeTipo = "info-log";

    if (tipo === "ALERTA") {
        classeTipo = "alerta-log";
    } else if (tipo === "ATENÇÃO") {
        classeTipo = "atencao-log";
    }

    novoLog.innerHTML = `
        <span class="hora">${agora}</span>
        <span class="${classeTipo}">${tipo}</span>
        <span class="mensagem">${mensagem}</span>
    `;

    const primeiroLog = logs.querySelector(".log-item");

    if (primeiroLog) {
        logs.insertBefore(novoLog, primeiroLog);
    }
}

// MUDANÇA NA TEMPERATURA SOMENTE UMA VEZ

const temperaturaJaExecutada =
    localStorage.getItem("temperaturaExecutadaSpaceShield");

if (!temperaturaJaExecutada) {

    setTimeout(() => {

        const temperatura = document.querySelector(
            ".telemetria-card:nth-child(4) strong"
        );

        const status = document.querySelector(".status");

        if (temperatura) {
            temperatura.textContent = "27.5";
        }

        if (status) {
            status.textContent = "ATENÇÃO";
            status.style.color = "#ff9900";
            status.style.background = "rgba(255,153,0,0.15)";
        }

        adicionarLog(
            "ATENÇÃO",
            "Temperatura elevada detectada: 27.5°C."
        );

    }, 20000);

    setTimeout(() => {

        const temperatura = document.querySelector(
            ".telemetria-card:nth-child(4) strong"
        );

        const status = document.querySelector(".status");

        if (temperatura) {
            temperatura.textContent = "23.8";
        }

        if (status) {
            status.textContent = "NOMINAL";
            status.style.color = "#00C853";
            status.style.background = "rgba(0,200,83,0.15)";
        }

        adicionarLog(
            "INFO",
            "Temperatura voltou para níveis normais."
        );

        localStorage.setItem(
            "temperaturaExecutadaSpaceShield",
            "true"
        );

    }, 40000);

}


// SINCRONIZAR LOGS COM RELATÓRIOS

function salvarLogParaRelatorio(tipo, mensagem, hora) {
    const log = {
        hora: hora,
        tipo: tipo,
        mensagem: mensagem
    };

    let logs = JSON.parse(localStorage.getItem("logsRelatorioSpaceShield")) || [];

    logs.unshift(log);

    logs = logs.slice(0, 6);

    localStorage.setItem("logsRelatorioSpaceShield", JSON.stringify(logs));
}

function carregarLogsNoRelatorio() {
    const tabela = document.querySelector(".tabela-eventos");

    if (!tabela) return;

    const logs = JSON.parse(localStorage.getItem("logsRelatorioSpaceShield")) || [];

    logs.forEach(log => {
        const linha = document.createElement("div");
        linha.classList.add("linha-evento");

        let classe = "info-texto";
        let status = "Registrado";

        if (log.tipo === "ALERTA") {
            classe = "risco-texto";
            status = "Crítico";
        } else if (log.tipo === "ATENÇÃO") {
            classe = "atencao-texto";
            status = "Observação";
        }

        linha.innerHTML = `
            <span>${log.hora}</span>
            <strong class="${classe}">${log.tipo}</strong>
            <span>${log.mensagem}</span>
            <span>${status}</span>
        `;

        const primeiraLinha = tabela.querySelector(".linha-evento:not(.cabecalho)");

        if (primeiraLinha) {
            tabela.insertBefore(linha, primeiraLinha);
        }
    });
}

carregarLogsNoRelatorio();

//  CARREGAR NO DASHBOARD
function carregarLogsNoDashboard() {
    const logsContainer = document.querySelector(".logs-recentes");

    if (!logsContainer) return;

    const logsSalvos =
        JSON.parse(localStorage.getItem("logsRelatorioSpaceShield")) || [];

    logsSalvos.forEach(log => {
        const novoLog = document.createElement("div");
        novoLog.classList.add("log-item");

        let classeTipo = "info-log";

        if (log.tipo === "ALERTA") {
            classeTipo = "alerta-log";
        } else if (log.tipo === "ATENÇÃO") {
            classeTipo = "atencao-log";
        }

        novoLog.innerHTML = `
            <span class="hora">${log.hora}</span>
            <span class="${classeTipo}">${log.tipo}</span>
            <span class="mensagem">${log.mensagem}</span>
        `;

        const primeiroLog = logsContainer.querySelector(".log-item");

        if (primeiroLog) {
            logsContainer.insertBefore(novoLog, primeiroLog);
        }
    });
}

carregarLogsNoDashboard();

// PLANEJAR MANOBRA

const btnManobra = document.getElementById("btn-planejar-manobra");

if (btnManobra) {

    btnManobra.addEventListener("click", () => {

        const confirmar = confirm(
            "Deseja executar uma manobra evasiva para evitar o OBJ-4821?"
        );

        if (confirmar) {

            btnManobra.textContent = "MANOBRA PLANEJADA";
            btnManobra.disabled = true;

            btnManobra.style.background = "#003a66";
            btnManobra.style.color = "#00C853";
            btnManobra.style.cursor = "default";

            alert("Manobra registrada com sucesso.");

        } else {

            alert("Operação cancelada pelo operador.");

        }

    });

}