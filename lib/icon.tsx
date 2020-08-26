import React from 'react';
import './importAllIcons';
import './icon.scss';

interface IconProps {
    name: string;
    onClick: React.MouseEventHandler;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className="simple-icon">
            <use xlinkHref={`#${props.name}`} onClick={props.onClick}></use>
        </svg>
    )
}

export default Icon;