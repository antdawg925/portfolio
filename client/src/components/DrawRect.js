
export const DrawRect = (detections, ctx) => {
    detections.forEach(prediction=>{
        //Get prediction results
        console.log("prediction", prediction.bbox);
        const [x,y,width,height] = prediction['bbox'];
        const text = (prediction['class'] + " " + (Math.round(prediction["score"] * 100))+"%");

        //set styling
        const color = 'turquoise';
        ctx.strokeStyle = color;
        ctx.font = '18px Arial'
        ctx.fillStyle = color;

        //Draw rectangles and text
        ctx.beginPath();
        ctx.fillText(text,x,y);
        ctx.rect(x,y,width,height);
        ctx.stroke();
    })
}
