//function
//get values
//calculate
//output

//bmi formula   weight / height squared

function calculateBmi(){
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = (weight / (height/100 * height/100))

    document.getElementById('heading').innerHTML = 'Twoje BMI wynosi :'
    document.getElementById('bmi-output').innerHTML = bmi

    if (bmi <= 18.4){
        document.getElementById('message').innerHTML = 'Niedowaga'
    } else if (bmi >= 18.5 && bmi <=24.9) {
        document.getElementById('message').innerHTML = 'Waga prawidłowa'
    } else {
        document.getElementById('message').innerHTML = 'Nadwaga'
    }
}

function reload(){
    window.location.reload()
}