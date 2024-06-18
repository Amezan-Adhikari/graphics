import { Node } from "./node.js";
import { render } from "./nodeRender.js";
import { renderConnectingLine } from "./renderlines.js";
import { mouseMove } from "./mouse.js";
import { repel } from "./repel.js";
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
//height and width of canvas
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


//nodes array
let nodes=[];


//events

window.addEventListener("mousedown",(e)=>{
    let node = new Node(e.clientX,e.clientY,5,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"pink");
    console.log(node);
    nodes = [...nodes,node];
})

window.addEventListener("mousemove",(e)=>{
    mouseMove(e,nodes);
})




//rendering part / animation

    let prevTimeStamp = 0;
    let FPS = 60;
    const frameTime = 1000 / FPS;

    function animation(timestamp){
        let deltaTime = (timestamp - prevTimeStamp) / 1000;
        prevTimeStamp = timestamp;


        if (deltaTime <= frameTime) {
            ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
            nodes.forEach(node => {
                node.update(canvas);
                renderConnectingLine(nodes,node,ctx);
                render(node,ctx);
            });
            repel(nodes);
        }

        requestAnimationFrame(animation);
    }
    animation();
