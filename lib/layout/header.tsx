import React from "react";
import { scopedClassMaker } from "../helpers/index";

const scopedClass = scopedClassMaker("simple-layout");
const sc = scopedClass;

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FunctionComponent<HeaderProps> = props => {
	const { className, children, ...restProps } = props;
	return (
		<header className={sc("header", className)} {...restProps}>
			{children}
		</header>
	);
};

export default Header;
