const API =
"https://script.google.com/macros/s/AKfycbzz5_U5QHJ-HaW74IJWB4H_t4KHTSaZFPBmiILsXCGp7bgahdJQtBPpYz10E_2ERePPEA/exec";


async function searchBooks(){


const email =
document
.getElementById("email")
.value;



const response =
await fetch(

API
+
"?action=returnSearch&email="
+
encodeURIComponent(email)

);



const books =
await response.json();



const tbody =
document
.getElementById("returnList");



tbody.innerHTML="";



books.forEach(book=>{


tbody.innerHTML += `

<tr>

<td>${book[3]}</td>

<td>${book[4]}</td>

<td>${book[5]}</td>

<td>

<button>
返却
</button>

</td>

</tr>

`;


});


}
