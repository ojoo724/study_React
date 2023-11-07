import {useState} from 'react';
import Button from './Button';
import Board from './Board';
import logoImg from './assets/logo.png';
import './App.css';

// 1 ~ n까지의 숫자중 랜덤으로 뽑아줌
function random(n){
    return Math.ceil(Math.random() * n);
}

function App() {
    const [myHistory, setMyHistory] = useState([]);
    const [otherHistory, setOtherHistory] = useState([]);

    const handelRollClick = () => {
        const nextMyNum = random (6);
        const nextOtherNum = random (6);
        setMyHistory([...myHistory, nextMyNum]);
        setOtherHistory([...otherHistory, nextOtherNum]);
    }

    const handelClearClick = () => {
        setMyHistory([]);
        setOtherHistory([])
    }

    return (
        <div className="App">
        <div>
            <img className="App-logo" src={logoImg} alt="주사위게임 로고" />
            <h1 className="App-title">주사위게임</h1>
        <div>
          <Button className="App-button" onClick={handelRollClick} color="blue">던지기</Button>
          <Button className="App-button" onClick={handelClearClick} color="red">처음부터</Button>
        </div>
      </div>
      <div className="App-boards">
        <div className="Board App-board">
          <h2 className="Board-heading">나</h2>
          <Board name="나" color="blue" gameHistory={myHistory}/>
        </div>
        <div className="Board App-board">
          <h2 className="Board-heading">상대</h2>
          <Board name="상대" color="red" gameHistory={otherHistory}/>
        </div>
      </div>
    </div>
    );
}

export default App;