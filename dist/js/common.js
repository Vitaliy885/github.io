!function(){let e=new Siema({selector:".siema",duration:200,easing:"ease-out",perPage:{768:2,1024:2},startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,rtl:!1}),t=(document.querySelector(".prev").addEventListener("click",()=>e.prev()),document.querySelector(".next").addEventListener("click",()=>e.next()),document.querySelector(".to-top").addEventListener("click",function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}),$(".scrollTo").click(function(){return $("html, body").animate({scrollTop:$($(this).attr("href")).offset().top-500},500),!1}),document.querySelector(".overlay")),r=(t.addEventListener("click",()=>{t.classList.remove("active")}),document.querySelector(".to-top")),o=document.querySelector(".show-more-content.sleep"),n=document.querySelectorAll(".call-order"),c=document.querySelector(".order__wrapper"),a=document.querySelector(".order-close"),i=(document.querySelector(".cart__sign"),document.querySelector("body")),s=(window.addEventListener("scroll",function(){1e3<=window.pageYOffset?r.classList.add("active"):r.classList.remove("active")}),n.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),c.classList.add("active"),t.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove("active")})}),a.addEventListener("click",()=>{a.parentElement.classList.remove("active")}),document.onkeydown=function(e){27==(e=e||window.event).keyCode&&(a.parentElement.classList.remove("active"),o.classList.remove("active"))},t=>{document.querySelector(".show-more-content .thumbnails").innerHTML="",data.map(e=>{t.getAttribute("data-attribute-id")==e.attribute_id&&(document.querySelector(".show-more-images").setAttribute("src",e.image),document.querySelector(".show-more-content .product-name").innerHTML=e.name,document.querySelector(".show-more-content .product-price").innerHTML=e.price,document.querySelector(".show-more-content .product-description").innerHTML=e.description,1<e.thumbnails.length&&e.thumbnails.forEach(e=>{document.querySelector(".show-more-content .thumbnails").innerHTML+=`<img class="thumbnail__image" src="${e}">`}))});{let e=document.querySelectorAll(".thumbnail__image");return void e.forEach(e=>{e.addEventListener("mouseover",()=>{document.querySelector(".show-more-images").setAttribute("src",e.getAttribute("src"))})})}});i.addEventListener("click",e=>{let t=e.target;var r;t.classList.contains("show-more")&&(o.classList.add("active"),s(t)),t.classList.contains("card-link")&&(r=t,data.map(e=>{r.getAttribute("data-attribute-id")==e.attribute_id&&c.classList.add("active")})),t.classList.contains("show-more-close")&&o.classList.remove("active")})}();