//Компонент props- это объект. Он содержит информацию об этом компоненте.

// Чтобы увидеть объект компонента props, вы используете выражение this.props. 
// Вот пример this.propsиспользования внутри метода рендеринга:

// render() {
//   console.log("Props object comin' up!");
 
//   console.log(this.props);
 
//   console.log("That was my props object!");
 
//   return <h1>Hello world</h1>;
// }

//============================================================================

import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(
  <PropsDisplayer myProp = 'Hello' />,
  document.getElementById('app')
)
// CHECK OUT MY PROPS OBJECT
//{"myProp":"Hello"}

//==================================================================

// Вы можете передать информацию в компонент React.

// Как? Дав этому компоненту атрибут:

<MyComponent foo="bar" />

//Давайте предположим , что вы хотите передать компоненту сообщения, "This is some top secret info.". Вот как это сделать:

<Example message="This is some top secret info." />

// Как видите, чтобы передать информацию компоненту, вам нужно имя для информации, которую вы хотите передать.

// В приведенном выше примере мы использовали имя message. Вы можете использовать любое имя, какое захотите.

// Если вы хотите передать информацию, которая не является строкой, заключите ее в фигурные скобки. Вот как передать массив:

<Greeting myInfo={["top", "secret", "lol"]} />

//В следующем примере мы передаем несколько фрагментов информации в <Greeting />. Значения, не являющиеся строками, заключаются в фигурные скобки:

<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />

//========================================================================

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Maxim' />, 
  document.getElementById('app')
);

// Hi there, Maxim

//=========================================================================

