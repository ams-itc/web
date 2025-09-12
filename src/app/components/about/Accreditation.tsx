"use clients";

export default function Accreditation() {

    const accreditations = [
        {
            imagepath: "/accreditations/success_pet.png",
            title: "Certification Title",
            description: "My name is Joofy. When I'm free, I like to fight my owner."
        },
        {
            imagepath: "/accreditations/success_pet_1.png",
            title: "Certification Title",
            description: "My name is Ah Peal. When I'm free, I like to fight my owner."
        },
        {
            imagepath: "/accreditations/success_pet_2.png",
            title: "Certification Title",
            description: "My name is Mister Keav. When I'm free, I like to fight my owner."
        },
        {
            imagepath: "/accreditations/success_pet.png",
            title: "Certification Title",
            description: "My name is Joofy. When I'm free, I like to fight my owner."
        },
        {
            imagepath: "/accreditations/success_pet_1.png",
            title: "Certification Title",
            description: "My name is Ah Peal. When I'm free, I like to fight my owner."
        },
        {
            imagepath: "/accreditations/success_pet_2.png",
            title: "Certification Title",
            description: "My name is Mister Keav. When I'm free, I like to fight my owner."
        },
    ]

    return (
        <div className="pt-10 w-full">
            <h1 className="text-3xl font-playfair_display text-black font-semibold">
                Accreditation
            </h1>
            <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
            <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />

            <div className="px-3 pt-7">
                <div className="grid grid-cols-3 gap-x-20 gap-y-10">
                    {accreditations.map((accreditation, index) => (
                        <div 
                            key={index}
                            className="col-span-1"
                        >
                            <div className="min-h-[510px]">
                                <img 
                                        src = {accreditation.imagepath}
                                        alt = {(index+1) + "Image"}
                                        className = "rounded-lg w-full"
                                    />
                            </div>
 
                            <h1 className="text-lg text-black font-raleway font-semibold pt-3">
                                {accreditation.title}
                            </h1>
                            <p className="text-sm text-[#2E2E2E] font-reddit_sans">
                                {accreditation.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}