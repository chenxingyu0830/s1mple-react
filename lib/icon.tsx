import React from "react";
import "./importAllIcons";
import './icon.scss';
import classes from "./helpers/classnames";

interface IconProps extends React.SVGAttributes<SVGSVGElement> {
	name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
	const { className, ...restProps } = props;
	return (
		<svg className={classes("simple-icon", className)} {...restProps}>
			<use xlinkHref={`#${props.name}`}></use>
		</svg>
	);
};

export default Icon;
