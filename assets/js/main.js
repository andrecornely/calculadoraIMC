const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = Number(document.getElementById('weight').value);
    const height = Number(document.getElementById('height').value);

    const bmi = (weight / (height * height)).toFixed(2);

    let description = '';

    if (bmi < 18.5) {
        description = 'Abaixo do peso';
    } else if (bmi < 25) {
        description = 'Peso normal';
    } else if (bmi < 30) {
        description = 'Sobrepeso';
    } else if (bmi < 35) {
        description = 'Obesidade grau I';
    } else if (bmi < 40) {
        description = 'Obesidade grau II';
    } else {
        description = 'Obesidade grau III';
    }

    document.getElementById('value').textContent = bmi;
    document.querySelector('#description span').textContent = description;

    document.getElementById('infos').classList.remove('hidden');
});