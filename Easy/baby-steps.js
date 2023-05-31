

function logs(arr){
    sum =0;
    arr.forEach(element => {

       if(element.length < 5){
        sum += Number(element);
       } 
    });

    return sum;
}

console.log(logs(process.argv))