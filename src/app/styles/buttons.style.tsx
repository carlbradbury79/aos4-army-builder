import styled from "styled-components";

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #333;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  padding: 0;
  line-height: 1;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #ff0000;
  }

  &:focus {
    outline: none;
  }
`;

interface InlineButtonProps {
  borderColor?: string;
}

export const InlineButton = styled.button<InlineButtonProps>`
  background: transparent;
  border: none;
  color: ${(props) => props.borderColor || "#333"};
  font-size: 1.5rem;
  cursor: pointer;
  position: relative;
  line-height: 1;
  transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;

  &:hover {
    color: #ff0000;
    border-color: #ff0000;
  }

  &:focus {
    outline: none;
  }
`;
