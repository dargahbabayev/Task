var items = document.querySelectorAll(".container .tittle");

for (var i = 0; i < items.length; i++) {


    items[i].addEventListener("click", function () {

        var active = document.querySelector(".container .active");
    
        if (active != null && active!=this.parentNode) {
           
            active.classList.remove("active");
        }

        this.parentNode.classList.toggle("active");
    })

}

