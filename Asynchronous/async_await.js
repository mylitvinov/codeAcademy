/* async Используется ключевое слово , чтобы писать функции , которые обрабатывают
 асинхронные действия. Мы оборачиваем нашу асинхронную логику внутри функции, перед
  которой стоит asyncключевое слово. Затем мы вызываем эту функцию.
  */

async function myFunc1() {
  // Function body here
};
 
myFunc1();

/*
async функции всегда возвращают обещание. Это означает, что мы можем использовать традиционный
 синтаксис обещаний, как .then()и .catchс нашими asyncфункциями. asyncФункция будет возвращать
  в одном из трех способов:

Если функция ничего не вернула, она вернет обещание с разрешенным значением undefined.

Если из функции возвращается значение, не являющееся обещанием, она вернет обещание, 
разрешенное к этому значению.

Если обещание возвращается из функции, она просто вернет это обещание.
*/

async function fivePromise() { 
  return 5;
}
 
fivePromise()
.then(resolvedValue => {
    console.log(resolvedValue);
  })  // Prints 5

  //*************************************************************************************
  // Сравнение Promise и async/await 

  function withConstructor(num){
    return new Promise((resolve, reject) => {
      if (num === 0){
        resolve('zero');
      } else {
        resolve('not zero');
      }
    })
  }
  
  withConstructor(0)
    .then((resolveValue) => {
    console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
  })
  
  // Write your code below:
  async function withAsync(num){
    if (num === 0){
        return 'zero';
      } else {
        return 'not zero';
      }
  }
  
  withAsync(100)
    .then((resolveValue) => {
    console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
  })
//************************************************************************************
  // await

  /* await Ключевое слово можно использовать только внутри async функции. 
  await является оператором: он возвращает разрешенное значение обещания. Поскольку обещания 
  разрешаются через неопределенное время, awaitостанавливаются или приостанавливаются,
   выполнение нашей asyncфункции до тех пор, пока не будет разрешено данное обещание.
   */

   async function asyncFuncExample(){
    let resolvedValue = await myPromise();
    console.log(resolvedValue);
  }
   
  asyncFuncExample(); // Prints: I am resolved now!

  //**************************************************************************** 
  // Сравнение then() и await()

  function nativePromiseVersion() {
    returnsFirstPromise()
      .then((firstValue) => {
        console.log(firstValue);
        return returnsSecondPromise(firstValue);
      })
     .then((secondValue) => {
        console.log(secondValue);
      });
  }

  async function asyncAwaitVersion() {
    let firstValue = await returnsFirstPromise();
    console.log(firstValue);
    let secondValue = await returnsSecondPromise(firstValue);
    console.log(secondValue);
  }

  //************************************************************************** 
  // try... catch

  async function usingTryCatch() {
    try {
      let resolveValue = await asyncFunction('thing that will fail');
      let secondValue = await secondAsyncFunction(resolveValue);
    } catch (err) {
      // Catches any errors in the try block
      console.log(err);
    }
   }
    
   usingTryCatch();

   