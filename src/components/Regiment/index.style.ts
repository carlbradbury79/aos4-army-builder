import styled from "styled-components";

export const RegimentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  padding: 1rem;
  position: relative;
  background-color: white;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const RemoveRegimentButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
