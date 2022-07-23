
import { sortInNewAlphabet } from "./app"

const NEW_ALPHABET = 'zyxwvutsrqponmlkjihgfedcba'

describe('sortInNewAlphabet', () => {


    test('expect undefined alphabet to return undefined', () => {
        const list = ['miel', 'extraterrestre', 'al', 'automovil', 'auto', 'revestir']
        const sortedList = sortInNewAlphabet(list, undefined);
        expect(sortedList).toBe(undefined);
    });

    test('expect undefined list to return undefined', () => {
        const sortedList = sortInNewAlphabet(undefined, NEW_ALPHABET);
        expect(sortedList).toBe(undefined);
    });

    test('expect to sort ignoring undefined values', () => {
        const list = ['miel', 'extraterrestre', 'al', undefined, 'automovil', 'auto', 'revestir']
        const expectedList = ['revestir', 'miel', 'extraterrestre', 'auto', 'automovil', 'al']

        const sortedList = sortInNewAlphabet(list, NEW_ALPHABET);
        expect(sortedList).toEqual(expectedList);
    });

    test('expect empty list', () => {
        const list = []
        const expectedList = []
        const sortedList = sortInNewAlphabet(list, NEW_ALPHABET);
        expect(sortedList).toEqual(expectedList);
    });

    test('expect sorted with new alphabet', () => {
        const list = ['miel', 'extraterrestre', 'al', 'automovil', 'auto', 'revestir']
        const expectedList = ['revestir', 'miel', 'extraterrestre', 'auto', 'automovil', 'al']
        const sortedList = sortInNewAlphabet(list, NEW_ALPHABET);
        expect(sortedList).toEqual(expectedList);
    });

    test('expect sorted with new alphabet with repetitions', () => {
        const list = ['miel', 'extraterrestre', 'al', 'automovil', 'auto', 'revestir', 'al']
        const expectedList = ['revestir', 'miel', 'extraterrestre', 'auto', 'automovil', 'al', 'al']
        const sortedList = sortInNewAlphabet(list, NEW_ALPHABET);
        expect(sortedList).toEqual(expectedList);
    });

    test('expect to not match', () => {
        const list = ['miel', 'revestir']
        const expectedList = ['miel', 'revestir']
        const sortedList = sortInNewAlphabet(list, NEW_ALPHABET);
        expect(sortedList).not.toEqual(expectedList);
    });
});

