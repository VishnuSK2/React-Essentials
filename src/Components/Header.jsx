import reactImg from '../assets/react-core-concepts.png'
import './Header.css'

const reactDescription =['Fundamental','Crucial','Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header(){
    const description= reactDescription[getRandomInt(2)]
    return(
      <header>
        <img 
        src={reactImg} 
        alt="" />
        <h1>React Essential</h1>
        <p>
          {description} React concepts you will nee for almost any app you are going to build!
        </p>
      </header>
    );
  }

  export default Header