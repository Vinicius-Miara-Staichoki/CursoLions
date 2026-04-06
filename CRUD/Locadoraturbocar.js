const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let IDcarro = 1;

let carros = [];

function mostrarMenu() {
    console.log("\n===============");
    console.log("Locadora Turbo Car");
    console.log("===============");
    console.log(" === Carros ===");
    console.log("1- Cadastrar carro ");
    console.log("2- Listar carros ");
    console.log("3- Listar carros disponíveis");
    console.log("4- Listar carros indisponiveis");
    console.log("5- Buscar carro por ID ");
    console.log("6- Buscar carro por placa");
    console.log("7-Estoque");
    console.log("8- Atualizar carro ");
    console.log("9- Remover carro ");
    console.log("\n === Clientes ===");
    console.log("10- Cadastar cliente ");
    console.log("11- Listar clientes ");
    console.log("12- Buscar cliente por ID ");
    console.log("13-Buscar cliente por CPF ");
    console.log("14- Atualizar cliente ");
    console.log("15- Remover cliente ");
    console.log("\n === Aluguel ===  ");
    console.log("16- Realizar aluguel ");
    console.log("17- Devolver carro ");
    console.log("18- Listar alugueis ativos ");
    console.log("19- Listar histórico ");
    console.log("20- Relatório geral ");
    console.log("0- Sair ");

    rl.question("Escolha uma opção: ", (opcao) => {

        switch (opcao) {
            case "1":
                cadastrarCarro();
                break;
            case "2":
                listarCarros();
                break;
            case "3":
                listarCarrosdisponiveis();
                break;
            case "4":
                listarCarrosindisponiveis();
                break;
            case "5":
                buscarCarroporID();
                break;
            case "6":
                buscarCarroporPlaca();
                break;
            case "7":
                estoque();
                break;
            case "8":
                atualizarCarro();
                break;
            case "9":
                removerCarro();
                break;

            case "10":
                cadastrarCliente();
                break;
            case "11":
                listarClientes();
                break;
            case "12":
                buscarClienteporID();
                break;
            case "13":
                buscarClienteporCPF();
                break;
            case "14":
                atualizarCliente();
                break;
            case "15":
                removerCliente();
                break;
            case "16":
                realizarAluguel();
                break;
            case "17":
                devolverCarro();
                break;
            case "18":
                listarAlugueisativos();
                break;
            case "19":
                listarHistorico();
                break;
            case "20":
                relatorioGeral();
                break;
            case "0":
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

                    for (i = 0; i < carros.length; i++) {
                        if (carros[i].placa === placa) {
                            console.log("Placa já cadastrada");
                            mostrarMenu();
                            return;
                        }
                    }

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

                    if (carro.preco < 0 || carro.ano < 1885) {
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

function listarCarrosdisponiveis() {
    console.log("Lista de carros disponíveis");
    for (i = 0; i < carros.length; i++) {
        if (carros[i].disponivel === true) {
            console.log(carros[i]);
        }
    }
    mostrarMenu();
}
function listarCarrosindisponiveis() {
    console.log("Lista de carros indisponíveis");
    for (i = 0; i < carros.length; i++) {
        if (carros[i].disponivel === false) {
            console.log(carros[i]);
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

function buscarCarroporPlaca() {
    console.log("Buscar carro por placa");
    rl.question("Digite a placa do carro: ", (Placa) => {
        for (i = 0; i < carros.length; i++) {
            if (carros[i].placa === Placa) {
                let carro = carros[i];
                console.log(carro);
                mostrarMenu();
                break;
            }
            else {
                console.log("Placa não cadastrada");
                mostrarMenu();
                return;
            }
        }

    })

}
function estoque() {
    console.log("Estoque");

    console.log("Total de carros: ", carros.length);
    console.log("===== Carros disponíveis ====");
    for (i = 0; i < carros.length; i++) {
        if (carros[i].disponivel === true) {
            console.log(carros[i]);
        }
    }

    console.log("\n==== Carros alugados ====");
    for (i = 0; i < carros.length; i++) {
        if (carros[i].disponivel === false) {
            console.log(carros[i]);
        }
    }

    mostrarMenu();
}
function encontrarCarroporID(id) {
    for (i = 0; i < carros.length; i++) {
        if (carros[i].id === id) {
            return carros[i];
        }
    }
    return null;

}

function atualizarCarro() {
    console.log("Atualizar carro");
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
                rl.question("Digite o novo ano : ", (novoAno) => {
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
    rl.question("Digite o id do carro: ", (id) => {
        id = Number(id);
        let carro = encontrarCarroporID(id);
        if (carro === null) {
            console.log("Carro não encontrado");
            mostrarMenu();
            return;
        }

        if (carro.disponivel === false) {
            console.log("Carro não pode ser removido, está alugado");
            mostrarMenu();
            return;
        }
        for (i = 0; i < carros.length; i++) {

            if (carros[i].id === id) {

                carros.splice(i, 1);

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
                cpf = Number(cpf);
                telefone = Number(telefone);

                if (nome === "" || cpf === "" || telefone === "") {
                    console.log("Não foram digitados todos os dados ");
                    mostrarMenu();
                    return;
                }

                for (i = 0; i < clientes.length; i++) {
                    if (clientes[i].cpf === cpf) {
                        console.log("CPF já cadastrado");
                        mostrarMenu();
                        return;
                    }
                }
                let cliente = {
                    id: IDcliente,
                    nome: nome,
                    cpf: cpf,
                    telefone: telefone
                }

                clientes.push(cliente);
                IDcliente++;

                console.log("Cliente cadastrado com sucesso ");
                mostrarMenu();

            })

        })
    })
}
function listarClientes() {
    console.log("Listar clientes ");
    console.log("Total de clientes: ", clientes.length);
    if (clientes.length === 0) {
        console.log("Nenhum cliente cadastrado");
        mostrarMenu();
        return;
    }
    for (let i = 0; i < clientes.length; i++) {

        console.log("Nome: ", clientes[i].nome);
        console.log("ID: ", clientes[i].id);
        console.log("CPF: ", clientes[i].cpf);
        console.log("Telefone: ", clientes[i].telefone);
    }
    mostrarMenu();
}
function buscarClienteporID() {
    console.log("Buscar cliente por id: ");
    rl.question("Digite o id do cliente: ", (id) => {
        id = Number(id);
        let cliente = encontrarClienteporID(id);
        if (cliente === null) {
            console.log("Cliente não encontrado");
            mostrarMenu();
            return;

        }
        console.log("Nome: ", cliente.nome);
        console.log("Id: ", cliente.id);
        console.log("Cpf: ", cliente.cpf);
        console.log("Telefone: ", cliente.telefone);

        mostrarMenu();
    })
}
function buscarClienteporCPF() {
    console.log("Busca de cliente por CPF");
    rl.question("Digite o CPF do cliente: ", (CPF) => {
        CPF = Number(CPF);
        let cliente = 0;

        for (i = 0; i < clientes.length; i++) {
            if (clientes[i].cpf === CPF) {
                cliente = clientes[i];
                console.log(cliente);
                mostrarMenu();
                break;

            }
            else {
                console.log("CPF não cadastrado");
                mostrarMenu();
                return;
            }

        }

    })

}
function encontrarClienteporID(id) {

    for (i = 0; i < clientes.length; i++) {
        if (clientes[i].id === id) {
            return clientes[i];
        }
    }
    return null;
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
                    novoCpf = Number(novoCpf);
                    novoTelefone = Number(novoTelefone);

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
        id = Number(id);
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
        console.log("Cliente removido: ", cliente);
        mostrarMenu();
        return;

    })

}

//  ========== Aluguel =========== 
let IDaluguel = 1;
let alugueisAtivos = [];
let alugueisFinalizados = [];
IDaluguel = Number(IDaluguel);
let status = "ativo";




function realizarAluguel() {

    console.log("Realizar aluguel ");
    rl.question("Digite o id do cliente : ", (idCliente) => {
        rl.question("Digite o id do carro : ", (idCarro) => {
            rl.question("Digite o número de dias do aluguel : ", (dias) => {

                idCliente = Number(idCliente);
                idCarro = Number(idCarro);
                dias = Number(dias);
                let carro = encontrarCarroporID(idCarro);

                let cliente = encontrarClienteporID(idCliente);
                let total = 0;
                total = dias * carro.preco;

                if (idCliente === "" || cliente === null) {
                    console.log("Cliente não encontrado");
                    mostrarMenu();
                    return;
                }

                if (idCarro === "" || carro === null) {
                    console.log("Carro não encontrado");
                    mostrarMenu();
                    return;
                }

                if (carro.disponivel === false) {
                    console.log("Carro não disponível");
                    mostrarMenu();
                    return;
                }

                let aluguel = {
                    idAluguel: IDaluguel,
                    idCliente: idCliente,
                    idCarro: idCarro,
                    dias: dias,
                    total: total,
                    disponivel: carro.disponivel,
                    status: status

                }
                aluguel.total = Number(total);
                alugueisAtivos.push(aluguel);

                aluguel.disponivel = false;
                carro.disponivel = false;

                IDaluguel++;

                console.log("Aluguel cadastrado com sucesso");
                mostrarMenu();

            })

        })

    })

}

function devolverCarro() {
    console.log("Devolver carro ");
    rl.question("Digite o id do aluguel: ", (IDAluguel) => {
        IDAluguel = Number(IDAluguel);

        if (alugueisAtivos.length === 0) {
            console.log("Nenhum aluguel ativo");
            mostrarMenu();
        }

        for (i = 0; i < alugueisAtivos.length; i++) {

            if (alugueisAtivos[i].idAluguel === IDAluguel) {

                let aluguel = alugueisAtivos[i];
                let carro = encontrarCarroporID(aluguel.idCarro);

                aluguel.disponivel = true;
                carro.disponivel = true;
                aluguel.status = "finalizado"
                alugueisFinalizados.push(aluguel);
                alugueisAtivos.splice(i, 1);
                console.log("Carro devolvido");
                mostrarMenu();

            }
        }

    })

}

function listarAlugueisativos() {
    console.log("Listar alugueis ativos");
    let totalAberto = 0;
    if (alugueisAtivos.length === 0) {
        console.log("Nenhum aluguel ativo");
        mostrarMenu();
        return;

    }
    for (i = 0; i < alugueisAtivos.length; i++) {
        console.log(alugueisAtivos[i]);
        let totalA = alugueisAtivos[i].total;
        totalA = Number(totalA);
        totalAberto = totalAberto + totalA;
    }
    console.log("Valor total em aberto: ", totalAberto);

    mostrarMenu();

}

function listarHistorico() {
    console.log("\n=== Histórico de alugueis === ");

    console.log("=== Alugueis ativos === ");
    if (alugueisAtivos.length === 0) {
        console.log("Nenhum aluguel ativo\n");
    }

    else {
        for (i = 0; i < alugueisAtivos.length; i++) {
            console.log(alugueisAtivos[i]);

        }

    }
    console.log("=====================");
    console.log("=== Alugueis finalizados ===");

    if (alugueisFinalizados.length === 0) {
        console.log("Nenhum aluguel finalizado");

    }

    else {
        for (i = 0; i < alugueisFinalizados.length; i++) {
            console.log(alugueisFinalizados[i]);

        }
    }
    mostrarMenu();

}
function relatorioGeral() {
    console.log("Relatório geral");
    let totalFechado = 0;

    console.log(carros);
    console.log(clientes);
    console.log("=== Alugueis ativos ===");
    console.log(alugueisAtivos);
    console.log("=== Alugueis finalizados === ");
    console.log(alugueisFinalizados);

    for (i = 0; i < alugueisFinalizados.length; i++) {
        let totalb = alugueisFinalizados[i].total;
        totalb = Number(totalb);
        totalFechado = totalb + totalFechado;

    }
    console.log("Faturamento: ", totalFechado);
    mostrarMenu();

}

function sair() {
    rl.close();
}


mostrarMenu();

