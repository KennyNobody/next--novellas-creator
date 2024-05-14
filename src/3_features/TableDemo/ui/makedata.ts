import { faker } from '@faker-js/faker';
import {
    typeOptions,
    placeOptions,
    productOptions,
    departmentsOptions,
} from './makeselectors';

export type Person = {
    title: string;
    department: string;
    place: string;
    product: string;
    type: string;
    subRows?: Person[];
};

const range = (len: number) => {
    const arr: number[] = [];
    for (let i = 0; i < len; i += 1) {
        arr.push(i);
    }
    return arr;
};

const newPerson = (): Person => ({
    title: faker.person.jobTitle(),
    department: faker.helpers.shuffle<Person['department']>(
        departmentsOptions,
    )[0]!,
    place: faker.helpers.shuffle<Person['place']>(
        placeOptions,
    )[0]!,
    product: faker.helpers.shuffle<Person['product']>(
        productOptions,
    )[0]!,
    type: faker.helpers.shuffle<Person['type']>(
        typeOptions,
    )[0]!,
});

export function makeData(...lens: number[]) {
    const makeDataLevel = (depth = 0): Person[] => {
        const len = lens[depth]!;
        return range(len).map((): Person => ({
            ...newPerson(),
            subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
        }));
    };

    return makeDataLevel();
}
