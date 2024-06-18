import { state } from "./store.js";

export function mouseMove(e){
  state.X =  Math.round(e.clientX);
  state.Y =  Math.round(e.clientY);
}