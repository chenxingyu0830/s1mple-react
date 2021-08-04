import React from "react";
import Aside from "./aside";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Layout from "./layout";

export default function () {
	return (
		<div>
			<div>
				<h1>第一个例子</h1>
                <Layout>
					<Header>Header</Header>
					<Content>Content</Content>
					<Footer>Footer</Footer>
				</Layout>
			</div>
			<div>
				<h1>第二个例子</h1>
				<Layout>
					<Header>Header</Header>
					<Layout>
						<Aside>Aside</Aside>
						<Content>Content</Content>
					</Layout>
					<Footer>Footer</Footer>
				</Layout>
			</div>
			<div>
				<h1>第三个例子</h1>
                <Layout>
					<Header>Header</Header>
					<Layout>
						<Content>Content</Content>
						<Aside>Aside</Aside>
					</Layout>
					<Footer>Footer</Footer>
				</Layout>
			</div>
			<div>
				<h1>第四个例子</h1>
                <Layout>
					<Aside>Aside</Aside>
					<Layout>
						<Header>Header</Header>
						<Content>Content</Content>
						<Footer>Footer</Footer>
					</Layout>
				</Layout>
			</div>
		</div>
	);
}
