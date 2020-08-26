import React from 'react';
import './importAllIcons';
import './icon.scss';

interface IconProps {
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className="simple-icon">
            <use xlinkHref="#wechat"></use>
        </svg>
    )
}

export default Icon;