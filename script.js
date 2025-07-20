// Criando um array para a lista de clientes

let listaClientes = [];

document.getElementById("cadastrar").addEventListener("click", function (event) {
    event.preventDefault(); // Impede envio do formulário pois recarrega a página; botão submit possui essa função no padrão

    // grava os valores dos inputs pelo ID que está no html
    let nome = document.getElementById("nome").value;
    let cep = document.getElementById("cep").value;
    let logradouro = document.getElementById("logradouro").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let uf = document.getElementById("UF").value;
    let email = document.getElementById("email").value;
    let celular = document.getElementById("celular").value;


    // Criação do objeto cliente
    let cliente = {
        nome: nome,
        cep: cep,
        logradouro: logradouro,
        bairro: bairro,
        cidade: cidade,
        uf: uf,
        email: email,
        celular: celular
    };

    // Adiciona o cliente na lista - lembrar do git
    listaClientes.push(cliente);

    // Mostra a confirmação de cadastro concluído
    console.log("Cliente cadastrado com sucesso:");
    console.log(cliente);

    // Limpa o formulário
    document.querySelector("form").reset();

});

// Retornando a lista de clientes cadastrados ao apertar o botão "base de cadastros"
document.getElementById("base").addEventListener("click", function () {
    if (listaClientes.length === 0) {
        console.log("Nenhum cliente cadastrado ainda.");
    } else {
        console.log("Lista de clientes cadastrados:");
        for (let i = 0; i < listaClientes.length; i++) {
            console.log(`Cliente ${i + 1}:`);
            console.log(listaClientes[i]);
        }
    }
});
