const acc = document.getElementsByClassName('accordion');
let i ;
for(i = 0;i < acc.length;i++){
acc[i].addEventListener('click',function(){
    /*this is to highlight the button that is active */
    this.classList.toggle("active");

    /*this is to hide or show active panel */
    let panel = this.nextElementSibling;
    if(panel.style.display === "block"){
        panel.style.display="none";
    }else{
        panel.style.display = "block";
    }

});
}