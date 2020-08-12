import React from 'react';
import './importAllIcons';

interface IconProps {
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <span>
            <svg>
                <use xlinkHref="#wechat"></use>
            </svg>
        </span>
    )
}

export default Icon;