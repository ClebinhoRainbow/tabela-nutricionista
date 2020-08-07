let butaoAdicionar = document.querySelector('#adicionar-paciente');

butaoAdicionar.addEventListener('click',function(event){
    event.preventDefault();

    let form = document.querySelector('#form-adiciona');
    //Monta paciente novo
    let paciente = obtemPacienteDoFormulario(form);

    let erros = validaPaciente(paciente);   
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return ; //sai imediatementa da funcao, nesse caso a anonima
    }

    adicionaPacienteNaTabela(paciente);
  
    form.reset();

    let mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){
    //cria Tr
    let novoPacienteTr = criaTr(paciente);
    let tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(novoPacienteTr);
}

function exibeMensagensDeErro(erros){

    let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        let li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form){

    let pessoa  = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value, form.altura.value),
    }
    return pessoa;
}

function criaTr(paciente){

    let novoTr = document.createElement('tr');
    novoTr.classList.add("paciente");
    novoTr.appendChild(criaTd(paciente.nome,'info-nome'));
    novoTr.appendChild(criaTd(paciente.peso,'info-peso'));
    novoTr.appendChild(criaTd(paciente.altura,'info-altura'));
    novoTr.appendChild(criaTd(paciente.gordura,'info-gordura'));
    novoTr.appendChild(criaTd(paciente.imc,'info-imc'));
    return  novoTr;
}

function criaTd(valor, classe){

    let novoTd = document.createElement('td');
    novoTd.textContent = valor;
    novoTd.classList.add(classe);
    return novoTd;
}
function validaPaciente(paciente)
{

    let erros = [];
    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0 || paciente.gordura <=0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }
    return erros;
}