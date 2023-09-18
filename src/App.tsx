import { FC, MouseEvent } from 'react';
/* import {MouseEvent} from 'react'; */
import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  /*   const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    console.log('Hello Im Vasia!');
  };
  const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    console.log('Hello Im Ivan!');
  }; */

  const onClickHandler = (name: string) => {
    console.log(name);
  };

  return (
    <div className="App">
      {/* <button
        onClick={(event) => {
          console.log('Hello');
        }}
      >  MyYouTubeChanel-1{' '}
      </button> */}
      {/*  <button onClick={myFirstSubscriber}>MyYouTubeChanel-1</button>
      <button onClick={mySecondSubscriber}>MyYouTubeChanel-1</button> */}
      <button
        onClick={(event: MouseEvent<HTMLButtonElement>) =>
          onClickHandler('Vasia!')
        }
      >
        MyYouTubeChanel-1
      </button>
      <button onClick={() => onClickHandler('Ivan')}>MyYouTubeChanel-2</button>
      <button onClick={() => onClickHandler('some info')}>
        MyYouTubeChanel-3
      </button>
    </div>
  );
};
