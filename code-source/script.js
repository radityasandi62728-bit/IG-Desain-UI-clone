const bodymain = document.getElementById("body-container")
const btnSearch = document.getElementById("btnSearch")
const btnHome = document.getElementById("btnHome")

function loadPage(igclone) {
    fetch(igclone)
        .then((data) => {
            bodymain.innerHTML = data
        })
}
btnSearch.addEventListener("click", () => {
    loadPage("page/search.html")
})
btnHome.addEventListener("click", () => {
    loadPage("instagram-clone.html")
})
