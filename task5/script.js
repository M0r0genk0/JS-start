const duplicateField = document.querySelector('#duplicateField');
const textField = document.querySelector('#textField');
const consoleField = document.querySelector('#consoleField');

textField.addEventListener('keydown', function(){
    duplicateField.textContent = textField.value;
});

consoleField.addEventListener('click', function(event){
    const outputConsole = textField.value;
    console.log(outputConsole);
    duplicateField.textContent = '';
})