var form = document.getElementById("addForm");
var items = document.getElementById("items");
var filter = document.getElementById("filter");

form.addEventListener("submit", addItem);
items.addEventListener("click", deleteItem);
filter.addEventListener("input", filterList);

function addItem(e){
    e.preventDefault();
    var input = document.getElementById("item").value;
    var li = document.createElement("li")
    li.className = "list-group-item";
    li.value = input;
    li.appendChild(document.createTextNode(input));
    var button = document.createElement("button")
    button.className = "btn btn-danger btn-sm float-right delete";
    button.appendChild(document.createTextNode("X"));
    li.appendChild(button);
    items.appendChild(li);
    document.getElementById("item").value = "";
}

function deleteItem(e) {
    
   // if(e.target.className === "btn btn-danger btn-sm float-right delete"){
    if(e.target.innerHTML === "X"){ 
        if(confirm("Are you sure?")){
            e.target.parentElement.style.display = "none";
        }
    }
}

function filterList(e) {
    var text = e.target.value.toLowerCase();
    var items1 = items.getElementsByTagName("li");
    Array.from(items1).forEach(function(item) {
    var listItem = item.firstChild.textContent;
        if(listItem.toLowerCase().indexOf(text) != -1){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
            }
        });
    }
