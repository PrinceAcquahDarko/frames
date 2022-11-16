
    const height = document.getElementById("height");
    const width = document.getElementById("width");
    const left = 90;
  
    const submitBut = document.getElementById("but");

    let canvas = new fabric.Canvas('canvas');

    submitBut.addEventListener("click", function callheight(){

// create a rectangle with angle=45
        var rect = new fabric.Rect({
            left,
            top: 100,
            fill: '#fff',
            width: +width.value,
            height: +height.value,
        });

        canvas.add(rect);

        generateImageBorders()

        generateImageFrame()

  
})

function generateImageFrame(){
    let frame_top = Math.round(100 + 20/100 * (+height.value))
    let frame_height = Math.round(30/100 *(+height.value))
    let frame_left = Math.round(90 + 20/100 * (+width.value));
    let frame_width = Math.round(60/100 *(+width.value))

    let rect = new fabric.Rect({
        left: frame_left,
        top: frame_top,
        fill: '#808080',
        width: frame_width,
        height: frame_height
    });

    canvas.add(rect);


}

function generateImageBorders(){
        const url = '1.jpg'
       //for right side
       fabric.Image.fromURL(url, function(oImg) {
        oImg.set({
         width: 5,
         height:0.4 + (+height.value),
         left:left + (+width.value),
         selectable:false,
         top:100,
      
        })
         canvas.add(oImg);
       });


    //for top side
    fabric.Image.fromURL(url, function(oImg) {
       oImg.set({
        width: 5,
        height:+width.value,
        left,
        top:105,
        selectable:false,
        angle:-90
     
       })
        canvas.add(oImg);
      });

    //   for downside
      fabric.Image.fromURL(url, function(oImg) {
        oImg.set({
         width: 5,
         height:+width.value,
         left,
         selectable:false,
         top:100 + (+height.value),
         angle:-90
      
        })
         canvas.add(oImg);
       });

        //for left side
        fabric.Image.fromURL(url, function(oImg) {
        oImg.set({
            width: 5,
            height:+height.value,
            left:90,
            selectable:false,
            top:100,
        
        })
            canvas.add(oImg);
        });
}




