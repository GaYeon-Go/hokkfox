// Macaron.js
// 클래스형 컴포넌트 rce

/* import React, { Component } from 'react' //react모듈안의 Component 클래스형 Component를 가져온다.(세부적인 것을 할때는 {}를 사용한다.)

class Macaron extends Component {
  render() { //화면에 그려지는 것
    return ( //되돌려준다.
      <div>Macaron</div>
    )
  }
}

export default Macaron */

/* Macaron 컴포넌트 이름 */
/* extends Component 우리가 만든 클래스는 최상위 react에서 만든 클래스 Component 기능을 상속,확장해서 사용한다. */

// 클래스형 컴포넌트의 특징 reder함수 안에 return값이 있다.

//새로만든 컴포넌트는 App 컴포넌트 안에 넣는다.

// 함수형 컴포넌트 rfce 현재 리액트는 함수형 컴포넌트를 사용한다.
import React from 'react'

/* function Macaron(props) {
  console.log(props);
  return (
    <div>
      <h1>No. {props.propsid}</h1> 
      <h2>Name: {props.propsname}</h2>
      <img src={props.propsimage} alt={props.propsname} width={200} height={200}/>
    </div>
  )
} //함수형 컴포넌트의 특징 reder함수 없이 바로 return으로 나온다.

// <h1>No. {props.propsid}</h1>이렇게 {}로 블락을 하는 이유는 변수이기 때문이다. props객체에 propsid의 속성값을 내보내라 */

/*function Macaron(props) {
  console.log(props);
  const {propsname, propsid, propsimage} = props;
  //구조분해할당 => 객체에서 속성을 분해할 수 있다. 그 속성값을 바로 내보내 줄 수 있다. 객체.속성 이렇게 안하고, 바로 속성만 지정해서 나올 수 있다.
  return (
    <div>
      <h1>No. {propsid}</h1> 
      <h2>Name: {propsname}</h2>
      <img src={propsimage} alt={propsname} width={200} height={200}/>
    </div>
  )
}*/

function Macaron({propsname, propsid, propsimage}) { //부모 컴포넌트에서 구조분해할당 값을 바로 가져와서 사용(주로 많이 사용한다.)
  return (
    <div>
      <h1>No. {propsid}</h1> 
      <h2>Name: {propsname}</h2>
      <img src={propsimage} alt={propsname} width={200} height={200}/>
    </div>
  )
}

export default Macaron //내보내주는것(내보내줘야  import해서 컴포넌트를 사용할 수 있다.)