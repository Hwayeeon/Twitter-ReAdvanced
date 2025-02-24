import LeftSidebar from "@/components/LeftSidebar"

const page = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <div className="max-w-screen-xl mx-auto flex">
        <LeftSidebar />
        <main className="flex-1 border-x border-white/20 min-h-screen w-[600px]">
          <div className="flex items-center justify-evenly p-4 border-b border-white/20 backdrop-blur-lg top-0 sticky">
            <button className="font-bold">For you</button>
            <button className="font-bold">Following</button>
          </div>
          <div className="p-4">
            <p>
              lorem1000
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default page