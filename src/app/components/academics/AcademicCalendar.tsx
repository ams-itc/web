"use clients";

import { Download } from "lucide-react";

interface StartingDate {
    day: number;
    month: string;
    year: number;
}

interface EndingDate {
    day: number;
    month: string;
    year: number;
}

interface EventDate {
    startingdata: StartingDate;
    enddate: EndingDate;
}

interface Calendar {
    title: string;
    date: EventDate | string;
}

export default function AcademicCalendar() {

    const calendarurl = ""

    const calendarevents = [
        {
            title: "Semester 1",
            date: {
                startingdata: { day: 1, month: "September", year: 2023 },
                enddate: { day: 16, month: "December", year: 2023 },
            }
        },
        {
            title: "Semester 1",
            date: {
                startingdata: { day: 1, month: "September", year: 2023 },
                enddate: { day: 16, month: "December", year: 2023 },
            }
        },
        {
            title: "Semester 1",
            date: {
                startingdata: { day: 1, month: "September", year: 2023 },
                enddate: { day: 16, month: "December", year: 2023 },
            }
        },
        {
            title: "Semester 1",
            date: {
                startingdata: { day: 1, month: "September", year: 2023 },
                enddate: { day: 16, month: "December", year: 2023 },
            }
        },
    ]

    const calendarholidays = [
        {
            title: "Independence Day",
            date: "Monday, 9 December 2024",
        },
        {
            title: "Independence Day",
            date: "Monday, 9 December 2024",
        },
        {
            title: "Independence Day",
            date: "Monday, 9 December 2024",
        },
        {
            title: "Independence Day",
            date: "Monday, 9 December 2024",
        },
    ]

    return (
        <div className="w-full">
            <h1 className="text-3xl font-playfair_display text-black font-semibold">
                Academic Calendar
            </h1>
            <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
            <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />
            <div className="py-5 px-2 grid grid-cols-2 gap-10 font-reddit_sans">
                <div className="col-span-1">
                    {/* heading */}
                    <div className="bg-[#3A3B5C] flex justify-between px-5 py-2 text-white text-xl font-semibold mb-5">
                        <h2>
                            EVENTS
                        </h2>
                        <h2>
                            DATE
                        </h2>
                    </div>
                    {calendarevents.map((event, i) => (
                        <div 
                            key={i}
                            className="grid grid-cols-2 gap-y-5 py-2 space-y-5"
                        >
                            {/* Title */}
                            <div className="col-span-1 text-sm text-black">
                                <p>{event.title}</p>
                            </div>

                            {/* Date */}
                            <div className="col-span-1 text-sm text-black text-right">
                                <p>
                                    {event.date.startingdata.day} {event.date.startingdata.month} {event.date.startingdata.year} -{" "}
                                    {event.date.enddate.day} {event.date.enddate.month} {event.date.enddate.year}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-span-1">
                    <div className="bg-[#C41E3A] flex justify-between px-5 py-2 text-white text-xl font-semibold mb-5">
                        <h2>
                            HOLIDAYS
                        </h2>
                        <h2>
                            DATE
                        </h2>
                    </div>
                    {calendarholidays.map((holiday, i) => (
                        <div 
                            key={i}
                            className="grid grid-cols-2 gap-y-5 py-2 space-y-5"
                        >
                            {/* Title */}
                            <div className="col-span-1 text-sm text-black">
                                <p>{holiday.title}</p>
                            </div>

                            {/* Date */}
                            <div className="col-span-1 text-sm text-black text-right">
                                <p>
                                    {holiday.date}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-10 font-reddit_sans">
                    <a 
                        href={calendarurl}
                        className="text-xl text-black font-semibold underline hover:text-[#C41E3A] hover:underline-offset-4 transition-all duration-200 inline-flex gap-x-4"
                    >
                        Calendar of Academic Year 2024-2025 <Download />
                    </a>
            </div>
        </div>
    )
}