import React from "react";
import { scopedClassMaker } from "../helpers/index";

const scopedClass = scopedClassMaker("simple-layout");
const sc = scopedClass;

interface AsideProps extends React.HTMLAttributes<HTMLElement> {}

const Aside: React.FunctionComponent<AsideProps> = props => {
	const { className, children, ...restProps } = props;
	return (
		<aside className={sc("aside", className)} {...restProps}>
			{children}
		</aside>
	);
};

export default Aside;
