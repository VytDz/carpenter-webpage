//************** Responsive design dropdown menu******************

//******** Function for showing and hiding dropdown menu ************
function toggleDropdown() {    
    document.querySelector("#my-dropdown").classList.add("show"); 
}

// Close the dropdown menu if the user clicks outside of it
window.addEventListener('mouseup', function(event){    
    var dropdown = document.querySelector('#my-dropdown');      
    if (event.target != dropdown){
        dropdown.classList.remove('show');        
    }
})
//******** End Function for showing and hiding dropdown menu ********

