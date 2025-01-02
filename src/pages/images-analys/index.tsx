import { useState } from "react";
import UndefinedImage from "@/assets/imageIcon.png";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import ImageResult from "@/assets/image3.jpg";
import { Skeleton } from "@/components/ui/skeleton";
import ImageView from "@/components/mine/ImageView";
function UploadImage() {
  const [appState, setAppState] = useState(1);
  const [image1Url, setImage1Url] = useState("");
  const [image2Url, setImage2Url] = useState("");

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
       <div className="input-image flex justify-between gap-8 w-full">
        <div className="flex flex-col items-center w-[33%]">
          {
            image1Url &&
            <ImageView className="w-[80%] rounded-lg" src={image1Url}/>
          }
          {
            !image1Url &&
            <ImageView src={UndefinedImage} alt="" className="w-[80%]" />
          }
          <Label htmlFor="image1" className="cursor-pointer mt-4 rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">Ảnh MRI</Label>
          <Input type="file" id="image1" className="hidden" onChange={(event) => setImage1Url(getImageUrl(event))}></Input>
        </div>
        <div className="flex flex-col items-center w-[33%]">
        {
            image2Url &&
            <ImageView className="w-[80%] rounded-lg" src={image2Url}/>
          }
          {
            !image2Url &&
            <ImageView src={UndefinedImage} alt="" className="w-[80%]" />
          }
          <Label htmlFor="image2" className="cursor-pointer mt-4 rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">Ảnh PET</Label>
          <Input type="file" id="image2" className="hidden" onChange={(event) => setImage2Url(getImageUrl(event))}></Input>
        </div>
        <div className="flex flex-col items-center w-[33%]">
          {
            appState == 3 &&
            <ImageView className="w-[80%] rounded-lg" src={ImageResult}/>
          }
          {
            appState == 2 && 
            <Skeleton className="w-[80%] h-full rounded-lg"></Skeleton>
          }
          {
            appState == 1 && 
            <div className="h-full w-[80%]"></div>
          }
          <Label className="cursor-pointer mt-4 rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2" onClick={() => {
            if(image1Url && image2Url) {
              setAppState(2);
              setTimeout(() => {
                setAppState(3)
              }, 5000);
            }
          }}>Tổng hợp</Label>
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
