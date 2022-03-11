// Создать объект car, добавить к нему свойство color со значением 'черный'
// Изменить свойство color объекта car на 'зеленый'
// В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя
let car = {
    color : 'Чёрный'
}
    function power(strong, horses){
        alert(strong + ' - ' + horses);
}
car.color = 'Зелёный';
console.log(car.color);
power('100', 'лошадиных сил'); 

// На склад принимают груши и яблоки, напишите функцию, которая возвращает результат сложения количества принятых груш и яблок
function sum(apples = Number(prompt('Сколько яблок?')), pears = Number(prompt('Сколько груш?'))){
    return apples + pears;
}
sum();

// В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)
let name = 'Дмитрий';
function term(){
let check = prompt('Введите Ваше имя');
    if(check == name){
        console.log(`Привет,  ${name}`);
    }else{
        console.log('Нет такого имени')
    }
}
term();

// Напишите функцию вычисления типа аргумента и вывод типа в консоль
function checkType(obj){
  console.log(typeof(obj));
}
checkType(1);

// Напишите функцию, которая определяет является ли число простым или нет
function ch(){
    let num = Number(prompt('Введите Ваше число'));
    let checknum = (` Число ${num} простое `);
    for (let i = 2; i < num; i++){
        if(num % i == 0){
            checknum = (` Число ${num} не простое `);
            break;
        }
    }
    console.log(checknum);
    }
    ch();
