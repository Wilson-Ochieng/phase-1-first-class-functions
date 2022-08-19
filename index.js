  function receivesAFunction (callback)  {
    
    return callback();
};
console.log(receivesAFunction("receives a function and calls it"));

 function returnsANamedFunction() {

    return returnsANamedFunction;
 };
 console.log(returnsANamedFunction)
  function returnsAnAnonymousFunction(){
     return function (calledFunction){
     return  calledFunction;
  };

  }