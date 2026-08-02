console.log("books.js start");

const API =
"https://script.google.com/macros/s/AKfycbwNPReFH6SYU3INV-WGB2dCtWB90B6wbmEKWDxXJc1chfsL0XGX8xvc8jAZVhMXe3FZYQ/exec";


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


    tbody.innerHTML = "";


    books.forEach(book => {


        tbody.innerHTML += `

        <tr>

            <td>${book.ID}</td>

            <td>${book.タイトル}</td>

            <td>${book.著者}</td>

            <td>${book.状態}</td>

            <td>
            ${
                book.状態 === "貸出可"
                ?
                `
                <button onclick="requestBook('${book.ID}','${book.タイトル}')">
                貸出申請
                </button>
                `

                :

                "貸出中"

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
