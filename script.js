// 1. Создайте объект класса Employee и выведите его в консоль.

class Employee {
  name;
  age;
}

let employee = new Employee();
employee.name = "Donald";
employee.age = 21;

console.log(employee);
console.log(employee.name);
console.log(employee.age);

// 2.  Создайте объект класса Car и выведите его в консоль.

class Car {
  year;
  country;
  color;
}

let car = new Car();

car.year = 1984;
car.country = "England";
car.color = "blue";

console.log(car);
console.log(car.country);

// 3.  Создайте объект класса Book и выведите его в консоль.

class Book {
  author;
  pages;
}

let book = new Book();

book.author = "A. S. Pushkin";
pages = 1200;

console.log(book);
console.log(book.author);

// 4. Создайте несколько объектов класса Manager.

class Manager {}

let manager1 = new Manager();
let manager2 = new Manager();

manager1.name = "John";
manager2.name = "Alex";

console.log(manager1);
console.log(manager2);
