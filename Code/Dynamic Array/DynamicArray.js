class DynamicArray {
  constructor() {
    this.capacity = 10;
    this.length = 0;
    this.array = new Array(this.capacity);
  }

  resize(newCapacity) {
    const newArray = new Array(newCapacity);
    for (let i = 0; i < this.length; i++) {
      newArray[i] = this.array[i];
    }
    this.array = newArray;
    this.capacity = newCapacity;
  }

  push(element) {
    if (this.length === this.capacity) {
      this.resize(2 * this.capacity);
    }
    this.array[this.length] = element;
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      throw new Error("Empty array");
    }
    const element = this.array[this.length - 1];
    this.array[this.length - 1] = undefined;
    this.length--;
    if (this.length === this.capacity / 4) {
      this.resize(this.capacity / 2);
    }
    return element;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds");
    }
    return this.array[index];
  }

  set(index, element) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds");
    }
    this.array[index] = element;
  }

  insert(index, element) {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds");
    }
    if (this.length === this.capacity) {
      this.resize(2 * this.capacity);
    }
    for (let i = this.length - 1; i >= index; i--) {
      this.array[i + 1] = this.array[i];
    }
    this.array[index] = element;
    this.length++;
  }

  delete(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds");
    }
    for (let i = index; i < this.length - 1; i++) {
      this.array[i] = this.array[i + 1];
    }
    this.array[this.length - 1] = undefined;
    this.length--;
    if (this.length === this.capacity / 4) {
      this.resize(this.capacity / 2);
    }
  }

  getSize() {
    return this.length;
  }

  getCapacity() {
    return this.capacity;
  }

  isEmpty() {
    return this.length === 0;
  }
}
