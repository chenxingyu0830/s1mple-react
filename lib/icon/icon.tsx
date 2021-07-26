import React from "react";
import "./importAllIcons";
import {classes} from "../helpers/index";

import "./icon.scss";

interface IconProps extends React.SVGAttributes<SVGSVGElement> {
	name?: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
	const { className, name, ...restProps } = props;
	return (
		<svg className={classes("simple-icon", className)} {...restProps}>
			<use xlinkHref={`#${name}`}></use>
		</svg>
	);
};

export default Icon;
