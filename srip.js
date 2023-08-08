function comentar(params) {
     const input = document.querySelector("input").value
     document.querySelector(".comentar").innerHTML += `<p>${input}</p>`

     document.querySelector("input").value = "" 
}

