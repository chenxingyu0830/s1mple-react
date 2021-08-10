import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import Layout, { Header, Aside, Content, Footer } from "./lib/layout/layout";
import * as Example from "./lib/example/index";
import "./example.scss";

const ROUTERS = [
	{
		key: "icon",
		name: "Icon 图标",
		component: Example.Icon,
	},
	// {
	// 	key: "button",
	// 	name: "Button 按钮",
	// 	component: Example.Button,
	// },
	{
		key: "dialog",
		name: "Dialog 对话框",
		component: Example.Dialog,
	},
	{
		key: "layout",
		name: "Layout 布局",
		component: Example.Layout,
	},
];

ReactDOM.render(
	<Router>
		<Layout className="examples-doc">
			<Header className="header">
				<div className="logo">
					<img src={require('./logo.png')} alt="s1mple-ui" />
				</div>
			</Header>
			<Layout className="body">
				<Aside className="aside">
					<p className="menu-title">组件</p>
					<ul className="sub-menu">
						{ROUTERS.map(router => (
							<li key={router.key} className="menu-item">
								<NavLink to={`/${router.key}`}>{router.name}</NavLink>
							</li>
						))}
					</ul>
				</Aside>
				<Content>
					{ROUTERS.map(router => (
						<Route key={router.key} path={`/${router.key}`} component={router.component} />
					))}
				</Content>
			</Layout>
			<Footer className="footer">
				123
			</Footer>
		</Layout>
	</Router>,
	document.querySelector("#root")
);
