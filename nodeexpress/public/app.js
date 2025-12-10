const API = "http://localhost:4200";

// =============== REGISTER ==================
async function registerUser(event) {
    event.preventDefault();

    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    const res = await fetch(`${API}/auth/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password})
    });

    const data = await res.json();
    alert("Успешная регистрация!");
    window.location.href = "login.html";
}



// =============== LOGIN ==================
async function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("log-email").value;
    const password = document.getElementById("log-password").value;

    const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password})
    });

    const data = await res.json();

    if (data.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "profile.html";
    } else {
        alert("Ошибка: " + data.message);
    }
}



// =============== LOAD PROFILE ==================
async function loadProfile() {
    const token = localStorage.getItem("token");

    if (!token) {
        document.body.innerHTML = "<h2>Нет доступа. Авторизуйтесь.</h2>";
        return;
    }

    const res = await fetch(`${API}/profile`, {
        headers: {
            "Authorization": "Bearer " + token
        }
    });

    const data = await res.json();

    if (data.user) {
        document.getElementById("user-email").innerText = data.user.email;
        document.getElementById("user-id").innerText = data.user.id;
    } else {
        alert("Ошибка доступа");
    }
}



// =============== LOAD BOOKS ==================
async function loadBooks() {
    const container = document.getElementById("books");

    const res = await fetch(`${API}/books`);
    const books = await res.json();

    container.innerHTML = "";

    books.forEach(book => {
        const div = document.createElement("div");
        div.className = "book";
        div.innerHTML = `
            <h3>${book.title}</h3>
            <p>Price: ${book.price} ₸</p>
        `;
        container.appendChild(div);
    });
}
