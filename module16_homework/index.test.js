import { repeatWord }  from './index.js';

describe("testing 1 arg repeatWord() - word", () => {
    it('("test",2) != "Test1test2"', () => {
        expect(repeatWord("test",2)).not.toBe("Test1test2");
    });
    it('(" test ",4) == " test1 test2 test3 test4"', () => {
        expect(repeatWord(" test",4)).toBe(" test1 test2 test3 test4");
    });
    it('("tEesT",3) == "tEesT1tEesT2tEesT3"', () => {
        expect(repeatWord("tEesT", 3)).toBe("tEesT1tEesT2tEesT3");
    });
    it('("333",3) == "333333333333"', () => {
        expect(repeatWord("333", 3)).toBe("333133323333");
    });
});

describe("testing 2 arg repeatWord() - count", () => {
    it('("test", 1) != test0', () => {
        expect(repeatWord("test", 1)).not.toBe(("test0"));
    });
    it('("test", "3") == "test1test2test3"', () => {
        expect(repeatWord("test", 3)).toBe("test1test2test3");
    });
    it('("test", 8) == "test1test2test3test4test5test6test7test8"', () => {
        expect(repeatWord("test", 8)).toBe("test1test2test3test4test5test6test7test8");
    });
    it('("test", 2,45) != "test1test2test2.45"', () => {
        expect(repeatWord("test", 2,45)).not.toBe(("test1test2test2.45"));
    });
});

describe("Input's error message", () => {
    it('("test", 0) != undefined', () => {
        expect(repeatWord("test", 0)).toBeDefined();
    });
    it('("test", "3") return "Множитель не является числом"', () => {
        expect(repeatWord("test", "3")).toBe("Множитель не является числом"); // Вот тут опущение по сценарию (как будто бы): нет проверки на число
    });
    it('("test", 0) return "Множитель меньше одного"', () => {
        expect(repeatWord("test", 0)).toBe("Множитель меньше одного");
    });
    it('("test", -4) return "Множитель меньше одного"', () => {
        expect(repeatWord("test", 0)).toBe("Множитель меньше одного");
    });
    it('("test") return "Не хватает аргументов в функции"', () => {
        expect(repeatWord("test")).toBe("Не хватает аргументов в функции");
    });
});