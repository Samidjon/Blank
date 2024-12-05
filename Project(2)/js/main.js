var notesList = document.getElementById('notesList');

// Добавляем обработчик событий на список
notesList.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked'); // Переключение выделения заметки
    } else if (ev.target.tagName === 'BUTTON') {
        var li = ev.target.parentNode; // Родитель кнопки (элемент списка)
        li.remove(); // Удаляем элемент
    }
});

// Функция для добавления новой заметки
function newElement() {
    var inputValue = document.getElementById('noteInput').value; // Текст из инпута
    if (inputValue === "") {
        alert("Please write something!"); // Проверка на пустое поле
        return;
    }

    var li = document.createElement('li'); // Создаём элемент списка
    li.textContent = inputValue;

    var button = document.createElement('button'); // Создаём кнопку удаления
    button.textContent = "X";
    button.className = "close"; // Добавляем класс для стилизации
    li.appendChild(button);

    notesList.appendChild(li); // Добавляем элемент в список
    document.getElementById('noteInput').value = ""; // Очищаем поле ввода
}
