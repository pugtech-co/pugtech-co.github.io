document.addEventListener("DOMContentLoaded", function() {
    loadHeader();

    function loadHeader() {
        fetch("header.html")
            .then(response => response.text())
            .then(data => {
                document.querySelector("header").innerHTML = data;
            });
    }
});
