function main(){

    let resultado = document.querySelector('#resultado')
    let enviaTarefa = document.querySelector('#envia-tarefa')

    let lista = document.createElement("ul");
    //const input = document.createElement("input type=checkbox")

    document.addEventListener('keypress', function(e){
        if(e.key === 'Enter'){

            //alert(enviaTarefa.value);

            resultado.appendChild(lista)
            lista.innerHTML += `<p>${enviaTarefa.value}</p>`
            alert(enviaTarefa.value)
            enviaTarefa.value.innerHTML = ' ';
            alert(enviaTarefa.value)
            
            
        }
    })
}

main()