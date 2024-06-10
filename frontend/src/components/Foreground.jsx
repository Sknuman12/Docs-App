import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
    const ref = useRef(null)
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag:{isOpen: true, tagTitle:"download", tagColor:"green"},
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag:{isOpen: true, tagTitle:"Download", tagColor:"blue"},
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag:{isOpen: true, tagTitle:"download", tagColor:"green"},
    },
  ];
  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 w-full h-screen z-[3] flex gap-10 flex-wrap p-5">
       {data.map((item,index)=>(
        <Card key={index} data={item} reference={ref}/>
       ))}
      </div>
    </>
  );
};

export default Foreground;
