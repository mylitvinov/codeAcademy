/*
JSON, сокращение от JavaScript Object Notation, - это не зависящий от языка формат данных,
 который был принят в качестве отраслевого стандарта. Поскольку он основан на языке 
 программирования JavaScript, синтаксис JSON похож на объект JavaScript с небольшими отличиями .
 Мы рассмотрим тонкую разницу между ними. Позже мы узнаем, как анализировать JSON и извлекать 
 его содержимое как JavaScript. Наконец, мы узнаем, как написать объект JSON с помощью
  JavaScript. Итак, приступим.
  
  ============================================================================
  Вот пример объекта JSON человека по имени Кейт, которому 30 лет, и чьи хобби включают чтение,
   письмо, приготовление еды и игру в теннис:

{
  "person": {  
    "name": "Kate",  
    "age": 30,  
    "hobbies": [ "reading", "writing", "cooking", "tennis" ] 
  }
}
Эта же информация, представленная как литерал объекта JavaScript, будет выглядеть следующим
 образом:

{  
  person: {
    name: 'Kate',  
    age: 30,  
    hobbies: [ 'reading', 'writing', 'cooking', 'tennis' ] 
  }
}
Обратите внимание на небольшую разницу между двумя форматами.

Часть имени в каждой паре имя-значение JSON и все строковые значения должны быть заключены в 
двойные кавычки, хотя в JavaScript это необязательно.

JavaScript принимает строковые значения, заключенные в одинарные или двойные кавычки, однако
 существуют рекомендации по кодированию JavaScript, которые предпочитают один стиль другому.

 ==============================================================================

 Чтение строки JSON
В типичном веб-приложении данные JSON, которые мы получаем из веб-запроса, поступают в виде
 строки. В других случаях данные JSON хранятся в файле, который используется для аутентификации,
  конфигурации или хранения базы данных. Эти файлы обычно имеют расширение .json , и их
   необходимо открыть, чтобы получить в них строку JSON. В любом случае нам нужно будет
    преобразовать строку в формат, который мы можем использовать для доступа к ее частям. 
    Каждый язык программирования имеет свой собственный механизм для обработки этого 
    преобразования. В JavaScript, например, у нас есть встроенный класс JSON с вызываемым 
    методом, .parse()который принимает строку JSON в качестве параметра и возвращает объект 
    JavaScript.


Следующий код преобразует строковый объект JSON, jsonDataв объект JavaScript jsObject, и ведет 
журнал jsObject на консоли.

const jsonData = '{ "book": { "name": "JSON Primer", "price": 29.99, "inStock": true, "rating": null } }';
 
const jsObject = JSON.parse(jsonData);
 
console.log(jsObject);

======================================================================================

Написание строки JSON
Прежде чем мы сможем отправлять наши данные через Интернет, нам нужно преобразовать их в строку
 JSON. В JavaScript мы бы использовали встроенный JSONметод класса .stringify()для 
 преобразования нашего объекта JavaScript в строку JSON.

Следующий код преобразует объект JavaScript jsObjectв строку JSON jsonData.

const jsObject = { book: 'JSON Primer', price: 29.99, inStock: true, rating: null };
const jsonData = JSON.stringify(jsObject);
console.log(jsonData);
Это отобразит следующий вывод:

{ "book": "JSON Primer", "price": 29.99, "inStock": true, "rating": null }
*/
 const jsonData1 = '{ "parent": { "name": "Sally", "age": 45, "children" : [ { "name": "Kim", "age": 3 }, { "name": "Lee", "age": 1 } ] } }';
 const jsObject1 = JSON.parse(jsonData1)
 console.log(jsObject1.parent.children) // [ { name: 'Kim', age: 3 }, { name: 'Lee', age: 1 } ]

 //************************************************************************************ 

 const jsonData = '{"parent":{"name":"Sally","age":45,"children":[{"name":"Kim","age":3},{"name":"Lee","age":1}]}}';
const jsObject = JSON.parse(jsonData)
jsObject.parent.age = 35
console.log(jsObject)
const jsObjectToJson  = JSON.stringify(jsObject);
console.log(jsObjectToJson);