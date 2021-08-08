import React, { ReactElement } from "react";
import "./index.scss";
import { scopedClassMaker } from "../helpers/index";
import Aside from "./aside";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

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
export { Aside, Header, Content, Footer };
