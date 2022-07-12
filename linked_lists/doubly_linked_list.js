class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    
    push(val) {
      const newNode = new Node(val);
      
      if(!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      
      this.length++;
      return this;
    }
        
    pop() {
        if(!this.head) return undefined;
  
        const poppedNode = this.tail;
        
        if(this.length === 1) {
          this.head = null;
          this.tail = null;
        } else {
      
          this.tail = poppedNode.prev;
          this.tail.next = null;
          poppedNode.prev = null;
        }      
  
        this.length--;
        return poppedNode;
      }
    
    shift() {
      if(!this.head) return undefined;
  
      const oldHead = this.head;
  
      if(this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.next = null;
      }
  
      this.length--;
      return oldHead;
    }
    
    unshift(val) {
      const newNode = new Node(val);
  
      if(this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
  
      this.length++;
      return this;
    }
    
    get(index) {
        if(index < 0 || index >= this.length) return null;
        let count;
        let current;
  
        if(index <= this.length / 2) {
          count = 0;
          current = this.head;
          
          while(count !== index) {
            current = current.next;
            count++;
          }
          
        } else {
          count = this.length - 1;
          current = this.tail;
  
          while(count !== index) {
            current = current.prev;
            count--;
          }
        }
  
        return current;
    }
    
    set(index, val) {
      const foundNode = this.get(index);
  
      if(foundNode) {
        foundNode.val = val;
        return true;
      }
  
      return false;
    }
    
    insert(index, val) {
      if(index < 0 || index > this.length) return false;
      if(index === 0) {
        this.unshift(val);
        return true;
      } 
        
      if(index === this.length) {
        this.push(val);
        return true;
      }
  
      const beforeNode = this.get(index - 1);
      const newNode = new Node(val);
      const afterNode = beforeNode.next;
  
      beforeNode.next = newNode;
      newNode.prev = beforeNode;
      newNode.next = afterNode;
      afterNode.prev = newNode;
  
      this.length++;
      return true;
    }
      
    remove(index) {
      if(index < 0 || index >= this.length) return undefined;
      if(index === 0) return this.shift();
      if(index === this.length - 1) return this.pop();
  
      const removedNode = this.get(index);
      const beforeNode = removedNode.prev;
      const afterNode = removedNode.next;
  
      beforeNode.next = afterNode; // does the same as commented out code below
      afterNode.prev = beforeNode; // does the same as commented out code below
      // removedNode.prev.next = removedNode.next;
      // removedNode.next.prev = removedNode.prev;
      removedNode.prev = null;
      removedNode.next = null;
  
      this.length--;
      return removedNode;
    }
  }