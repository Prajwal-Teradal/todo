const API_URL = "http://localhost:8080/todos";

function loadTodos() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById("todoList");
            list.innerHTML = "";

            data.forEach(todo => {
                const li = document.createElement("li");

                li.innerHTML = `${todo.title} - ${todo.completed ? "Done" : "Pending"}
                <button onClick="deleteTodo(${todo.id})">Delete</button>`;

                list.appendChild(li);
            });
        });
}

function addTodo() {
    const title = document.getElementById("todoInput").value;

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: title, completed: false })
        
    })
    .then(() => {
        document.getElementById("todoInput").value = "";
        loadTodos();
    });

}

function deleteTodo(id) {
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
        .then(() => loadTodos());
    }

loadTodos();