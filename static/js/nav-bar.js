const d = document;

export function burgerMenu(btn, menu, link){
    


    d.addEventListener("click", (e) => {

        // burger menu 
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){

            // panel open
            d.querySelector(menu).classList.toggle("is-active");
            // burgermenu
            d.querySelector(btn).firstElementChild.classList.toggle("none")
            // Arrow
            d.querySelector(btn).lastElementChild.classList.toggle("none")
        }
        
        // links closed
        if(e.target.matches(link) || e.target.matches(`${link} *`)){
            
            // panel closed
            d.querySelector(menu).classList.remove("is-active");
            // burger Menu
            d.querySelector(btn).firstElementChild.classList.toggle("none")
            // Arrow
            d.querySelector(btn).lastElementChild.classList.toggle("none")
        }

    })


};

