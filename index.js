

const getData = document.getElementsByClassName("submit_btn")[0];
var alerts= document.getElementsByClassName("alert")[0];

getData.addEventListener('click', submitted);
var count=0;
function submitted(e) {
    e.preventDefault()
    const bookname = document.getElementsByClassName("book_name")[0].value;
    // console.log(bookname.value);
    const author1 = document.getElementsByClassName("author")[0].value;
    
    count++;
    const adventure = document.getElementsByClassName("radio1")[0].checked
    const manga = document.getElementsByClassName("radio2")[0].checked
    const romantic = document.getElementsByClassName("radio3")[0].checked

    var bookbutton;
    if (adventure) { bookbutton = "Adventure" }
    else if (manga) {
        bookbutton = "Manga"
    }
    else if (romantic) {
        bookbutton = "Romantic"
    }
    else {
        alert("Select book type")
    }
    console.log(bookname, author1, bookbutton);
    var bookdata = new Book(bookname, author1, bookbutton)
    console.log(bookdata);

    if(bookname.length>2 && author1.length>2)
    {
        addrow(bookdata)
    }
    else{
        alerts.classList.remove('hidden')
        setTimeout(()=>{
            alerts.classList.add('hidden')
        },1000)
    }

    
    document.getElementsByTagName(`form`)[1].reset()
    
}
class Book {
    constructor(bookname, author1, bookbutton) {
        this.bookname = bookname;
        this.author1 = author1;
        this.bookbutton = bookbutton;
    }
}
const tbody=document.getElementsByClassName("tbody")[0]

function addrow(data)
{
    const newrow=document.createElement(`tr`);
    newrow.innerHTML = `<td scope="row">${count}</td>
                        <td >${data.bookname}</td>
                        <td >${data.author1}</td>
                        <td>${data.bookbutton}</td>`

    tbody.append(newrow)
}





