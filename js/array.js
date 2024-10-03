//Swal.fire("SweetAlert2 is working!");
var items = localStorage.getItem('itemList');

items = items ? items.split(','):[];

function addItem(){
   let item = document.getElementById('nameItem').value;

   if(item){
    items.push(item);
   }

   localStorage.setItem('itemList', items);
}