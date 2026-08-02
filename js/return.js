const API =
"https://script.google.com/macros/s/AKfycbxcV3V1dVrwK21Fv4w57dwrofXCKm0vCWcuOvnjNo9781DWbX2hyb_Hw_Ao6-wWmWX2Vg/exec";


async function searchBooks(){


const emailElement =
document.getElementById("email");


console.log("email element:", emailElement);


if(!emailElement){

    alert("メール入力欄が見つかりません。");

    return;

}


const email =
emailElement.value;



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

<button
onclick="returnBook('${book[3]}')">

返却

</button>

</td>

</tr>

`;


});


}



async function returnBook(bookId){


const response =
await fetch(

API
+
"?action=returnBook&bookId="
+
encodeURIComponent(bookId)

);



const result =
await response.text();



alert(result);



location.reload();


}
