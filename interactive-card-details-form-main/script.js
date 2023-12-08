function getExpiry() {
    var mes = document.getElementById('month').value;
    var ano = document.getElementById('year').value;

    var expiryDate = mes + '/' + ano;
    console.log(expiryDate);
}

function updateCard(inputId) {
    let displayValue;

    switch (inputId) {
        case 'cardNumber':
            const cardNumber = document.getElementById('card-number').value;
            displayValue = cardNumber.replace(/[^\d]/g, '').replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
            break;
        case 'cardName':
            displayValue = document.getElementById('card-name').value;
            break;
        case 'cardExpiry':
            const month = document.getElementById('inputMonth').value.padStart(2, '0');
            const year = document.getElementById('inputYear').value;
            displayValue = `${month}/${year}`;
            break;
        case 'cardCvc':
          displayValue = document.getElementById('cvc-input').value;
          break;
           
    }

    document.getElementById(`display${inputId.charAt(4).toUpperCase() + inputId.slice(5)}`).textContent = displayValue;
}


function validarNumeroCartao(input) {
var numeroCartao = input.value.replace(/\s/g, '');
var erroNumeroCartao = document.getElementById('erroNumeroCartao');

if (!/^\d+$/.test(numeroCartao)) {
    input.classList.add('error-border');
    erroNumeroCartao.textContent = 'Escrita errada, apenas números';
} else {
    input.classList.remove('error-border');
    erroNumeroCartao.textContent = '';
}
}

function validarDataCartao(input) {
    var dataCartao = input.value.replace(/\s/g, '');
    var erroDataCartao = document.getElementById('erroDataCartao');
    
    if (!/^\d+$/.test(dataCartao)) {
        input.classList.add('error-border');
        erroDataCartao.textContent = 'Não pode ser nulo';
    } else {
        input.classList.remove('error-border');
        erroDataCartao.textContent = '';
    }
    }

    function validarCvcCartao(input) {
        var cvcCartao = input.value.replace(/\s/g, '');
        var erroCvcCartao = document.getElementById('erroCvcCartao');
        
        if (!/^\d+$/.test(cvcCartao)) {
            input.classList.add('error-border');
            erroCvcCartao.textContent = 'Não pode ser nulo';
        } else {
            input.classList.remove('error-border');
            erroCvcCartao.textContent = '';
        }
        }