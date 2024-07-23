

function Matrix() {
    return (
        <div className="bg-gega-white">
            {/* Matrix Section Container */}
            <div className=" container flex items-center justify-center relative pl-10 lg:pl-0">
                {/* Left Content */}
                <div className="hidden md:block md:basis-1/3 lg:basis-1/2">
                    <img src="./images/matrix.png" alt="" className="lg:absolute lg:bottom-0" />
                </div>
                {/* Right content */}
                <div className="md:basis-2/3 lg:basis-1/2">
                    {/* Right Content Container */}
                    <div className="flex flex-col justify-center py-10 w-3/4 md:w-full " >
                        <h3 className="tracking-wider text-gega-melon">ACTION, DRAMA, THRILLER</h3>
                        <h2 className="mb-2">Matrix Reloaded</h2>
                        <p className="text-sm mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia autem excepturi fuga voluptatibus laborum quidem debitis amet ipsam natus. Quisquam?</p>
                        <h3 className="tracking-wider text-gega-red">8 wins 34 nominations</h3>
                    </div>
                </div>
                {/* Oldie */}
                <div className="left-10 absolute -top-6 lg:-top-12 lg:left-0 w-12 h-12  lg:w-24 lg:h-24 bg-gega-melon rounded-full text-center flex items-center -rotate-45">
                    <p className="font-gemunu uppercase font-bold text-xs lg:text-xl text-gega-red">Oldie & Goldie</p>
                </div>
            </div>
        </div>
    )
}

export default Matrix;