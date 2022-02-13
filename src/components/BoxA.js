import ButtonX from "./ButtonX";

function createArrayOfButtons() {
  var matrix = [];
  for (var k = 0; k < 3; k++) matrix[k] = new Array(3);
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      matrix[i].push(<ButtonX text="" />);
    }
    matrix[i].push(<br />);
  }
  return matrix;
}

function BoxA() {
  return <div>{createArrayOfButtons()}</div>;
}

export default BoxA;
