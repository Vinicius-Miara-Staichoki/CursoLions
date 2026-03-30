const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let proximoID = 1;

let alunos = [];


function mostrarMenu() {
    console.log("\n===================")
    console.log(" SISTEMA ESCOLAR ")
    console.log("===================")
    console.log("1- Cadastrar aluno ")
    console.log("2- Listar Aluno ")
    console.log("3- Buscar por ID  ")
    console.log("4- Atualizar Aluno ")
    console.log("5- Remover Aluno ")
    console.log("6- Mostrar Alunos Aprovados ")
    console.log("7- Mostrar Alunos Reprovados")
    console.log("0- Sair ")
    console.log("===================")

    rl.question("Escolha um opção: ", (opcao) => {
        if (opcao === "1") {
            cadastrarAluno();
        }
        else if (opcao === "2") {
            listarAluno();
        }
        else if (opcao === "3") {
            buscarAlunoporID();
        }
    })
}
function cadastrarAluno() {
    console.log("Cadatrar Aluno");

    rl.question("Digite o nome do aluno : ", (nome) => {
        rl.question("Digite a idade :  ", (idade) => {
            rl.question("Digite a turma do aluno : ", (turma) => {
                rl.question("Digite a nota do aluno: ", (nota) => {

                    idade = Number(idade);
                    nota = Number(nota);

                    if (nome === "" || idade === "" || turma === "" || nota === "") {
                        console.log(" ERRO: Não preencheu todas as infos");
                        mostrarMenu();
                        return;
                    }
                    if (idade <= 0 || nota < 0 || nota > 10) {
                        console.log(" ERRO: idade ou nota inválida");
                        mostrarMenu();
                        return;
                    }
                    let aluno = {
                        id: proximoID,
                        nome: nome,
                        idade: idade,
                        turma: turma,
                        nota: nota

                    }

                    alunos.push(aluno);
                    proximoID++


                    console.log("Aluno Cadastrado com sucesso ")
                    mostrarMenu();

                })

            })
        })
    })

}
function listarAluno() {
    console.log("Listar Alunos ");
    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado ")
        mostrarMenu();
        return;

    }
    for (i = 0; i < alunos.length; i++) {
        console.log("\ID: " + alunos[i].id)
        console.log("Nome: " + alunos[i].nome)
        console.log("Idade : " + alunos[i].idade)
        console.log("Turma : " + alunos[i].turma)
        console.log("Nota : " + alunos[i].nota)

    }
    mostrarMenu();

}
function buscarAlunoporID() {
    console.log("buscar aluno por ID ");
    rl.question("Digite o ID do aluno: ", (id) => {
        id = Number(id);
        let aluno = encontrarAlunoporID(id);
        if (aluno === null) {
            console.log("Aluno não encontrado");
            mostrarMenu();
            return;
        }
        console.log("\nAluno Encontrado ");
        console.log("ID: " + aluno.id);
        console.log("Nome: " + aluno.nome);
        console.log("Idade : " + aluno.idade);
        console.log("Turma : " + aluno.turma);
        console.log("Nota : " + aluno.nota);

        mostrarMenu();





    })

}
function encontrarAlunoporID(id) {
    for (i = 0; i < alunos.length; i++) {
        if (alunos[i].id === id) {
            return alunos[i];
        }
    }
    return null;




}

mostrarMenu();




