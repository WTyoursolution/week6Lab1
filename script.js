"use script"
//array of numbers
let numbers = [100, 456, 98, 45, 43, 73];

//Render all elements of the numbers array as a list on an HTML page.
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    
let output = `<li>${element}</li>`;

    document.write(output);
}

document.write("<br>");

//Render only the even numbers from the numbers array as a list on an HTML page.

let even = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0){
        even.push(numbers[i]);

    let evenoutput = `<li>${numbers[i]}</li>`;

    document.write(evenoutput);
    }
}

//TASK 2 
//array []
let blogPosts = [
    { id: 1, title: "Blog Post 1", author: "Author A", date: "2023-11-15" }, //0
    { id: 2, title: "Blog Post 2", author: "Author B", date: "2023-12-01" }, //1
    { id: 3, title: "Blog Post 3", author: "Author C", date: "2023-01-02" }, 
    { id: 4, title: "Blog Post 4", author: "Author D", date: "2023-03-03" }, 
    { id: 5, title: "Blog Post 5", author: "Author E", date: "2023-12-22" }, 
    { id: 6, title: "Blog Post 6", author: "Author F", date: "2023-07-12" }, 
    { id: 7, title: "Blog Post 7", author: "Author G", date: "2023-05-09" }, 
];
//blogPosts[0]


//.[]cannot go on side of title must go on side of array "blogPosts" NAME!
//${}(string literal)allows variable expressions in the middle of a string without having to use concatenation(shortcut) allows you to template your string

let demo = document.getElementById("demo");
 
//for loop to loop over array // after create loop move your card into the for loop!
for (let i = 0; i < blogPosts.length; i++) {
    const blogPost = blogPosts[i];
  
    let bootstrapCard = `
    <div class="card" style="width: 18rem;">
    <img src="https://placehold.co/100x100" class="card-img-top" alt="placeHolder">
    <div class="card-body">
    <h5 class="card-title">${blogPost.title}</h5> 
    <p class="card-text">${blogPost.date}</p>
    <p class="date">${blogPost.author}</p>
    </div>
    </div>
    `;  
    demo.innerHTML += bootstrapCard; //you need += to add both card, other words it would erase the data if you dont have +=
}

let demo1 = document.getElementById("demo1");

let bootstrapCards = `
<div class="card" style="width: 18rem;">
<img src="https://placehold.co/100x100" class="card-img-top" alt="placeHolder">
<div class="card-body">
<h5 class="card-title">${blogPosts[0].title}</h5> 
<p class="card-text">${blogPosts[0].date}</p>
<p class="date">${blogPosts[0].author}</p>
</div>
</div>
`;

demo1.innerHTML = bootstrapCards;


