const shoppingList = document.getElementById("shopping-list")

list.forEach (item => {
	li = document.createElement("li")
	li.innerText = item
	shoppingList.appendChild(li)
})