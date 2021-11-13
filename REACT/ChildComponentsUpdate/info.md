Дочерние компоненты обновляют состояние своих родителей
Как дочерний компонент без состояния обновляет состояние родительского компонента? Вот как это работает:

1

Класс родительского компонента определяет вызывающий метод this.setState().

Например, посмотрите на метод Step1.js.handleClick() .

===========================================================================
import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will 
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }
}
===========================================================================

2

Родительский компонент связывает вновь определенный метод с текущим экземпляром компонента в своем конструкторе. Это гарантирует, что когда мы передаем метод дочернему компоненту, он все равно обновит родительский компонент.

Для примера посмотрите Step2.js в конце constructor()метода.

import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will 
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }

  // The stateful component class passes down
  // handleClick to a stateless component class:
  render() {
    return (
      <ChildClass onClick={this.handleClick} />
    );
  }
}
=====================================================================================

3

После того, как родитель определил метод, который обновляет его состояние и привязан к нему, родитель затем передает этот метод дочернему элементу.

Посмотрите в Step2.js , на propв строке 28.

4

Ребенок получает функцию передается вниз, и использует его в качестве обработчика события.

Посмотрите в Step3.js . Когда пользователь нажимает на <button></button>, запускается событие click. Это вызовет переданную функцию, которая обновит состояние родителя.

import React from 'react';
import ReactDOM from 'react-dom';

export class ChildClass extends React.Component {
  render() {
    return (
      // The stateless component class uses
      // the passed-down handleClick function,
      // accessed here as this.props.onClick,
      // as an event handler:
      <button onClick={this.props.onClick}>
        Click Me!
      </button>
    );
  }
}