import Card from '../Card/Card';
import './App.sass';
import { api } from '../../utils/Api';
import { useEffect, useState, } from 'react';

const App = () => {
  const [advice, setAdvice] = useState({id: 0, advice: '...'})
  useEffect(() => {
    api.getAdvice()
      .then((res) => {
        setAdvice(res.slip)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div className="App">
      <Card advice={advice} />
    </div>
  );
}

export default App;
