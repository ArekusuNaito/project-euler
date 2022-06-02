
//   Definition for singly-linked list.
  class ListNode 
  {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 

 function addTwoNumbers(list1: ListNode, list2: ListNode): ListNode | null {
    
    function traverse(node:ListNode,array:number[]):number[]
    {
        if(node.next === null || node.next === undefined)
        {
            array.push(node.val);
            return [];
        }
        else 
        {
            array.push(node.val)
            traverse(node.next,array);
        };
        return array;
    }
    
    const alpha = traverse(list1,[]).reverse();
    const beta = traverse(list2,[]).reverse();
    const alphaNumber = Number(alpha.join(""));
    const betaNumber = Number(beta.join(""))
    const result = (alphaNumber + betaNumber).toString().split("").reverse();
    console.log(result)
    
    return null;
};

