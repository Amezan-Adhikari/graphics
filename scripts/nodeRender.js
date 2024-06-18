export function render(node,ctx){
    ctx.fillStyle = node.color;

    ctx.beginPath();
    ctx.arc(node.positionX,node.positionY,node.radius,0,2*Math.PI);
    ctx.fill();
}