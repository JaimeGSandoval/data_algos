class CreateArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new CreateArray();
newArray.push('kage');
newArray.push('bunshin');
newArray.push('no');
newArray.push('jutsu');
newArray.push('chidori');
console.log(newArray);
