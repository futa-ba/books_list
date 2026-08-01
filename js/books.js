const API =
"https://script.google.com/macros/s/AKfycbwWThRcouiyNIGwM_RJ97uP8KUDn_4unTzmjcKW9VXeIyep4nyZJ2PelIlRPxauP-AE0Q/exec";


function loadBooks(){

    const script = document.createElement("script");

    script.src = API + "?callback=displayBooks";

    document.body.appendChild(script);

}


function displayBooks(books){


    const tbody =
        document.querySelector("#bookTable tbody");


    tbody.innerHTML = "";


    books.forEach(book=>{


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


loadBooks();
