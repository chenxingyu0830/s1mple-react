import React from 'react';
import ButtonDemo1 from './button.demo1';
import ButtonDemo2 from './button.demo2';
import ButtonDemo3 from './button.demo3';
import ButtonDemo4 from './button.demo4';
import { AttrProps, createAttrTable, Demo, DemoProps } from '../common';

const ButtonExample: React.FunctionComponent = () => {
    const demos: DemoProps[] = [
        {
            code: require('!!raw-loader!./button.demo1.tsx').default,
            demo: <ButtonDemo1 />,
            title: '按钮主题',
            intro: `按钮主题分别有：默认按钮、主按钮(primary)、成功按钮(success)、信息按钮(info)、警告按钮(warning)、危险按钮(danger)。`
        }, {
            code: require('!!raw-loader!./button.demo2.tsx').default,
            demo: <ButtonDemo2 />,
            title: '按钮模式',
            intro: `按钮模式可以通过\`mode\`属性设置为\`plain\`朴素按钮或者\`text\`文字按钮。`
        }, {
            code: require('!!raw-loader!./button.demo3.tsx').default,
            demo: <ButtonDemo3 />,
            title: '按钮尺寸',
            intro: `按钮可以通过设置\`size\`为\`large\`或\`small\`分别将按钮设置为大、小尺寸。若不设置，则尺寸默认为中。`
        }, {
            code: require('!!raw-loader!./button.demo4.tsx').default,
            demo: <ButtonDemo4 />,
            title: '禁用状态',
            intro: `添加\`disabled\`属性即可让按钮处于不可用状态，同时按钮样式也会改变。当\`mode="text"\`时，无论是什么主题都一律变成灰色字体，除此之外的按钮则是颜色加深灰度。`
        }
    ];
    const attrs: AttrProps[] = [
        {
            name: 'theme',
            intro: '按钮主题。可以在不同场景需求下使用对应的主题，若不设置则为默认样式',
            type: '"primary" | "success" | "info" | "warning" | "danger"'
        }, {
            name: 'shape',
            intro: '按钮形状。若不设置，则为默认的矩形',
            type: '"circle" | "round"'
        }, {
            name: 'mode',
            intro: `按钮模式`,
            type: '"text" | "plain"'
        }, {
            name: 'size',
            intro: `按钮尺寸。若不设置则为默认中等大小`,
            type: '"large" | "small"'
        }, {
            name: 'icon',
            intro: `设置按钮的图标类型。具体可选值参考[Icon 图标](#/icon)`,
            type: 'string'
        }
    ];
    return (
        <section className="markdown doc-button">
            <h1 className="markdown-title">Button 按钮</h1>
            <div>
                <h2>描述说明</h2>
                <p>按钮用来触发一些操作。</p>
            </div>
            <div>
                <h2>代码演示</h2>
                {demos.map((demo, idx) => (
                    <Demo key={idx} {...demo} />
                ))}
            </div>
            <div>
                <h2>属性</h2>
                {createAttrTable(attrs)}
            </div>
        </section>
    );
};

export default ButtonExample;