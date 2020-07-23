import React from 'react';
import './global.css';
import Routes from './routes';

// JSX (javascript e xml)

function App() {


  return(

    <Routes/>
  );

  // const [counter, setCounter] = useState(0);
  // // define que, mesmo que iniciar novo estado, o valor da variável não sera alterado
  // // counter: valor real da variável
  // // setCounter, função de atualização, resgata o valor da variável a cada atualização

  // function increment() {

  //   setCounter(counter + 1);
  // }

  // return (

  //   <div>

  //     <Header>
  //       Contador: {counter}
  //     </Header>
  //     <button onClick={increment}>Incrementar</button>
  //   </div>
  // );
}

export default App;