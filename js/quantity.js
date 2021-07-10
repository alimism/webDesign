
// function rest(clicked_id) {

//     var inputChange = clicked_id.substring(0, clicked_id.length - 3);
//     var id = inputChange.concat('in');
//     console.log(id)
//     // counter += 1;

//     var dataChange = document.getElementById(id);
//     var val = parseInt(dataChange.value);
//     if (val >= 1) {
//         dataChange.value--;
//         updateTotal(inputChange, val);

//     }


// }

// function add(clicked_id) {
//     var inputChange = clicked_id.substring(0, clicked_id.length - 3);
//     var id = inputChange.concat('in');
//     console.log(id)
//     // counter += 1;
//     var dataChange = document.getElementById(id);
//     dataChange.value++;
//     var val = parseInt(dataChange.value);

//     updateTotal(inputChange, val);
//     console.log(dataChange.value)

// }


// function updateTotal(item, qty) {
//     var name = document.getElementById(item).innerText;
//     console.log('UPDATE: ' + name);
//     var qty = parseFloat(qty);
//     var producto = JSON.parse(localStorage.getItem(name))

//     var precio = parseFloat(producto.precio);
//     var cantidad = parseFloat(qty);

//     var newTotal = precio * cantidad;
//     console.log(newTotal)

//     var datos = {
//         name: name,
//         precio: precio,
//         total: newTotal,
//         cantidad: cantidad
//     };


//     localStorage.setItem(name, JSON.stringify(datos));


// }
