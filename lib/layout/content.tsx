import React from "react";
import { scopedClassMaker } from "../helpers/index";

const scopedClass = scopedClassMaker("simple-layout");
const sc = scopedClass;

interface ContentProps extends React.HTMLAttributes<HTMLElement> {}

const Content: React.FunctionComponent<ContentProps> = props => {
	const { className, children, ...restProps } = props;
	return (
		<main className={sc("content", className)} {...restProps}>
			{children}
		</main>
	);
};

export default Content;
