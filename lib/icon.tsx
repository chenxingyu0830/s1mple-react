import React from 'react';
import './importAllIcons';
import './icon.scss';

interface IconProps {
    name: string;
    onClick: () => void;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className="simple-icon">
            <use xlinkHref="#wechat" onClick={props.onClick}></use>
        </svg>
    )
}

export default Icon;