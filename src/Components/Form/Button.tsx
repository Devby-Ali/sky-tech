import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";


// For common props
type BaseButtonProps = {
  className?: string;
  children: React.ReactNode;
};

// For default button
type ButtonProps = BaseButtonProps & 
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: never;
    href?: never;
  };

// For link button
type LinkButtonProps = BaseButtonProps & {
  to: string;
  href?: never;
  type?: never;
  onClick?: never;
  disabled?: never;
};

// For anchor button
type AnchorButtonProps = BaseButtonProps & 
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    to?: never;
    href: string;
    type?: never;
    onClick?: never;
    disabled?: never;
  };

// For union type of all possible cases
type ButtonComponentProps = ButtonProps | LinkButtonProps | AnchorButtonProps;

// Type guard
const isLinkButton = (props: ButtonComponentProps): props is LinkButtonProps => {
  return 'to' in props && typeof props.to === 'string';
};

const isAnchorButton = (props: ButtonComponentProps): props is AnchorButtonProps => {
  return 'href' in props && typeof props.href === 'string';
};

const Button: React.FC<ButtonComponentProps> = (props) => {
  if (isLinkButton(props)) {
    return (
      <Link to={props.to} className={props.className}>
        {props.children}
      </Link>
    );
  } else if (isAnchorButton(props)) {
    return (
      <a href={props.href} className={props.className}>
        {props.children}
      </a>
    );
  } else {
    return (
      <button
        className={props.className}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    );
  }
}


export default Button;
