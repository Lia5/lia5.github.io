import { describe, it, expect } from 'vitest';

import { type IUser, filterLength, type IStringFilterFn } from './lesson27.js';

describe('IUser', () => {
  it('Should allow creating a user without optional phoneNumber', () => {
    const user: IUser = {
      id: 1,
      name: 'Olena',
      email: 'my@email.com',
      createdAt: '18-11-2026',
    };

    expect(user.phoneNumber).toBeUndefined();
  });

  it('Should allow creating a user with optional phoneNumber', () => {
    const user: IUser = {
      id: 1,
      name: 'Olena',
      email: 'my@email.com',
      phoneNumber: '+380501234567',
      createdAt: '18-11-2026',
    };

    expect(user.phoneNumber).toBe('+380501234567');
  });

  it('Should allow changing regular properties', () => {
    const user: IUser = {
      id: 123,
      name: 'Olena',
      email: 'my@email.com',
      createdAt: '18-11-2026',
    };

    user.id = 456;
    user.name = 'Anna';

    expect(user.id).toBe(456);
    expect(user.name).toBe('Anna');
  });

  it('Should not allow changing readonly createdAt', () => {
    const user: IUser = {
      id: 123,
      name: 'Olena',
      email: 'my@email.com',
      createdAt: '18-11-2026',
    };

    // @ts-expect-error Property is readonly
    user.createdAt = '18-11-2036';
  });

  it('Should not allow a user without required fields', () => {
    // @ts-expect-error Missing required properties: email, createdAt
    const user: IUser = {
      id: 1,
      name: 'Olena',
    };

    expect(user.id).toBe(1);
  });
});

describe('StringFilterFn', () => {
  it('Should return only strings longer than criterion', () => {
    const result = filterLength(['a', 'abc', 'abcdef', 'ab'], '2');

    expect(result).toEqual(['abc', 'abcdef']);
  });

  it('Should return a new array and not mutate the original', () => {
    const input = ['one', 'three', 'five'];
    const result = filterLength(input, '3');

    expect(result).toEqual(['three', 'five']);
    expect(result).not.toBe(input);
    expect(input).toEqual(['one', 'three', 'five']);
  });

  it('Should return an empty array if nothing matches', () => {
    expect(filterLength(['a', 'bb'], '5')).toEqual([]);
  });

  it('Should be assignable to StringFilterFn', () => {
    const fn: IStringFilterFn = filterLength;

    expect(fn(['abcd'], '3')).toEqual(['abcd']);
  });
});
