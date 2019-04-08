
var pos="";
var subtotal = 0;

function validarnumero(numero, pos){
    if (!/^([0-9])*$/.test(numero)) {
        alert("ingrese solo numeros")
        if (pos==1) {
            document.getElementById("precio").value = ""
            document.getElementById("precio").focus();
        } else {
            document.getElementById("cantidad").value = ""
            document.getElementById("cantidad").focus();
        }
        
    }

}


function iniciar(){
    if (validar()) {
        var arregloproductos = lerdatos();
        if (pos=="") {
            registrar(arregloproductos);
            caja2();
            limpiar();
            document.getElementById("producto").focus();
        } else {
            modificar(arregloproductos);
            caja2();
        }
    }


}

function lerdatos(){
    var a = parseInt(document.getElementById("precio").value);
    var b = parseInt(document.getElementById("cantidad").value)
    total1 = a*b;
    subtotal += total1; 
    var arregloproductos = {};

        arregloproductos["producto"] =document.getElementById("producto").value;
        arregloproductos["precio"] =document.getElementById("precio").value;
        arregloproductos["cantidad"] =document.getElementById("cantidad").value;
        arregloproductos["total1"] =total1;

        return arregloproductos;
}

function registrar(arregloproductos){
    var tabla = document.getElementById("tabla").getElementsByTagName('tbody')[0];
    var newRow = tabla.insertRow(tabla.length);
    alert(tabla.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = arregloproductos.producto;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = arregloproductos.precio;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = arregloproductos.cantidad;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = arregloproductos.total1;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = '<td><button onclick="edit(this)">Edit</button><button onclick="remove(this)">Remove</button></td>'
}

function edit(td){
    var pos = td.parentElement.parentElement;
    document.getElementById("producto").value = pos.cells[0].innerHTML;
    document.getElementById("precio").value = pos.cells[1].innerHTML;
    document.getElementById("cantidad").value = pos.cells[2].innerHTML;
}


function modificar(arregloproductos){
    pos.cells[0].innerHTML = arregloproductos.producto;
    pos.cells[1].innerHTML = arregloproductos.precio;
    pos.cells[2].innerHTML = arregloproductos.cantidad;
}


function remove(td){
    var resta;

    if (confirm("Desea Eliminar")) {
        row = td.parentElement.parentElement;
        document.getElementById("tabla").deleteRow(row.rowIndex);
        resta = parseInt(row.cells[3].innerHTML);
        subtotal -= resta;
        caja2();
        
    }


}
function caja2(){
    document.getElementById("subtotal").value = subtotal;
    document.getElementById("igv").value = subtotal * 0.18;
    document.getElementById("total").value = (subtotal * 0.18) + subtotal;
}

function validar(){
    var a=true;

        if (document.getElementById("producto")=="" || document.getElementById("precio")=="" || document.getElementById("cantidad")=="") {  
            alert("Ingrese datos");
            a=false
        } 
        return a;
}

function limpiar(){
    document.getElementById("producto").value = "";
    document.getElementById("precio").value= "";
    document.getElementById("cantidad").value = "";
}
