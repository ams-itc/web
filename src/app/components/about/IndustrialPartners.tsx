"use clients";

export default function IndustrialPartners() {

    const partners = [
        {
            imagepath: "/partners/partners.png"
        },
        {
            imagepath: "/partners/partners.png"
        },
        {
            imagepath: "/partners/partners.png"
        },
        {
            imagepath: "/partners/partners.png"
        },
        {
            imagepath: "/partners/partners.png"
        },
        {
            imagepath: "/partners/partners.png"
        },
    ]

    return (
        <div className="pt-10 w-full">
            <h1 className="text-3xl font-playfair_display text-black font-semibold">
                Industrial Partners
            </h1>
            <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
            <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />
            <p className="pt-7 font-raleway text-[#2E2E2E]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
            <div className="px-10 py-5 grid grid-cols-4 gap-x-10 gap-y-8">
                {partners.map((partner, index) => (
                    <div
                        key={index}
                        className="col-span-1"
                    >
                        <img 
                            src = {partner.imagepath} 
                            alt = {(index+1) + "image"} 
                            className = "w-fit rounded-xl "
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}