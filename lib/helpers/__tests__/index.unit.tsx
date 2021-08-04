import { scopedClassMaker } from "../index";

describe("测试scopedClassMaker", () => {
	it("传空字符串", () => {
		const result = scopedClassMaker("prefix")("");
		expect(result).toEqual("prefix");
	});
	it("传第一个参数", () => {
		const result = scopedClassMaker("prefix")("suffix");
		expect(result).toEqual("prefix-suffix");
	});
	it("传两个参数，并且第二个为一个空字符串", () => {
		const result = scopedClassMaker("")("", "");
		expect(result).toEqual("");
	});
	it("传两个参数，并且第二个为一个非空字符串", () => {
		const result = scopedClassMaker("")("", "aaa");
		expect(result).toEqual("aaa");
	});
	it("传三个参数", () => {
		const result = scopedClassMaker("")("", "aaa", "bbb");
		expect(result).toEqual("aaa bbb");
	});
});
