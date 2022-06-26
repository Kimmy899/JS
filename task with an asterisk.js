// Создать скрипт, который сосчитает и выведетрезультат от возведения 2 в степень 10

let i = 1;
let result = 1;
while (i < 11){
    result = result *2
    i++
    console.log(result)
}

// 1* Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
// вариант номер 1
const power = function(num){
    let result = 1;
    for(let i = 1; i <= num; i++){
        result = result *2
    }
    return result
}
console.log(power(10))

// Вариант номер 2 
const power2 = function(num){
    return 2**num
}
console.log(power2(10))

// Вариант номер 3
const power3 = function(num){
    return Math.pow(2,num)
}
console.log(power3(10))



// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :)
//  Пример в консоли
// :)
// :) :)
// :) :) :)
// :) :) :) :) 
// :) :) :) :) :)

let word = ':)'
let result2 = ''
for (let i=1; i<=4;i++){
    result2+=word
    console.log(result2)
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводить в консоль
// e.g. function printSmile(stroka, numberOfRows)
// Вариант номер 1
function printSmile(stroka, numberOfRows){
    let result = '';
    for (let i = 1; i<=numberOfRows; i++){
        result+=stroka
        console.log(result)
    }
}
printSmile(':(', 5)

// Вариант номер 2
function printSmile2(stroka, numberOfRows){
    for (let i = 1; i<=numberOfRows; i++){
        console.log(stroka, repeat(i))
    }
}
printSmile(':)', 6)
