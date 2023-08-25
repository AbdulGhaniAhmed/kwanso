import styled from "styled-components";

export const StyledCardContainer = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 16px;
  max-width: 300px;
  position: relative;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #fff;
  }
`;

export const StyledCardTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

export const StyledCardDescription = styled.p`
  font-size: 1rem;
  margin: 8px 0;
`;

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  top: 0px;
  right: 0px;
`;

export const StyledDeleteButton = styled.button`
  background-color: #4caf50;
  color: red;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1;
  }
`;
