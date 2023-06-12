const url = document.querySelector('#url');

url.addEventListener('click', function (event) 
{event.preventDefault();
url.textContent = prompt('Введите текст');
});
url.addEventListener('contextmenu', function (){
url.textContent = 'Измените текст ссылки';
});











