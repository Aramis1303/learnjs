import {test1, test2, testSum, testSumToContext} from "../../../src/lib/MyTest";


describe("MyTest", () => {

    describe("test1", () => {
        test('2 ** 2 to equal 4', () => {
            expect(test1(2, 2)).toBe(4);
        });
    });

    describe("test2", () => {
        test('2 ** 2 to equal 4', () => {
            expect(test2({value: 2, pow: 2})).toBe(4);
        });

        test('without params should return 0', () => {
            expect(test2()).toBe(0);
        });

        test('with empty params should return default value', () => {
            // @ts-ignore
            expect(test2({})).toBe(0);
        });
    });

    describe("testSum", () => {
        test('case 1', () => {
            expect(testSum(2, 2, 3, 4, 1)).toBe(12);
        });
    });

    describe("testSumToContext", () => {
        test('case 2', () => {
            const a = {value: 2};
            testSumToContext.call(a, 2, 2, 3, 4, 1);
            expect(a.value).toBe(12);
        });
    });
    
});

