// 1. Show an alert box on click on a link.

let link = document.getElementById("alertClick");

link.addEventListener("click", function (event) {
    event.preventDefault(); // Link ko open hone se rokta hai
    alert("Hello! Link clicked.");
});

//_______________________________________________________________
// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

let mobile = document.querySelector(".mobile");

mobile.addEventListener("click", function () {
    alert("Thanks for purchasing a phone from us.");
});

//_______________________________________________________________

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.
// Before delete
// After click on delete button on “Mark ” row

let deleteButtons = document.querySelectorAll(".deleteBtn");

deleteButtons.forEach(function(button){

    button.addEventListener("click", function(){

        this.parentElement.parentElement.remove();

    });

});

//_______________________________________________________________

// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

let image = document.getElementById("myImage");

function changeImage() {
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEw7HhYxQTYTqzt2XXhkozQhNgX4rmfcnvHk0gdNLpxAkIMqb2wKk_N7wq&s=10";
}

function resetImage() {
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJxmxrogh-HNVMDYcbTs3UrUFrAdDIOdJICLtc3bAEEyAExybZBXiaIo&s=10";
}


//_______________________________________________________________

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.


let counter = 0;

let count = document.getElementById("count");

function increase() {

    counter++;

    count.innerText = counter;

}

function decrease() {

    counter--;

    count.innerText = counter;

}


// let form = document.getElementById("signupForm");

// form.addEventListener("submit", function(event){

//     event.preventDefault();

//     let name = document.getElementById("name").value;

//     let email = document.getElementById("email").value;

//     let password = document.getElementById("password").value;

//     let result = document.getElementById("result");

//     result.innerHTML = `
//         <h3>User Information</h3>

//         <p><b>Name:</b> ${name}</p>

//         <p><b>Email:</b> ${email}</p>

//         <p><b>Password:</b> ${password}</p>
//     `;

// });

let moreText = document.getElementById("moreText");

let button = document.getElementById("btn");

button.addEventListener("click", function(){

    if(moreText.style.display === "none"){

        moreText.style.display = "inline";

        button.innerText = "Read Less";

    }

    else{

        moreText.style.display = "none";

        button.innerText = "Read More";

    }

});


let form = document.getElementById("studentForm");
let tableBody = document.getElementById("tableBody");

let editRow = null;

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    if (editRow == null) {

        let row = tableBody.insertRow();

        row.insertCell(0).innerText = name;
        row.insertCell(1).innerText = age;
        row.insertCell(2).innerText = course;

        row.insertCell(3).innerHTML =
            '<button onclick="deleteRow(this)">Delete</button>';

        row.insertCell(4).innerHTML =
            '<button onclick="editStudent(this)">Edit</button>';

    } else {

        editRow.cells[0].innerText = name;
        editRow.cells[1].innerText = age;
        editRow.cells[2].innerText = course;

        editRow = null;

    }

    form.reset();

});

function deleteRow(button) {

    button.parentElement.parentElement.remove();

}

function editStudent(button) {

    editRow = button.parentElement.parentElement;

    document.getElementById("name").value = editRow.cells[0].innerText;

    document.getElementById("age").value = editRow.cells[1].innerText;

    document.getElementById("course").value = editRow.cells[2].innerText;

}