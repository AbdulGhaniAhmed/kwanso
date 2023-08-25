import React, { useEffect, useState } from "react";
import {
  StyledCardContainer,
  StyledCardTitle,
  StyledCheckbox,
  StyledDeleteButton,
} from "../../components/card/card.style";

const ListTask: React.FC = () => {
  const [taskList, setTaskList] = useState<any>([]);
  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);

  const handleCheckBox = (isSelected: boolean, taskId: number) => {
    if (isSelected) {
      setSelectedTasks([...selectedTasks, taskId]);
    } else {
      setSelectedTasks(selectedTasks.filter((id) => id !== taskId));
    }
  };

  const handleDelete = () => {
    // Create a new array with tasks that are not in the selectedTasks array.
    const updatedTaskList = taskList.filter(
      (task: any) => !selectedTasks.includes(task.id)
    );

    setTaskList(updatedTaskList);
    localStorage.setItem("tasks", JSON.stringify(updatedTaskList));

    setSelectedTasks([]);
  };

  useEffect(() => {
    // To retrieve data
    const data: string | null = localStorage.getItem("tasks");
    if (data) {
      const parsedData = JSON.parse(data);
      setTaskList(parsedData);
    }
  }, []);

  return (
    <>
      {taskList.map((data: { id: number; name: string }) => (
        <StyledCardContainer key={data?.id}>
          <StyledCheckbox
            onChange={(e) => handleCheckBox(e.target.checked, data?.id)}
          />
          <StyledCardTitle>{data?.name}</StyledCardTitle>
        </StyledCardContainer>
      ))}
      <StyledDeleteButton onClick={handleDelete}>Delete</StyledDeleteButton>
    </>
  );
};

export default ListTask;
