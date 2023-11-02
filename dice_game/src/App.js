import {useState} from 'react';
import Dice from './Dice';
import Button from './Button';

// 1 ~ n까지의 숫자중 랜덤으로 뽑아줌
function random(n){
    return Math.ceil(Math.random() * n);
}

function App() {
    const [num, setNum] = useState(1);
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);

    const handelRollClick = () => {
        const nextNum = random (6);
        setNum(nextNum);
        setSum(sum + nextNum);
        setGameHistory([...gameHistory, nextNum]);
        // 새로운 값을 만들어서 변경 해줘야한다.
    }

    const handelClearClick = () => {
        setNum(1);
        setNum(0);
        setGameHistory([]);
    }

    return (
    <div>
        <div>
            <Button onClick={handelRollClick}>던지기</Button>
            <Button onClick={handelClearClick}>처음부터</Button>
        </div>
        <div>
            <h2>나</h2>
            <Dice color="red" num={num}/>
            <h2>총점</h2>
            <p>{sum}</p>
            <h2>기록</h2>
            <p>{gameHistory.join(', ')}</p>
        </div>
    </div>

    );
}

export default App;