// Final solution:
const dogFactory = (name, breed, weight) => {
  return {
      _name: name,
      _breed: breed,
      _weight: weight,
      get name() {
          return this._name;
      },
      set name(newName) {
          this._name = newName;
      },
      get breed() {
          return this._breed;
      },
      set breed(newBreed) {
          this._breed = newBreed;
      },
      get weight() {
          return this._weight;
      },
      set weight(newWeight) {
          this._weight = newWeight;
      },
      bark() {
          return 'ruff! ruff!'
      },
      eatTooManyTreats() {
          this._weight++
      }
  }
}

const newDog = dogFactory('Joe', 'Pug', 27)
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }
// console.log(newDog.name('Max'))
console.log(newDog.name)
/*
// Solution to checkpoint 1:
const dogFactory = (name, breed, weight) => {
    return {
          name: name,
          breed: breed,
          weight: weight
    }
}

// Solution to checkpoint 2:
const dogFactory = (name, breed, weight) => {
    return {
          _name: name,
          _breed: breed,
          _weight: weight,
          get name() {
                return this._name;
          },
          set name(newName) {
                this._name = newName;
          },
          get breed() {
                return this._breed;
          },
          set breed(newBreed) {
                this._breed = newBreed;
          },
          get weight() {
                return this._weight;
          },
          set weight(newWeight) {
                this._weight = newWeight;
          }
    }
}

*/