import SubHeader from "@/app/components/sub_header";

export default function Carousel() {
    return (
        <div className="w-full relative text-white" style={{"height": "90vh"}}>
            <SubHeader/>
            <div className="absolute  bottom-28 z-40 flex items-center space-x-1 justify-center w-full">
                <div className='h-2 rounded-full w-8 bg-white'></div>
                <div className='h-2 rounded-full w-2 bg-white/50'></div>
                <div className='h-2 rounded-full w-2 bg-white/50'></div>
                <div className='h-2 rounded-full w-2 bg-white/50'></div>
            </div>
            <div className="w-full h-full bg-black/50 absolute flex justify-center items-center">
                <div className="w-1/2 text-center">
                    <h1 className="text-6xl leading-snug">
                        Helping You Find The Most Comfortable Place
                    </h1>
                    <p className="mt-12">
                        It is a long established fact that a reader will be distracted by the readable content of
                        a page when looking at its layout.
                    </p>
                </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full h-full object-cover" src="/img1.jpg" alt="house"/>
        </div>
    )
}