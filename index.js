let book = document.querySelector(".flip1");
let book1 = document.querySelector(".flip2");
let book2 = document.querySelector(".flip3");
let book3 = document.querySelector(".flip4");
let book4 = document.querySelector(".flip5");

book.addEventListener("click", changeBackground);
book1.addEventListener("click", changeBackground);
book2.addEventListener("click", changeBackground);
// book3.addEventListener("click", changeBackground);
// book4.addEventListener("click", changeBackground);

/* backKey:
0 = id
1 = full first image url
2 = trunc first image
3 = full second image url
4 = trunc second image
*/

let backKey = [
  //Nalo
  [
    book,
    "url(https://images-na.ssl-images-amazon.com/images/I/61h6zjbZxKL.jpg)",
    "61h6zjbZxKL.jpg",
    "url(https://i0.wp.com/www.tor.com/wp-content/uploads/2018/05/MidnightRobber-crop.jpg?fit=740%2C+9999&crop=0%2C0%2C100%2C385px&ssl=1)",
    "MidnightRobber-crop.jpg",
  ],
  //Binti
  [
    book1,
    "url(https://images-na.ssl-images-amazon.com/images/I/81IICHFn4LL.jpg)",
    "81IICHFn4LL.jpg",
    "url(https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1537451432l/37877850.jpg)",
    "37877850.jpg",
  ],
  //Butler
  [
    book2,
    "url(https://sevenstories-prod.s3.amazonaws.com/images/000001/899/9781609807191-da7f3fbf233ca2baf010a8008f711b75.jpg)",
    "da7f3fbf233ca2baf010a8008f711b75.jpg",
    "url(https://miro.medium.com/max/1600/1*CYXgMimMw7JfKg1qlQl6UA.png)",
    "CYXgMimMw7JfKg1qlQl6UA.png",
  ],
  //Blood
  [
    book3,
    "url(https://images-na.ssl-images-amazon.com/images/I/A1agLFsWkOL.jpg)",
    "A1agLFsWkOL.jpg",
    "url(https://assets.teenvogue.com/photos/596e81a07d3e1e55d6876f96/16:9/w_1280,c_limit/facebook.jpg)",
    "w_1280,c_limit/facebook.jpg",
  ],
  //Fifth
  [
    book4,
    "url(https://nkjemisin.com/wp-content/uploads/2013/09/Jemisin_FifthSeason-TP.jpg)",
    "Jemisin_FifthSeason-TP.jpg",
    "url(https://i1.wp.com/www.tor.com/wp-content/uploads/2017/04/fifth-season-limited-cover.jpg?fit=537%2C%209999&crop=0%2C0%2C100%2C810px)",
    "fifth-season-limited-cover.jpg",
  ],
];

for (let i = 0; i < backKey.length; i++) {
  backKey[i][0].addEventListener("click", changeBackground);
  let currentArr = backKey[i];
  currentArr[0].style.backgroundImage = currentArr[1];
  currentArr[0].classList.add("round");

  function changeBackground() {
    if (currentArr[0].style.backgroundImage.match(currentArr[2])) {
      currentArr[0].style.backgroundImage = currentArr[3];
      currentArr[0].classList.add("containB");
      currentArr[0].classList.remove("coverB");
    } else {
      currentArr[0].style.backgroundImage = currentArr[1];
      currentArr[0].classList.add("round");
      currentArr[0].classList.remove("containB");
    }
  }
}

//HARD CODED FUNCTIONS

// function myFunction2() {
//   let bookButton = document.getElementById("nalo");
//   if (bookButton.style.backgroundImage.match("MidnightRobber-crop.jpg")) {
//     bookButton.style.backgroundImage =
//       "url(https://images-na.ssl-images-amazon.com/images/I/61h6zjbZxKL.jpg)";
//     bookButton.style.backgroundSize = "cover";
//   } else {
//     bookButton.style.backgroundImage =
//       "url(https://i0.wp.com/www.tor.com/wp-content/uploads/2018/05/MidnightRobber-crop.jpg?fit=740%2C+9999&crop=0%2C0%2C100%2C385px&ssl=1)";
//     bookButton.style.backgroundSize = "contain";
//   }
// }

// function myFunction3() {
//   let bookButton1 = document.getElementById("binti");
//   if (bookButton1.style.backgroundImage.match("81IICHFn4LL.jpg")) {
//     bookButton1.style.backgroundImage =
//       "url(https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1537451432l/37877850.jpg)";
//     bookButton1.style.backgroundSize = "contain";
//     bookButton1.style.backgroundPosition = "center top";
//   } else {
//     bookButton1.style.backgroundImage =
//       "url(https://images-na.ssl-images-amazon.com/images/I/81IICHFn4LL.jpg)";
//     bookButton1.style.backgroundSize = "cover";
//     bookButton1.style.backgroundPosition = "center top";
//   }
// }

// function myFunction4() {
//   let bookButton1 = document.getElementById("butler");
//   if (bookButton1.style.backgroundImage.match("1*CYXgMimMw7JfKg1qlQl6UA.png")) {
//     bookButton1.style.backgroundImage =
//       "url(https://sevenstories-prod.s3.amazonaws.com/images/000001/899/9781609807191-da7f3fbf233ca2baf010a8008f711b75.jpg)";
//     bookButton1.style.backgroundSize = "contain";
//     bookButton1.style.backgroundPosition = "center top";
//   } else {
//     bookButton1.style.backgroundImage =
//       "url(https://miro.medium.com/max/1600/1*CYXgMimMw7JfKg1qlQl6UA.png)";
//     bookButton1.style.backgroundSize = "cover";
//     bookButton1.style.backgroundPosition = "center top";
//   }
// }

// function myFunction5() {
//   let bookButton1 = document.getElementById("blood");
//   if (bookButton1.style.backgroundImage.match("facebook.jpg")) {
//     bookButton1.style.backgroundImage =
//       "url(https://images-na.ssl-images-amazon.com/images/I/A1agLFsWkOL.jpg)";
//     bookButton1.style.backgroundSize = "contain";
//     bookButton1.style.backgroundPosition = "center top";
//   } else {
//     bookButton1.style.backgroundImage =
//       "url(https://assets.teenvogue.com/photos/596e81a07d3e1e55d6876f96/16:9/w_1280,c_limit/facebook.jpg)";
//     bookButton1.style.backgroundSize = "contain";
//     bookButton1.style.backgroundPosition = "center";
//   }
// }

// function myFunction6() {
//   let bookButton1 = document.getElementById("fifth");
//   if (
//     bookButton1.style.backgroundImage.match("fifth-season-limited-cover.jpg")
//   ) {
//     bookButton1.style.backgroundImage =
//       "url(https://nkjemisin.com/wp-content/uploads/2013/09/Jemisin_FifthSeason-TP.jpg)";
//     bookButton1.style.backgroundSize = "cover";
//     bookButton1.style.backgroundPosition = "center top";
//   } else {
//     bookButton1.style.backgroundImage =
//       "url(https://i1.wp.com/www.tor.com/wp-content/uploads/2017/04/fifth-season-limited-cover.jpg?fit=537%2C%209999&crop=0%2C0%2C100%2C810px)";
//     bookButton1.style.backgroundSize = "cover";
//     bookButton1.style.backgroundPosition = "top";
//   }
// }
