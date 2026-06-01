// Base de Dados das Raças com notas de 1 a 100 para cálculo de performance
const racasCavalos = [
    {
        nome: "Puro Sangue Inglês",
        origem: "Inglaterra",
        descricao: "O soberano incontestável das pistas de corrida. Desenvolvido especificamente para velocidade sustentada e agilidade de alto nível.",
        velocidade: 100,
        pureza: 95,
        preco: 98, // Representa o teto de preço do mercado
        precoTexto: "Até U$ 64 Milhões (Histórico)",
    },
    {
        nome: "Cavalo Árabe",
        origem: "Oriente Médio",
        descricao: "Uma das raças mais antigas e puras do mundo. Conhecido por sua resistência incomparável no deserto, inteligência e silhueta icônica.",
        velocidade: 85,
        pureza: 100, // Máxima pureza genética registrada há milênios
        preco: 90,
        precoTexto: "U$ 25.000 a U$ 1 Milhão+",
    },
    {
        nome: "Quarto de Milha",
        origem: "Estados Unidos",
        descricao: "O cavalo mais rápido do mundo em distâncias curtas (um quarto de milha). Extremamente versátil, musculoso e dócil.",
        velocidade: 95,
        pureza: 88,
        preco: 85,
        precoTexto: "U$ 10.000 a U$ 150.000",
    },
    {
        nome: "Frísio (Friesian)",
        origem: "Holanda",
        descricao: "Famoso por sua pelagem preta brilhante e postura imponente. Brilha no adestramento clássico (Dressage) e exibe alta pureza europeia.",
        velocidade: 70,
        pureza: 92,
        preco: 88,
        precoTexto: "U$ 15.000 a U$ 100.000",
    },
    {
        nome: "Puro Sangue Lusitano",
        origem: "Portugal",
        descricao: "Altamente elogiado por sua coragem e flexibilidade. Dominante histórico em combates, montaria de alta escola e adestramento olímpico.",
        velocidade: 78,
        pureza: 96,
        preco: 87,
        precoTexto: "U$ 15.000 a U$ 200.000",
    }
];

// Elementos da página
const horseGrid = document.getElementById('horse-grid');
const botoes = document.querySelectorAll('.btn');

// Função auxiliar para calcular o Desempenho Geral (Média Ponderada)
function calcularGeral(cavalo) {
    // 40% peso para corrida, 30% pureza, 30% valor de mercado
    return Math.round((cavalo.velocidade * 0.4) + (cavalo.pureza * 0.3) + (cavalo.preco * 0.3));
}

// Função para renderizar os cards na tela
function renderizarCavalos(lista, criterioAtivo) {
    horseGrid.innerHTML = ""; // Limpar grid

    lista.forEach((cavalo, index) => {
        const card = document.createElement('article');
        card.className = 'horse-card';

        // Determinar o valor de exibição do critério em destaque
        let destaqueValor = "";
        if (criterioAtivo === 'geral') destaqueValor = `${calcularGeral(cavalo)} pts`;
        else if (criterioAtivo === 'velocidade') destaqueValor = `${cavalo.velocidade}/100`;
        else if (criterioAtivo === 'pureza') destaqueValor = `${cavalo.pureza}/100`;
        else if (criterioAtivo === 'preco') destaqueValor = "Top Premium";

        card.innerHTML = `
            <div class="rank-medal">#${index + 1}</div>
            <div class="horse-content">
                <h3>${cavalo.nome}</h3>
                <div class="origin-tag">Origem: ${cavalo.origem}</div>
                <p class="description">${cavalo.descricao}</p>
                
                <div class="metrics-box">
                    <div class="metric-row">
                        <span class="metric-label">Velocidade (Corrida):</span>
                        <span class="metric-value">${cavalo.velocidade} pts</span>
                    </div>
                    <div class="metric-row">
                        <span class="metric-label">Pureza de Linhagem:</span>
                        <span class="metric-value">${cavalo.pureza} pts</span>
                    </div>
                    <div class="metric-row">
                        <span class="metric-label">Valor de Mercado:</span>
                        <span class="metric-value highlight">${cavalo.precoTexto}</span>
                    </div>
                    <div class="metric-row">
                        <span class="metric-label">Desempenho Geral:</span>
                        <span class="metric-value" style="color:var(--dourado)">${calcularGeral(cavalo)} pts</span>
                    </div>
                </div>
            </div>
        `;
        horseGrid.appendChild(card);
    });
}

// Função de ordenação
function ordenarCavalos(criterio) {
    let copiaLista = [...racasCavalos];

    if (criterio === 'geral') {
        copiaLista.sort((a, b) => calcularGeral(b) - calcularGeral(a));
    } else {
        // Ordena diretamente pela propriedade do objeto (velocidade, pureza ou preco)
        copiaLista.sort((a, b) => b[criterio] - a[criterio]);
    }

    renderizarCavalos(copiaLista, criterio);
}

// Configuração dos Event Listeners nos botões
botoes.forEach(botao => {
    botao.addEventListener('click', (e) => {
        // Remover classe ativa de todos
        botoes.forEach(b => b.classList.remove('active'));
        // Adicionar ao botão clicado
        e.target.classList.add('active');

        // Identificar critério a partir do ID do botão
        const id = e.target.id;
        const criterio = id.replace('btn-', ''); // Ex: 'btn-velocidade' vira 'velocidade'
        
        ordenarCavalos(criterio);
    });
});

// Inicialização padrão (Ao carregar o site, ordena por Desempenho Geral)
document.addEventListener('DOMContentLoaded', () => {
    ordenarCavalos('geral');
});
