import { Node } from "./node.js";
import { render } from "./nodeRender.js";


const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
//height and width of canvas
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


//nodes array
let nodes=[];


//events

window.addEventListener("mousedown",(e)=>{
    nodes = [...nodes,new Node(e.clientX,e.clientY,10,0,0,"pink")];
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
                render(node,ctx);
                renderConnectingLine(nodes,node,ctx);
            });
        }

        requestAnimationFrame(animation);
    }
    animation();
