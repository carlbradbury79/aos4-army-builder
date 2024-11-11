import styled from "styled-components";

export const AddRegimentButton = styled.button`
  background: green;
  border: none;
  color: #333;
  font-size: 1rem;
  color: white;
  cursor: pointer;
  position: absolute;
  padding: 0.5rem;
  top: 0rem;
  right: 1rem;
  line-height: 1;
  transition: color 0.2s ease-in-out;
  font-weight: 800;
`;

export const ArmyWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RegimentsWrapper = styled.div`
  margin-bottom: 1rem;
`;
