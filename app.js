// $(document).ready(function(){
//     $("ul.tabs li").click(function(){
//         let tab_id = $(this).attr("data-tabs")
//         $('ul.tabs li').removeClass('current');
//         $('.tab-content').removeClass('current');
        
//         $(this).addClass('current')
//         $(`#${tab_id}`).addClass('current')
//     })
// })


// const tab_Links = document.querySelectorAll(".tab-links")
// tab_Links.forEach((tab,idx)=>tab.addEventListener("click",(evt)=>{
    
//     const tabs_Content = document.querySelectorAll(`.tab-content`)
//     tabs_Content.forEach((tab_Content)=> tab_Content.style.display = "none")

//      const tabLink = document.querySelectorAll(".tab-links")
//      tabLink[idx].className = tabLink[idx].classList.toggle("current")
     
// }))

function openTabs(evt, tabName) {
    let i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName(".tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName(".tab-links");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" current", "");
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " current";
  }