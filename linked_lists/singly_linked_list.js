class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
      constructor() {
          this.head = null;
          this.tail = null;
          this.length = 0;
      }

      push(val) {
        const newNode = new Node(val);

        if(!this.head) {
              this.head = newNode;
              this.tail = this.head;
          } else {
              this.tail.next = newNode;
              this.tail = newNode;
          }

          this.length++;
          return this;
      }
  
      pop() {
        if(!this.head) return undefined;

        let current = this.head;
        let newTail = current;


          while(current.next) {
              newTail = current;
              current = current.next;
          }

          this.tail = newTail;
          this.tail.next = null;
          this.length--;

          if(this.length === 0) {
              this.head = null;
              this.tail == null;
          }
          return current;
      }
  
      shift() {
        if(!this.head) return undefined;

        let previousHead = this.head;
        this.head = previousHead.next;
        this.length--;

        if(this.length === 0) this.tail =  null;
        return previousHead;
    }
  
      unshift(val) {
        const newNode = new Node(val);
        
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }
  
      get(index) {
        if(index < 0 || index >= this.length) return null;
        let i = 0;
        let current = this.head;
        while(i !== index) {
            current = current.next;
            i++;
        }

        return current;
    }

      set(index, val) {
          let foundNode = this.get(index);

          if(foundNode) {
              foundNode.val = val;
              return true;
          } 

          return false;
      }
  
      insert(index, val) {
        if(index < 0 || index > this.length) return false;

        if(index === this.length) {
            this.push(val);
            return true;
        }

        if(index === 0) {
            this.unshift(val);
            return true;
        }

        const newNode = new Node(val);
        const prev = this.get(index - 1);
        const temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;

        this.length++;
        return true;
    }
  
      remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        
        if(index === this.length - 1) {
            return this.pop();
        }

        if(index === 0) {
            return this.shift();
        }

        const previousNode = this.get(index - 1);
        const removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        
        return removed; 
    }
  
    reverse() {
      let node = this.head;
      this.head = this.tail;
      this.tail = node;
      let next;
      let prev = null;

      for(let i = 0; i < this.length; i++) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
    }
}