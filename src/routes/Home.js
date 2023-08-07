import React, { Component } from 'react'
import Movie from '../components/Movie'
import axios from 'axios' //설치된것을 사용할 때 import로 불러온다.
import '../styles/Home.css'

export class Home extends Component {
  state = {
    isLoading:true, //로딩이 먼저 들어오고, 영화 데이터(정보)가 다 들어오면 isLoading을 false로 바꾸면서 사라진다.
    movies:[], //비어있는 배열
  }

  getMovies = async () => {
    const { //object객체에 data객체가 있고 그 안에 data라는 객체가 들어가 있고, 그 안에 mobies라는 속성에 영화정보 20개가 저장되어 있다. (배열이 나오고 객체 20개가 있다.)
      data: {
        data: {movies}
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count')//axios는 터미널 이기 때문에 설치 해야된다. (서버에 있는 데이터 파일을 불러온다.)

    // 사이트에 있는 json파일을 불러온다. json파일 중에서 (?가 쿼리 질문) 장르는 애니메이션이고, 정렬은 좋아요 순으로 정리된 것을 불러와라
    console.log('movies',movies);
    this.setState({isLoading:false,movies}) //키:키값 이름이 동일하면(속성과 속성값이 같으면 속성 이름 하나만 작성해도 된다.)
  }//비동기식 방식(데이터를 불러오는동안 기다렸다가 처리한다.) 서버에서 데이터를 가져올때 기다려야 하기 떄문에 async await을 사용한다.
  

  componentDidMount(){ //영화 데이터 시점
    this.getMovies(); //함수를 호출해
    // setTimeout(() => {
    //   this.setState({isLoading : false}); //isLoading의 값을 바꾸면 바로 render가 자동 실행된다.
    // },6000);
  }
  render() {
    const{isLoading, movies} = this.state; //구조분해할당
    return (
      <section className='container'>
        {isLoading ? 
        <div className='loader'>
          <span className='loader_text'>'Loading...'</span>
        </div> : 
        <div className='movies'>
          {movies.map((movie,index) => ( //배열값 뿐만아니라 인덱스 값도 가져올 수 있다.
            <Movie
              key = {index}
              id = {movie.id}
              propsimage = {movie.medium_cover_image}
              propstitle = {movie.title}
              propsyear = {movie.year}
              propssummary = {movie.summary}
              propsgenres = {movie.genres}
            />
          ))}
          {/* medium_cover_image, title, year, summary */}
        </div>} 
        {/* 삼항 연산자를 사용해서 만든다. isLoading이 true이면 Loading이 나오고, false이면 movie가 나오게 한다. */}
      </section>
    )
  }
}

export default Home