// console.log(true || true)
// console.log(true || false)
// console.log(false || true)


// console.log(true && true)
// console.log(true && false)
// console.log(false && true)

// && - И, ||  ИЛИ . В случае с И ,если где-то будет ложь,то в консоли будет тоже ложь. с или наоборот.


// let item_1 = 5
// let item_2 = 10

// if (item_1 > 3 || item_2 < 15) {
//     console.log("Idi kuhat")
// } else {
//     console.log("Hodi golodniy")
// }



// let item_1 = 5
// let item_2 = 100
// let item_3 = 50
// 20 = 10 + 5 * 2 - пример, что сначала выполн умножение так и с &&
// if (item_1 > 3 || item_2 < 15 && item_3 == 50) {
//     console.log("Idi kuhat")
// } else {
//     console.log("Hodi golodniy")
// }


// let item_1 = 5
// let item_2 = 100
// let item_3 = (item_2 > 50)? console.log("Idi Kuhat") : console.log("Hodi golodniy") - тернарный оператор (в одну строку условие)
// console



// Циклы: цикл рабтает тогда, когда есть true
// let item_1 = 0
// while(true) {
//     console.log(item_1 + " = Idi kuhat'")
//     item_1++
// }


// let item_1 = 0
// let item_2 = 20
// while(item_1 < 20) {
//     console.log(item_1 + " = Idi kuhat'")
//     item_1++
// }


// let item_1 = 0
// let item_2 = 20
// while(item_1 < 20 || item_2 < 30) {
//     console.log(item_1 + " = Idi kuhat'")
//     console.log(item_2 + " = ------ '")
//     item_1++
//     item_2++
// }


// let temp = 0
// let temp = 4
// while(temp < 40) {
    
//     if (temp < 40) {
//         console.log("temp = ", temperature, "Holodno")
//     } else if (temp >= 10 && temp < 30) {
//         console.log("temp = ", temperature, "Horosho!!!")
//     } else {
//         console.log("temp = ", temperature, "Kapec!!!")
//     }
//     temp++ 
// здесь код не пошел, решить вопрос


// Цикл for:
// for(let i = 0; i < 10; i++){
//     console.log(i , "= FOR")
// }
// // Чтобы сделать бесконечный цикл поставим true вместо i < 10


// let names = ["Kate", 
//              "Alex", 
//              "Ivan",
//              "Andrey",
//              "Vika"]
// for (let item_1 in names) {
//     console.log(item_1, names[item_1])
// }            
// Если нам нужно вытащить из массива содержимое имен,из списка достаем элементы


// let names = ["Kate", 
//              "Alex", 
//              "Ivan",
//              "Andrey",
//              "Vika"]
// for ( let item_1 of names) {
//     console.log(item_1)
// }
// Можно еще вот так через of

// let names = ["Kate", 
//              "Alex", 
//              "Ivan",
//              "Andrey",
//              "Vika"]
// for (let item_1 in names) {
//     if(item_1 == "Alex"){
//         break;
//     }
//     console.log(item_1, names[item_1])
// }
// // == равно, сравниваем.


// let names = ["Kate", 
//              "Alex", 
//              "Ivan",
//              "Andrey",
//              "Vika"]
// let items = name. Length
// let count = 0

// while (count++ < items){
//     console.log(names[count])
//     // count++
// }
// т е мы можем также и через while
