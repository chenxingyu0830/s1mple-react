function scopedClassMaker(prefix: string) {
	return function x(name?: string) {
		return [prefix, name].filter(Boolean).join("-");
	}
}


const isTrusy = (value: any) => value;

function classes(...names: (string | undefined)[]) {
	return names.filter(isTrusy).join(" ");
}

export { scopedClassMaker, classes };
