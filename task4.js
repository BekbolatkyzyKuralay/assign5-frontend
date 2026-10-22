const itemList = document.getElementById("itemList");
const listMessage = document.getElementById("listMessage");
let itemNumber = 2;

document.getElementById("addItemButton").addEventListener("click", function () {
  itemNumber++;
  const newItem = document.createElement("li");
  newItem.textContent = "Item " + itemNumber;
  itemList.appendChild(newItem);
  listMessage.textContent = "A new item was added.";
});

document.getElementById("removeItemButton").addEventListener("click", function () {
  if (itemList.lastElementChild) {
    itemList.lastElementChild.remove();
    listMessage.textContent = "The last item was removed.";
  } else {
    listMessage.textContent = "There are no items left to remove.";
  }
});