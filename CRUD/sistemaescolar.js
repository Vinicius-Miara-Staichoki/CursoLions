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
        else if (opcao === "4") {
            atualizarAluno();
        }

        else if (opcao === "5") {
            removerAluno();
        }
        else if (opcao === "6") {
            alunosAprovados();
        }
        else if(opcao === "7"){
            alunosReprovados();
        }
        else if( opcao === "0"){
            sair();
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

function atualizarAluno() {
    console.log("Atualizar Aluno ");
    rl.question("Digite o id do aluno: ", (id) => {
        id = Number(id);
        let aluno = encontrarAlunoporID(id);
        if (aluno === null) {
            console.log("Aluno não encontrado")
            mostrarMenu();
            return;
        }

        rl.question("Digite o novo nome: ", (novoNome) => {
            rl.question("Digite a nova idade: ", (novaIdade) => {
                rl.question("Digite a nova turma: ", (novaTurma) => {
                    rl.question("Digite a nova nota: ", (novaNota) => {
                        novaIdade = Number(novaIdade);
                        novaNota = Number(novaNota);

                        if (novoNome === "" || novaIdade === "" || novaTurma === "" || novaNota === "") {
                            console.log("Todos os campos precisam ser preenchidos")
                            mostrarMenu();
                            return;

                        }

                        if (novaIdade <= 0 || novaNota < 0 || novaNota > 10) {
                            console.log(" Idade ou nota inválida");
                            mostrarMenu();
                            return;

                        }
                        aluno.nome = novoNome;
                        aluno.idade = novaIdade;
                        aluno.turma = novaTurma;
                        aluno.nota = novaNota;

                        console.log("Aluno atualizado com sucesso");
                        mostrarMenu();

                    })

                })

            })
        })

    })

}

function removerAluno() {
    console.log("Remover aluno")
    rl.question("Digite o id do aluno: ", id => {
        id = Number(id);
        let aluno = encontrarAlunoporID(id);
        if (aluno === null) {
            console.log("Aluno não encontrado")
            mostrarMenu();
            return;
        }

        for (i = 0; i < alunos.length; i++) {

            if (alunos[i].id === id) {

                alunos.splice(i, 1);

            }



        }
        console.log("Aluno removido: ", aluno);
        mostrarMenu();
        return;




    })


}
function alunosAprovados() {
    let alunosAprovados = [];
  
    console.log("Alunos aprovados; ");
    if(alunos === null){
        mostrarMenu();
        return;
    }

    for(i=0;i<alunos.length;i++){
        if(alunos[i].nota >= 7 ){
            alunosAprovados.push(alunos[i]);
        }
    }
    console.log(alunosAprovados);
    mostrarMenu();
    return;

    
}

function alunosReprovados() {
    let alunosReprovados = [];
   
    console.log("Alunos reprovados; ");
    if(alunos === null){
        mostrarMenu();
        return;
    }

    for(i=0;i<alunos.length;i++){
        if(alunos[i].nota < 7 ){
            alunosReprovados.push(alunos[i]);
        }
    }
    console.log(alunosReprovados);
    mostrarMenu();
    return;'            '

    
}
 
function sair(){
    rl.close();
}


mostrarMenu();




