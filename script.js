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

    // Validação do CEP: deve ter no máximo 8 dígitos
    if (cep.length !== 8) {
        alert("O campo CEP deve conter 8 dígitos.");
        return; // Para a execução do cadastro
    }

    // Validação do celular: deve ter no máximo 11 dígitos
    if (celular.length > 11) {
        alert("O campo Celular deve ter 11 dígitos.");
        return;
    }
    else if (celular.length < 11) {
        alert("O campo Celular deve ter 11 dígitos.");
        return;
    }


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
    alert("Cliente cadastrado com sucesso")

    // Limpa o formulário
    document.querySelector("form").reset();

});

// Função que atualiza a tabela com os clientes cadastrados
document.getElementById("base").addEventListener("click", function () {
    const tabela = document.getElementById("tabelaClientes");
    const corpoTabela = document.querySelector("#tabelaClientes tbody");

    if (listaClientes.length === 0) {
        alert("Nenhum cliente cadastrado ainda.");
        tabela.style.display = "none";
    } else {
        // Limpa a tabela antes de preencher
        corpoTabela.innerHTML = "";

        // Percorre a lista de clientes cadastrados
        for (let i = 0; i < listaClientes.length; i++) {
            const cliente = listaClientes[i];

            // Cria uma nova linha na tabela
            let linha = document.createElement("tr");

            // Preenche as colunas da linha com os dados do cliente
            linha.innerHTML =
                "<td>" + cliente.nome + "</td>" +
                "<td>" + cliente.cep + "</td>" +
                "<td>" + cliente.logradouro + "</td>" +
                "<td>" + cliente.bairro + "</td>" +
                "<td>" + cliente.cidade + "</td>" +
                "<td>" + cliente.uf + "</td>" +
                "<td>" + cliente.email + "</td>" +
                "<td>" + cliente.celular + "</td>";

            // Adiciona a linha ao corpo da tabela
            corpoTabela.appendChild(linha);
        }
        // Mostra a tabela
        tabela.style.display = "table";
    }

});

// // Retornando a lista de clientes cadastrados ao apertar o botão "base de cadastros"
// document.getElementById("base").addEventListener("click", function () {
//     if (listaClientes.length === 0) {
//         console.log("Nenhum cliente cadastrado ainda.");
//     } else {
//         console.log("Lista de clientes cadastrados:");
//         for (let i = 0; i < listaClientes.length; i++) {
//             console.log(`Cliente ${i + 1}:`);
//             console.log(listaClientes[i]);
//         }
//     }
// });
