function multiplicationTable( num ){

    for(let i = 1; i <= 10; i++ ){
        let product = i * num;

        console.log(`${num} x ${i} = ${product}`);
    }

}

// test with 5
multiplicationTable( 5 );


// test with 10
multiplicationTable( 10 );