cykaUser = document.getElementById("cykaUser")
cykaTrovare = document.getElementById("trovare")
cyka = document.getElementById("cyka")

cykaTrovare.addEventListener("click", () => {
    fetch(`https://api.github.com/users/${cykaUser.value}`)
    .then(res => res.json())
    .then(data => {
        cyka.innerHTML = 
        `
        <img src "${data.avatar_url}" />
        <h3>Nome: ${data.name} </h3>
        <h3>Utento: ${data.login} </h3>
        <h3 href="${data.html_url}/?tab=repos"></a>
        `
    })
})