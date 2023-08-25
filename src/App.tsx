import { BrowserRouter, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import CreateTask from "./pages/create-task/createTask";
import ListTask from "./pages/list-task/listTask";

function App() {
  const AppContainer = styled.div`
    text-align: center;
  `;

  return (
    <BrowserRouter>
      <main
        style={{
          height: "100dvh",
          width: "100dvw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Routes>
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/list-tasks" element={<ListTask />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
