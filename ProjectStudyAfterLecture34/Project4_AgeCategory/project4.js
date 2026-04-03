const form = document.getElementById("agecalculator")
const body = document.getElementById("body")
form.addEventListener("submit",function(e){
    e.preventDefault()

    const birthyear = parseInt(document.getElementById('birthYear').value)
    const result = document.getElementById("result")

    const currentyear = new Date().getFullYear()

    if(isNaN(birthyear) || birthyear>=currentyear || birthyear <0){
        result.innerHTML = "Sahi Sahi value Daalo"
        return
    }else{
        const age = currentyear - birthyear
        let category = ""
        if(age<13){
            category = "child"
            body.style.backgroundColor = "blue"
        }else if(age<=19){
            category = "Teen"
            body.style.backgroundColor = "red"
        }else{
            category = "Adult"
            body.style.backgroundColor = "green"
        }
        result.innerHTML = `You are ${age} years old (${category})`;
    }
})