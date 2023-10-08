import { api } from '../../utils/Api';
import Card from '../Card/Card';
import './App.sass';
// import { api } from '../../utils/Api';
import { useEffect, useState, } from 'react';

const App = () => {
  const [advice, setAdvice] = useState({ id: 0, advice: '...' })
  const [getAnAdvice, setGetAnAdvice] = useState(false)
  useEffect(() => {
    api.getAdvice()
      .then(res => setAdvice(res.slip))
      .catch(err => console.log(err))
  }, [getAnAdvice])
  return (
    <div className="App">
      <Card advice={advice} getAnAdvice={getAnAdvice} setGetAnAdvice={setGetAnAdvice} />
    </div>
  );
}

export default App;
