const form = document.getElementById("ageform")
form.addEventListener("submit",function(e){
    e.preventDefault()

    const birthyear = parseInt(document.getElementById('birthYear').value)
      const results = document.getElementById('result');

    const currentYear = new Date().getFullYear();

    if(isNaN(birthyear) || birthyear <=0 || birthyear >currentYear){
      results.innerHTML = "⚠️ Please enter valid values";
        return;
    }else{
        const age = currentYear - birthyear
        results.innerHTML = `your age ${age}`;
    }


})