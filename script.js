function calculateFinalValue() {
    let initialValue = document.getElementById('initialValue').value;
    let percentageIncrease = document.getElementById('percentageIncrease').value;
    let resultElement = document.getElementById('result');

    if (initialValue && percentageIncrease) {
        let finalValue = initialValue * (1 + (percentageIncrease / 100));
        resultElement.textContent = `O valor final é: ${finalValue.toFixed(2)}`;
    } else {
        resultElement.textContent = 'Por favor, preencha todos os campos.';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    let themeToggle = document.getElementById('theme-toggle');
    themeToggle.nextElementSibling.textContent = themeToggle.checked ? 'Modo Claro:' : 'Modo Escuro:';
}
