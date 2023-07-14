import {FillButton} from "@/app/components/button";

export default function SubHeader() {
    return (
        <div className="absolute -bottom-8 z-30 w-full flex justify-center">
            <div className="text-black bg-white flex items-center space-x-8 w-fit p-4 py-4 px-8">
                <div>
                    <label className="text-gray-500 text-sm">Room type</label><br/>
                    <select className="bg-white">
                        <option>Select type</option>
                    </select>
                </div>
                <div className="h-10 border bg-gray-500"></div>
                <div>
                    <label className="text-gray-500 text-sm">Checkin</label><br/>
                    <select>
                        <option>Select type</option>
                    </select>
                </div>
                <div className="h-10 border bg-gray-500"></div>
                <div>
                    <label className="text-gray-500 text-sm">Checkout</label><br/>
                    <select>
                        <option>Select type</option>
                    </select>
                </div>
                <div className="h-10 border bg-gray-500"></div>
                <div>
                    <label className="text-gray-500 text-sm">Rooms</label><br/>
                    <select>
                        <option>Select type</option>
                    </select>
                </div>
                <FillButton>Search</FillButton>
            </div>
        </div>
    )
}