import './Category.css'

export default function Category(){
    return(
        <div className="categorias-container">
            <h2 className="categorias-titulo">Categorias</h2>
            
            <div className="categoria-grupo">
                <h3>📱 Eletrônicos</h3>
                <ul>
                    <li>Smartphones</li>
                    <li>Notebooks</li>
                    <li>Tablets</li>
                    <li>Wearables</li>
                    <li>Áudio</li>
                    <li>Câmeras</li>
                    <li>Consoles</li>
                    <li>Monitores</li>
                    <li>Periféricos</li>
                    <li>Componentes</li>
                    <li>TVs</li>
                    <li>Redes</li>
                    <li>Drones</li>
                    <li>Impressoras</li>
                </ul>
            </div>

            <div className="categoria-grupo">
                <h3>👕 Roupas</h3>
                <ul>
                    <li>Camisetas</li>
                    <li>Calças</li>
                    <li>Camisas</li>
                    <li>Casacos</li>
                    <li>Bermudas</li>
                    <li>Vestidos</li>
                    <li>Saias</li>
                    <li>Blazers</li>
                </ul>
            </div>

            <div className="categoria-grupo">
                <h3>📚 Livros</h3>
                <ul>
                    <li>Programação</li>
                    <li>Design</li>
                    <li>Negócios</li>
                    <li>Literatura</li>
                    <li>Desenvolvimento Pessoal</li>
                </ul>
            </div>

            <div className="categoria-grupo">
                <h3>👟 Calçados</h3>
                <ul>
                    <li>Tênis Esportivos</li>
                    <li>Tênis Casual</li>
                    <li>Sapatos Sociais</li>
                    <li>Sandálias</li>
                    <li>Botas</li>
                    <li>Sapatilhas</li>
                    <li>Scarpins</li>
                    <li>Chinelos</li>
                </ul>
            </div>

            <div className="categoria-grupo">
                <h3>🍳 Eletrodomésticos</h3>
                <ul>
                    <li>Eletroportáteis</li>
                    <li>Eletrodomésticos</li>
                </ul>
            </div>

            <div className="categoria-grupo">
                <h3>🪑 Móveis</h3>
                <ul>
                    <li>Móveis Escritório</li>
                    <li>Móveis (Cadeiras)</li>
                </ul>
            </div>

            <div className="categoria-grupo">
                <h3>🏠 Casa e Cozinha</h3>
                <ul>
                    <li>Utensílios Cozinha</li>
                    <li>Cama, Mesa e Banho</li>
                </ul>
            </div>

            <div className="categoria-grupo">
                <h3>🎒 Acessórios</h3>
                <ul>
                    <li>Bolsas e Mochilas</li>
                </ul>
            </div>

            <div className="categoria-grupo">
                <h3>💄 Beleza</h3>
                <ul>
                    <li>Maquiagem</li>
                </ul>
            </div>
        </div>
    )
}