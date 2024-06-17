function main(){

    let resultado = document.querySelector('#tarefas')
    let enviaTarefa = document.querySelector('#envia-tarefa')
    

    enviaTarefa.addEventListener('keypress', function(e){
        if(e.keyCode == 13){

            if(enviaTarefa.value){

                criaTarefa(enviaTarefa.value)

            }
            else{
                alert("Valor nulo.");
            }
            
        }

    })

    function criaLi(){
        const li = document.createElement('li');
        return li;
    }

    function criaTarefa(textoInput){   
        const li = criaLi();
        li.innerText = textoInput;
        resultado.appendChild(li);
        cleanInput();
        criaBotaoApagar(li)
        salvarTarefas();

    }

    function cleanInput(){
        enviaTarefa.value = null;
        enviaTarefa.focus();
    }

    function criaBotaoApagar(li){
        li.innerText += ' ';
        const botaoApagar = document.createElement('button');
        botaoApagar.innerText = 'Apagar';
        botaoApagar.setAttribute('class', 'apagar');
        li.appendChild(botaoApagar);
    }

    document.addEventListener('click', function(e){
        const el = e.target;

        if(el.classList.contains('apagar')){
            el.parentElement.remove()
            salvarTarefas();
        }
    })

    function salvarTarefas(){
        const liTarefas = resultado.querySelectorAll('li');
        const listaTarefas = [];

        for(let tarefa of liTarefas){
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar', ' ').trim();
            
            listaTarefas.push(tarefaTexto);

            const tarefaJSON = JSON.stringify(listaTarefas);
            localStorage.setItem('resultado', tarefaJSON)
        }
    }

    function adicionaTarefasSalvas(){
        const tarefas = localStorage.getItem('resultado');
        const listaTarefas = JSON.parse(tarefas);

        for(let tarefa of listaTarefas){
            criaTarefa(tarefa);
        }
    }

    adicionaTarefasSalvas()
}

main()