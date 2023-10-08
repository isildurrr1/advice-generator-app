import './Card.sass'
import type { Dispatch, SetStateAction } from 'react'

interface Advice {
  id: number,
  advice: string
}

interface CardProps {
  advice: Advice,
  getAnAdvice: boolean,
  setGetAnAdvice: Dispatch<SetStateAction<boolean>>
}


const Card: React.FC<CardProps> = ({advice, getAnAdvice, setGetAnAdvice}) => {
  const onBtnClick = () => {
    setGetAnAdvice(!getAnAdvice)
  }
  return (
    <section className='card'>
      <div className="card__container">
        <h1 className="card__title">{`${'advice'.toUpperCase()} #${advice.id}`}</h1>
        <p className="card__text">
          "{advice.advice}"
        </p>
        <div className="card__pattern"></div>
      </div>
      <button className='card__button' onClick={onBtnClick} ></button>
    </section>
  )
}

export default Card