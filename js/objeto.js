//Obtenemos información almacenada en el localStorage
var items = localStorage.getItem('productos');

//Convertimos los datos items(viene en cadena) en tipo array 
items = items ? JSON.parse(items):[];
showItem();

function addItem(){
   let item = {
    "nombre":document.getElementById('nameItem').value,
    "descripcion": document.getElementById('descItem').value,
    "valor":document.getElementById('valorItem').value
   };

   if(item.nombre && item.descripcion && item.valor){
    items.push(item);
     //Guardar datos de la clave Itemlist en el localStorage
    localStorage.setItem('productos', JSON.stringify(items));
    showItem();
   }
   
}

function showItem(){
   document.getElementById('nameItem').value = '';
   document.getElementById('descItem').value = '';
   document.getElementById('valorItem').value = '';

   let html = "";
   if(items.length > 0)
   {
        items.forEach((element, index) => {
            html += "<div class='col-3  m-2'>"+ element.nombre + "</div>";
            html += "<div class='col-3  m-2'>"+ element.descripcion + "</div>";
            html += "<div class='col-3  m-2'>"+ element.valor + "</div>";
            html += `<div class="col-2 m-2"><button class="btn btn-danger" onClick="deleteItem(${index})">X</button></div>`;
       });  
       document.getElementById('listItems').innerHTML = html;
   }
   
}

function deleteItem(item){
   items.splice(item, 1);
   showItem();
}