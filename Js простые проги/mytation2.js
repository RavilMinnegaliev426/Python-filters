//Метод 2 (копирует старый) есть проблема 
//во вложенных обьектах ,их ссылка внутри не сменится ... -
//spray отличается заменой Object.assigne на ...

const person = {  
    name: 'Bob',
      age: 25
}

const person2 = {...person }

person2.name = 'Alice'

console.log(person.name) //Bob
console.log(person2.name) //Alice