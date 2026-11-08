const concatName = (first: string, last?: string) => {
  if (!last) {
    return first;
  }

  return `${first} ${last}`;
};

const result = concatName('John', 'Doe');
const result2 = concatName('John');

// Expected 2 arguments, but got 1.
const add = (a: number, b: number): number => {
  return a + b;
  // Operator '+' cannot be applied to types 'boolean' and 'boolean'.
};

type User = {
  id: string;
  name: string;
};

const modifyUser = (
  user: User[],
  id: string,
  makeChange: (u: User) => User,
) => {
  // Parameter 'makeChange' implicitly has an 'any' type.
  return user.map(u => {
    if (u.id === id) {
      return makeChange(u);
    }

    return u;
  });
};

const users: User[] = [
  { id: '1', name: 'John' },
  { id: '2', name: 'Jane' },
];

modifyUser(users, '1', user => {
  return { ...user, name: 'Waqas' };
});

modifyUser(
  users,
  '1',
  // @ts-expect-error
  user => {
    return { ...user, name: 123 };
  },
);
