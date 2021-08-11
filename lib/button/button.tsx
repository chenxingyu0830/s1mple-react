import React from 'react';
import { scopedClassMaker } from "../helpers/index";

import './index.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
  shape?: 'round' | 'circle';
  mode?: 'text' | 'plain';
  size?: 'large' | 'small';
  icon?: string;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const scopedClass = scopedClassMaker("simple-button");
const sc = scopedClass;

const Button: React.FunctionComponent<ButtonProps> = ({ className, theme, shape, mode, size, icon, loading, children, ...restProps }) => {

  return (
    <button
      className={sc('',
        theme && `simple-button-${theme}`,
        mode && `simple-button-${mode}`,
        size && `simple-button-${size}`,
        className)}
      {...restProps}
    >
      {children && <span>{children}</span>}
    </button>);
};

Button.defaultProps = {
  type: 'button',     // fixed: 默认为"button"，以免在form表单中被当作提交按钮
  loading: false,
};

// TODO: Button.Group

export default Button;