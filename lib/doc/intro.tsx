import React from 'react';

const IntroDoc: React.FunctionComponent = () => {

    return (
        <section className="markdown">
            <h1>介绍</h1>
            <div>
                <h2>描述说明</h2>
                <p>s1mple-react 是一款基于 React 和 TypeScript 的 UI 组件库。</p>
                <p>这个项目基于并仿照 Ant Design 造轮子，对过去使用各种组件库的问题和想法进行一个总结，以自己的想法实现组件，同时学习并使用 React Hooks。</p>
                <p>代码上传至 Github 及 npm 、yarn。具体代码可直接参考github。</p>
            </div>
        </section>
    );
};

export default IntroDoc;
