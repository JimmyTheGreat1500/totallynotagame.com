const docTitle = document.title;
const img = document.createElement("IMG");
img.src = "word.png";
document.body.appendChild(img);
img.style.height = "95%";
img.style.width = "100%"
img.style.display = "none"

window.addEventListener("keydown", (e)=>{
    if (e.key==="b" && img.style.display==="none"){
        document.getElementById("div").style.display="none";
        img.style.display = "block";
        document.title = "FirstDocument.docx - Word"

    } else if (e.key==="b" && img.style.display==="block"){
        document.getElementById("div").style.display="block";
        img.style.display = "none";
        document.title = docTitle;
    }


});