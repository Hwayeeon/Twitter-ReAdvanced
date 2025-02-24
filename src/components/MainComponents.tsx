import { BsDot, BsChat, BsBookmark, BsThreeDots } from "react-icons/bs";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { IoStatsChart, IoShareOutline } from "react-icons/io5";

const reaction_icons = [
  {
    icon: BsChat,
    key: 'comment',
    className: "hover:text-blue-500",
  },
  {
    icon: AiOutlineRetweet,
    key: 'retweet',
    className: "hover:text-green-500",
  },
  {
    icon: AiOutlineHeart,
    key: 'like',
    className: "hover:text-red-500",
  },
  {
    icon: IoStatsChart,
    key: 'stats',
    className: "hover:text-blue-500",
  },
  {
    icon: BsBookmark,
    key: 'bookmark',
    className: "hover:text-yellow-500",
    group: 'secondary'
  },
  {
    icon: IoShareOutline,
    key: 'share',
    className: "hover:text-blue-500",
    group: 'secondary'
  },
];

const MainComponents = () => {
  return (
    <main className="flex-1 border-x border-white/20 min-h-screen max-w-[600px]">
      <div className="sticky top-0 bg-black/90 p-4 border-b-[0.5px] border-white/20 flex items-center space-x-4 justify-evenly backdrop-blur">
        <span className="font-bold">For you</span>
        <span className="font-bold">Following</span>
      </div>
      <div className="border-t-[0.5px] border-b-[0.5px] border-white/20 p-4 h-32 relative">
        <div className="flex gap-4">
          <div className="w-10 h-10 bg-slate-400 rounded-full flex-shrink-0" />
            {/* Profile Image */}
          <div className="flex flex-col flex-1 gap-4">
            <input 
              type="text" 
              placeholder="What's Happening?"
              className="w-full bg-transparent text-white text-lg focus:outline-none placeholder:text-white/60" 
            />
            
            {/* Bottom Row */}
            <div className="w-full flex justify-between items-center">
              <div className="text-white/60">
                {/* icons */}
              </div>
              
              {/* Post Button */}
              <button className="rounded-full bg-white hover:bg-white/80 text-black px-4 py-2 text-sm font-bold transition duration-200">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {
          Array.from({ length: 10}).map((_, i) => (
            <div key={ i } className="p-4 border-b-[0.5px] border-white/20 flex space-x-4">
              <div>
                <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
              </div>
              <div className="flex flex-col space-y-4 w-full">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-1">
                    <div className="font-bold">Dokja Kim</div>
                    <div className="text-slate-500">@dokjakim</div>
                    <div className="text-slate-500">
                      <BsDot />
                    </div>
                    <div className="text-slate-500">1 hour ago</div>
                  </div>
                  <div>
                      <BsThreeDots />
                    </div>
                </div>
                <div className="text-white text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam cum soluta error perferendis ipsum provident magni quasi. Illo, quia? Dicta non corrupti praesentium quos laudantium, odit sint soluta animi id inventore, quas magni impedit mollitia, sit aut saepe nesciunt atque. Cum ipsa beatae deleniti sint illo dolore in accusamus, laudantium repellendus saepe soluta deserunt odit! Error vel deserunt reprehenderit accusamus, pariatur, labore odit corporis qui commodi veniam maiores est cum minus dolorem voluptates autem iste. Optio culpa, natus recusandae necessitatibus nostrum sunt fugit id quas consectetur laborum maiores tenetur, reprehenderit amet? Soluta eligendi quia velit tenetur necessitatibus pariatur? Reprehenderit.
                </div>
                <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl">
                  {/* Image */}
                </div>
                <div className="flex justify-between items-center w-full mt-2">
                  <div className="flex space-x-16">
                    {reaction_icons
                      .filter(icon => !icon.group)
                      .map(({ icon: Icon, key, className }) => (
                        <button
                          key={key}
                          className={`text-white/60 text-lg p-2 rounded-full hover:bg-white/10 transition-colors ${className}`}
                        >
                          <Icon />
                        </button>
                      ))}
                  </div>
                    
                  <div className="flex space-x-4">
                    {reaction_icons
                      .filter(icon => icon.group === 'secondary')
                      .map(({ icon: Icon, key, className }) => (
                        <button
                          key={key}
                          className={`text-white/60 text-lg p-2 rounded-full hover:bg-white/10 transition-colors ${className}`}
                        >
                          <Icon />
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </main>
  );
}

export default MainComponents