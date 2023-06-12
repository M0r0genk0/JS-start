const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Cлужит для вывода информации в конслоь.');
})

const Alert = document.querySelector('#alert');

Alert.addEventListener('click', () => {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK.');
})

const prompt = document.querySelector('#prompt');

prompt.addEventListener('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста.');
})



