  function allNewDice(){
    const array = [];
    for(let i = 0; i < 10;i++){
    array.push(Math.floor(Math.random() * (6-1) + 1));
    }
  }

  allNewDice()