const field = document.getElementById("field");
const form = document.getElementById("form");
const btn = document.getElementById("btn");
const wrapper = document.querySelector("#todo-item");
const deleteBtn = document.querySelector(".fa-trash");

function validate(field) {
  if (field.value.legth < 5) {
    alert("Todo kamida 6 ta harfdan iborat bo`lsin");
    field.focus();
    field.style.outlineColor = "red";
    return false;
  }
  field.style.outlineColor = "";
  return true;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const isValid = validate(field);
  if (!isValid) {
    return;
  }
  let todo = {
    name: field.value,
    status: "active",
  };

  const div = document.createElement("div");
  div.innerHTML += `<div class="todo-item">
        <div class="info">
          <div class="textdata">
            <p class="todo-name">${todo.name}</p>
          </div>
        </div>
        <div class="actions">
          <i class="fa-solid fa-trash"></i>
        </div>
      </div>`;
  deleteBtn &&
    deleteBtn.addEventListener("click", function () {
      wrapper.remove(div);
    });

  wrapper.append(div);
  field.value = "";
});
