export function renderConnectingLine(nodes,node,ctx){
    nodes.forEach(n => {
        let distance = (Math.sqrt((Math.pow((n.positionX-node.positionX),2)+(Math.pow((n.positionY-node.positionY),2)))));
        if(distance>150) return;
        let opacity = (150-distance)/150;
        ctx.strokeStyle = `rgba(255, 192, 203,${opacity})`;
        ctx.beginPath();
        ctx.moveTo(node.positionX, node.positionY);
        ctx.lineTo(n.positionX, n.positionY);
        ctx.stroke();
    });
}