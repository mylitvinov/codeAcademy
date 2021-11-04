/*
Обещания - это объекты, которые представляют конечный результат асинхронной операции.
 Promise Объект может находиться в одном из трех состояний:

Pending: (ожидание) исходное состояние - операция еще не завершена.

Fulfilled:(выполнено) операция успешно завершена, и теперь обещание имеет разрешенное значение .
 Например, обещание запроса может разрешиться с помощью объекта JSON в качестве значения.

Rejected:(отклонено) операция не удалась, и у обещания есть причина сбоя. Это обычно Error
какая-то причина .
*/
//***************************************************************************************

//Для создания нового Promise объекта мы используем newключевое
// слово и Promise метод конструктора:
const executorFunction1 = (resolve, reject) => { };
const myFirstPromise1 = new Promise(executorFunction1);

/*
Функция исполнитель имеет два параметра функции, как правило , упоминаются как
 resolve()и reject()функция. Функции resolve()и reject()не определены программистом. 
 Когда Promiseконструктор запускается, JavaScript передает свои собственные функции
  resolve()и reject()функции в функцию-исполнитель
*/
//*********************************************************************************** *
/*
resolve это функция с одним аргументом. Под капотом, если он вызван, resolve()изменит статус 
обещания с pendingна fulfilled, а разрешенное значение обещания будет установлено на переданный
 аргумент resolve().

reject- это функция, которая принимает в качестве аргумента причину или ошибку. 
Под капотом, если он вызван, reject()изменит статус обещания с pendingна rejected, 
а причина отклонения обещания будет установлена ​​на переданный аргумент reject().
*/

//***************************************************************************************

// const executorFunction = (resolve, reject) => {
//   if (someCondition) {
//       resolve('I resolved!');
//   } else {
//       reject('I rejected!'); 
//   }
// }

// const myFirstPromise = new Promise(executorFunction);

// Example

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:
const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
        resolve('Sunglasses order processed.');
    } else {
        reject('That item is sold out.');
    }
};

const orderSunglasses = () => {
    return new Promise(myExecutor);
};

const orderPromise = orderSunglasses();

console.log(orderPromise); // Promise { 'Sunglasses order processed.' }

//***************************************************************************** 
// setTimeout()

const delayedHello = () => {
  console.log('Hi! This is an asynchronous greeting!');
};
 
setTimeout(delayedHello, 2000);

// example
console.log("This is the first line of code in app.js."); // 1
// Keep the line above as the first line of code
// Write your code here:

const usingSTO = () => {
  console.log('This is the first line of synchronous codes.'); // 3
}

setTimeout(usingSTO, 2500);


// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js."); //2

//********************************************************************************** 
//then() метод промиса, Чтобы обработать «успешное» обещание или обещание, которое было выполнено

const prom1 = new Promise((resolve, reject) => {
  resolve('Yay!');
});
 
const handleSuccess1 = (resolvedValue) => {
  console.log(resolvedValue);
};
 
prom1.then(handleSuccess1); // Prints: 'Yay!'


// Мы можем передать как успешный обратный вызов, так и обратный вызов при ошибке .then().

let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});
 
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
 
const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};
 
prom.then(handleSuccess, handleFailure);
