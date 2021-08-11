import React from 'react';

const InstallDoc: React.FunctionComponent = () => {
    return (
        <section className="markdown">
            <h1>安装</h1>
            <div>
                <h2>提示</h2>
                <p>注意，s1mple-react 采用 React Hooks,仅支持 React 16.8.0 后的版本。如果你在使用 React 16.8.0 之前的版本，可以去看看别的库。</p>
            </div>
            <div>
                <h2>npm</h2>
                <p>使用 npm 安装。</p>
                <pre>npm install -D s1mple-react</pre>
            </div>
            <div>
                <h2>yarn</h2>
                <p>使用 yarn 安装。</p>
                <pre>yarn add -D s1mple-react</pre>
            </div>
        </section>
    );
};

export default InstallDoc;
