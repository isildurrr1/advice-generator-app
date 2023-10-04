import './Card.sass'

const Card = () => {
  const advice: string = 'advice';
  const num: number = 117;
  const text: string = "It is easy to sit up and take notice, what's" +
    " difficult is getting up and taking action."
  return (
    <section className='card'>
      <div className="card__container">
        <h1 className="card__title">{`${advice.toUpperCase()} #${num}`}</h1>
        <p className="card__text">
          "{text}"
        </p>
        <div className="card__pattern"></div>
      </div>
      <button className='card__button'></button>
    </section>
  )
}

export default Card