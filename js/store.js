if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready() {
    carrito();

}

function carrito() {
    var data = "";
    var dataModal = "";
    var total = 0;
    if (localStorage.length == 0) {
        data += '<tr><td colspan="4">No hay productos</td></tr>';
    } else {
        for (var i = 0; i <= localStorage.length - 1; i++) {
            var key = localStorage.key(i);
            console.log(key);
            var info = JSON.parse(localStorage.getItem(key));

            switch (parseInt(info.id)) {
                case 5:
                    data += '<tr><td id=""><img class="w-100" src="../img/' + info.id + '.png"><br><p id="' + i + '">' + info.name + '</td><td class="table-name">$' + info.precio + '</td><td><button class="min" onclick="rest(this.id)" id="' + i + 'min">-</button><input id="' + i + 'in" class="inp w-25 mx-2" type="text" value="1" ><button class="max" onclick="add(this.id)" id="' + i + 'max">+</button></td><td id="' + i + 'sub">$' + info.total + '</td><td><button id="' + key + '" class="btn btn-secondary" onclick="eliminar(this.id)">x</button></td></tr>';
                    dataModal += '<tr><td id=""><img class="w-100" src="../img/' + info.id + '.png"></td><td>' + info.name + '</td><td class="table-name">$' + info.precio + '</td></tr>';
                    break;
                case 6:
                    data += '<tr><td id=""><img class="w-100" src="../img/' + info.id + '.png"><br><p id="' + i + '">' + info.name + '</td><td class="table-name">$' + info.precio + '</td><td><button class="min" onclick="rest(this.id)" id="' + i + 'min">-</button><input id="' + i + 'in" class="inp w-25 mx-2" type="text" value="1" ><button class="max" onclick="add(this.id)" id="' + i + 'max">+</button></td><td id="' + i + 'sub">$' + info.total + '</td><td><button id="' + key + '" class="btn btn-secondary" onclick="eliminar(this.id)">x</button></td></tr>';
                    dataModal += '<tr><td id=""><img class="w-100" src="../img/' + info.id + '.png"></td><td>' + info.name + '</td><td class="table-name">$' + info.precio + '</td></tr>'
                    break;
                case 7:
                    data += '<tr><td id=""><img class="w-100" src="../img/' + info.id + '.png"><br><p id="' + i + '">' + info.name + '</td><td class="table-name">$' + info.precio + '</td><td><button class="min" onclick="rest(this.id)" id="' + i + 'min">-</button><input id="' + i + 'in" class="inp w-25 mx-2" type="text" value="1" ><button class="max" onclick="add(this.id)" id="' + i + 'max">+</button></td><td id="' + i + 'sub">$' + info.total + '</td><td><button id="' + key + '" class="btn btn-secondary" onclick="eliminar(this.id)">x</button></td></tr>';
                    dataModal += '<tr><td id=""><img class="w-100" src="../img/' + info.id + '.png"></td><td>' + info.name + '</td><td class="table-name">$' + info.precio + '</td></tr>'
                    break;
                case 8:
                    data += '<tr><td id=""><img class="w-100" src="../img/' + info.id + '.png"><br><p id="' + i + '">' + info.name + '</td><td class="table-name">$' + info.precio + '</td><td><button class="min" onclick="rest(this.id)" id="' + i + 'min">-</button><input id="' + i + 'in" class="inp w-25 mx-2" type="text" value="1" ><button class="max" onclick="add(this.id)" id="' + i + 'max">+</button></td><td id="' + i + 'sub">$' + info.total + '</td><td><button id="' + key + '" class="btn btn-secondary" onclick="eliminar(this.id)">x</button></td></tr>';
                    dataModal += '<tr><td id=""><img class="w-100" src="../img/' + info.id + '.png"></td><td>' + info.name + '</td><td class="table-name">$' + info.precio + '</td></tr>'
                    break;
            }
            total += parseFloat(info.total);

            console.log(total);
        }
    }
    document.getElementById('cartModal').innerHTML = dataModal;

    if (document.getElementById('cartPage') != null) {
        document.getElementById('cartPage').innerHTML = data;
        document.getElementById("subTotal").innerHTML = '$' + total;

        document.getElementById("total").innerHTML = '$' + total + ' ≈ S/.' + (total * 3.8).toFixed(2);
        console.log(total);
    }
}


// function up(clicked_id){

//     var id=clicked_id;
//     var val = parseFloat(document.getElementById(id).value);

//     for (var i = 0; i <= localStorage.length - 1; i++) {
//         var key = localStorage.key(i);
//         var info = JSON.parse(localStorage.getItem(key));
//         var pr = parseFloat(info.precio);

