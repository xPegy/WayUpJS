/* 
    Задание 1:
    Вывести в консоль с помощью цикла FOR все четные числа от 10 до 50
*/
for (let i = 10; i <= 50; i++) {
    console.log(i);
};
/* 
    Задание 2:
    Необходимо создать объект в котором вы опишите самого себя в формате : "свойство: значение"
    Список свойств:
    - Имя(string)
    - Фамилия(string)
    - Возраст(number)
    - Есть ли домашние животные(boolean)
*/
const information = {
    firstName: 'Denys',
    lastName: 'Chepov',
    age: 21,
    animals: true
};
/* 
    Задание 3:
    Отрывок из текста А.С Пушкин, Капитанская дочка был разбит на небольшие кусочки и помещен в массив. 
    Необходимо собрать этот текст из массива и придать ему первоначальный вид.
    Текст до разбивки на части:
    "В ту же ночь приехал я в Симбирск, где должен был пробыть сутки для закупки нужных вещей,
    что и было поручено Савельичу. Я остановился в трактире. Савельич с утра отправился по лавкам"
    Массив: 
    const array = [
        'я в Симбирск,',
        'в трактире.',
        'с утра',
        'В ту же ночь',
        'Я остановился',
        'для закупки', 
        'что и было поручено Савельичу.',
        'приехал',
        'где должен был',
        'нужных вещей',
        'отправился по лавкам',
        'пробыть сутки',
        'Савельич'
    ]
   итоговый текст должен быть собран из массива array и результат записать в переменную result
*/
const text = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки',
    'что и было поручено Савельичу.',
    'приехал',
    'где должен был',
    'нужных вещей,',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
];
let result = text[3] + ' ' + text[7] + ' ' + text[0] + ' ' + text[8] + ' ' + text[11] + ' ' + text[5] + ' ' + text[9] + ' ' + text[6] + ' ' + text[4] + ' ' + text[1] + ' ' + text[12] + ' ' + text[2] + ' ' + text[10];
console.log(result);
/* 
    Задание 4:
    Напишите функцию, в теле которой будет находится следующий код:
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
    firstName и lastName - это параметры функции
    При вызове функции передайте ей, в качестве аргумента, свое имя и фамилию.
*/
const fullName = (firstName, lastName) => {
    if ((firstName, lastName) == (information.firstName, information.lastName)) {
        console.log('Индефикация успешна!! Выполняеться вход!!');
    } else {
        console.log('Отказ в доступе');
    }
};
fullName('Denys', 'Chpov');

/* 
    Задание 5:
    Вывести в консоль с помощью цикла WHILE все нечетные числа от 21 до 67
    
*/
let x = 20;
while (x < 61) {
    x++;
    if (x % 2)
        console.log(x);
};