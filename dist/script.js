"use strict";for(var radioButtons=document.querySelectorAll('.toggle__wrapper input[type="radio"]'),i=0;i<radioButtons.length;i++)radioButtons[i].addEventListener("click",(function(){document.getElementById("dark").checked?(document.body.classList.add("dark"),document.body.classList.remove("light")):(document.body.classList.add("light"),document.body.classList.remove("dark"))}));
//# sourceMappingURL=script.js.map