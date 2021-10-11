// imports ------------------------------------------------------------------------------------
import { UI } from "./ui";
import { filterTodos } from "./filter";

// Dom queries---------------------------------------------------------------------------------
const addForm = document.querySelector(".add")! as HTMLFormElement;
const search = document.querySelector(".search input")! as HTMLInputElement;
export const list = document.querySelector(".todos")! as HTMLUListElement;

// dom events--------------------------------------------------------------------------------------

// add todos event
const ui = new UI(list);
addForm.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  const todo = addForm.add.value!.trim();
  if (todo.length) {
    ui.render(todo);
    addForm.reset();
  }
});

// delete todos event
list.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLUListElement;
  if (target.classList.contains("delete")) {
    target.parentElement!.remove();
  }
});

// filter todos event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
