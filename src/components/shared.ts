import styled, { css } from "styled-components";

export const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 1.2rem;
  cursor: pointer;
  background: none;
  transition: 150ms ease;
  font-size: 1.6rem;
  text-decoration: none;
`;

export const Button = styled(ButtonBase)<{ variant?: "primary" | "secondary" }>`
  height: 4.6rem;
  font-weight: 900;
  box-shadow: inset 0 -0.2rem 0 0.1rem rgb(0 0 0 / 25%);
  border: 0.1rem solid rgb(0 0 0 / 25%);
  width: 100%;

  &:active {
    box-shadow: inset 0 0.1rem 0 0.1rem rgb(0 0 0 / 25%);
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }

  ${(p) =>
    p.variant === "primary" &&
    css`
      background: #4040c1;
      color: #fff;
    `}

  ${(p) =>
    p.variant === "secondary" &&
    css`
      background: #fff;
      color: #242969;
    `}
`;

export const IconButton = styled(ButtonBase)`
  font-size: 3rem;
  border-radius: 0.6rem;
  padding: 0.5rem;
  color: #545682;

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }

  &:hover:not([disabled]) {
    background-color: #f4f5fa;
  }

  &:active:not([disabled]) {
    background-color: #e1e2e5;
  }
`;

export const VStack = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
