/* --- Variáveis de Cores (Tons de Verde e Branco) --- */
:root {
    --verde-escuro: #1b4332;
    --verde-principal: #2d6a4f;
    --verde-medio: #40916c;
    --verde-claro: #52b788;
    --verde-menta: #74c69d;
    --verde-fundo: #f4f9f6;
    --branco: #ffffff;
    --texto-escuro: #212529;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: var(--verde-fundo);
    color: var(--texto-escuro);
    line-height: 1.6;
}

/* --- Header --- */
header {
    background: linear-gradient(135deg, var(--verde-escuro), var(--verde-principal));
    color: var(--branco);
    padding: 3rem 1rem;
    text-align: center;
    border-bottom: 5px solid var(--verde-claro);
}

.header-container h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
}

.header-container h1 span {
    color: var(--verde-menta);
}

/* --- Layout Geral --- */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

/* --- Filtros / Ranqueamento --- */
.filter-section {
    background-color: var(--branco);
    padding: 1.5rem;
    border-radius: 8px;
    border-left: 5px solid var(--verde-medio);
    margin-bottom: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.filter-section h2 {
    color: var(--verde-escuro);
    margin-bottom: 0.5rem;
}

.buttons-container {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
}

.btn {
    background-color: var(--branco);
    color: var(--verde-principal);
    border: 2px solid var(--verde-principal);
    padding: 0.6rem 1.2rem;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn:hover, .btn.active {
    background-color: var(--verde-principal);
    color: var(--branco);
}

/* --- Grid de Dinossauros --- */
.dino-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}

/* --- Card de Dinossauro --- */
.dino-card {
    background-color: var(--branco);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    position: relative;
    transition: transform 0.3s ease;
}

.dino-card:hover {
    transform: translateY(-5px);
}

/* Badge de Ranque */
.rank-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: var(--verde-escuro);
    color: var(--branco);
    padding: 0.3rem 0.8rem;
    font-weight: bold;
    border-radius: 20px;
    font-size: 0.9rem;
    border: 1px solid var(--verde-menta);
}

.dino-info {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.dino-info h3 {
    color: var(--verde-escuro);
    font-size: 1.5rem;
    margin-bottom: 0.2rem;
}

.especie-cientifica {
    font-style: italic;
    color: var(--verde-medio);
    margin-bottom: 1rem;
    font-size: 0.95rem;
}

.dino-stats {
    background-color: var(--verde-fundo);
    padding: 0.8rem;
    border-radius: 6px;
    margin-bottom: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.03);
}

.dino-stats p {
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
}

.dino-stats p:last-child {
    margin-bottom: 0;
}

.dino-description {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    flex-grow: 1;
}

/* Fontes Arqueológicas */
.dino-sources {
    border-top: 1px solid #edf2f0;
    padding-top: 1rem;
}

.dino-sources h4 {
    font-size: 0.85rem;
    color: var(--verde-principal);
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    letter-spacing: 0.5px;
}

.dino-sources ul {
    list-style: none;
}

.dino-sources li {
    font-size: 0.85rem;
    margin-bottom: 0.3rem;
}

.dino-sources a {
    color: var(--verde-medio);
    text-decoration: none;
    transition: color 0.2s;
}

.dino-sources a:hover {
    color: var(--verde-escuro);
    text-decoration: underline;
}

/* --- Footer --- */
footer {
    background-color: var(--verde-escuro);
    color: var(--branco);
    text-align: center;
    padding: 1.5rem;
    margin-top: 4rem;
    font-size: 0.9rem;
}
