let cep = prompt("Por favor, insira o CEP:");

fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
        console.log(`Endereço: ${data.logradouro}`);
        console.log(`Bairro: ${data.bairro}`);
        console.log(`Cidade: ${data.localidade}`);
        console.log(`Estado: ${data.uf}`);
    })
    .catch(error => console.error('Erro ao buscar CEP:', error));
