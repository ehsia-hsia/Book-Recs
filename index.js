let book = document.querySelector('.flip1');
book.addEventListener("click", myFunction2);

function myFunction2() {
    let bookButton = document.getElementById("nalo");
    if (bookButton.style.backgroundImage.match("MidnightRobber-crop.jpg")) {
        bookButton.style.backgroundImage = "url(https://images-na.ssl-images-amazon.com/images/I/61h6zjbZxKL.jpg)";
        bookButton.style.backgroundSize = "cover";
    } else {
        bookButton.style.backgroundImage = "url(https://i0.wp.com/www.tor.com/wp-content/uploads/2018/05/MidnightRobber-crop.jpg?fit=740%2C+9999&crop=0%2C0%2C100%2C385px&ssl=1)";
        bookButton.style.backgroundSize = "contain";

    }
}

let book1 = document.querySelector('.flip2');
book1.addEventListener("click", myFunction3);

function myFunction3() {
    let bookButton1 = document.getElementById("binti");
    if (bookButton1.style.backgroundImage.match("81IICHFn4LL.jpg")) {
        bookButton1.style.backgroundImage = "url(https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1537451432l/37877850.jpg)";
        bookButton1.style.backgroundSize = "contain";
        bookButton1.style.backgroundPosition = "center top";
        let text = document.querySelector('#captionBinti');
        text.innerHTML = "";
    } else {
        bookButton1.style.backgroundImage = "url(https://images-na.ssl-images-amazon.com/images/I/81IICHFn4LL.jpg)";
        bookButton1.style.backgroundSize = "cover";
        bookButton1.style.backgroundPosition = "center top";
        let text = document.querySelector('#captionBinti');
        text.innerHTML = "Such a blast to read";
    }
}



let book2 = document.querySelector('.flip3');
book2.addEventListener("click", myFunction4);

function myFunction4() {
    let bookButton1 = document.getElementById("butler");
    if (bookButton1.style.backgroundImage.match("1*CYXgMimMw7JfKg1qlQl6UA.png")) {
        bookButton1.style.backgroundImage = "url(https://sevenstories-prod.s3.amazonaws.com/images/000001/899/9781609807191-da7f3fbf233ca2baf010a8008f711b75.jpg)";
        bookButton1.style.backgroundSize = "contain";
        bookButton1.style.backgroundPosition = "center top";
        let text = document.querySelector('#');
        text.innerHTML = "";
    } else {
        bookButton1.style.backgroundImage = "url(https://miro.medium.com/max/1600/1*CYXgMimMw7JfKg1qlQl6UA.png)";
        bookButton1.style.backgroundSize = "cover";
        bookButton1.style.backgroundPosition = "center top";
        let text = document.querySelector('#');
        text.innerHTML = "Such a blast to read";
    }
}