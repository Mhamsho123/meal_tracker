<<<<<<< HEAD
const addBtn = document.getElementById('add-btn');

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
        console.log(data)
    })

})
=======
    
>>>>>>> 8ca08388ca3d41c6516cf734e45102b0d99d58d8
