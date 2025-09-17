"use clients";

export default function ReDALabSection() {

    const redaLabData = {
        description: "The Research and Data Analytics Lab (ReDA Lab), an interdisciplinary research center at the Institute of Technology of Cambodia (ITC), is where theoretical knowledge meets practical application. Within the Department of Applied Mathematics and Statistics, we are a leading force in using data science to solve real-world problems and drive innovation. Our lab provides students with hands-on experience and a direct path to career readiness through five dynamic units. Each unit offers a unique focus, from cutting-edge research to community-based projects, ensuring our members are well-equipped to excel in the evolving landscape of data.",
    }

    return (
        <section className="w-full">
            <h1 className="text-3xl font-playfair_display text-black font-semibold">
                Research and Data Analytics Laboratory | <span className="text-[#C41E3A]">ReDa Lab</span>
            </h1>
            <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
            <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />
            <p className="mt-6 text-lg text-[#767676] font-raleway">
                {redaLabData.description}
            </p>
            <div className="mt-6">
                <a 
                href=""
                className=" border text-[#C41E3A] font-raleway"
                >
                Learn more about ReDA Lab <i className="fa-solid fa-arrow-up-right-from-square pl-3 text-xl"></i>
                </a>
            </div>

        </section>
    )
}