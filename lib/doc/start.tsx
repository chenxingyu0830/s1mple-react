import React from 'react';

const IntroDoc: React.FunctionComponent = () => {

    return (
        <section className="markdown">
            <h1>开始使用</h1>
            <div>
                <h2>描述说明</h2>
                <p>你可以选择直接引入或全局安装在 React 项目 中。</p>
                <p>然后在你的代码中写入下面的代码</p>
                <pre>{`import {Button} from "s1mple-react"`}</pre>
                <p>就可以使用本项目中提供的组件了。</p>
            </div>
        </section>
    );
};

export default IntroDoc;
