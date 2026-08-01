const API =
"https://script.google.com/macros/s/AKfycbzU8sxjzLp4XBMQogkVwljYPEfpQnAwMCw_U-UqO0IlVujWFGaRrQ__Ru0-IGID-cCXjw/exec";


async function loadBooks(){


    const response = await fetch(API);


    const books = await response.json();



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


loadBooks();
