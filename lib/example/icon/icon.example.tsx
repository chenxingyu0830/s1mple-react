import React from "react";
import { AttrProps, createAttrTable, Demo, DemoProps } from "../common";
import IconDemo1 from "./icon.demo1";

const IconExample: React.FunctionComponent = () => {
    const demos: DemoProps[] = [
        {
            code: require('!!raw-loader!./icon.demo1.tsx').default,
            demo: <IconDemo1 />,
            title: '基本用法',
            intro: `使用\`<Icon />\`标签声明组件，指定图标对应的\`name\`属性。可以通过\`fill\`属性来改变图标的颜色，也可以通过\`style\`属性来添加 CSS 样式。`
        }
    ];
    const attrs: AttrProps[] = [
        {
            name: 'name',
            intro: '图标名称，遵循图标的命名规范',
            type: 'string'
        }, {
            name: 'className',
            intro: '自定义类名',
            type: 'string',
        }
    ];

    return (
        <section className="markdown">
            <h1 className="markdown-title">Icon 图标</h1>
            <div className="markdown-describe">
                <h2>描述说明</h2>
                <p>语义化的矢量图形。</p>
            </div>
            <div className="markdown-demos">
                <h2>代码演示</h2>
                {demos.map((demo, idx) => (
                    <Demo key={idx} {...demo} />
                ))}
            </div>
            <div className="markdown-attrs">
                <h2>属性</h2>
                {createAttrTable(attrs)}
            </div>
        </section>
    )
}

export default IconExample;