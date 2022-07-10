import React from "react";
import styled from "styled-components";

interface BttnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "anotherVariant";
}

const Bttn = styled.button<BttnProps>`
  background-color: ${({ theme, variant }) =>
    theme.colors[variant ?? "primary"].bg};
  color: ${({ theme, variant }) => theme.colors[variant].fg};
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  ${({ disabled, theme }) =>
    disabled &&
    `
      cursor: initial;
      background-color: ${theme.colors.disabled} !important;
      color: ${theme.colors.disabled};
`};
`;

export const Button = ({ title, variant = "primary", ...props }: any) => (
  <Bttn variant={variant} {...props}>
    {title}
  </Bttn>
);
