import './Card.sass'

interface Advice {
  id: number,
  advice: string
}

interface CardProps {
  advice: Advice;
}


const Card: React.FC<CardProps> = ({advice}) => {
  // const num: number = 117;
  // const text: string = "It is easy to sit up and take notice, what's" +
  //   " difficult is getting up and taking action."
  return (
    <section className='card'>
      <div className="card__container">
        <h1 className="card__title">{`${'advice'.toUpperCase()} #${advice.id}`}</h1>
        <p className="card__text">
          "{advice.advice}"
        </p>
        <div className="card__pattern"></div>
      </div>
      <button className='card__button'></button>
    </section>
  )
}

export default Card