let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


let pacientes = document.querySelectorAll('.paciente');

for(let i = 0; i < pacientes.length; i++)
{
    let paciente = pacientes[i];

    let tdImc = paciente.querySelector('.info-imc');

    let tdpeso = paciente.querySelector('.info-peso');
    let peso = tdpeso.textContent;
    let tdaltura = paciente.querySelector('.info-altura');
    let altura = tdaltura.textContent;

    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);
    if(!pesoEhValido){
        tdImc.textContent = 'Peso Invalido!';
        pesoEhValido = false;
        paciente.classList.add('paciente-invalido');

    }
    if(!alturaEhValida){
        tdImc.textContent = 'Altura Invalida!';
        alturaEhValida = false;
        paciente.classList.add('paciente-invalido');
    }

   

    if(pesoEhValido && alturaEhValida)
    {
        
        tdImc.textContent = calculaImc(peso,altura);
    }

}
function validaPeso(peso){

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}
function calculaImc(peso,altura){

    let imc = peso / (altura*altura); 
    return imc.toFixed(2);
}