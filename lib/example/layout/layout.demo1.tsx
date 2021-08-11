import React from "react";
import Layout, { Aside, Header, Content, Footer } from "../../layout/layout";

const LayoutDemo1: React.FunctionComponent = () => {
    return (
        <div className="layout-demo-1">
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>

            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Aside>Aside</Aside>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>

            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Content>Content</Content>
                    <Aside>Aside</Aside>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>

            <Layout>
                <Aside>Aside</Aside>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default LayoutDemo1;