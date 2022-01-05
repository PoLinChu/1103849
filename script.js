let title = document.getElementById("title");
let content = document.getElementById("content");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
btn.addEventListener("click", news);
function news(){
	list.innerHTML = list.innerHTML + `
	<div class="news">
		<h2>${title.value}</h2>
		<p>${content.value}</p><hr>		
	</div>	
	`;
}

let i=0, imgArr=new Array();  //宣告使用變數 i 及 陣列 imgArr
imgArr[0] = "https://memeprod.sgp1.digitaloceanspaces.com/meme/b6b410c40bbb931c08dbea70f4f648a2.png";
imgArr[1] = "https://i.imgur.com/Cx3CAEv.jpeg";
imgArr[2] = "https://i.imgur.com/Y9x4jf0.jpeg";

function showImg() {
  document.getElementById('ico').src = imgArr[i]; // 指定 img 的 src
  i = (i+1) % 3;  // 把 i加1 之後，除以3(因有三張圖輪播)，將餘數再放回變數 i 裡
} 

function show() { 
  setInterval(showImg, 2000);  //每隔2秒呼叫一次showImg函數
}