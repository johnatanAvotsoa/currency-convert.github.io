const btn       = document.getElementById('btn') ;
var res = document.getElementById('result') ;
btn.addEventListener('click', e =>{
    e.preventDefault() ; 
    const choice    = Number(document.getElementsByName('choice')[0].value); 
    const currency  = Number(document.getElementsByName('currency')[0].value);
    const value     = Number(document.getElementById('amount').value) ; 
    var m, d, dString ; 
    if(value >= 0 ){
        switch(currency){
            case 1 :  
              d = 5000;
              dString = 'EUR' ;
              break ;
            case 2 :
              d = 4500;
              dString = 'USD' ;
              break ;
            case 3 : 
              d = 500 ;
              dString = 'YEN' ; 
              break ; 
        }
        if(choice == 1){
            m = value / d ;
            res.innerText = `${value} MGA = ${m} ${dString}`;
        }
        else{
            m = value * d ;
            res.innerText = `${value} ${dString} = ${m} MGA`;
        }
    }
    else{
        res.innerHTML = `${value} is a negative number :(` ; 
    }
    
})

