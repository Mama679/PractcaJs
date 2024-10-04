//Obtenemos información almacenada en el localStorage
var items = localStorage.getItem('itemList');

//Convertimos los datos items(viene en cadena) en tipo array 
items = items ? items.split(','):[];

function addItem(){
   let item = document.getElementById('nameItem').value;
   if(item){
    items.push(item);
    showItem();
   }
   
}

function showItem(){
   document.getElementById('nameItem').value = '';

   let html = "";
   for(let i = 0; i < items.length; i++){
      html += "<div class='col-6  m-2'>"+ items[i] + "</div>";
      html += `<div class="col-2 m-2"><button class="btn btn-danger" onClick="deleteItem(${i})">X</button></div>`;
   }

   //Guardar datos de la clave Itemlist en el localStorage
   localStorage.setItem('itemList', items);
   document.getElementById('listItems').innerHTML = html;
}

function deleteItem(item){
   items.splice(item, 1);
   showItem();
}