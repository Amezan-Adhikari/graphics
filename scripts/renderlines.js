export function renderConnectingLine(nodes,node,ctx){
    nodes.forEach(n => {
        let distance = (Math.sqrt((Math.pow((n.positionX-node.positionX),2)+(Math.pow((n.positionY-node.positionY),2)))));
        if(distance>300) return;
        let opacity = (300-distance)/300;
        ctx.strokeStyle = `rgba(255, 192, 203,${opacity})`;
        ctx.beginPath();          // Start a new path
        ctx.moveTo(node.positionX, node.positionY);       // Move the pen to (20, 20)
        ctx.lineTo(n.positionX, n.positionY);     // Draw a line to (200, 100)
        ctx.stroke();
    });
}