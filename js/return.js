const API =
"https://script.google.com/macros/s/AKfycbxcV3V1dVrwK21Fv4w57dwrofXCKm0vCWcuOvnjNo9781DWbX2hyb_Hw_Ao6-wWmWX2Vg/exec";



async function searchBooks(){


    const emailElement =
    document.getElementById("email");



    if(!emailElement){

        alert("メール入力欄がありません");

        return;

    }



    const email =
    emailElement.value.trim();



    if(email === ""){

        alert("メールアドレスを入力してください");

        return;

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
    document.getElementById("returnList");



    tbody.innerHTML = "";




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





async function returnBook(bookId){



    console.log(
        "返却ID:",
        bookId
    );



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
