(function () {
    const netflix = document.querySelector("#netflix");
    const disney = document.querySelector("#disney");
    const playstation = document.querySelector("#playstation");
    const xbox = document.querySelector("#xbox");

    
    netflix.addEventListener("click", function() {
        localStorage.setItem("selectedItem", "netflix");
    })

    playstation.addEventListener("click", function() {
        localStorage.setItem("selectedItem", "playstation");
    })

    xbox.addEventListener("click", function() {
        localStorage.setItem("selectedItem", "xbox");
    })

    disney.addEventListener("click", function() {
        localStorage.setItem("selectedItem", "disney");
    })
})();







