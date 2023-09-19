import { FC, MouseEvent } from 'react';
import { Button } from './components/Button';
/* import {MouseEvent} from 'react'; */
import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  /*   const Button1Foo = () => {
    console.log('I am Vasia!');
  }; */
  const Button1Foo = (subscriber: string, age: number, addres: string) => {
    console.log(subscriber, age, addres);
  };
  const Button2Foo = () => {
    console.log('I am Ivan');
  };

  const Button3Foo = () => {
    console.log('I am Stupid Button');
  };

  return (
    <div className="App">
      {/*   <Button name={'MyYouTubeChanel-1'} callBack={Button1Foo} /> */}
      <Button
        name={'MyYouTubeChanel-1'}
        callBack={() => Button1Foo('I am Vasia!', 21, 'live in Minsk')}
      />
      <Button name={'MyYouTubeChanel-2'} callBack={Button2Foo} />
      <Button name={'Delete'} />
      <Button name={'Stupid Button'} callBack={Button3Foo} />
    </div>
  );
};
