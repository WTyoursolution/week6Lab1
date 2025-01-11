"use script"
//array of numbers
let numbers = [100, 456, 98, 45, 43, 73];

document.write("<h2>All Numbers</h2>");
//Render all elements of the numbers array as a list on an HTML page.
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    
let output = `<li>${element}</li>`;

    document.write(output);
}

document.write("<br>");

//Render only the even numbers from the numbers array as a list on an HTML page.

let even = [];
document.write("<h1>Even Numbers</h1>")
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
];
//blogPosts[0]


//.[]cannot go on side of title must go on side of array "blogPosts" NAME!
//${}(string literal)allows variable expressions in the middle of a string without having to use concatenation(shortcut) allows you to template your string

let demo = document.getElementById("demo");
 
//for loop to loop over array // after create loop move your card into the for loop!
for (let i = 0; i < blogPosts.length; i++) {
    const blogPost = blogPosts[i];
  
    let bootstrapCard = `
    <div class="card mb-3 p-3 text-danger border border-danger rounded-5" style="width: 18rem;">
    <img class="rounded-5" src="images/blog.jpg" class="card-img-top" alt="placeHolder">
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
<h1>${"Render One Card"}</h1>
<div class="card rounded-5 p-3 text-danger border border-danger text-bg-primary" style="width: 18rem;">
<img class="rounded-5" src="images/blog.jpg" class="card-img-top" alt="placeHolder">
<div class="card-body">
<h5 class="card-title">${blogPosts[0].title}</h5> 
<p class="card-text">${blogPosts[0].date}</p>
<p class="date">${blogPosts[0].author}</p>
</div>
</div>
`;

demo1.innerHTML = bootstrapCards;

let anotherBlog = [
    { id: 1, title: "Blog Post 1", author: "Author A", date: "2023-11-15" }, //3
    { id: 2, title: "Blog Post 2", author: "Author B", date: "2023-12-01" }, //4
    { id: 2, title: "Blog Post 2", author: "Author B", date: "2023-12-01" }, //5
    { id: 2, title: "Blog Post 2", author: "Author B", date: "2023-12-01" }, //6
    { id: 2, title: "Blog Post 2", author: "Author B", date: "2023-12-01" }, //7
];

let demo2 = document.getElementById("demo2");

for (let i = 0; i < anotherBlog.length; i++) {
    const anotherBlogs = anotherBlog[i];
  
    let bootstrapCardz = `
    <div class="card rounded-5 p-3 text-danger border border-danger text-bg-info mb-3" style="width: 18rem;">
    <img class="rounded-5" src="images/blog.jpg" class="card-img-top" alt="placeHolder">
    <div class="card-body">
    <h5 class="card-title">${anotherBlogs.title}</h5> 
    <p class="card-text">${anotherBlogs.date}</p>
    <p class="date">${anotherBlogs.author}</p>
    </div>
    </div>
    `;  

    demo2.innerHTML += bootstrapCardz; //you need += to add both card, other words it would erase the data if you dont have +=
}
