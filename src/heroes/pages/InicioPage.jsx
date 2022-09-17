import marvel from '../../assets/logo-marvel.png'
import dc from '../../assets/logo-dc.png'
import { useNavigate } from 'react-router-dom'

export const InicioPage = () => {

  const navigate = useNavigate();

  const onMarvel = () => {
    navigate('/marvel')
  }

  const onDc = () => {
    navigate('/dc')
  }


  return (
    <>
    <h1 className="text-center text-6xl font-bold uppercase mt-12 animate__animated animate__zoomInDown">
      ¿Qué <span className="text-yellow-500"> Team </span> Eres? 🤔
    </h1>
    <div className="flex flex-col justify-center items-center mt-20">
      <img onClick={onMarvel} src={marvel} className="rounded-lg cursor-pointer m-4 animate__animated animate__infinite animate__pulse"/>
      <img onClick={onDc} src={dc} className="rounded-lg cursor-pointer m-4 animate__animated animate__infinite animate__pulse"/>
    </div>
    </>
  )
}
