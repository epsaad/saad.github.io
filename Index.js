
let progess_bar =  document.querySelector(".progess_bar");
let content = document.querySelector(".sldier_content");
let backgrounds = document.querySelector(".banner");
let page_index = document.querySelector(".slider_button").childNodes[1];

let index = 0;
function slider(value)
{
    value.includes("right") ? index++:index--;
    console.log(index)
    if(index==0)
    {
        progess_bar.style.marginLeft = "0%";
        content.innerHTML = "4 Bedroom Luxury villa in Agios Tychonas Limassol, Cyprus";
        page_index.innerText = "1/4";
        backgrounds.style.backgroundImage = " url(banner.png)";
    }
    else if(index==1)
    {
        progess_bar.style.marginLeft = "25%"
        content.innerHTML = "New Custom Villas for your Conveince";
        page_index.innerText = "2/4";
        backgrounds.style.backgroundImage = "url(./Backgrounds/umbrella-pool-chair.jpg)"
    }
    else if(index==2)
    {
        progess_bar.style.marginLeft = "50%"
        content.innerHTML = "For Comfortable and Affordable Villas";
        page_index.innerText = "3/4";
        backgrounds.style.backgroundImage = "url(./Backgrounds/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge.jpg)"
    }
    else if(index==3)
    {
        progess_bar.style.marginLeft = "75%"
        content.innerHTML = "You can Contact US for Villas of your choice";
        page_index.innerText = "4/4";
        backgrounds.style.backgroundImage = "url(./Backgrounds/outdoor-swimming-pool.jpg)";
    }
    else if(index==4)
    {
         progess_bar.style.marginLeft = "0%"
        index=0;
        content.innerHTML = "4 Bedroom Luxury villa in Agios Tychonas Limassol, Cyprus";
        page_index.innerText = "1/4";
        backgrounds.style.backgroundImage = " url(banner.png)";
    }
   
}



document.querySelectorAll(".fa-solid").forEach(element => {
    element.addEventListener("click", event =>{
       const value = event.target.className;
       slider(value);
       console.log(document.querySelector(".next").parentNode.scrollLeft);
    })
});


document.querySelector(".next").addEventListener("click", event =>{
    console.log(event.target.innerText)
    if(event.target.innerText.includes("NEXT"))
    {
        event.target.classList.add("left");

        event.target.classList.remove("right");

        event.target.parentNode.scrollLeft = "590";
        event.target.innerText = "PREVIUOS";

        
    }
    else if(event.target.innerText.includes("PREVIUOS"))
    {
        event.target.classList.remove("left");
        event.target.classList.add("right");
        event.target.innerText = "NEXT";
        event.target.parentNode.scrollLeft = "0";
    }
    
})

const hamburger = document.querySelector(".hamburger");
const nav_menu = document.querySelector(".nav-menu");
const nav_button  = document.querySelector(".nav-button");
const navBar = document.querySelector(".banner");
const navabar = document.querySelector(".banner").children[1];





function myFunction(){
    
    hamburger.classList.remove("active");
    nav_menu.classList.remove("active");
    nav_button.classList.remove("active");

   
}


hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    nav_menu.classList.toggle("active");
    nav_button.classList.toggle("active")
    
})

setInterval(slider,2500,"right");
