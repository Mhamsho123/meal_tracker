const addBtn = document.getElementById('add-btn');
const mealLst = document.getElementById("meal-tracker-lst")

addBtn.addEventListener('click', function(){

    const userInput = document.getElementById('meal-input').value.trim()

    if(!userInput){
        console.log("Please enter a meal")
        return
    }

    fetch("http://127.0.0.1:8000/meals", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: userInput
        })
    })
    .then(res => res.json())
    .then(data => {
    })
    renderMealLst()

})

function renderMealLst(){
fetch("http://127.0.0.1:8000/meals", {
    method: 'GET'
})
    .then(res => res.json())
    .then(data => {
        let html = ""
        data.forEach(meal => {
            html +=`
            <h1>${meal.name}</h1>
            `
        })
        mealLst.innerHTML = html

    })
}

