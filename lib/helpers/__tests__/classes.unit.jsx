import { classes } from "../index";

describe("classes", () => {
	it("接受1个 className", () => {
		const result = classes("a");
		expect(result).toEqual("a");
	});

	it("接受2个 className", () => {
		const result = classes("a", "b");
		expect(result).toEqual("a b");
	});

	it("className 空值判断", () => {
		const result = classes("a", undefined);
		expect(result).toEqual("a");
	});

	it("不传className", () => {
		const result = classes();
		expect(result).toEqual("");
	});
});
