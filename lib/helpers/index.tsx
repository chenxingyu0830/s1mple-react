function scopedClassMaker(prefix: string) {
	return (suffix?: string, ...extra: Array<string | undefined | false>) => {
		return [[prefix, suffix].filter(Boolean).join("-")]
			.concat(
				extra
					.filter(Boolean) // 过滤 undefined && ''
					.map(String) // 转成 string[]
			)
			.join(" ")
			.trim();
	};
}

const isTrusy = (value: any) => value;

function classes(...names: (string | undefined)[]) {
	return names.filter(isTrusy).join(" ");
}

export { scopedClassMaker, classes };
