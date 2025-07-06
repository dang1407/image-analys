
interface HeaderItemData {
  label: string;
}

interface iProps {
  data: HeaderItemData;
}

export default function HeaderItem({data}: iProps) {
  return (
    <li className="p-4 hover:bg-[#ccc] cursor-pointer text-[#09090B] font-medium opacity-75">
      {data.label}
    </li>
  )
}
