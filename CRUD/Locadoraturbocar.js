const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let IDcarro = 1;

let carros = [];
function mostrarMenu() {
    console.log("\n ===============");
    console.log("Locadora Turbo Car");
    console.log("===============");
    console.log(" === Carros ===");
    console.log("1- Cadastrar carro ");
    console.log("2- Listar carros ");
    console.log("3- Buscar carro por ID ");
    console.log("4- Atualizar carro ");
    console.log("5- Remover carro ");
    console.log("\n === Clientes ===");
    console.log("6- Cadastar cliente ");
    console.log("7- Listar clientes ");
    console.log("8- Buscar cliente por ID ");
    console.log("9- Atualizar cliente ");
    console.log("10- Remover cliente ");
    console.log("\n === Aluguel ===  ");
    console.log("11- Realizar aluguel ");
    console.log("12- Devolver carro ");
    console.log("13- Listar alugueis ativos ");
    console.log("14- Listar histórico ");
    console.log("15- Sair ");

    rl.question("Escolha uma opção: ", (opcao) => {

        switch (opcao) {
            case "1":
                cadastrarCarro();
                break;
            case "2":
                listarCarros();
                break;
            case "3":
                buscarCarroporID();
                break;
            case "4":
                atualizarCarro();
                break;
            case "5":
                removerCarro();
                break;

            case "6":
                cadastrarCliente();
                break;
            case "7":
                listarClientes();
                break;
            case "8":
                buscarClienteporID();
                break;
            case "9":
                atualizarCliente();
                break;
            case "10":
                removerCliente();
                break;
            case "11":
                realizarAluguel();
                break;
            case "12":
                devolverCarro();
                break;
            case "13":
                listarAlugueisativos();
                break;
            case "14":
                listarHistorico();
                break;
            case "15":
                sair();





        }


    })


}

function cadastrarCarro() {
    console.log(" Cadastrar carro ");
    rl.question("Digite o modelo do carro:  ", (modelo) => {
        rl.question("Digite a placa do carro (ex.: ABC-1234) : ", (placa) => {
            rl.question("Digite o ano do carro: ", (ano) => {
                rl.question("Digite o preço por dia do aluguel:  ", (preco) => {
                    ano = Number(ano);
                    preco = Number(preco);
                    



                    let carro = {
                        id: IDcarro,
                        modelo: modelo,
                        placa: placa,
                        ano: ano,
                        preco: preco,
                        disponivel: true
                    };
                    carros.push(carro);
                    IDcarro++;

                    if (modelo === "" || placa === "" || ano === "" || preco === "") {
                        console.log("ERRO , não foram preenchidas todas as informações");
                        mostrarMenu();
                        return;
                    }

                    if (preco < 0 || ano < 1885) {
                        console.log("Preço ou Ano inválido");
                        mostrarMenu();
                        return;
                    }

                    console.log("Carro cadastrado com sucesso");
                    mostrarMenu();



                })

            })

        })

    })

}

function listarCarros() {
    console.log("Listar carros");
    if (carros.length === 0) {
        console.log("Nenhum carro cadastrado ");
        mostrarMenu();
        return;
    }
    for (i = 0; i < carros.length; i++) {
        console.log("ID do carro: ", carros[i].id);
        console.log("Modelo do carro: ", carros[i].modelo);
        console.log("Placa do carro: ", carros[i].placa);
        console.log("Ano do carro: ", carros[i].ano);
        console.log("Preço do aluguel por dia: ", carros[i].preco);
        if (carros[i].disponivel === true) {
            console.log("Disponivel")
        }
        else {
            console.log(" Não disponível");

        }


    }
    mostrarMenu();


}
function buscarCarroporID() {
    console.log("Buscar carro por ID");
    rl.question("Digite o id do carro: ", (IDcarro) => {
        let id = Number(IDcarro);
        let carro = encontrarCarroporID(id);
        if (carro === null) {
            console.log("Carro não encontrado");
            mostrarMenu();
            return;
        }
        console.log("Carro encontrado");
        console.log("id do carro: ", carro.id);
        console.log("Modelo do carro: ", carro.modelo);
        console.log("Placa do carro: ", carro.placa);
        console.log("Ano do carro: ", carro.ano);
        console.log("Preço do aluguel por dia do carro: ", carro.preco);
        if (carro.disponivel === true) {
            console.log("Disponível");
        }
        else {
            console.log(" Não disponível ");
        }
        mostrarMenu();


    })


}

function encontrarCarroporID(id) {
    for (i = 0; i < carros.length; i++) {
        if (carros[i].id === id) {
            return carros[i];
        }
        return null;
    }

}

