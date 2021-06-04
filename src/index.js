//function displayImages(){

//fetch ('http://localhost:3000/images/1' ,{
//    method: "PATCH" ,
 //   headers: {
 //       "Content-Type" : 'application/json'
 //   } , 
 //   body: JSON.stringify(dogObj)
    
//})
//.then(res => res.json())
//.then (console.log)
//}

//displayImages

fetch('http://localhost:3000/images/1')
.then(res => res.json())
.then(dogObj => renderGram(dogObj))

const likesButton = document.querySelector(".like-button") 
const commentForm = document.querySelector(".comment-button")

commentForm.addEventListener('click', updateComments)
likesButton.addEventListener("click", updateLikes)


function renderGram (dogObj){
    let img = document.querySelector(".image")
    img.src = dogObj.image
    let title = document.querySelector(".title")
    title.textContent = dogObj.title
    let comments = document.querySelector(".comments")
    comments.innerHTML = ''
          for(let i=0;i<dogObj.comments.length;i++){
              const li = document.createElement("li")
              li.appendChild(document.createTextNode(dogObj.comments[i].content))
              comments.appendChild(li)
         
            }
}

let numberOfLikes = 0

function updateLikes (e){
    e.preventDefault()
    numberOfLikes +=1
    let likes = document.querySelector(".likes")
    likes.textContent = `${numberOfLikes} likes` 


}

function updateComments (e){
    e.preventDefault()
    console.log('hello')




