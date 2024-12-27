import {useEffect, useState } from "react";
import UndefinedImage from "@/assets/imageIcon.png";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import ImageResult from "@/assets/image3.jpg";
import { Skeleton } from "@/components/ui/skeleton";
function UploadImage() {
  const [appState, setAppState] = useState(1);
  const [image1Url, setImage1Url] = useState("");
  const [image2Url, setImage2Url] = useState("");
  useEffect(() => {
    if (image1Url && image2Url) {
      setAppState(2);
      setTimeout(() => setAppState(3), 3000);
    }
  }, [image1Url, image2Url]);
  function getImageUrl(event: React.ChangeEvent<HTMLInputElement>) {
    // debugger;
    const file = event.target.files?.[0];
    if (file) {
          // Hiển thị placeholder trước khi xử lý ảnh
          const temporaryUrl = URL.createObjectURL(file);
          return temporaryUrl;
    }
    return "";
  }
  // function resetState(){
  //   setAppState(0);

  // }
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
       <div className="input-image flex justify-between gap-8 w-[70%]">
        <div className="flex flex-col items-center">
          {
            image1Url &&
            <img className="w-64 rounded-lg" src={image1Url}/>
          }
          {
            !image1Url &&
            <img src={UndefinedImage} alt="" className="w-64 h-64" />
          }
          <Label htmlFor="image1" className="mt-4 rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">Ảnh nguồn 1</Label>
          <Input type="file" id="image1" className="hidden" onChange={(event) => setImage1Url(getImageUrl(event))}></Input>
        </div>
        <div className="flex flex-col items-center">
        {
            image2Url &&
            <img className="w-64 rounded-lg" src={image2Url}/>
          }
          {
            !image2Url &&
            <img src={UndefinedImage} alt="" className="w-64 h-64" />
          }
          <Label htmlFor="image2" className="mt-4 rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">Ảnh nguồn 2</Label>
          <Input type="file" id="image2" className="hidden" onChange={(event) => setImage2Url(getImageUrl(event))}></Input>
        </div>
        <div className="flex flex-col items-center">
          {
            appState == 3 &&
            <img className="w-64 rounded-lg" src={ImageResult}/>
          }
          {
            appState == 2 && 
            <Skeleton className="w-64 h-64 rounded-lg"></Skeleton>
          }
          <Label htmlFor="image2" className="mt-4 rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">Kết quả</Label>
          {/* {
            !image3Url &&
            <img src={UndefinedImage} className="w-64 h-64" alt="" />
          } */}
          {/* <Label htmlFor="image3" className="mt-4 rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">Ảnh 1</Label>
          <Input type="file" id="image3" className="hidden" ></Input> */}
        </div>
       </div>
      </div>
    </>
  );
}

export default UploadImage;
