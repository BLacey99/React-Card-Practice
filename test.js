

function recurssive(n){
    let result;
  
    
    if (n < 5){
        console.log("Final iteration: " + n);
        return result;
    }else{
        
        console.log(n);
        
        return recurssive(n-5);

    }
}

recurssive(25);



// program to display fibonacci sequence using recursion
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

// take nth term input from the user
const nTerms = 4;

    for(let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }