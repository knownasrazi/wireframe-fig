import { useState } from "react";
type Box={id:string;x:number;y:number;w:number;h:number;};
export default function App(){
  const [boxes,setBoxes]=useState<Box[]>([{id:"1",x:20,y:20,w:120,h:60}]);
  function add(){ setBoxes([...boxes,{id:crypto.randomUUID(),x:40,y:40,w:100,h:50}]); }
  return (
    <main className="bg-[#fdfcfa] min-h-screen text-[#1a1a1a]">
      <div className="mx-auto max-w-5xl px-6 py-4 flex gap-2">
        <h1 className="font-light">wireframe-fig</h1>
        <button onClick={add} className="ml-auto rounded-full bg-[#1a1a1a] px-4 py-1.5 text-sm text-white">Add box</button>
      </div>
      <div className="relative mx-auto max-w-5xl h-[60vh] rounded-2xl border border-[#ebe7e0] bg-white">
        {boxes.map(b=>(
          <div key={b.id} style={{left:b.x,top:b.y,width:b.w,height:b.h}} className="absolute rounded-xl border-2 border-dashed border-[#9a9590] bg-[#fdfcfa]" />
        ))}
      </div>
    </main>
  );
}
