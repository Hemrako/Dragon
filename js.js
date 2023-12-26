var character=document.querySelector(".character")
var block=document.querySelector(".block")
var container=document.querySelector(".container")
var body=document.querySelector("body")
var f=document.querySelector(".f")
var s=document.querySelector(".s")
var t=0;
var fi=0;
var jn= new Audio("jn.wav")
var el= new Audio("el.mp3")

body.addEventListener("click",function(){
    if(character.classList !="animate"){
        jn.play()
        character.classList.add("animate");
    }

setTimeout(
    function(){
        character.classList.remove("animate")
    },600)

}
)

setInterval(function(){
    var n=parseInt(window.getComputedStyle(character).top)
    var m=parseInt(window.getComputedStyle(block).left)
    if(m<25 && m>0 && n<=350 && n>325){
      el.play()
      container.classList.add("end")
      container.innerHTML=`<h1>Game over</h1><h4>Score is ${fi+":"}${t}<button>Play again</button></h4>`
      document.querySelector("button").addEventListener("click",function(){

        window.open("https://hemrako.github.io/Dragon/","_parent")
    })
    }

},20)

setInterval(
    function(){
      t++;
      s.innerHTML=t;
      if(t==59){
       fi=fi+1;
       f.innerHTML=fi+":";
       t=0
      }
    }
    ,1000)
