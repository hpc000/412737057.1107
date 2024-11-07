let font;  //載入字型文字
let points = [];  //轉成點狀文字
let angle = 0
let r =10
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的Zeyada-Regular.ttf字型
    font = loadFont("fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf") 
}
//===================================================

function setup() { // 畫布 
  createCanvas(windowWidth,windowHeight,WEBGL);//畫部寬高)
  background("#e4d9ff")//設定背景顏色

  
}


function draw() {  //畫圖,每秒畫60次
  background("#e4d9ff")//設定背景顏色

  rectMode(CENTER)//設定方形座標點放在方形中間
  noFill()//以下畫的不要充滿顏色
  stroke("#5fa8d3")//線條的顏色
  strokeWeight(3)//線條粗細
  
  //宣告變數
  var rect_width = 50 + mouseX/10 //方形寬度
  var bc_width = 50 + mouseY/10 //大園寬度
  var sc_width =25 +mouseX/100  //小圓的寬度

  //for迴圈
  for(let j=0;j<50;j=j+1){//產生第幾排
    for(let i=0;i<150;i=i+1){ //產生一整排的物件（兩個圓加上一個方
      //
      //
      //
      ellipse(-600+50*i,-600+50*j,bc_width)//圓型
      rect(-600+50*i,-600+50*j,rect_width)//方形
      ellipse(-625+50*i,-625+50*j,sc_width)//小圓
    }
  }
  
  points = font.textToPoints("HPC", -300, 80, 200, {
    sampleFactor:0.1
   }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大

  angleMode(DEGREES)//設定三角函數的角度用0~360
  rotateY((frameCount%360))//依照frameCount除以360球餘數
  for (let i=0; i<points.length-1; i++) { 
    //text(str(i),points[i].x,points[i].y) //在()座標上顯示一個文字（數字）
    //fill("#273469")//畫圓充滿顏色
    //noStroke()
    //strokeWeight(1)//圓的框線粗細
    //ellipse(points[i].x+r*sin(angle+i*10),points[i].y+r*sin(angle+i*10),10)
    stroke("#fafaff")//線條顏色
    strokeWeight(5)//線條粗細
    line(points[i].x+r*sin(angle+i*10),points[i].y,points[i+1].x+r*sin(angle+i*10),points[i+1].y)//畫線，兩個點構成一條線
 } 
 //===============================================================
 angle = angle+10

}