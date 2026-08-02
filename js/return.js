const API =
"https://script.google.com/macros/s/AKfycbzXexSuZm4Ao2g3MfQe_34lLhpozxZ51QSueNFKesYE1xfd0K0695IEm3tB6IeTJudBTQ/exec";



async function searchBooks(){


const name =
document
.getElementById("name")
.value;



const response =
await fetch(
API
+
"?action=returnSearch&name="
+
encodeURIComponent(name)
);



const books =
await response.json();



const tbody =
document
.getElementById("returnList");



tbody.innerHTML = "";



books.forEach(book=>{


tbody.innerHTML += `

<tr>

<td>${book[3]}</td>

<td>${book[4]}</td>

<td>${book[5]}</td>

</tr>

`;


});


}
