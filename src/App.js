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
  const [result, setResult] = useState("");
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  };

  //user ++ computer tie
  // user가 이기는 경우의 수를 만들어주자

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
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
