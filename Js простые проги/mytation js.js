//Метод assign 1(копирует старый) есть проблема во вложенных обьектах ,их 
//cылка внутри не сменится

const person = {
    name: 'bob',
    age: 25
}

const person2 = Object.assign({}, person) //pascal case - Object  с заглавной буквы 		                                                                          //т.к тип и класс
person2.age = 26

console.log(person.age) //25
console.log(person2.age) //26