console.log("books.js start");

const API =
"https://script.google.com/macros/s/AKfycbxcV3V1dVrwK21Fv4w57dwrofXCKm0vCWcuOvnjNo9781DWbX2hyb_Hw_Ao6-wWmWX2Vg/exec";


let allBooks = [];


async function loadBooks(){

    const response =
        await fetch(API);


    const books =
        await response.json();


    allBooks = books;


    renderBooks(allBooks);

}



function renderBooks(books){


const tbody =
document.querySelector("#bookTable tbody");


tbody.innerHTML="";



books.forEach(book=>{


tbody.innerHTML += `

<tr>


<td data-label="ID">

${book.ID}

</td>



<td data-label="タイトル">

${book.タイトル}

</td>



<td data-label="著者">

${book.著者}

</td>



<td data-label="状態">

<span class="
status
${book.状態 === "貸出可" ? "available" : "borrowed"}
">

${book.状態}

</span>


</td>



<td data-label="操作">


${
book.状態 === "貸出可"

?

`

<button

onclick="requestBook('${book.ID}','${book.タイトル}')"

>

貸出申請

</button>

`

:

`

<span class="disabled">

貸出中

</span>

`

}


</td>


</tr>

`;



});


}



const keyword =
document.getElementById("keyword");


keyword.addEventListener(
"input",
()=>{


    const text =
        keyword.value
        .trim()
        .toLowerCase();



    const filtered =
        allBooks.filter(book=>{


            const title =
                String(book.タイトル || "")
                .toLowerCase();


            const author =
                String(book.著者 || "")
                .toLowerCase();


            const category =
                String(book.分類 || "")
                .toLowerCase();



            return (

                title.includes(text)

                ||

                author.includes(text)

                ||

                category.includes(text)

            );


        });


    renderBooks(filtered);

    

});


loadBooks();

function requestBook(id, title){

    const formURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSdJz-D5PXo6L27hHw8u7H2KyERTkmJipUaHMot6yvXhiYEn9g/viewform";


    const bookIdEntry =
    "entry.1432276930";


    const titleEntry =
    "entry.2068141398";


    const url =
        formURL
        + "?"
        + bookIdEntry
        + "="
        + encodeURIComponent(id)
        + "&"
        + titleEntry
        + "="
        + encodeURIComponent(title);


    window.open(
        url,
        "_blank"
    );

}
