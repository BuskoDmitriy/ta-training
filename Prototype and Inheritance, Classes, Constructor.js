let animal = {
  move() {
    return 'Движение';
  }
};

let cat = {
  __proto__: animal
};

console.log(cat.move());
