// main.js
document.getElementById("loadDataBtn").addEventListener("click", loadData);

function loadData() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("dataContainer");
            container.innerHTML = `
                <h3>${data.title}</h3>
                <p>${data.body}</p>
            `;
            container.classList.add("fade-in");
        })
        .catch(error => console.error("Error loading data:", error));
}