//         if(id == pr){
//             var name = info.name;
//             var newp = parseFloat(info.precio)*val;
//             console.log(newp);

//             var datos = {
//                 name: name,
//                 precio: info.precio,
//                 total: newp
//             };

//             localStorage.setItem(name, JSON.stringify(datos));
//             carrito();
//             document.getElementById(id).value=val;     

//         }


//     }



// }

function nueva() {
    localStorage.clear();
    alert('Se ha limpiado el carrito')
    carrito();
    document.getElementById('cliente').value = "";
    document.getElementById('correo').value = "";

}

function completar() {
    var data = document.getElementById('cartPage').innerHTML;
    if (data == '<tr><td colspan="4">No hay productos</td></tr>') {
        alert('No ha agregado nada a su carrito');

    } else {

        alert('Compra Exitosa');

        localStorage.clear();

        location.href = 'compraExitosa.html';
    }

}

function eliminar(clicked_id) {

    localStorage.removeItem(clicked_id);
    carrito();

}

// function ver() {
//     var enviar = document.getElementById('amount').innerText;
//     var cliente = document.getElementById('cliente').value;
//     var email = document.getElementById('correo').value;
//     document.getElementById("info1").innerHTML = cliente;
//     document.getElementById("info2").innerHTML = email;
//     document.getElementById("enviar").innerHTML = "S/." + enviar;
// }

function agregarAhora(clicked_id) {


    var id = clicked_id;
    console.log(document.getElementById(id).getAttribute('value'));
    var name = document.getElementById(id).getAttribute('value');
    var cantidad = 1;
    var precio = document.getElementById(id + 'p').innerText;
    precio = precio.replace('$', '');
    console.log(precio);

    var total = precio;
    var datos = {
        name: name,
        precio: precio,
        total: total,
        cantidad: cantidad,
        id: id

    };

    localStorage.setItem(name, JSON.stringify(datos));
    carrito();

}


function rest(clicked_id) {

    var inputChange = clicked_id.substring(0, clicked_id.length - 3);
    var id = inputChange.concat('in');
    console.log('IN ' + id)
    // counter += 1;

    var dataChange = document.getElementById(id);
    var val = parseInt(dataChange.value) - 1;



    if (val >= 1) {
        dataChange.value--;
        updateTotal(inputChange, val);

    }


}

function add(clicked_id) {
    var inputChange = clicked_id.substring(0, clicked_id.length - 3);
    var id = inputChange.concat('in');
    console.log(id)
    // counter += 1;
    var dataChange = document.getElementById(id);
    dataChange.value++;
    var val = parseInt(dataChange.value);
    console.log('VAL: ' + val)

    updateTotal(inputChange, val);
    console.log(dataChange.value)

}


function updateTotal(item, qty) {
    console.log('item ' + item)
    var name = document.getElementById(item).innerHTML;
    console.log(document.getElementById(item));
    console.log('UPDATE: ' + name);
    var qty = parseFloat(qty);
    var producto = JSON.parse(localStorage.getItem(name))
    console.log('POR ' + qty)
    var precio = parseFloat(producto.precio);
    var cantidad = parseFloat(qty);
    console.log('POR FLOAT  ' + cantidad)

    var newTotal = precio * (cantidad);
    console.log(newTotal)

    var datos = {
        name: name,
        precio: precio,
        total: newTotal,
        cantidad: cantidad,


    };

    var id2 = document.getElementById(item.concat('sub'));
    var id3 = document.getElementById('total');


    localStorage.setItem(name, JSON.stringify(datos));
    var it = JSON.parse(localStorage.getItem(name));
    console.log(id2)
    id2.innerText = '$' + it.total;
    chargeTotal();
}

function chargeTotal() {
    var total = 0;

    for (var i = 0; i <= localStorage.length - 1; i++) {
        var key = localStorage.key(i);
        console.log(key);
        var info = JSON.parse(localStorage.getItem(key));


        // data += '<tr><td id="' + i + '">' + key + '</td><td class="table-name">$' + info.precio + '</td><td><button class="dec" id="' + i + 'min">-</button><input id="' + i + 'in" class="w-25 mx-2" type="number" value="1" min="1"><button class=""  id="' + i + 'max">+</button></td><td>$' + info.total + '</td><td><button id="' + key + '" class="btn btn-secondary" onclick="eliminar(this.id)">x</button></td></tr>';

        total += parseFloat(info.total);

        console.log(total);

        document.getElementById("subTotal").innerHTML = '$' + total;

        document.getElementById("total").innerHTML = '$' + total + ' ≈ S/.' + (total * 3.8).toFixed(2);
    }

}