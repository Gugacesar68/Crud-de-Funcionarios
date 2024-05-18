
async function api_pessoas(){
    const resp = await fetch(   'https://randomuser.me/api/?results=50'  );

    return resp.json();
}

api_pessoas().then( data => {
    const print_JSON = data.results
    print = print_JSON.filter( print_JSON => print_JSON.gender === 'female')

    console.log(print);
} );


const lista_de_usuarios = {
    usuarios: [
        {   id: Number,
            nome: String        },
        {   id: 1,
            nome: "Gustavo"        },
    ]
}

const lista_de_afazeres = { 
    tarefas: [
        {   id: 1,
            usuario: "Gustavo",
            nome_tarefa: "Tarefa 1",
            descricao: "Estudar Python",
            concluida: false
        },
        {   id: 2,
            usuario: "Gustavo",
            nome_tarefa: "Tarefa 2",
            descricao: "CRUD JavaScript",
            concluida: false
        },
        {   id: 3,
            usuario: "Gustavo",
            nome_tarefa: "Tarefa 3",
            descricao: "Objetos JSON",
            concluida: false
        },
        {   id: 4,
            usuario: "Não Gustavo",
            nome_tarefa: "Tarefa 4",
            descricao: "",
            concluida: false
        }
    ]
}




