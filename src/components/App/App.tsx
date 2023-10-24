import { api } from '../../utils/Api';
import Card from '../Card/Card';
import './App.sass';
import { useEffect, useState, } from 'react';

const App = () => {
  const [advice, setAdvice] = useState({ id: 0, advice: '...' })
  const [getAnAdvice, setGetAnAdvice] = useState(false)
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    api.getAdvice()
      .then(res => {
        setLoading(true)
        setAdvice(res.slip)
        setLoading(false)
      })
      .catch(err => console.log(err))
    setLoading(false)
  }, [getAnAdvice])
  return (
    <div className="App">
      <Card advice={advice} getAnAdvice={getAnAdvice} setGetAnAdvice={setGetAnAdvice} loading={loading} />
    </div>
  );
}

export default App;
