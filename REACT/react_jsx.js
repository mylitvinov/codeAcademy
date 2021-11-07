import React from 'react';
import ReactDOM from 'react-dom';

// Copy code here:

/*ReactDOM это имя библиотеки JavaScript. Эта библиотека содержит несколько методов, специфичных 
для React, и все они так или иначе работают с DOM .

Перемещение немного вправо, и вы можете увидеть один из ReactDOMметодов «S:
 ReactDOM.render().

ReactDOM.render()это наиболее распространенный способ рендеринга JSX. Он принимает выражение JSX, 
создает соответствующее дерево узлов DOM и добавляет это дерево в DOM. Таким образом на экране 
появляется выражение JSX.
*/
//==================================================================================

ReactDOM.render(<h1>Hello world</h1>, document.getElementById('root'));

// Write code here:
const myList = (
  <ul>
    <li>Maxim</li>
    <li>Litvinov</li>
  </ul>
);

ReactDOM.render(
  myList,
   document.getElementById('app')
  );

  //====================================================================================

  

