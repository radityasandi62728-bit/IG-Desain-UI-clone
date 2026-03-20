const bodymain = document.getElementById("place-main")
const btnSearch = document.getElementById("btnSearch")
const btnHome = document.getElementById("btnHome")

function loadPage(igclone) {
    fetch(igclone)
        .then((res) => res.text()) 
        .then((data) => {
            bodymain.innerHTML = data
        })
}
btnSearch.addEventListener("click", () => {
    loadPage("page/search.html")
})
btnHome.addEventListener("click", () => {
    loadPage("page/home.html")
})

loadPage("page/home.html")
