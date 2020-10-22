export function repeatWord(word, count) {
    if(word === undefined || count === undefined) return "Не хватает аргументов в функции";
    if(count < 1) return "Множитель меньше одного";
    let count2 = 0,
        word2 = "";
    while (count2 < count) {
        count2++;
        word2+=word + count2;
    }
    return word2;
}