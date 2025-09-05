import { Node } from "./Node.js";

export class LinkedList {
  constructor() {
    this.headNode = null; // start empty
  }

  // 1. Append -> add to end
  append(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  // 2. Prepend -> add to start
  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
  }

  // 3. Size -> number of nodes
  size() {
    let count = 0;
    let current = this.headNode;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  // 4. Head -> first node
  head() {
    return this.headNode;
  }

  // 5. Tail -> last node
  tail() {
    if (!this.headNode) return null;
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  // 6. At(index)
  at(index) {
    let count = 0;
    let current = this.headNode;
    while (current) {
      if (count === index) return current;
      current = current.nextNode;
      count++;
    }
    return null; // not found
  }

  // 7. Pop -> remove last
  pop() {
    if (!this.headNode) return null;
    if (!this.headNode.nextNode) {
      this.headNode = null;
      return;
    }
    let current = this.headNode;
    let prev = null;
    while (current.nextNode) {
      prev = current;
      current = current.nextNode;
    }
    prev.nextNode = null;
  }

  // 8. Contains(value)
  contains(value) {
    let current = this.headNode;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  // 9. Find(value) -> index
  find(value) {
    let index = 0;
    let current = this.headNode;
    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }

  // 10. toString()
  toString() {
    let result = "";
    let current = this.headNode;
    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    result += "null";
    return result;
  }

  // EXTRA: insertAt(value, index)
  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    let prev = this.at(index - 1);
    if (!prev) return;
    const newNode = new Node(value, prev.nextNode);
    prev.nextNode = newNode;
  }

  // EXTRA: removeAt(index)
  removeAt(index) {
    if (index === 0 && this.headNode) {
      this.headNode = this.headNode.nextNode;
      return;
    }

    let prev = this.at(index - 1);
    if (!prev || !prev.nextNode) return;
    prev.nextNode = prev.nextNode.nextNode;
  }
}


class LinkedList{
    constructor(){
        this.headNode = null; // start empty
    }
}

append(value){
    const newNode = new Node(value);
    if(headNode === null){
        this.headNode = newNode;
        return;
    }
    let current = this.headNode;
    while(current.nextNode){
        current = current.nextNode;
    }
    current.nextNode = newNode;
}
prepend(value){
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;

  }