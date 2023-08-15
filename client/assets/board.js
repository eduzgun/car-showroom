function createPostElement (data) {
    const post = document.createElement("div");
    post.className = "post";

    const header = document.createElement("h2");
    header.textContent = data["title"];
    post.appendChild(header);

    const content = document.createElement("p");
    content.textContent = data["content"];
    post.appendChild(content);

    return post;
}

document.getElementById("cars-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            make: form.get("make"),
            model: form.get("model"),
            price: form.get("price"),
            year: form.get("year"),
            colour: form.get("colour")
        })
    }

    const result = await fetch("http://localhost:3000/cars", options);

    if (result.status == 201) {
        window.location.reload();
    }
})

/*
async function loadCars () {

    const options = {
        headers: {
            'Authorization': localStorage.getItem("token")
        }
    }
    const response = await fetch("http://localhost:3000/cars", options);

    if (response.status == 200) {
        const cars = await response.json();
    
        const container = document.getElementById("cars");

        cars.forEach(c => {
            const elem = createPostElement(c);
            container.appendChild(elem);
        })
    } else {
        window.location.assign("./index.html");
    }

}*/

async function loadCars() {
    const options = {
        headers: {
            'Authorization': localStorage.getItem("token")
        }
    }
    
    try {
        const response = await fetch("http://localhost:3000/cars", options);

        console.log("Response status:", response.status);

        if (response.status == 200) {
            const cars = await response.json();
            console.log("Cars:", cars);

            const container = document.getElementById("cars");

            cars.forEach(c => {
                const elem = createPostElement(c);
                container.appendChild(elem);
            })
        } else {
            console.log("Error loading cars:", response.status);
            window.location.assign("./index.html");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}



loadCars();