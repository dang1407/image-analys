import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

class user {
  public user_id?: number;
  public user_name?: string;
}

export default function Home() {
  // const [inputFile, setInputFile] = useState<File | null>(null); // Kiểm tra nếu không có file



  // function handleOnChangeFile(e: React.ChangeEvent<HTMLInputElement>) {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     setInputFile(file);
  //   }
  // }

  // async function sendFile() {
  //   if (!inputFile) {
  //     alert("Please select a file to upload");
  //     return;
  //   }

  //   try {
  //     const formData = new FormData();
  //     formData.append("file", inputFile); // Append file vào formData
  //     const response = await axios.post("https://localhost:7241/api/v1/document/upload", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });

  //     console.log("Upload successful:", response.data);
  //     alert("File uploaded successfully!");
  //   } catch (error) {
  //     console.error("Upload failed:", error);
  //     alert("Failed to upload file. Please try again.");
  //   }
  // }
  const [user, setuser] = useState<user>({
    user_id: 1,
    user_name: "1"
  });
  const [user1, setuser1] = useState<user>({
    user_id: 2,
    user_name: "2"
  });
  return (
    <div>
      {/* <Input id="input" type="file" onChange={handleOnChangeFile} />
      <Button onClick={sendFile}>Upload</Button> */}
      <Input type='number' value={user.user_id } onChange={() => {}}/>
      <Button onClick={() => {
        user.user_id = (user.user_id ?? 0) + 1;
        setuser(user);
      }} >Tăng user_id 1</Button>

      <Input type='number' value={user1.user_id} onChange={() => {}}/>
      <Button onClick={() => {
        setuser1({
          user_id: (user1.user_id ?? 0) + 1,

        });
      }} >Tăng user_id 1</Button>
    </div>
  );
}
