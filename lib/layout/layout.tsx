import React, { ReactElement } from "react";
import { scopedClassMaker } from "../helpers/index";
import Aside from "./aside";
import "./index.scss";

const scopedClass = scopedClassMaker("simple-layout");
const sc = scopedClass;

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {}

const Layout: React.FunctionComponent<LayoutProps> = props => {
	const { className, children, ...restProps } = props;
	const hasAside = (children as Array<ReactElement>).some(child => child.type === Aside);

	return (
		<section className={sc("", hasAside && sc("has-aside"), className)} {...restProps}>
			{children}
		</section>
	);
};

export default Layout;
