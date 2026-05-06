async function sigma() {
    const destino = document.getElementById('destino');
    
    try{
        const response = await fetch('produtos.json');
        if (!response.ok) throw new Error('Falha ao carregar dados');
        const sigmas = await response.json();
        destino.innerHTML = '';
        sigmas.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="imagem/${item.imagem}" alt = "Foto de ${item.nome}">
                <h3></h3>
                <p></p>
                <a href="${item.endereco}">
                 <button type="button">Saiba mais </button>
                </a>
            `;
            card.querySelector('h3').textContent = item.nome;
            card.querySelector('p').textContent = item.descricao;

            destino.appendChild(card);
        });
    }catch (error){
        console.error('Erro na requisição:', error);
        destino.innerHTML = `<p>Desculpe, não foi possível carregar as informações no momento.</p>`;
    }
}