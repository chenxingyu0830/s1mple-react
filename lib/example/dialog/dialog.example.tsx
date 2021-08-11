import React from 'react';
import DialogDemo1 from './dialog.demo1';
import DialogDemo2 from './dialog.demo2';
import { AttrProps, createAttrTable, createMarkdown, Demo, DemoProps } from '../common';

const DialogExample: React.FunctionComponent = () => {
	const demos: DemoProps[] = [
		{
			code: require('!!raw-loader!./dialog.demo1.tsx').default,
			demo: <DialogDemo1 />,
			title: '基本用法',
			intro: `使用\`<Dialog />\`标签声明一个对话框，\`visible\`属性控制对话框是否可见。可以通过\`title\`属性来设置标题。`
		}, {
			code: require('!!raw-loader!./dialog.demo2.tsx').default,
			demo: <DialogDemo2 />,
			title: '内置方法的调用',
			intro: `可以使用内置的 API 调用对话框，例如\`Dialog.alert()\`和\`Dialog.confirm()\`。\`animationTrigger\`属性用来设置动画的触发方式，默认为\`auto\`自动触发。`
		}
	];
	const attrs: AttrProps[] = [
		{
			name: 'visible',
			intro: '对话框是否可见',
			type: 'boolean'
		}, {
			name: 'title',
			intro: '标题',
			type: 'string | ReactNode'
		}, {
			name: 'footer',
			intro: `底部内容。若不需要默认的底部按钮，可设为\`footer={null}\``,
			type: 'null | ReactNode'
		}, {
			name: 'closeable',
			intro: '是否显示右上角的关闭按钮',
			type: 'boolean',
			default: 'true'
		}, {
			name: 'maskCloseable',
			intro: `点击蒙层是否允许关闭`,
			type: 'boolean',
			default: 'true'
		}, {
			name: 'onOk',
			intro: '点击确定的回调',
			type: 'function(e)'
		}, {
			name: 'onCancel',
			intro: `点击遮罩层或右上角X或取消按钮的回调`,
			type: 'function(e)'
		}
	];

	const apiAttrs: AttrProps[] = [
		{
			name: 'content',
			intro: `对话框的内容`,
			type: 'ReactNode'
		}, {
			name: 'title',
			intro: `对话框的标题`,
			type: 'string'
		}, {
			name: 'confirmButtonText',
			intro: `对话框确定按钮的文字`,
			type: 'string',
			default: '"确定"'
		}, {
			name: 'cancelButtonText',
			intro: `对话框确定按钮的文字（在\`Dialog.alert\`中无效）`,
			type: 'string',
			default: '"取消"'
		}, {
			name: 'onOk',
			intro: `点击确定的回调，参数为关闭对话框函数`,
			type: 'function'
		}, {
			name: 'onCancel',
			intro: `点击取消的回调，参数为关闭对话框函数（在\`Dialog.alert\`中无效）`,
			type: 'function'
		}
	];

	return (
		<section className="markdown doc-button">
			<h1 className="markdown-title">Dialog 对话框</h1>
			<div>
				<h2>描述说明</h2>
				{createMarkdown(`需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
				另外当需要一个简洁的确认框询问用户时，可以使用\`Modal.confirm()\`等语法糖方法。`, 'rmd2')}
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
			<div>
				<h2>API</h2>
				{createAttrTable(apiAttrs)}
			</div>
		</section>
	);
};

export default DialogExample;
