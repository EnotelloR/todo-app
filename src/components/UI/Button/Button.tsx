import React from 'react';
import cx from 'classnames'

import styles from './Button.module.css'

interface ButtonProps extends React.ComponentProps<'button'>{
    active?: boolean
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<ButtonProps> = ({children, onClick, active= false, ...props}) => {
    return (
        <button onClick={onClick} className={cx(styles.button, {[styles.button_active]: active})} {...props}>{children}</button>
    );
};

export default Button;
