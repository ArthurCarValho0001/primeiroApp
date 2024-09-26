import './App.css'
import Footer from './components/header/Footer'
import Header from './components/header'

function App() {

return (
    <>
      <Header />
    <section className='container'>
    <div className='apresentacao'>
      <p>
        Olá, Sou <br/>
        <span>Arthur Carvalho</span> <br/>
        Sou aluno do CerradoTech
      </p>
      <button className='btn btn-blue'>
        Aprenda a desenvolver Apps
      </button>
    </div>
    <figure>
      <img className= "img-home" src='/img/undraw_undraw_video_games_x1tr_-1-_4p16.svg' alt='imagem de Home' />
    </figure>
    </section>
      <Footer />
     </>
  )
}

export default App
