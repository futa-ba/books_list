const API =
"https://script.google.com/macros/s/AKfycbxN2inDXwjnuim7njt13V8L0Po_LC6nrHxLH0dw2-KMCeJ6p6ntSqrla8WLcmRxtDyMXQ/exec";


let allBooks = [];


function loadBooks(){

    const script = document.createElement("script");

    script.src = API + "?callback=displayBooks";

    document.body.appendChild(script);

}



function displayBooks(books){

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
                title.includes(text) ||
                author.includes(text) ||
                category.includes(text)
            );


        });


    renderBooks(filtered);


});
