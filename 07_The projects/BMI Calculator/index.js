const form = document.querySelector('form')

// This use case will give you empty value
// const height = parseInt(document.querySelector('#height').value)


// to stop the recieving form as url or default value by browser using preventDefault() method.
form.addEventListener('submit', function (event){
    event.preventDefault()
   
    // conver string value to integer using parseInt() method
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if ( height === '' || height < 0 || isNaN(height) ) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if ( weight === '' || weight < 0 || isNaN(weight) ) {
        results.innerHTML = `Please give a valid height ${weight}`;
    } else {
        //bmi calculater formula
        const bmi = (weight / ((Math.pow(height,2))/10000)).toFixed(1)
        // show result

        if (bmi < 18.6) {
            results.innerHTML = `<span>${bmi} You are underweight</span>`;
        } else if (bmi >= 18.6 && bmi <= 24.9 ){
            results.innerHTML = `<span>${bmi} Your weight is in the Normal Range.</span>`;
        } else {
            results.innerHTML = `<span>${bmi} You are overweight.</span>`;






        }
    }

})
