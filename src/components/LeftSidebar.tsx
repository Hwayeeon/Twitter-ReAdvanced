import Link from "next/link"
import { AiOutlineThunderbolt } from "react-icons/ai"
import { BiUser } from "react-icons/bi"
import { BsBell, BsBookmark, BsEnvelope, BsRobot, BsThreeDots, BsTwitterX } from "react-icons/bs"
import { CgSearch } from "react-icons/cg"
import { GoHome } from "react-icons/go"
import { MdOutlineWorkOutline } from "react-icons/md"
import { RiUserCommunityLine, RiVerifiedBadgeLine } from "react-icons/ri"

const navigation_items = [
  {
    title: "X ReAdvanced",
    icon: BsTwitterX,
  },
  {
    title: "Home",
    icon: GoHome,
  },
  {
    title: "Explore",
    icon: CgSearch,
  },
  {
    title: "Notifications",
    icon: BsBell,
  },
  {
    title: "Messages",
    icon: BsEnvelope,
  },
  {
    title: "Grok",
    icon: BsRobot,
  },
  {
    title: "Bookmarks",
    icon: BsBookmark,
  },
  {
    title: "Jobs",
    icon: MdOutlineWorkOutline,
  },
  {
    title: "Community",
    icon: RiUserCommunityLine,
  },
  {
    title: "Premium",
    icon: RiVerifiedBadgeLine,
  },
  {
    title: "Verified Orgs",
    icon: AiOutlineThunderbolt,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
]

const LeftSidebar = () => {
  return (
    <section className="sticky top-0 w-[275px] h-screen flex flex-col">
      <div className="flex-grow flex flex-col overflow-y-auto">
        <div className="flex flex-col items-stretch space-y-1 mt-4">
          {navigation_items.map((item) => (
            <Link
              key={item.title}
              href={`/${item.title.toLowerCase()}`}
              className="
                flex 
                items-center
                justify-start
                w-fit
                space-x-4 
                py-3
                px-6
                rounded-3xl 
                hover:bg-white/10 
                transition 
                duration-200 
                text-xl
                group
              "
            >
              <div className="flex items-center">
                <item.icon 
                  size={29} 
                  className={item.title === "X ReAdvanced" ? "ml-1" : ""} 
                />
              </div>
              {item.title !== "X ReAdvanced" && (
                <span className="text-xl">{item.title}</span>
              )}
            </Link>
          ))}
        </div>
        <div className="w-fill m-4">
          <button className="w-full rounded-full bg-white hover:bg-white/80 text-black p-3 text-xl font-bold transition duration-200">
            Post
          </button>
        </div>
      </div>
      
      <div className="flex flex-col p-4 space-y-4 border-white/20">
        <button className="w-full p-3 hover:bg-white/10 transition duration-200 rounded-full flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="rounded-full bg-slate-400 w-10 h-10"></div>
            <div className="text-left">
              <div className="font-bold text-sm">Dokja Kim</div>
              <div className="text-sm text-gray-400">@dokjakim</div>
            </div>
          </div>
          <BsThreeDots className="text-gray-400" />
        </button>
      </div>
    </section>
  )
}

export default LeftSidebar