const API =
"https://script.google.com/macros/s/あなたのURL/exec";


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
        keyword.value.toLowerCase();



    const filtered =
        allBooks.filter(book=>{


            return (

                book.タイトル
                .toLowerCase()
                .includes(text)

                ||

                book.著者
                .toLowerCase()
                .includes(text)

            );


        });



    renderBooks(filtered);


});



loadBooks();
