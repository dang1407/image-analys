import HeaderItem from "./HeaderItem";
interface iProps {
  style?: React.CSSProperties;
}

const headers = [
  {
    label: "Trang chủ",
    to: ""
  },
  {
    label: "Xử lý hình ảnh",
    to: ""
  },
  {
    label: "Hướng dẫn",
    to: ""
  },
  {
    label: "Xem thêm",
    to: ""
  },
]

export default function Header(props: iProps) {

  return (
    <div className="flex border-b-[1px] bg-black/10 border-b-[#ddd]" style={props.style}>
      <div className="logo-container flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="h-6 w-6"
        >
          <rect width="256" height="256" fill="none"></rect>
          <line
            x1="208"
            y1="128"
            x2="128"
            y2="208"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          ></line>
          <line
            x1="192"
            y1="40"
            x2="40"
            y2="192"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          ></line>
        </svg>
        {/* <Label>shadcn/ui</Label> */}
      </div>
      <ul className="flex">

      {
        headers.map((item, index) => (
          <HeaderItem data={item} key={index}></HeaderItem>
        ))
      }
      </ul>
    </div>
  );
}
