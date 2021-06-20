export function test1(a: number, b: number) {
    return a ** b;
}


export function test2(params: {value: number, pow: number} = {value: 0, pow: 0}) {
    //if (!params) throw new Error("params is required");

    if (params.value === undefined) {
        return 0;
    }

    const {value = 0, pow = 0} = params;

    if(pow === 0) return value;

    return Math.pow(params.value, params.pow);
}

export function testSum(baseValue: number, ...args: number[]) {
    return args.reduce((accumulator, currentValue) => accumulator + currentValue, baseValue);
}

export function testSumToContext(this: {value: number}, baseValue: number, ...args: number[]) {
    //this.value = args.reduce((accumulator, currentValue) => accumulator + currentValue, baseValue);
    this.value = baseValue;
    args.forEach((v) => {
        this.value += v;
    });
}