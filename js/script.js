let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function myOnClickFn(){
    document.location.href="blog.html";
}

function myOnClickFn(){
    document.location.href="contactus.html";
}
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  question.addEventListener('click', (e) => {
    const answer = e.target.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
})
