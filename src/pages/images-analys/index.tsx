import { useState } from "react";
import Image3 from "../../assets/image3.jpg";
import { Skeleton } from "@/components/ui/skeleton"
function UploadImage() {
  const [appState, setAppState] = useState(0);
  function handleOnInput(){
    setAppState(1);
    setTimeout(() => setAppState(2), 500);
  }
  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        {
          appState === 1 &&
          <Skeleton className="h-64 w-64 rounded-xl"></Skeleton>
        }
        {
          appState == 2 &&
          <img className="rounded-md" src={Image3} alt="Ảnh tổng hợp" />
        }
        <br />
        <label className="bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 rounded-md" htmlFor="inputFile">Upload</label>
        <input type="file" multiple id="inputFile" className="hidden" onInput={() => handleOnInput()}/>
      </div>
    </>
  )
}

export default UploadImage