//************** Responsive design dropdown menu******************
// toggle dropdown content visibility on and off
function dropMenu() {
    document.getElementById("mDropdown").classList.toggle("show");
    
    
}

// close dropdown if user clicks outside of it

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')){

        var dropdowns = document.getElementsByClassName("mDropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}


//************** End Responsive design dropdown menu**************
