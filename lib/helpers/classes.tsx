const isTrusy = (value: any) => value;

function classes(...names: (string | undefined)[]) {
	return names.filter(isTrusy).join(" ");
}

export default classes;
