$('#form1 input').on('change', function () {

    var form1 = ($('input[name=flexRadioDefault]:checked', '#form1').val());
    clasificar(form1);
});


var producto = '';
var f2 = '';
var f3 = '';
var f4 = '';
var f5 = '';
var f6 = '';
var f7 = '';

function clasificar(productSelected) {

    producto = productSelected;


    var data = [];
    var dataUp = [];

    var colData = document.getElementsByClassName('datos');
    var upData = document.getElementsByClassName('text-up');

    if (producto == 'PC') {
        console.log('Seleccionaste ' + producto);

        data[0] = '<div class="col datos"><h5>Uso</h5><form id="form2"><div class="inputs fw-light"><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault5" value="Multimedia"> <label class="form-check-label" for="flexRadioDefault5"> Multimedia </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault6" value="Gaming"> <label class="form-check-label" for="flexRadioDefault6"> Gaming </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault7" value="Edición"> <label class="form-check-label" for="flexRadioDefault7"> Edición </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault8" value="Streaming o Exigente"> <label class="form-check-label" for="flexRadioDefault8"> Streaming o Exigente </label></div></div></form></div>';

        data[1] = '<div class="col datos"><h5>Presupuesto</h5><form id="form3"><div class="inputs fw-light"><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault9" value="Lo más económico"> <label class="form-check-label" for="flexRadioDefault9"> Lo más económico </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault10"  value="Equilibrado"> <label class="form-check-label" for="flexRadioDefault10"> Equilibrado </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault11" value="Lo mejor"> <label class="form-check-label" for="flexRadioDefault11"> Lo mejor </label></div></div></form></div>';

        data[2] = '<div class="col datos"><h5>Case</h5><form id="form4"><div class="inputs fw-light" fw-light"><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault13" value="Mini (ITX)"> <label class="form-check-label" for="flexRadioDefault13"> Mini (ITX) </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault14"  value="Pequeño (Micro ATX)"> <label class="form-check-label" for="flexRadioDefault14"> Pequeño (Micro ATX) </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault15" value="Estándar (ATX)"> <label class="form-check-label" for="flexRadioDefault15"> Estándar (ATX) </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault16" value="Gigante (ATX y EATX)"> <label class="form-check-label" for="flexRadioDefault16"> Gigante(ATX y EATX) </label></div></div></form></div>';

        data[3] = '<div class="col datos"><h5>Diseño</h5><form id="form5"><div class="inputs fw-light"><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault17" value="Básico"> <label class="form-check-label" for="flexRadioDefault17"> Básico </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault18"  value="Minimalista"> <label class="form-check-label" for="flexRadioDefault18"> Minimalista </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault19" value="Con RGB"> <label class="form-check-label" for="flexRadioDefault19"> Con RGB </label></div></div></form></div>';

        data[4] = '<div class="col datos"><h5>Refrigeración</h5><form id="form6"><div class="inputs fw-light"><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault20" value="Stock"> <label class="form-check-label" for="flexRadioDefault20"> Stock </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault21"  value="Aire"> <label class="form-check-label" for="flexRadioDefault21"> Aire </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault22" value="Líquida"> <label class="form-check-label" for="flexRadioDefault22"> Líquida </label></div></div></form></div>';

        data[5] = '<div class="col datos"><h5>Overclocking</h5><form id="form7"><div class="inputs fw-light"><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault23"  value="Sí"> <label class="form-check-label" for="flexRadioDefault23"> Sí </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault24"  value="No"> <label class="form-check-label" for="flexRadioDefault24"> No </label></div></div></form></div>';

        colData[0].innerHTML = data[0];

        colData[2].innerHTML = data[1];

        colData[4].innerHTML = data[2];

        colData[6].innerHTML = data[3];

        colData[8].innerHTML = data[4];

        colData[10].innerHTML = data[5];

        dataUp[0] = '<div class="col text-up"> <label class="fw-light"></label>';

        upData[2].innerHTML = dataUp[0];
        upData[4].innerHTML = dataUp[0];
        upData[6].innerHTML = dataUp[0];
        upData[8].innerHTML = dataUp[0];
        upData[10].innerHTML = dataUp[0];


    } else {
        if (producto == 'Laptop') {
            console.log('Seleccionaste ' + producto)

            data[0] = '<div class="col datos"><h5>Uso</h5><form id="form2"><div class="inputs fw-light"><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault5" value="Multimedia"> <label class="form-check-label" for="flexRadioDefault5"> Multimedia </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault6" value="Gaming"> <label class="form-check-label" for="flexRadioDefault6"> Gaming </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault7" value="Edición/Profesional"> <label class="form-check-label" for="flexRadioDefault7"> Edición/Profesional </label></div></div></form></div>';

            data[1] = '<div class="col datos"><h5>Presupuesto</h5><form id="form3"><div class="inputs fw-light"><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault9" value="Lo más económico"> <label class="form-check-label" for="flexRadioDefault9"> Lo más económico </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault10" value="Equilibrado"> <label class="form-check-label" for="flexRadioDefault10"> Equilibrado </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault11" value="Lo mejor"> <label class="form-check-label" for="flexRadioDefault11"> Lo mejor </label></div></div></form></div>';

            data[2] = '<div class="col datos"><h5>Tipo</h5><form id="form4"><div class="inputs fw-light" fw-light"><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault13" value="UltraSlim"> <label class="form-check-label" for="flexRadioDefault13"> UltraSlim </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault14" value="Slim"> <label class="form-check-label" for="flexRadioDefault14"> Slim </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault15" value="Estándar"> <label class="form-check-label" for="flexRadioDefault15"> Estándar </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault16" value="Robusto"> <label class="form-check-label" for="flexRadioDefault16"> Robusto </label></div></div></form></div>';

            data[3] = '<div class="col datos"><h5>Diseño</h5><form id="form5"><div class="inputs fw-light"><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault17" value="Básico"> <label class="form-check-label" for="flexRadioDefault17"> Básico </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault18" value="Minimalista"> <label class="form-check-label" for="flexRadioDefault18"> Minimalista </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault19" value="Con RGB"> <label class="form-check-label" for="flexRadioDefault19"> Con RGB </label></div></div></form></div>';

            data[4] = '<div class="col datos"><h5>Pantalla</h5><form id="form6"><div class="inputs fw-light"><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault23" value="Estándar"> <label class="form-check-label" for="flexRadioDefault23"> Estándar (12:14 inch) </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault24" value="Grande (15.6 a más)"> <label class="form-check-label" for="flexRadioDefault24"> Grande (15.6 a más) </label></div></div></form></div>';

            data[5] = '<div class="col datos"></div>'

            colData[0].innerHTML = data[0];

            colData[2].innerHTML = data[1];

            colData[4].innerHTML = data[2];

            colData[6].innerHTML = data[3];

            colData[8].innerHTML = data[4];

            colData[10].innerHTML = data[5];

            dataUp[0] = '<div class="col text-up"> <label class="fw-light"></label>';

            upData[1].innerHTML = dataUp[0];
            upData[3].innerHTML = dataUp[0];
            upData[5].innerHTML = dataUp[0];
            upData[7].innerHTML = dataUp[0];
            upData[9].innerHTML = dataUp[0];



        } else {
            if (producto == 'Periféricos') {
                console.log('Seleccionaste ' + producto)

                data[0] = '<div class="col datos"><h5>Tipo</h5><form id="form2"><div class="inputs fw-light"><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault5" value="Monitor"> <label class="form-check-label" for="flexRadioDefault5"> Monitor </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault6" value="Mouse"> <label class="form-check-label" for="flexRadioDefault6"> Mouse </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault7" value="Teclado"> <label class="form-check-label" for="flexRadioDefault7"> Teclado </label></div></div></form></div>';

                data[1] = '<div class="col datos"><h5>Presupuesto</h5><form id="form3"><div class="inputs fw-light"><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault9" value="Lo más económico"> <label class="form-check-label" for="flexRadioDefault9"> Lo más económico </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault10" value="Equilibrado"> <label class="form-check-label" for="flexRadioDefault10"> Equilibrado </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault11" value="Lo mejor"> <label class="form-check-label" for="flexRadioDefault11"> Lo mejor </label></div></div></form></div>';

                data[2] = '<div class="col datos"><h5>Diseño</h5><form id="form4"><div class="inputs fw-light"><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault23" value="Básico"> <label class="form-check-label" for="flexRadioDefault23"> Básico </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault24" value="Gamer"> <label class="form-check-label" for="flexRadioDefault24"> Gamer </label></div></div></form></div>';

                data[3] = '<div class="col datos"><h5>Resolución</h5><form id="form5"><div class="inputs fw-light"><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault23" value="1080p"> <label class="form-check-label" for="flexRadioDefault23"> 1080p </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault24" value="1440p"> <label class="form-check-label" for="flexRadioDefault24"> 1440p </label></div></div></form></div>';

                data[4] = '<div class="col datos"><h5>Ergónomico</h5><form id="form6"><div class="inputs fw-light"><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault23" value="Sí"> <label class="form-check-label" for="flexRadioDefault23"> Sí </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault24" value="No"> <label class="form-check-label" for="flexRadioDefault24"> No </label></div></div></form></div>';

                data[5] = '<div class="col datos"><h5>Conexión</h5><form id="form7"><div class="inputs fw-light"><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault23" value="Cable"> <label class="form-check-label" for="flexRadioDefault23"> Cable </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault24" value="Inalámbrica"> <label class="form-check-label" for="flexRadioDefault24"> Inalámbrica </label></div></div></form></div>';

                colData[0].innerHTML = data[0];

                colData[2].innerHTML = data[1];

                colData[4].innerHTML = data[2];

                colData[6].innerHTML = data[3];

                colData[8].innerHTML = data[4];

                colData[10].innerHTML = data[5];

                dataUp[4] = '<div class="col text-up"> <label class="fw-light">Monitor</label></div>';

                dataUp[5] = '<div class="col text-up"> <label class="fw-light">Mouse y Teclado</label></div>';

                dataUp[0] = '<div class="col text-up"> <label class="fw-light"></label>';

                upData[2].innerHTML = dataUp[0];

                upData[4].innerHTML = dataUp[0];

                upData[6].innerHTML = dataUp[4];

                upData[8].innerHTML = dataUp[5];

                upData[10].innerHTML = dataUp[5];



            } else {
                console.log('Seleccionaste ' + producto)

                data[0] = '<div class="col datos"><h5>Para</h5><form id="form2"><div class="inputs fw-light"><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault9" value="PC"> <label class="form-check-label" for="flexRadioDefault9"> PC </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault10" value="Laptop"> <label class="form-check-label" for="flexRadioDefault10"> Laptop </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault11" value="Otros"> <label class="form-check-label" for="flexRadioDefault11"> Otros </label></div></div></form></div>';

                data[1] = '<div class="col datos"><h5>Categoría</h5><form id="form3"><div class="inputs fw-light"><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault23" value="Cables"> <label class="form-check-label" for="flexRadioDefault23"> Cables </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault24" value="Receptor"> <label class="form-check-label" for="flexRadioDefault24"> Receptor </label></div></div></form></div>';

                data[2] = '<div class="col datos"><h5>Categoría</h5><form id="form4"><div class="inputs fw-light"><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault23" value="Fundas"> <label class="form-check-label" for="flexRadioDefault23"> Fundas </label></div><div class="form-check"> <input class="form-check-input" autocomplete="off" type="radio" name="flexRadioDefault" id="flexRadioDefault24" value="Soportes"> <label class="form-check-label" for="flexRadioDefault24"> Soportes </label></div></div></form></div>';

                data[3] = '<div class="col datos"></div>';

                data[4] = '<div class="col datos"></div>';

                data[5] = '<div class="col datos"></div>';

                colData[0].innerHTML = data[0];

                colData[2].innerHTML = data[1];

                colData[4].innerHTML = data[2];

                colData[6].innerHTML = data[3];

                colData[8].innerHTML = data[4];

                colData[10].innerHTML = data[5];

                dataUp[2] = '<div class="col text-up"> <label class="fw-light">Otros</label></div>';

                dataUp[3] = '<div class="col text-up"> <label class="fw-light">PC y Laptop</label></div>';

                dataUp[0] = '<div class="col text-up"> <label class="fw-light"></label>';


                upData[1].innerHTML = dataUp[2];

                upData[3].innerHTML = dataUp[3];

                upData[5].innerHTML = dataUp[0];

                upData[7].innerHTML = dataUp[0];

                upData[9].innerHTML = dataUp[0];

            }
        }
    }


}

