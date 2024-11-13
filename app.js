function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
}

window.onclick = function(event) {
    if (!event.target.matches('.main-nav ul li a')) {
        var dropdownMenu = document.getElementById("dropdownMenu");
        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
        }
    }
}

fetch('_header.html')
.then(response => response.text())
.then(data => document.getElementById('header-placeholder').innerHTML = data)
.catch(error => console.error('Error loading header:', error));