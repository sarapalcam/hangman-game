import '../styles/index.scss';
import '../styles/App.scss';
import { useState, useEffect } from 'react';
import object from '../services/fetch';
import Header from './Header';
import ErrorLetters from './ErrorLetters';
import SolutionLetters from './SolutionLetters';
import Dummy from './Dummy';
import Form from './Form';
import Footer from './Footer';
import { Route, Switch } from 'react-router-dom';
import Instructions from './Intructions';
import Options from './Options';
import Loading from './Loading';

function App() {
  const [lastLetter, setLastLetter] = useState('');
  const [userLetter, setUserLetters] = useState([]);
  const [word, setWord] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const wordLetters = word.split('');

  useEffect(() => {
    setIsLoading(true);
    object
      .getWordFromApi()
      .then((dataFromApi) => setWord(dataFromApi.body.Word));
      setIsLoading(false);

  }, []);

  const setLetters = (name, value) => {
    if (name === 'lastLetter') {
      setLastLetter(value);
    } else if (name === 'userLetter') {
      setUserLetters(value);
    }
  };

  const restartGame = () => {
    object
    .getWordFromApi()
    .then((dataFromApi) => setWord(dataFromApi.body.Word));
  }

  const addWord = (value) =>{
    setLastLetter('');
    setUserLetters([]);
    setWord(value)
  }

  return (
    <div className="page">
      <Header />

      <main className="main">
        <section>
          <Switch>
            <Route exact path="/">
              <Loading isLoading={isLoading}></Loading>
              <SolutionLetters
                userLetter={userLetter}
                wordLetters={wordLetters}
              />
              <ErrorLetters userLetter={userLetter} wordLetters={wordLetters} />
              <Form
                lastLetter={lastLetter}
                userLetter={userLetter}
                setLetters={setLetters}
              />
            </Route>

            <Route path='/instructions'>
              <Instructions />
            </Route>

            <Route path='/options'>
              <Options addWord={addWord} word={word}/>
            </Route>
          </Switch>
        </section>
        <Dummy
          userLetter={userLetter}
          wordLetters={wordLetters}
          word={word}
          setLetters={setLetters}
          restartGame={restartGame}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
