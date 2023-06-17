const todoForm = document.querySelector("#todo-form");

window.addEventListener("load", async () => {
  console.log("Loaded");

  await fetchTodos();
});

todoForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());

  const reqData = {
    name: dataObject.todo,
  };
  console.log("Form Data: ", reqData);
  const res = await fetch("http://localhost:8081/todo", {
    method: "POST",
    body: JSON.stringify(reqData),
    headers: { "Content-Type": "application/json" },
  });
  const resData = await res.json();
  console.log(resData);

  await fetchTodos();
});

async function fetchTodos() {
  const res = await fetch("http://localhost:8081/todo");
  const resData = await res.json();
  console.log(resData);
  const todosList = document.querySelector("#todos-list");

  if (resData) {
    todosList.innerHTML = "";
  }

  resData.resp.map((item) => {
    console.log(item);
    const newListItem = document.createElement("li");
    newListItem.classList.add(["list-group-item"]);
    newListItem.innerHTML = item.name;
    todosList.appendChild(newListItem);
  });
}
