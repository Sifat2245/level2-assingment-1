const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  if (typeof value === "boolean") {
    return !value;
  }

  return value;
};

const getLength = (value: string | any[]): number => {
  if (typeof value === "string") {
    return value.length;
  }

  if (Array.isArray(value)) {
    return value.length;
  }

  return value;
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Item = {
  title: string;
  rating: number;
};

const filterByRating =(item: Item[]) =>{
    return item.filter(item => item.rating >=4 && item.rating <= 5);
}


type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean
}

const filterActiveUsers = (users: User[]) =>{
    return users.filter(user => user.isActive === true)
}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean
}

const printBookDetails = (book: Book) =>{
    const availability = book.isAvailable ? 'Yes' : 'No';

     console.log( `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);
}


const getUniqueValues = (arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] => {
  const result: (string | number)[] = [];

  const exists = (array: (string | number)[], value: string | number): boolean => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < arr1.length; i++) {
    if (!exists(result, arr1[i])) {
      result.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!exists(result, arr2[i])) {
      result.push(arr2[i]);
    }
  }

  return result;
}


type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice =(products: Product[]): number =>{
  if (products.length === 0) return 0;

  return products
    .map(product => {
      const total = product.price * product.quantity;

      if (product.discount) {
        return total * (1 - product.discount / 100);
      }
      return total;
    })
    .reduce((acc, curr) => acc + curr, 0);
}
