const ul = document.getElementsByTagName("ul")[0];
const addProduct = () => {
  const inputElement = document.querySelector('input[type="text"]');
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "taskCheckbox";
  const label = document.createElement("label");
  label.htmlFor = "taskCheckbox";
  label.innerText = inputElement.value;

  li.appendChild(checkbox);
  li.appendChild(label);
  ul.appendChild(li);
};
