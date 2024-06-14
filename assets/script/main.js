function main(){

    let resultado = document.querySelector('#tarefas')
    let enviaTarefa = document.querySelector('#envia-tarefa')
    
    function criaTarefa(textoInput){   

        console.log(textoInput);

    }

    enviaTarefa.addEventListener('keypress', function(e){
        if(!enviaTarefa.value) console.log('campo vazio');

        if (e.which == 13) criaTarefa(enviaTarefa.value) 
    })

}

main()