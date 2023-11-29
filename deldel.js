Warmup-1 -- delDel
Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.

Examples

delDel('adelbc') → abc
delDel('adelHello') → aHello
delDel('abcdel') → abcdel

function delDel(str){
    if(str.charAt(1) === "d" && str.charAt(2) === "e" && str.charAt(3) === "l") {
    return str.charAt(0)+str.charAt(4)+str.charAt(5)+str.charAt(6)+str.charAt(7)+str.charAt(8)
      
    }return str
  }