function recomendado() {

    console.log(producto);
    var filtro = '';
    var cat = producto;

    if (cat == 'PC') {

        f2 = ($('input[name=flexRadioDefault]:checked', '#form2').val());

        f3 = ($('input[name=flexRadioDefault]:checked', '#form3').val());

        f4 = ($('input[name=flexRadioDefault]:checked', '#form4').val());

        f5 = ($('input[name=flexRadioDefault]:checked', '#form5').val());

        f6 = ($('input[name=flexRadioDefault]:checked', '#form6').val());

        f7 = ($('input[name=flexRadioDefault]:checked', '#form7').val());

        if (f2 == 'Edición' && f3 == 'Equilibrado' && f4 == 'Estándar (ATX)' && f5 == 'Minimalista' && f6 == 'Líquida' && f7 == 'No') {
            filtro = '<ul class="list-unstyled"><li class="item-f"><div class="box bg-glass"><div class="slide-img"> <img alt="12" src="../img/12.png" /><div class="overlay"><a href="#" class="buy-btn">Comprar Ahora</a></div></div><div class="detail-box"><div class="type"> <a href="#">PC Hinata</a> <span>PC Gamer</span></div><a href="#" class="price">$1000</a></div></div></li></ul>';
            document.getElementById('recommended').innerHTML = filtro;
        } else {
            alert('No hay Recomendaciones para su Búsqueda');
            document.getElementById('recommended').innerHTML = filtro;

        }

    } else {
        if (cat == 'Laptop') {

            f2 = ($('input[name=flexRadioDefault]:checked', '#form2').val());

            f3 = ($('input[name=flexRadioDefault]:checked', '#form3').val());

            f4 = ($('input[name=flexRadioDefault]:checked', '#form4').val());

            f5 = ($('input[name=flexRadioDefault]:checked', '#form5').val());

            f6 = ($('input[name=flexRadioDefault]:checked', '#form6').val());

            if (f2 == 'Profesional' && f3 == 'Equilibrado' && f4 == 'Estándar' && f5 == 'Minimalista' && f6 == 'Grande (15.6 a más)') {

                filtro = '<ul class="list-group list-unstyled list-group-horizontal"><li class="item-f"><div class="box bg-glass"><div class="slide-img"> <img alt="6" src="../img/6.png" /><div class="overlay"><a href="#" class="buy-btn">Comprar Ahora</a></div></div><div class="detail-box"><div class="type"> <a href="producto.html">Laptop ASUS Zenbook UX425EA</a> <span>L- Profesional</span></div><a href="#" class="price">$358</a></div></div></li><li class="item-g"><div class="box bg-glass"><div class="slide-img"> <img alt="6" src="../img/10.png" /><div class="overlay"><a href="#" class="buy-btn">Comprar Ahora</a></div></div><div class="detail-box"><div class="type"> <a href="#">Laptop ASUS VivoBook 14</a> <span>L- Profesional</span></div><a href="#" class="price">$258</a></div></div></li></ul>';
                document.getElementById('recommended').innerHTML = filtro;
                console.log('Mostrando Elemento');
            }
            else {
                alert('No hay Recomendaciones para su Búsqueda');
                document.getElementById('recommended').innerHTML = filtro;
            }

        } else {
            if (cat == 'Periféricos') {
                f2 = ($('input[name=flexRadioDefault]:checked', '#form2').val());

                f3 = ($('input[name=flexRadioDefault]:checked', '#form3').val());

                f4 = ($('input[name=flexRadioDefault]:checked', '#form4').val());

                f5 = ($('input[name=flexRadioDefault]:checked', '#form5').val());

                f6 = ($('input[name=flexRadioDefault]:checked', '#form6').val());

                f7 = ($('input[name=flexRadioDefault]:checked', '#form7').val());

                if (f2 == 'Teclado' && f3 == 'Equilibrado' && f4 == 'Gamer' && f5 == null && f6 == 'No' && f7 == 'Cable') {
                    filtro = '<ul class="list-unstyled"><li class="item-f"><div class="box bg-glass"><div class="slide-img"> <img alt="4" src="../img/4.png" /><div class="overlay"><a href="#" class="buy-btn">Comprar Ahora</a></div></div><div class="detail-box"><div class="type"> <a href="#">Corsair Strafe RGB MK.2 Silent</a> <span>P- Teclados</span></div><a href="#" class="price">$27</a></div></div></li></ul>';
                    document.getElementById('recommended').innerHTML = filtro;
                    console.log('Mostrando Elemento');
                }
                else {
                    alert('No hay Recomendaciones para su Búsqueda');
                    document.getElementById('recommended').innerHTML = filtro;
                }

            } else {
                f2 = ($('input[name=flexRadioDefault]:checked', '#form2').val());

                f3 = ($('input[name=flexRadioDefault]:checked', '#form3').val());

                f4 = ($('input[name=flexRadioDefault]:checked', '#form4').val());

                if (f2 == 'Otros' && f3 == null && f4 == 'Soportes') {
                    filtro = '<ul class="list-unstyled"><li class="item-f"><div class="box bg-glass"><div class="slide-img"> <img alt="3" src="../img/3.png" /><div class="overlay"><a href="#" class="buy-btn">Comprar Ahora</a></div></div><div class="detail-box"><div class="type"> <a href="#">PC Dock Pro - Multiuso</a> <span>Accesorios</span></div><a href="#" class="price">$102</a></div></div></li></ul>';
                    document.getElementById('recommended').innerHTML = filtro;
                    console.log('Mostrando Elemento');
                }
                else{
                    alert('No hay Recomendaciones para su Búsqueda');
                    document.getElementById('recommended').innerHTML = filtro;
                }
            }
        }
    }

}