function atualizarCarro() {
    console.log("Atualizar aluno");
    rl.question("Digite o id do carro: ", IDcarro => {
        id = Number(IDcarro);
        let carro = encontrarCarroporID(id);
        if (carro === null) {
            console.log("Carro não encontrado");
            mostrarMenu();
            return;
        }
        rl.question("Digite o novo modelo : ", (novoModelo) => {
            rl.question("Digite a nova placa : ", (novaPlaca) => {
                rlquestion("Digite o novo ano : ", (novoAno) => {
                    rl.question("Digite o novo preço do aluguel por dia : ", (novoPreco) => {
                        novoAno = Number(novoAno);
                        novoPreco = Number(novoPreco);
                        if (novoModelo === "" || novaPlaca === "" || novoAno === "" || novoPreco === "") {
                            console.log("Não foram preenchidos todos os dados");
                            mostrarMenu();
                            return;
                        }
                        if (novoAno < 1885 || novoPreco <= 0) {
                            console.log("Ano ou preço inválido");
                            mostrarMenu();
                            return;
                        }




                        carro.modelo = novoModelo;
                        carro.placa = novaPlaca;
                        carro.ano = novoAno;
                        carro.preco = novoPreco;

                        console.log("Carro atualizado com sucesso");
                        mostrarMenu();

                    })


                })

            })
        })

    })

}
function removerCarro() {
    console.log("Remover carro");
    rl.question("Digite o id do carro: ", id => {


        let carro = encontrarCarroporID(id);
        if (carro === null) {
            console.log("Carro não encontrado");
            mostrarMenu();
            return;

        }
        for (i = 0; i < carros.length; i++) {
            if (carros[i].id === id) {
                carros.spĺice(i, 1);

            }

        }
        console.log("Carro removido: ", carro);
        mostrarMenu();
        return;
    })

}

// ========== Cliente ============= 

let IDcliente = 1;
let clientes = [];


function cadastrarCliente() {
    console.log("Cadastrar cliente");
    rl.question("Digite o nome do cliente: ", (nome) => {
        rl.question("Digite o cpf do cliente: ", (cpf) => {
            rl.question("Digite o telefone do cliente: ", (telefone) => {

                let cliente = {
                    id: IDcliente,
                    nome: nome,
                    cpf: cpf,
                    telefone: telefone
                }
                clientes.push(cliente);
                IDcliente++;
                if (nome === "" || cpf === "" || telfone === "") {
                    console.log("Não foram digitados todos os dados ");
                    mostrarMenu();
                    return;
                }

                console.log("Cliente cadastrado com sucesso ");
                mostrarMenu();





            })

        })
    })
}
function listarClientes() {
    console.log("Listar clientes ");
    if (carros.length === 0) {
        console.log("Nenhum cliente cadastrado");
        mostrarMenu();
        return;
    }
    for (let i = 0; i < clientes.length; i++) {

        console.log("Nome: ", clientes[i].nome);
        console.log("ID", clientes[i].id);
        console.log("CPF: ", clientes[i].cpf);
        console.log("Telefone: ", clientes[i].telefone);
    }
    mostrarMenu();
}
function buscarClienteporID() {
    console.log("Buscar cliente por id: ");
    let cliente = encontrarClienteporID(id);
    if (cliente === null) {
        console.log("Cliente não encontrado");

    }
    console.log("Nome: ", cliente.nome);
    console.log("Id: ", cliente.id);
    console.log("Cpf: ", cliente.cpf);
    console.log("Telefone: ", cliente.telefone);

    mostrarMenu();






}
function encontrarClienteporID(id) {

    for (i = 0; i < clientes.length; i++) {
        if (clientes[i].id === id) {
            return clientes[i];
        }
        return null;
    }
}

function atualizarCliente() {
    console.log(" Atualizar cliente");
    rl.question("Digite o id do cliente: ", (IDcliente) => {
        id = Number(IDcliente);
        let cliente = encontrarClienteporID(id);
        if (cliente === null) {
            console.log("Cliente não cadastrado");
            mostrarMenu();
            return;
        }
        rl.question("Digite o novo nome: ", (novoNome) => {
            rl.question("Digite o novo cpf: ", (novoCpf) => {
                rl.question("Digite o novo número: ", (novoTelefone) => {

                    if (novoNome === "" || novoCpf === "" || novoTelefone === "") {
                        console.log("Não foram colocados todos os dados");
                        mostrarMenu();
                        return;
                    }
                    cliente.nome = novoNome;
                    cliente.cpf = novoCpf;
                    cliente.telefone = novoTelefone;
                    console.log("Cliente atualizado com sucesso");
                    mostrarMenu();
                    return;


                })
            })
        })




    })
}
function removerCliente() {
    console.log("Remover cliente");
    rl.question("Digite o id do cliente: ", id => {
        let cliente = encontrarClienteporID(id);
        if (cliente === null) {
            console.log("Cliente não encontrado");
            mostrarMenu();
            return;

        }
        for (i = 0; i < clientes.length; i++) {
            if (clientes[i].length === id) {
                clientes.splice(i, 1);


            }

        }
        console.log("Cliente removido: ", carro);
        mostrarMenu();
        return;




    })



}

//  ========== Aluguel =========== 


mostrarMenu();
