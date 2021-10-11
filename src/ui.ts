import { HasRender } from "./method";

export class UI implements HasRender {
  constructor(private list: HTMLUListElement) {}
  render(todo: string | number): void {
    let html;
    html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>

  `;
    this.list.innerHTML += html;
  }
}
