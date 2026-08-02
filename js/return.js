const API =
"https://script.google.com/macros/s/AKfycbxcV3V1dVrwK21Fv4w57dwrofXCKm0vCWcuOvnjNo9781DWbX2hyb_Hw_Ao6-wWmWX2Vg/exec";


async function searchBooks(){


const email =
document
.getElementById("email")
.value
.trim();



if(email === ""){

    alert("メールアドレスを入力してください");

    return;

}



console.log("検索メール:", email);



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



console.log("検索結果:", books);



const tbody =
document
.getElementById("returnList");



tbody.innerHTML="";



if(books.length === 0){

tbody.innerHTML = `

<tr>

<td colspan="4">

貸出中の本がありません

</td>

</tr>

`;

return;

}



books.forEach(book=>{


tbody.innerHTML += `

<tr>


<td data-label="図書ID">

${book[3]}

</td>



<td data-label="タイトル">

${book[4]}

</td>



<td data-label="状態">

${book[5]}

</td>



<td data-label="返却">


<button onclick="returnBook('${book[3]}')">

返却

</button>


</td>


</tr>


`;

});


}



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


<td data-label="図書ID">

${book[3]}

</td>



<td data-label="タイトル">

${book[4]}

</td>



<td data-label="状態">

<span class="status borrowed">

${book[5]}

</span>

</td>



<td data-label="返却">


<button
onclick="returnBook('${book[3]}')">

返却

</button>


</td>


</tr>

`;



});


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
