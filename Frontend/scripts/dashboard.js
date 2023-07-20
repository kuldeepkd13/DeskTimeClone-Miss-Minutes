const menuIconBtn = document.getElementById('menu-icon-btn');
const menuIconBtn1 = document.getElementById('menu-icon1');
const sidebar = document.getElementById('sidebar');
const bar = document.getElementById("bar")
const title = document.querySelector(".title")
const links = document.querySelectorAll('.link');







menuIconBtn.addEventListener('click', () => {
   if(sidebar.style.width==="80px"){
    sidebar.style.width="250px"
    bar.style.marginLeft="250px"
    title.style.display="block"
    links.forEach(link => link.style.display = "block");
   }else{
    sidebar.style.width="80px"
    bar.style.marginLeft="80px"
    title.style.display="none"
    links.forEach(link => link.style.display = "none");
   }
});

menuIconBtn1.addEventListener("click",()=>{
  if(sidebar.style.display === "none"){
    
    sidebar.style.display = "block"
  }else{
    sidebar.style.display ="none"
  }
})


const bellicon = document.getElementById("bell-icon")
const popup = document.getElementsByClassName("popup")[0]
const addnotification = document.getElementById("addnotification")
bellicon.addEventListener("click",()=>{
    if(addnotification.innerHTML===""){
        if(popup.style.display === "none"){
            popup.style.display = "flex"
          } else {
            popup.style.display = "none"
          }
    }else{
       if(addnotification.style.display==="none") {
        addnotification.style.display="block"
       }else{
        addnotification.style.display="none"
       }
    }
})
let username = document.getElementById("username")
const userlogo = document.getElementById("userlogo");

const user = JSON.parse(localStorage.getItem("user")) ;
console.log(user)
if(user === undefined || user=== null){
  const urlParams = new URLSearchParams(window.location.search)
  let userID = urlParams.get("userID")
  fetch(`http://localhost:8080/user/get/${userID}`)
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data.user)
    const user = {
      name: data.user.name,
      role: data.user.role,
      assignedTasks: data.user.assignedTasks || [],
      assignedProjects: data.user.assignedProjects || [],
    };
    localStorage.setItem("user", JSON.stringify(user));
    username.textContent = data.user.name
    userlogo.textContent=username.textContent.charAt(0).toUpperCase();
  }).catch((err)=>{
    console.log(err)
  })
}else{
  username.textContent = user.name
  userlogo.textContent = username.textContent.charAt(0).toUpperCase();
}


function toggleDropdown1(dropdown1) {
  if (dropdown1.style.display === 'none') {
    dropdown1.style.display = 'block';
  } else {
    dropdown1.style.display = 'none';
  }
}

let token = localStorage.getItem("token") || ""
console.log(token)



const logout = document.getElementById("logout")

logout.addEventListener("click",()=>{
  // fetch(`http://localhost:8080/user/logout`,{
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Authorization": `${token}`
  //   },
  // })
  // .then((res) => res.json())
  // .then((data) => {
    username = "";
    userlogo.textContent = "";
    sessionStorage.clear(); 
    localStorage.clear();
    window.location.href = "./index.html";
  })
  // .catch((err)=>{
  //   console.log(err);
  // });    
// })

const dashboard_page = document.getElementById("dashboard-page-btn")
const project_page = document.getElementById("project-page-btn");
const project_chat_page = document.getElementById("project-chat-btn")

dashboard_page.addEventListener("click",()=>{
  window.location.href= "./dashboard.html"
})
project_page.addEventListener("click",()=>{
  window.location.href= "./project.html"
})
project_chat_page.addEventListener("click",()=>{
  window.location.href= "./chat.html"
})

window.onload=()=>{
  let token = localStorage.getItem("token");
  
}