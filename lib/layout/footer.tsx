import React from "react";
import { scopedClassMaker } from "../helpers/index";

const scopedClass = scopedClassMaker("simple-layout");
const sc = scopedClass;

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

const Footer: React.FunctionComponent<FooterProps> = props => {
	const { className, children, ...restProps } = props;
	return (
		<footer className={sc("footer", className)} {...restProps}>
			{children}
		</footer>
	);
};

export default Footer;
