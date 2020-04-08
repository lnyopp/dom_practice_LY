var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);



function addItem(e){
    e.preventDefault();
// get input value
var newItem = document.getElementById('item').value;

//create new li element
var li = document.createElement('li')
//add a class 
li.className = 'list-group-item';
// add text node with input value
li.appendChild(document.createTextNode(newItem));

//adding item to list
itemList.appendChild(li);

//clearing text from submit.
e.target.reset();

}
// removing item
function removeItem(e){
        var li = e.target;
        li.style.textDecoration="line-through";
        setTimeout(function(){ itemList.removeChild(li); }, 1000);
        
};