import { list } from "./app";

export const filterTodos = (term: string): void => {
  // add filtered class
  Array.from(list.children)

    .filter((todo) => !todo.textContent!.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  // remove filtered class
  Array.from(list.children)
    .filter((todo) => todo.textContent!.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};
