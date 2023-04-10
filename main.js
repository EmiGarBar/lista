nombre_invitado_arrive=[];

function submit()
{var nombre_1=document.getElementById("Nombre_invitado_1").value;

var nombre_2=document.getElementById("Nombre_invitado_2").value;

var nombre_3=document.getElementById("Nombre_invitado_3").value;

var nombre_4=document.getElementById("Nombre_invitado_4").value;

nombre_invitado_arrive.push(nombre_1);
nombre_invitado_arrive.push(nombre_2);
nombre_invitado_arrive.push(nombre_3);
nombre_invitado_arrive.push(nombre_4);

document.getElementById("ver_nombre").innerHTML=nombre_invitado_arrive;
}
