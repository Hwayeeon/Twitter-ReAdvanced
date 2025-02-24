import LeftSidebar from "@/components/LeftSidebar";
import MainComponents from "@/components/MainComponents";

const page = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <div className="max-w-screen-xl mx-auto flex">
        <LeftSidebar />
        <MainComponents />
      </div>
    </div>
  )
}

export default page