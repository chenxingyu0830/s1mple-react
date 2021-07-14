import React from "react";
import "./importAllIcons";
import "./icon.scss";
import classes from "./helpers/classes";

interface IconProps extends React.SVGAttributes<SVGSVGElement> {
	name: string;
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
