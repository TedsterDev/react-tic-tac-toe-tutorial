function Square({ value, subtext }) {
  function handleClickEvent() {
    console.log(value + " button was clicked!");
  }
  return (
    <button className="square" onClick={handleClickEvent}>
      {value}
    </button>
  );
}

function addTwoNums(a, b) {
  const displayMessage = "The sum of " + a + " and " + b + " is: ";
  return (
    <div>
      <p>{a + b}</p>
      <p>{a - b}</p>
    </div>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}
