const exist = (...args: any[]): boolean => {
	return args.every(a => a != null);
};

export default exist;
