import React, { ReactNode, useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from "prism-react-renderer/themes/vsLight";
import ReactMarkdown from 'react-markdown';

export interface DemoProps {
    demo: ReactNode;
    title: string;
    intro: string;
    code: string;
}

const Demo: React.FunctionComponent<DemoProps> = (props) => {
    const [showCode, setShowCode] = useState(false);
    const code = (
        <Highlight {...defaultProps} theme={theme} code={props.code} language="typescript">
            {({ className, tokens, getLineProps, getTokenProps }) => (
                <pre className={className}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
    return (
        <div className="demo-box">
            <div className="demo-demo">
                {props.demo}
            </div>
            <div className="demo-intro">
                <h4>{props.title}</h4>
                {createMarkdown(props.intro)}
            </div>
            <div className="demo-buttons">
                {/* TODO: 更换按钮[copy]和[code] */}
                <button onClick={() => setShowCode(!showCode)}>Code</button>
            </div>
            <div className="demo-code">
                {showCode && code}
            </div>
        </div>
    );
}

const createMarkdown = (source: string, className?: string): ReactNode =>
(
    <ReactMarkdown
        source={source}
        className={['rmd', className].filter(Boolean).join(' ')}
    />
);

export interface AttrProps {
    name: string;
    intro: string;
    type: string;
    default?: string;
}

const createAttrTable = (attributes: AttrProps[]): ReactNode => {
    const createAttrRows = (attrs: AttrProps[]): ReactNode[] => attrs.map((attr, index) =>
        <tr key={index}>{createAttrCols(attr)}</tr>);
    const createAttrCols = (attr: AttrProps): ReactNode[] => Object.values(attr).map((val, index) =>
        <td key={index}>{createMarkdown(val)}</td>);
    return (
        <table className="attrs-table">
            <thead>
                <tr>
                    <th>属性名</th>
                    <th>说明</th>
                    <th>类型</th>
                    <th>默认值</th>
                </tr>
            </thead>
            <tbody>
                {createAttrRows(attributes)}
            </tbody>
        </table>
    );
};

export { Demo, createAttrTable, createMarkdown };