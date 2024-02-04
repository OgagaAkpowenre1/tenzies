import Die from './components/die';
import React from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
import './App.css';

function App() {
  const [newDice, setNewDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const allHeld = newDice.every(die => die.isHeld);
    const firstValue = newDice[0].value;
    const allSameValue = newDice.every(die => die.value === firstValue)
    if(allHeld && allSameValue){
      setTenzies(true)
    }
  }, [newDice])

    function generateNewDie(){
      return {
          value: (Math.ceil(Math.random() * 6)), 
          isHeld: false,
          id: nanoid()}
    }

    function allNewDice(){
      const array = []
      for(let i = 0; i < 10;i++){
        array.push(generateNewDie())
        }
    return array;
  }

  function rollDice(){
    if(!tenzies){
      setNewDice(oldDice => oldDice.map(die => {
      return die.isHeld ?
        die :
        generateNewDie()
    }))
    } else{
      setTenzies(false)
      setNewDice(allNewDice())
    }
  }

  function holdDice(id){
    setNewDice(oldDice => oldDice.map(die => {
      return die.id === id ? 
        {...die, isHeld : !die.isHeld} :
        die
    }))
  }
  
  const diceArray = newDice.map(die => {
    return <Die 
    key={die.id}
    number={die.value} 
    isHeld={die.isHeld}  
    holdDice={() => holdDice(die.id)} />
  })

  return (
    <div className="App">
      <main>
        {tenzies && <Confetti />}
        <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='dice'>
          {diceArray}
        </div>
        <button className='roll-dice' onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
      </main>
    </div>
  );
}

export default App;
