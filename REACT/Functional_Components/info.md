Функциональные компоненты без сохранения состояния
В редакторе кода взгляните на Example.js . Первый Exampleкомпонент определяется как класс JavaScript, но это не обязательно! В React мы также можем определять компоненты как функции JavaScript - мы называем их функциональными компонентами, чтобы отличать их от компонентов класса .

В последних версиях React функциональные компоненты могут делать все, что могут делать компоненты класса. Однако в большинстве случаев функциональные компоненты предлагают более элегантный и лаконичный способ создания компонентов React. В этом уроке основное внимание будет уделено преобразованию компонента класса в компонент функции и добавлению свойств, которые доступны во всех версиях React.

Сравните Exampleкомпонент класса и компонент Exampleфункции. Для большинства основных компонентов функции, все , что вам нужно сделать , это удалить начало render() {и окончание }из render()метода:

render() { // Delete this
  return <h1>Hello</h1>
} // Delete this
Другими словами, функциональный компонент должен возвращать тот же JSX, который изначально был возвращен render()методом.

====================================================================================

// A component class written in the usual way:
export class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// The same component class, written as a stateless functional component:
export const MyComponentClass = () => {
  return <h1>Hello world</h1>;
}

// Works the same either way:
ReactDOM.render(
	<MyComponentClass />,
	document.getElementById('app')
);

========================================================================================

Функциональные компоненты и реквизиты
Как и любой компонент, функциональные компоненты могут получать информацию через props.

Чтобы получить к ним доступ props, дайте вашему функциональному компоненту параметр с именем props. В теле функции, вы можете получить доступ к реквизиту , используя этот шаблон: props.propertyName. Вам не нужно использовать thisключевое слово.

export function YesNoQuestion (props) {
  return (
    <div>
      <p>{props.prompt}</p>
      <input value="Yes" />
      <input value="No" />
    </div>
  );
}
 
ReactDOM.render(
  <YesNoQuestion prompt="Have you eaten an apple today?" />,
  document.getElementById('app');
);
В приведенном выше примере мы передаем значение «Вы сегодня ели яблоко?» как promptопора при рендеринге YesNoQuestion.

=================================================================================

import React from 'react';
import ReactDOM from 'react-dom';

export const NewFriend = (props) => {
		return (
      <div>
        <img src={props.src} />
      </div>
    );
	}


ReactDOM.render(
  <NewFriend src="https://content.codecademy.com/courses/React/react_photo-squid.jpg" />,
  document.getElementById('app')
);

====================================================================

// A component class written in the usual way:
export class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// The same component class, written as a stateless functional component:
export const MyComponentClass = () => {
  return <h1>Hello world</h1>;
}

// Works the same either way:
ReactDOM.render(
	<MyComponentClass />,
	document.getElementById('app')
);

===============================================================

import React from 'react';
import ReactDOM from 'react-dom';

// <Friend /> as function component
export const Friend = () => {
  return <img src='https://content.codecademy.com/courses/React/react_photo-octopus.jpg' />;
}

// <Friend /> as class component
// export class Friend extends React.Component {
// 	render() {
// 		return <img src='https://content.codecademy.com/courses/React/react_photo-octopus.jpg' />;
// 	}
// }

ReactDOM.render(
	<Friend />,
	document.getElementById('app')
);
====================================================================================

