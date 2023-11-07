import {useState} from 'react';
import HandButton from './HandButton.js';
import HandIcon from './HandIcon.js';
import { compareHand, generateRandomHand } from './utils';
import resetImg from './assets/ic-reset.svg';
import './App.css'

const INITIAL_VALUE = 'rock';

function getResult(me, other) {
    const comparison = compareHand(me, other);
    if (comparison > 0) return '승리';
    if (comparison < 0) return '패배';
    return '무승부';
  }

function App(){
    const [hand, setHand] = useState('rock');
    const [otherHand, setOtherHand] = useState('rock');
    const [gameHistory, setGameHistory] = useState([]);
    const [score, setScore] = useState(0);
    const [otherScore, setOtherScore] = useState(0);
    const [bet, setBet] = useState(1);

    const handleButtonClick = (nextHand) => {
        const nextOtherHand = generateRandomHand();
        const nextHistoryItem = getResult(nextHand, nextOtherHand);
        const comparison = compareHand(nextHand, nextOtherHand);
        setHand(nextHand);
        setOtherHand(nextOtherHand);
        setGameHistory([...gameHistory, nextHistoryItem]);
        if (comparison > 0) setScore(score + bet);
        if (comparison < 0) setOtherScore(otherScore + bet);
    };

    const handleClearClick = () => {
        setHand(INITIAL_VALUE);
        setOtherHand(INITIAL_VALUE);
        setGameHistory([]);
        setScore(0);
        setOtherScore(0);
        setBet(1);
    };

    const handleBetChange = (e) => {
        let num = Number(e.target.value);
        if (num > 9) num %= 10; // 1과 9 사이의 숫자로 만들어 줌
        if (num < 1) num = 1;
        num = Math.floor(num);
        setBet(num);
    };

    return(
        <div className="App">
            <h1 className="App-heading">가위바위보</h1>
            <img onClick={handleClearClick} className="App-reset" src={resetImg} alt="초기화" />
            <div className="App-scores">
                <div className="Score">
                    <div className="Score-num">{score}</div>
                  <div className="Score-name">나</div>
                </div>
                <div className="App-versus">:</div>
                <div className="Score">
                    <div className="Score-num">{otherScore}</div>
                    <div className="Score-name">상대</div>
                </div>
            </div>
            <div className="Box App-box">
                <div className="Box-inner">
                    <div className="App-hands">
                        <div className="Hand">
                        <HandIcon className="Hand-icon" value={hand} />
                    </div>
                    <div className="App-versus">VS</div>
                        <div className="Hand">
                        <HandIcon className="Hand-icon" value={otherHand} />
                    </div>
                </div>
                <div className="App-bet">
                <span>배점</span><input type="number" value={bet} min={1} max={9} onChange={handleBetChange}/><span>배</span>
                </div>
                <div className="App-history">
                    <h2>승부기록</h2>
                    <p>{gameHistory.join(', ')}</p>
                </div>
            </div>
        </div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
    </div>
    );
}

export default App;