//Tecnica Ajax , ou seja, fazer uma requisição no javascript 
//de modo assíncrono, ele nao travar o javascript, sem precisar usar o navegador
// não está parando o fluxo do código, ou seja, no momento em 
//que a requisição é feita, a execução continua normalmente.
//JSON => (javascript object notation)um formato de dados parecidos com os objetos do 
//JavaScript que podemos transportar pela web.

let buttonBuscarPacientes = document.querySelector('#buscar-pacientes');

buttonBuscarPacientes.addEventListener('click',function(){
//requisição javaScript
    let xhr = new XMLHttpRequest();
// abri a conexao com o endereco desejado
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
//espera a resposta a requisicao enviada
    xhr.addEventListener("load",function(){
        let erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status==200)
        {
            erroAjax.classList.add("invisivel");
            // Aqui a resposta é uma string em formato JSON 
            let resposta = xhr.responseText;
            // transforma objetos de JSON para javascript
            let pacientes = JSON.parse(resposta);
            // Aqui a resposta se transforma em paciente e nao é mais uma strin
            // e sim um array de objetos javascript
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        }
        else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    })
// envia a requisicao com o endereco desejado
    xhr.send();
})