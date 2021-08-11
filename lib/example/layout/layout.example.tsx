import React from "react";
import { AttrProps, createAttrTable, Demo, DemoProps } from "../common";
import LayoutDemo1 from "./layout.demo1";

const IconExample: React.FunctionComponent = () => {
    const demos: DemoProps[] = [
        {
            code: require('!!raw-loader!./layout.demo1.tsx').default,
            demo: <LayoutDemo1 />,
            title: '基本用法',
            intro: `典型的页面布局。`
        }
    ];
    const attrs: AttrProps[] = [
		{
			name: 'className',
			intro: '容器\`className\`',
			type: 'string'
		  }, {
			name: 'style',
			intro: '指定样式',
			type: 'CSSProperties'
		  },
    ];

    return (
        <section className="markdown doc-layout">
            <h1 className="markdown-title">Icon 图标</h1>
            <div>
                <h2>描述说明</h2>
                <p>协助进行页面级整体布局。</p>
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
    )
}

export default IconExample;