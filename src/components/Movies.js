
function Movies() {
    return (
        // Movies Section
        <div className="py-24 bg-black">
            {/* Movies Content */}
            <div className="container flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
                {/* Left Content */}
                <div className=" basis-2/3">
                    {/* Titles */}
                    <div className="flex space-x-2 divide-x divide-gega-red divide-opacity-50 mb-8 pl-10 lg:pl-0 ">
                        <h2 className=" text-gega-red"><a href="#">Latest</a></h2>
                        <h2 className="text-gega-gray hover:text-gega-red duration-500 pl-2"><a href="#">Popular</a></h2>
                        <h2 className="text-gega-gray hover:text-gega-red duration-500 pl-2"><a href="#">Best</a></h2>
                    </div>
                    {/* Images container */}
                    <div className="flex flex-wrap">
                        {/* image 1 */}
                        <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3 lg:basis-1/3">
                            {/* image */}
                            <img src="./images/mv1.jpg" className="group-hover:scale-110 group-hover:opacity-50 duration-500 "></img>
                            {/* image detail container */}
                            <div className="absolute px-6 bottom-8">
                                <h3 className="text-gega-gray group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblavion</h3>
                                <p className="text-xs text-gega-gray opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, saepe?</p>
                                {/* icons container */}
                                <div className="absolute flex space-x-8 text-gega-gray opacity-0 -bottom-2 group-hover:opacity-100 duration-500">
                                    <a className="hover:text-gega-red" href="#"><i className="fa-solid fa-play"></i></a>
                                    <a className="hover:text-gega-red" href="#"><i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>

                        </div>
                        {/* image 2 */}
                        <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
                            {/* image */}
                            <img src="./images/mv2.jpg" className="group-hover:scale-110 group-hover:opacity-50 duration-500 "></img>
                            {/* image detail container */}
                            <div className="absolute px-6 bottom-8">
                                <h3 className="text-gega-gray group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblavion</h3>
                                <p className="text-xs text-gega-gray opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, saepe?</p>
                                {/* icons container */}
                                <div className="absolute flex space-x-8 text-gega-gray opacity-0 -bottom-2 group-hover:opacity-100 duration-500">
                                    <a className="hover:text-gega-red" href="#"><i className="fa-solid fa-play"></i></a>
                                    <a className="hover:text-gega-red" href="#"><i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>

                        </div>
                        {/* image 3 */}
                        <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
                            {/* image */}
                            <img src="./images/mv3.jpg" className="group-hover:scale-110 group-hover:opacity-50 duration-500 "></img>
                            {/* image detail container */}
                            <div className="absolute px-6 bottom-8">
                                <h3 className="text-gega-gray group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblavion</h3>
                                <p className="text-xs text-gega-gray opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, saepe?</p>
                                {/* icons container */}
                                <div className="absolute flex space-x-8 text-gega-gray opacity-0 -bottom-2 group-hover:opacity-100 duration-500">
                                    <a className="hover:text-gega-red" href="#"><i className="fa-solid fa-play"></i></a>
                                    <a className="hover:text-gega-red" href="#"><i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>

                        </div>
                        {/* image 4 */}
                        <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
                            {/* image */}
                            <img src="./images/mv4.jpg" className="group-hover:scale-110 group-hover:opacity-50 duration-500 "></img>
                            {/* image detail container */}
                            <div className="absolute px-6 bottom-8">
                                <h3 className="text-gega-gray group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblavion</h3>
                                <p className="text-xs text-gega-gray opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, saepe?</p>
                                {/* icons container */}
                                <div className="absolute flex space-x-8 text-gega-gray opacity-0 -bottom-2 group-hover:opacity-100 duration-500">
                                    <a className="hover:text-gega-red" href="#"><i className="fa-solid fa-play"></i></a>
                                    <a className="hover:text-gega-red" href="#"><i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>

                        </div>
                        {/* image 5 */}
                        <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
                            {/* image */}
                            <img src="./images/mv5.jpg" className="group-hover:scale-110 group-hover:opacity-50 duration-500 "></img>
                            {/* image detail container */}
                            <div className="absolute px-6 bottom-8">
                                <h3 className="text-gega-gray group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblavion</h3>
                                <p className="text-xs text-gega-gray opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, saepe?</p>
                                {/* icons container */}
                                <div className="absolute flex space-x-8 text-gega-gray opacity-0 -bottom-2 group-hover:opacity-100 duration-500">
                                    <a className="hover:text-gega-red" href="#"><i className="fa-solid fa-play"></i></a>
                                    <a className="hover:text-gega-red" href="#"><i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>

                        </div>
                        {/* image 6 */}
                        <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
                            {/* image */}
                            <img src="./images/mv6.jpg" className="group-hover:scale-110 group-hover:opacity-50 duration-500 "></img>
                            {/* image detail container */}
                            <div className="absolute px-6 bottom-8">
                                <h3 className="text-gega-gray group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblavion</h3>
                                <p className="text-xs text-gega-gray opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, saepe?</p>
                                {/* icons container */}
                                <div className="absolute flex space-x-8 text-gega-gray opacity-0 -bottom-2 group-hover:opacity-100 duration-500">
                                    <a className="hover:text-gega-red" href="#"><i className="fa-solid fa-play"></i></a>
                                    <a className="hover:text-gega-red" href="#"><i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>

                        </div>
                           {/* image 7 */}
                           <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3 hidden md:block lg:hidden">
                            {/* image */}
                            <img src="./images/mv1.jpg" className="group-hover:scale-110 group-hover:opacity-50 duration-500 "></img>
                            {/* image detail container */}
                            <div className="absolute px-6 bottom-8">
                                <h3 className="text-gega-gray group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblavion</h3>
                                <p className="text-xs text-gega-gray opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, saepe?</p>
                                {/* icons container */}
                                <div className="absolute flex space-x-8 text-gega-gray opacity-0 -bottom-2 group-hover:opacity-100 duration-500">
                                    <a className="hover:text-gega-red" href="#"><i className="fa-solid fa-play"></i></a>
                                    <a className="hover:text-gega-red" href="#"><i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>

                        </div>
                           {/* image 8 */}
                           <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3 hidden md:block lg:hidden">
                            {/* image */}
                            <img src="./images/mv2.jpg" className="group-hover:scale-110 group-hover:opacity-50 duration-500 "></img>
                            {/* image detail container */}
                            <div className="absolute px-6 bottom-8">
                                <h3 className="text-gega-gray group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblavion</h3>
                                <p className="text-xs text-gega-gray opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, saepe?</p>
                                {/* icons container */}
                                <div className="absolute flex space-x-8 text-gega-gray opacity-0 -bottom-2 group-hover:opacity-100 duration-500">
                                    <a className="hover:text-gega-red" href="#"><i className="fa-solid fa-play"></i></a>
                                    <a className="hover:text-gega-red" href="#"><i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>


                {/* Right Content */}
                <div className="basis-1/3 pl-10 lg:pl-0">
                    {/* Title */}
                    <h2 className="text-gega-gray mb-8">Hot News</h2>
                    {/* News Container */}
                    <div className="flex flex-row lg:flex-col lg:h-full justify-start lg:justify-between lg:pb-16 flex-wrap lg:flex-nowrap">
                        {/* Item */}
                        <div className="flex items-center group basiis-3/4 md:basis-1/2">
                            {/* News Image Container */}
                            <div className="basis-1/3 h-full">
                                <img src="./images/new1.jpg" className="h-full w-full object-cover"></img>
                            </div>
                            {/* Item Detail */}
                            <div className="basis-2/3 pl-8 font-open text-gega-gray group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, omnis.</p>
                                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">ON NOW 01 2024</p>
                            </div>
                        </div>
                        {/* Item */}
                        <div className="flex items-center group 3/4 md:basis-1/2">
                            {/* News Image Container */}
                            <div className="basis-1/3 h-full">
                                <img src="./images/new2.jpg" className="h-full w-full object-cover"></img>
                            </div>
                            {/* Item Detail */}
                            <div className="basis-2/3 pl-8 font-open text-gega-gray group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, omnis.</p>
                                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">ON NOW 01 2024</p>
                            </div>
                        </div>
                        {/* Item */}
                        <div className="flex items-center group 3/4 md:basis-1/2">
                            {/* News Image Container */}
                            <div className="basis-1/3 h-full">
                                <img src="./images/new3.jpg" className="h-full w-full object-cover"></img>
                            </div>
                            {/* Item Detail */}
                            <div className="basis-2/3 pl-8 font-open text-gega-gray group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, omnis.</p>
                                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">ON NOW 01 2024</p>
                            </div>
                        </div>
                        {/* Item */}
                        <div className="flex items-center group 3/4 md:basis-1/2">
                            {/* News Image Container */}
                            <div className="basis-1/3 h-full">
                                <img src="./images/new4.jpg" className="h-full w-full object-cover"></img>
                            </div>
                            {/* Item Detail */}
                            <div className="basis-2/3 pl-8 font-open text-gega-gray group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, omnis.</p>
                                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">ON NOW 01 2024</p>
                            </div>
                        </div>
                        {/* Item */}
                        <div className="flex items-center group 3/4 md:basis-1/2 md:hidden lg:flex">
                            {/* News Image Container */}
                            <div className="basis-1/3 h-full">
                                <img src="./images/new5.jpg" className="h-full w-full object-cover"></img>
                            </div>
                            {/* Item Detail */}
                            <div className="basis-2/3 pl-8 font-open text-gega-gray group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, omnis.</p>
                                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">ON NOW 01 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Movies;