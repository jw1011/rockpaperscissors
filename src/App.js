// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

//1.박스 2개 (타이틀,사진정보,결과)
//2.가위바위보 버튼 클릭시 게임 진행
//3.버튼을 클릭하면 클릭한 값이 박스에 보임
//4.컴퓨터는 랜덤하게 아이템 선택이 된다.
//5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 승패 결과에 따라 박스 테두리 색이 바뀜(이기면-초록, 지면-빨강, 비기면-검은색)
const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Standard_household_scissors.jpg/220px-Standard_household_scissors.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://cf.shopee.ph/file/92e013b3df97d1972aa7113b852db733",
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    console.log("itemarray는", itemArray);
    let randomItem = Math.random();
    console.log("랜덤벨류는", randomItem);
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} />
        <Box title="Computer" item={computerSelect} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
