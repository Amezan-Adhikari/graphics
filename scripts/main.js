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
let nodes=[
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
    new Node(Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight),Math.floor(Math.random()*4)+4,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white"),
];


//events

window.addEventListener("mousedown",(e)=>{
    let node = new Node(e.clientX,e.clientY,5,parseFloat(Math.random().toFixed(2))-0.5,parseFloat(Math.random().toFixed(2))-0.5,"white");

    nodes = [...nodes,node];
})

window.addEventListener("mousemove",(e)=>{
    mouseMove(e,nodes);
})

window.addEventListener("touchmove",(e)=>{
    let pos  = {
        clientX:e.touches[0].clientX,
        clientY:e.touches[0].clientY
    }
    mouseMove(pos,nodes);
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
