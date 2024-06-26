// for loop
//Loops can execute a block of code a number of times.

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

//NOTE: we can use same variable many times while it outer of the another loop.

for (let i = 1; i < 10; i++) {
    // const element = i;
    
    for (let j = 1; j <= 10; j++) {
        // const ele = j
        console.log(`${i} x ${j} = ${i*j}`);
 }
    
}


// break keyword

for (let i = 0; i < 8; i++) {
    if(i === 5){
        console.log(`Got the number 5`);
        break
    }
    const element = i
    console.log(element);
    
}
/*
0
1
2
3
4
Got the number 5
*/

// continue keyword

for (let i = 0; i < 7; i++) {
    if(i === 5){
        console.log(`got the 5`);
        continue
    }
    const element =i;
    console.log(element);
    
}

/*
0
1
2
3
4
got the 5
6
*/