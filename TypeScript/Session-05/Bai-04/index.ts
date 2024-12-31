class Person {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  get getName() {
    return this.name;
  }
}

class Customer extends Person {
  email: string;
  phone: string;
  constructor(id: number, name: string, email: string, phone: string) {
    super(id, name);
    this.email = email;
    this.phone = phone;
  }
  get getContactDetails() {
    return this.phone;
  }
}

class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }

  get getPosition() {
    return this.position;
  }
}

class Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  constructor(id: number, name: string, price: number, quantity: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  sell(quantity: number){
    this.quantity -= quantity;
  }

  restock(quantity: number){
    this.quantity += quantity;
  }

  getDetails(){
    console.log(`ID: ${this.id} - Name: ${this.name} - Price: ${this.price} Quantity: ${this.quantity}`);
  }
}

class Invoice {}

class StoreManager {}

class Main {}
