const submitBtn = document.querySelector('.btn');
const inputField = document.querySelector('.information');

let pictureURL="";
let GITusername="";
let name="";
let bio="";
let followers="";
let repos;


// https://api.github.com/users/
submitBtn.addEventListener('click', () => {
  console.log(inputField.value);
  let username = inputField.value;
  let url="https://api.github.com/users/";
  url+=username;
  fetch(url).then((res)=>{
    return res.json();
  }).then((data)=>{
    console.log(data)
    pictureURL+=data.avatar_url
  })
});

// login:String,
// name:String,
// bio:String,
// followers:Number,
// public_repo:String
// pictureURL:String,

function fetchFROMGIT(url){
  fetch(url).then(()=>{
    return res.json();
  }).then(()=>{

  })
}