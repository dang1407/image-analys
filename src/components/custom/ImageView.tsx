import { useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";
interface iProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function ImageView(props: iProps) {
  const [isViewFull, setIsViewFull] = useState(false);
  return (
    <div className="w-full flex justify-center">
      <img className={props.className} src={props.src} alt={props.alt} onClick={() => setIsViewFull(true)}/>
      {
        isViewFull &&
        <div className="fixed flex justify-center z-50 top-0 left-0 right-0 bottom-0 bg-[rgba(180,180,180,0.9)]">
          <img className="h-full" src={props.src} alt={props.alt} />
          <IoMdCloseCircle  className="absolute right-4 top-4 text-[2rem] hover:text-[red]" onClick={() => setIsViewFull(false)}/>
        </div>
      }
    </div>
  )
}
