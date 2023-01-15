export default function Logo() {
    return (
        <div className={`flex flex-col items-center justify-center h-14 w-14 rounded-full bg-white`}>
            <div className="flex mt--2">
                <div className="h-3 w-3 rounded-full bg-red-600 mr-1" />
                <div className="h-3 w-3 rounded-full bg-pink-600 ml-1" />
            </div>
            <div className="flex mt-0.5">
                <div className="h-3 w-3 rounded-full bg-gray-500 mr-3" />
                <div className="h-3 w-3 rounded-full bg-blue-600 ml-3" />
            </div>
            <div className="flex mt-0.5">
                <div className="h-3 w-3 rounded-full bg-yellow-500 mr-1 " />
                <div className="h-3 w-3 rounded-full bg-green-600 ml-1" />
            </div>
        </div>
    )
}