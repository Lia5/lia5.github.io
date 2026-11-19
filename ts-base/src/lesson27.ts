export interface IUser {
  id: number;
  name: string;
  email: string;
  phoneNumber?: string;
  readonly createdAt: string;
}

export const myUser:IUser = {
  id: 123,
  name: "Olena",
  email: "my@email.com",
  createdAt: "18-11-2026"
}

// myUser.id = 456;
// myUser.createdAt = "18-11-2036"


export interface IStringFilterFn {
  (array: string[], criterion: string): string[]
}
export const filterLength:IStringFilterFn = (array, criterion) => {
  const minLength = Number(criterion);
  const result: string[] = [];
  for (const item of array) {
    if(item.length > minLength) {
      result.push(item)
    }
  }
  return result;
}