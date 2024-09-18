const gerarQuadrado = async () => {
    const pokemonName = document.getElementById('nome').value.toLowerCase(); // Obtém o nome do Pokémon digitado
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`; 

    try {
        const response = await fetch(url); // Faz o pedido no API
        if (!response.ok) {
            throw new Error('Pokémon não encontrado!');
        }

        const pokemonData = await response.json(); // Converte a resposta para JSON
        displayPokemon(pokemonData);

    } catch (error) {
        console.error(error);
        alert('Pokémon não encontrado! Verifique o nome e tente novamente.');
    }
};

const displayPokemon = (pokemon) => {
    const container = document.getElementById('container');
    
    // Limpa qualquer conteúdo anterior no container
    container.innerHTML = '';

    // Cria o "quadrado" para exibir as informações do Pokémon
    const square = document.createElement('div');
    square.style.width = '100px';
    square.style.height = '100px';
    square.style.fontSize = '30px';
    square.style.justifyContent = 'center';
    
    // Cria e adiciona o nome do Pokémon
    const nameElement = document.createElement('h3');
    nameElement.textContent = `Nome: ${pokemon.name}`;
    square.appendChild(nameElement);

    // Cria e adiciona a imagem do Pokémon
    const imageElement = document.createElement('img');
    imageElement.src = pokemon.sprites.front_default;
    imageElement.alt = pokemon.name;
    imageElement.style.width = '50vh';
    square.appendChild(imageElement);

    // Cria e adiciona o tipo do Pokémon
    const typeElement = document.createElement('p');
    typeElement.textContent = `Tipo: ${pokemon.types.map(type => type.type.name).join(', ')}`;
    square.appendChild(typeElement);

    // Adiciona o quadrado ao container
    container.appendChild(square);
};