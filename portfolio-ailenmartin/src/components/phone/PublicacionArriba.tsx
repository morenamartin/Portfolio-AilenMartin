const PublicacionArriba = () => {
    return (
        <div className="flex flex-row items-center justify-between w-full gap-2 ">
            <div className="flex flex-row items-center gap-2">
                <div className="flex items-center justify-center bg-pink-400 rounded-full w-9 h-9">
                    <div className="w-8 h-8 px-[1px] bg-gray-100 rounded-full flex items-center justify-center">
                        <div className="bg-blue-300 rounded-full w-7 h-7"></div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="h-2 bg-[#a9a9a9] rounded-full w-24"></div>
                    <div className="w-8 h-1 bg-[#a9a9a9] rounded-full"></div>
                </div>
            </div>

            <div className="flex flex-row gap-[1px]">
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            </div>
        </div>
    )
}

export default PublicacionArriba