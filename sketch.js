var PLAY=1;
var END=0;

var gameState=PLAY;

var bg,bgImage;
var a,aImage;

var saki,sakiImage;

var note,noteImage;

var youWin,youWinImage;
var YouLose,YouLoseImage;

var book,bookImg;

score = 0

function preload(){
  
  bgImage = loadImage("bg.jpg")
  openImage = loadImage("open.png")
  sakiImage = loadImage("saki.png")
  noteImage = loadImage("note3.png")  
  youWinImage = loadImage("sakity.png")
  YouLoseImage = loadImage("sakicry.png")  
  bookImg = loadImage("book.png")  
  
}

function setup() {

  
  createCanvas(1000,500);
 
  a = createSprite(1590,870);
  a.addImage("summary",openImage)
  a.scale = 1
  
  b = createSprite(200,150,1000,10)
  
  saki = createSprite(450,330,10,10)
  saki.addImage("saki",sakiImage)
  saki.scale = 0.10
  saki.velocityX = -2
  
  c = createSprite(100,400,10,50)
  d = createSprite(500,325,10,50)
  v = createSprite(0,20,10,50)
  m = createSprite(530,20,10,50)
  z = createSprite(250,500,560,10)
  
  abc = createSprite(300,300,600,200)
  
  note = createSprite(50,20)
  note.addImage("note",noteImage)
  note.scale = 0.1
  note.velocityX = 2
    
  youWin = createSprite(270,250);
  youWin.addImage("youWin",youWinImage)
   
  YouLose = createSprite(270,250);
  YouLose.addImage("YouLose",YouLoseImage)
  
  book = createSprite(50,20)
  book.addImage("book",bookImg)
  book.scale = 0.1
  book.velocityX = 2
  
   score=0;
  
  noteGroup=new Group();
  bookGroup=new Group();
  
}

function draw() { 
  background(bg);
  
  b.visible=false
  c.visible=false
  d.visible=false
  v.visible=false
  m.visible=false
  z.visible=false
  abc.visible=false

  
    if(note.isTouching(saki)){
      score=score+1;
    } 
  
    if(book.isTouching(saki)){
      score=score-1;
    } 
     
    if(saki.isTouching(note)){
      note.destroy();
    }
  
    if(saki.isTouching(book)){
      book.destroy();
    }
  
  if(gameState===PLAY){ 
    
    if(keyDown("enter")){
      a.visible = false
      abc.destroy()
      saki.visible = true
      note.visible = true
      book.visible = true
    }     

    if(saki.isTouching(c)){
      saki.bounceOff(c)
    } 
     
    
    if(note.isTouching(v)){
      note.bounceOff(v)
    }
    
    if(book.isTouching(v)){
      book.bounceOff(v)
    }
  
    if(keyDown("space")){
       note.velocityY = 4
       note.velocityX = 0
    }
  
    if(keyDown("space")){
       book.velocityY = 4
       book.velocityX = 0
    }
    
    if(note.isTouching(m)){
      note.bounceOff(m)
    }
    
    if(book.isTouching(m)){
      book.bounceOff(m)
    }
  
    if(saki.isTouching(d)){
      saki.bounceOff(d)
    }
    
    if(saki.isTouching(abc)){
      saki.visible = false
      note.visible = false
      book.visible = false
    }
        
    if(note.isTouching(z)){
      gameState=END;
           
    if(youWin.isTouching(a)||YouLose.isTouching(a))  
    youWin.visible = false
    YouLose.visible = false
            
    }
    
          
    if(youWin.isTouching(a)||YouLose.isTouching(a)){  
    youWin.visible = false
    YouLose.visible = false
            
    }
    
    if(score===5){
      youWin.visible = true

      noteGroup.destroyEach();
      bookGroup.destroyEach();

    }
    
    
  } 
  
  if(gameState===END){ 
        
    if(note.isTouching(z)){
    youWin.visible = true
    YouLose.visible = true
    }
    
    bg.visible = false
    saki.visible = false
   note.visible = false
    book.visible = false
  }  
  
  notes();
  books();
  
  drawSprites();
  
  textSize(15)
  fill("black")
  text("Score : "+ score,410,50);
  
}

function notes(){
  if(frameCount%250==0){
    
  note.velocityX = (6 + score/1);
        
  note = createSprite(50,20)
  note.addImage("note",noteImage)
  note.scale = 0.1
  note.velocityX = 2
    
  noteGroup.add(note);
    
  }   
}  

function books(){
  if(frameCount%1000==0){
        
  book = createSprite(50,20)
  book.addImage("book",bookImg)
  book.scale = 0.1
  book.velocityX = 2
    
  bookGroup.add(book);
    
  }   
}