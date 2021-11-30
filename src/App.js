import "./styles.css";
import Button from "@mui/material/Button";
import styled from "styled-components";

const Div = styled.div`
  margin: 10px;
  padding: 1rem;
  display: flex;
  background: yellow;
  gap: 0.5rem;
  flex-direction: column;
`;

export default function App() {
  return (
    <div className="App">
      <Div>
        <div>
          <Button variant="contained">Hello World1</Button>
        </div>

        <div>
          <Button variant="outlined">Hello World2</Button>
        </div>
        <div>
          <Button variant="text">Hello World3</Button>
        </div>
        <div>
          <Button variant="text">Hello World3</Button>
        </div>
      </Div>
    </div>
  );
}
