/* import Macaron from "./Macaron";
import cakes from "./cakes.json"; //배열이 저장되어 있다.

function App() {
  return ( //함수 호출한 곳에 값을 되돌려 준다.
    <>
      <div className="App">"안녕하세요!!"</div> 
      {cakes.map(cake => (
        <Macaron
          propsid ={cake.id} //객체.속성값 (props이름 = {객체.속성값})
          propsname={cake.name}
          propsimage={cake.images} //props형태로 데이터를 객체 형태로 전달한다.
        />
      ))}
      { 변수를 만들때는 {}를 사용한다.}
    </> 자식이 2개 있을떄는 부모로 묶어줘야 된다. (자식을 묶어주는 부모가 div로 묶어줘도 되지만 빈 요소로 묶어줄 수 있다. 이때 빈 요소는 css를 적용할 수 없다.)
  );
}
 컴포넌트를 만드는 방법 2가지 (함수형 컴포넌트, class형 컴포넌트)
 cra로 만든 기본

export default App; export내보내다 default App은 어디서든 사용할 수 있다.


 div className -> html의 div가 아닌 JSX이다.(HTML을 js로 만든것) 기존의 html 문법과 다르다. html문법이 아니다. JSX의 문법이다. */

 import React, { Component } from 'react'
import Food from './Food';
 
 class App extends Component {
  constructor(props){

    super(props);
    console.log('constructor함수는 클래스형 컴포넌트가 생성할 때 호출됨');
  }

  componentDidMount(){
    console.log('componentDidMount함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수');
    // 영화api 불러오기(데이터불러오기)
  }

  componentDidUpdate(){
    console.log('componentDidUpdate함수는 화면이 새로 그려지면 즉 업데이트 되면 실행되는 함수');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount함수는 컴포넌트가 죽을때 실행되는 함수');
  }

  state ={
    count:0,
    sum:0,
    avg:0,
  } //render함수 밖에서 작성

  add=()=>{
    console.log('더하기');
    // this.state.count = 1;
    // this.setState({count:1});
    this.setState({count: this.state.count + 1}); //기존의 값에서 +1해라
  }
  minus=()=>{
    console.log('빼기');
    // this.state.count = -1;
    // this.setState({count:-1});
    this.setState(current => (//current는 this.state이다. (여러개로 할때는 parameter로 만든다.)
      {
        count:current.count -1,
        sum:current.sum -2,
        avg:current.avg -3,
      }
    ))
  }

   render() { //화면에 그려지는 것
    const {count,sum,avg} = this.state; //구조 분해 할당 (App컴포넌트의 state의 속성을 구조분해 할당으로 만든다.)
     return (
      <>
       <div>App</div>
       <div>
        <h1>현재 숫자는 {count} 입니다.</h1> {/* 속성값을 바로 넣는다. */}
        {/* <h1>현재 숫자는 {this.state.count} 입니다.</h1> 구조분해 할당을 사용하지 않을때 이렇게 작성해야 된다. */}
        <button onClick={this.add}>더하기</button> 
        {/* 현재 App 컴포넌트에 add라는 함수를 실행하라 */}
        <button onClick={this.minus}>빼기</button>
       </div>
       <Food/>
      </>
     )
   }
 }
 
 export default App