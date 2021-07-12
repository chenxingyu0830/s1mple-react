import React from "react";
import "./importAllIcons";
import classes from "./helpers/classnames";

interface IconProps extends React.SVGAttributes<SVGSVGElement> {
	name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
	const { className, ...restProps } = props;
	return (
		<svg className={classes("s1mple-icon", className)} {...restProps}>
			<use xlinkHref="#wechat"></use>
		</svg>
	);
};

export default Icon;
