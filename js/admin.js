const API =
"https://script.google.com/macros/s/AKfycbxcV3V1dVrwK21Fv4w57dwrofXCKm0vCWcuOvnjNo9781DWbX2hyb_Hw_Ao6-wWmWX2Vg/exec";



async function loadAdmin(){


const response =
await fetch(
API + "?action=admin"
);



const data =
await response.json();



const tbody =
document.querySelector(
"#adminTable tbody"
);



tbody.innerHTML="";



data.forEach(row=>{


tbody.innerHTML += `

<tr>

<td>${row[3]}</td>

<td>${row[4]}</td>

<td>${row[1]}</td>

<td>${row[2]}</td>

<td>${row[5]}</td>


</tr>

`;


});


}


loadAdmin();
