import "./styles.css";

const onClickAdd = () => {
  // get textbox value and clear
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // generate div
  const div = document.createElement("div");
  div.className = "list-row";

  // generate li
  const li = document.createElement("li");
  li.innerText = inputText;
  div.appendChild(li);

  // generate button
  const doneButton = document.createElement("button");
  doneButton.innerText = "完了";
  doneButton.addEventListener("click", () => {
    const addTarget = doneButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () =>
      deleteFromLsit(backButton.parentNode, "done-list")
    );

    const doneDiv = document.createElement("div");
    doneDiv.className = "list-row";
    doneDiv.appendChild(li);
    doneDiv.appendChild(backButton);

    document.getElementById("done-list").appendChild(doneDiv);

    deleteFromLsit(doneButton.parentNode, "undone-list");
  });
  div.appendChild(doneButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () =>
    deleteFromLsit(deleteButton.parentNode, "undone-list")
  );
  div.appendChild(deleteButton);

  // add undone-list
  document.getElementById("undone-list").appendChild(div);
};

const deleteFromLsit = (target, list) => {
  document.getElementById(list).removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
