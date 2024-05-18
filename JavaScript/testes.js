
// CRUD de lista de afazeres

const lista_de_afazeres = { 
    usuarios: [
        {   nome: String        },
    ],
    tarefas: [
        {   usuario: String,
            nome_tarefa: String,
            descricao: String,
            //concluida: Boolean
        }
    ]
}
/*
nome
cargo
salario
email
*/

/*******************************************************************/


function registrar_usuario( usuario_float ) {
    var usuario_obj = {
        id: lista_de_afazeres.usuarios.length + 1,
        nome: usuario_float.nome,
    }
    
    lista_de_afazeres.usuarios.push(usuario_obj);
}


function criar_tarefa( tarefa_float ) {
    var tarefa_obj = {
        id: lista_de_afazeres.tarefas.length + 1,
        usuario: tarefa_float.usuario,
        nome_tarefa: tarefa_float.nome_tarefa,
        descricao: tarefa_float.descricao,
        concluida: false
    }
    if (lista_de_afazeres.usuarios.some( usuarios => usuarios.nome === tarefa_float.usuario)) {
        lista_de_afazeres.tarefas.push(tarefa_obj)
    }
    else {
        console.log("Usuario não registrado");
    }

}

function ler_todas_tarefas(usuario) {
    const filtro_de_nome = lista_de_afazeres.tarefas.filter( tarefas => tarefas.usuario === usuario )
    
    return(filtro_de_nome)
}

function ler_tarefa(usuario, id_tarefa_f) {
    const filtro_de_nome = lista_de_afazeres.tarefas.filter( tarefas => tarefas.usuario === usuario )
    const filtro_de_id = filtro_de_nome.filter( tarefas => tarefas.id === id_tarefa_f)
    
    return(filtro_de_id)
}


function atualizar_tarefa() {

}

function deletar_tarefa() {

}


/*******************************************************************
 *******************************************************************
 *******************************************************************/


novo_usuario = {
    nome: "Gustavo César"
}
registrar_usuario(novo_usuario);



nova_tarefa = {
    usuario: "Gustavo César",
    nome_tarefa: "Estudar JavaScript",
    descricao: "Bla Bla Bla Bla Bla Bla Bla"
}
nova_tarefa2 = {
    usuario: "Gustavo César",
    nome_tarefa: "Estudar JavaScript",
    descricao: "Arrays"
}
nova_tarefa3 = {
    usuario: "Gustavo César",
    nome_tarefa: "Estudar JavaScript",
    descricao: "Create Read Update Delete"
}

registrar_usuario(novo_usuario);
criar_tarefa(nova_tarefa); criar_tarefa(nova_tarefa2); criar_tarefa(nova_tarefa3);


//console.log(ler_todas_tarefas("Gustavo César"));

console.log(ler_tarefa("Gustavo César",2));




