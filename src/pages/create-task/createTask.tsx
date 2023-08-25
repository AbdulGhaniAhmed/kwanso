import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "../../components/Form/form.style";

const CreateTask: React.FC = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<any>([]);
  const [prevTasks, setPrevTasks] = useState<any>([]);

  const handleSubmit = () => {
    if (task) {
      const newTask = { id: new Date().getTime().toString(), name: task };
      setTasks([...tasks, newTask]);
      localStorage.setItem("tasks", JSON.stringify([...prevTasks, newTask]));
      setTask("");
    }
    // Redirect to the task list page.
    navigate("/list-tasks");
  };

  useEffect(() => {
    // To retrieve data
    const data: string | null = localStorage.getItem("tasks");
    if (data) {
      const parsedData = JSON.parse(data);
      setPrevTasks(parsedData);
    }
  }, []);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>task:</StyledLabel>
      <StyledInput
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <StyledButton type="submit" disabled={!task}>
        Create
      </StyledButton>
    </StyledForm>
  );
};

export default CreateTask;
