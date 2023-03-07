/* -- Glow effect -- */

const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`,
    right: `${clientY}px`,
    bottom: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

const form = document.querySelector('form');
const submitBtn = document.querySelector('input[type="submit"]');

submitBtn.addEventListener('click', function(event) {
  event.preventDefault(); // prevent form from submitting by default

  // check if input fields are empty
  const inputFields = form.querySelectorAll('input[type="name"]');
  let isFilled = true;

  inputFields.forEach(function(input) {
    if (input.value === '') {
      isFilled = false;
    }
  });

  if (isFilled) {
    // do something if input fields are filled
    alert("Hi");
    form.submit(); // submit the form

  } else {
    // show an error message or do nothing if input fields are not filled
    prompt("Hi");
  }
});

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "iamsirajsiyal@gmail.com",
        Password : "password",
        To : '62607004s@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Siraj Siyal Demo Form",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

/* -- Text effect -- */

// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// let interval = null;

// document.querySelector("h1").onmouseover = event => {  
//   let iteration = 0;
  
//   clearInterval(interval);
  
//   interval = setInterval(() => {
//     event.target.innerText = event.target.innerText
//       .split("")
//       .map((letter, index) => {
//         if(index < iteration) {
//           return event.target.dataset.value[index];
//         }
      
//         return letters[Math.floor(Math.random() * 26)]
//       })
//       .join("");
    
//     if(iteration >= event.target.dataset.value.length){ 
//       clearInterval(interval);
//     }
    
//     iteration += 1 / 3;
//   }, 30);
