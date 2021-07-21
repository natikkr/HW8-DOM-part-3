  function recursion(a, b) {
    if(a != b){
        console.log(a)
        if (a < b) {
            a += 1
        }
        else {
            a -= 1
        }
        console.log("call recursion() with params: a = " + a + " b = " + b)
        recursion(a, b)
    }
    else {
        console.log(a);
        return;
    }
  }
recursion(1,5)



