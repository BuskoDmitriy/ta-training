// Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма
 let films = ['Властелин колец', 'Хоббит', 'Служебный роман', 'Зелёная книга'];
 for(let film of films){
     console.log(film);
 }

// Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив
let arr = ['Жигули' , 'Лада' , 'Волга'];
let a = String(arr); 
console.log(a);
let arr2 = a.split(",");
console.log(arr2);
console.log(arr[0]);

// Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello
let names = ['Dima', 'Masha', 'Alex', 'Dasha'];
for (let name of names){
    name = (`Hello ${name}`);
    console.log(name);
}

// Преобразовать числовой массив в Boolean
let a = [0,0,1,2,3,4,5].map(Boolean)
console.log(a);

// Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию
let numbers = [1,6,7,8,3,4,5,6];
numbers.sort(function(a, b) {
  return b - a;
});
console.log(numbers);

// Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3
let numbers = [1,6,7,8,3,4,5,6];
let fnumbers = [];
for (let i = 0;i< numbers.length;i++){
if (numbers[i] > 3){
    fnumbers.push(numbers[i])
}   
}
console.log(fnumbers);

// Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10
let i;
     do {
         i = prompt('Введите число')
 }
 while(i>10 && i);

// Реализовать цикл, который выводит в консоль простые числа
let z = 20;
 for (let i = 2; i <= z; i++) {
   let isSimple = true;
   for (let j = 2; j < i; j++) {
     if (i % j == 0 ) {
       isSimple = false;
       break;
     }
   }
   if (isSimple) {
    console.log(`Number ${i} is simple`)
   }
 }

// Реализовать цикл, который выводит в консоль нечетные числа
let num = 2;
while(num<20){
    num++;
    if(num%2) console.log(num);
}
