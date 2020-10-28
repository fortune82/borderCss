const range = document.querySelectorAll('input[type="range"]');
const rangeValue = document.querySelectorAll('input[type="text"]');
const square = document.querySelector('.square');
const out = document.querySelector('.out');
let lt = 0,
    rt = 0,
    rb = 0,
    lb = 0;

out.innerHTML = 'border-radius: 0px 0px 0px 0px'
range.forEach(item => {
    item.addEventListener('input', function (e) {
        let val = e.target.value // Получаем значение ползунка
        e.target.nextElementSibling.value = val // присваиваем следующему за input type="range" элементу input type="text" значение  e.target.value
        rangeValue.innerHTML = e.target.nextElementSibling.value; // выводим значение input type="range" в input type="text"
        if (item.classList.contains('controls-item-left-top')) { // проверяем, если текущий input имеет класс 'controls-item-left-top'
            square.style.borderTopLeftRadius = `${e.target.nextElementSibling.value}px`; //тогда в square добавляем значение радиуса угла
            lt = val; // переменной присваеваем значение val для последующего его использования в выводе в блок out
        }
        if (item.classList.contains('controls-item-right-top')) {
            square.style.borderTopRightRadius = `${e.target.nextElementSibling.value}px`;
            rt = val;
        }
        if (item.classList.contains('controls-item-right-bottom')) {
            square.style.borderBottomLeftRadius = `${e.target.nextElementSibling.value}px`;
            rb = val;
        }
        if (item.classList.contains('controls-item-left-bottom')) {
            square.style.borderBottomRightRadius = `${e.target.nextElementSibling.value}px`;
            lb = val;
        }
        out.innerHTML = `border-radius: ${lt}px ${rt}px ${rb}px ${lb}px;`
    })
})

document.querySelector('button').addEventListener('click', function () {
    out.select(); // Метод выбирает весь текст в виде <textarea> элемента или в качестве <input>элемента , который включает в себя текстовое поле. С тегом div не работает
    document.execCommand('copy')
})