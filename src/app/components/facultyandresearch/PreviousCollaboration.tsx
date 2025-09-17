"use clients";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DescriptionItem {
    title: string;
    description: string | string[];
}

interface ListItem {
    title: string;
    description?: string[] | DescriptionItem[];
    sub_description?: string;
}

interface LinkItem {
    title: string;
    url: string;
}

interface Collaboration {
  title: string;
  duration: string;
  investigators: string[];
  partner: string;
  funding: string;
  students: string;
  description: string;
  lists?: ListItem[];
  link?: LinkItem[];
}

export default function PreviousCollaborationsSection() {

    const collaborations: Collaboration[] = [
        {
            title: "Stanford Biomedical Data Science Initiative",
            duration: "March 2023 – February 2024",
            investigators: ["Dr. Sarah Chen (Stanford Medicine)", "Dr. Michael Rodriguez (Stanford Computer Science)"],
            partner: "Advanced Analytics Solutions Consortium",
            funding: "$3.5M joint initiative",
            students: "12 graduate students, 8 undergraduates",
            description:
                "Our Department of Biostatistics and Data Science successfully partnered with Stanford University's Biomedical Data Science Initiative in a groundbreaking collaboration that exemplifies the power of academic-industry partnerships in advancing healthcare research. This transformative project focused on developing next-generation cardiovascular disease prediction models using machine learning approaches applied to one of the largest longitudinal patient datasets in cardiovascular medicine, encompassing over 50,000 patient records with fifteen years of comprehensive clinical observations. The collaboration represented a strategic alignment between Stanford's world-renowned clinical expertise and our department's cutting-edge computational methodologies, creating an innovative research environment that has since become a model for similar partnerships across the university system.",
            lists: [
                {
                    title: "Research Innovation and Academic Excellence",
                    description: [
                        "This interdisciplinary collaboration broke new ground in translational data science by seamlessly integrating clinical domain expertise with advanced computational methods. Our joint research team established innovative protocols for handling sensitive healthcare data while maintaining the highest standards of statistical rigor and clinical relevance. The project served as a living laboratory for graduate students and postdoctoral researchers, providing hands-on experience with real-world healthcare challenges while contributing to peer-reviewed scientific knowledge. Through this partnership, our department strengthened its reputation as a leader in biomedical data science education and research, demonstrating our commitment to solving complex healthcare challenges through innovative analytical approaches.",
                        "The collaborative framework emphasized rigorous methodology development alongside practical clinical applications. Our interdisciplinary team of biostatisticians, computer scientists, and clinical researchers worked in integrated sprint cycles, ensuring that technological innovations remained grounded in medical best practices. Weekly joint seminars fostered knowledge exchange between academic disciplines, creating a rich learning environment that enhanced both undergraduate and graduate curricula. The project's success led to the establishment of a permanent joint seminar series and visiting scholar program, further strengthening institutional ties and research collaboration opportunities."
                    ]
                },
                {
                    title: "Key Project Achievements and Technical Innovation",
                    description: [
                        {
                            title: "Advanced Predictive Modeling Suite",
                            description: "Developed state-of-the-art ensemble machine learning models achieving 87% accuracy in predicting cardiovascular events within 5-year timeframes, utilizing Random Forest, Gradient Boosting, and novel deep learning architectures specifically optimized for longitudinal healthcare data analysis"
                        },
                        {
                            title: "Interactive Research Platform",
                            description: "Created comprehensive visualization and analysis platform featuring real-time dashboard capabilities, enabling clinical researchers to explore patient cohorts, perform risk stratification, and interpret model predictions through intuitive web-based interface with mobile accessibility"
                        },
                        {
                            title: "Statistical Methodology Framework",
                            description: "Implemented innovative survival analysis protocols and longitudinal modeling techniques, including novel time-varying coefficient models and multi-level hierarchical approaches specifically designed for complex time-series medical data with missing value imputation strategies"
                        },
                        {
                            title: "HIPAA-Compliant Data Infrastructure",
                            description: "Established robust, automated ETL pipeline architecture ensuring complete regulatory compliance while enabling continuous model updates, featuring encrypted data transmission, audit logging, and secure multi-institutional data sharing capabilities"
                        },
                        {
                            title: "Open-Source Software Development",
                            description: "Released three R packages and two Python libraries for cardiovascular risk modeling, downloaded over 15,000 times by global research community, contributing to reproducible research practices in medical data science"
                        },
                        {
                            title: "Educational Curriculum Integration",
                            description: "Developed case-based learning modules now incorporated into graduate biostatistics courses at both institutions, providing hands-on experience with real healthcare datasets for over 200 students annually"
                        },
                    ],
                    sub_description: "The collaboration methodology emphasized transparency and knowledge transfer throughout the engagement period. Weekly progress meetings included both technical demonstrations and clinical interpretation sessions, ensuring that our analytical findings aligned with medical best practices and regulatory requirements. We maintained detailed documentation of all methodological decisions and provided comprehensive training to lab personnel on model interpretation and maintenance procedures."
                },
                {
                    title: "Measurable Impact and Recognition",
                    description: [
                        {
                            title: "High-Impact Publications",
                            description: "Co-authored eight peer-reviewed papers including first-author publications in Nature Medicine, Journal of the American Medical Association, and Circulation Research, with combined citation impact exceeding 450 references and h-index contribution of 12 within eighteen months"
                        },
                        {
                            title: "Major Grant Success",
                            description: "Research findings directly supported successful acquisition of $4.2 million multi-institutional NIH R01 grant for expanded cardiovascular prediction research, plus additional $1.6 million NSF funding for methodological development"
                        },
                        {
                            title: "Clinical Translation",
                            description: "Risk prediction models successfully integrated into Stanford Health Care's electronic health record system and two additional hospital networks, currently screening approximately 3,200 patients monthly with demonstrated 23% improvement in early intervention outcomes"
                        },
                        {
                            title: "International Recognition",
                            description: "Project selected as featured case study at International Conference on Biomedical Data Science, invited presentations at Harvard Medical School, Johns Hopkins Bloomberg School of Public Health, and European Society of Cardiology annual meeting"
                        },
                        {
                            title: "Industry Partnerships",
                            description: "Collaboration success attracted partnerships with three major healthcare technology companies and two pharmaceutical organizations, generating additional $800,000 in sponsored research funding"
                        },
                        {
                            title: "Student Career Outcomes",
                            description: "100% of participating graduate students secured prestigious postdoctoral positions or industry research roles, with average starting salaries 32% above department mean, demonstrating enhanced career preparation through collaborative research experience"
                        },
                    ],
                },
                {
                    title: "Media Coverage and Community Engagement",
                    description: [
                        "The partnership garnered significant attention in both academic and popular media, with features in Stanford Medicine Magazine, Health Data Management, and a special segment on National Public Radio's Science Friday program highlighting the innovative approach to cardiovascular risk prediction. Our joint research team presented findings at community health fairs reaching over 5,000 Bay Area residents, demonstrating the university's commitment to translating research into public benefit. The collaboration was recognized with the American Statistical Association's Excellence in Statistical Collaboration Award and Stanford's Partnership for Innovation Prize, acknowledging its exemplary model of academic-industry cooperation.",
                        "Beyond immediate research outcomes, this partnership established a sustainable framework for ongoing collaboration that continues to generate new research opportunities and strengthen institutional relationships. The success led to the creation of a formal Collaborative Data Science Center, housed jointly between our department and Stanford Medicine, which now supports twelve active research projects and has become a regional hub for healthcare analytics innovation. This enduring impact demonstrates our department's leadership in fostering transformative partnerships that advance both scientific knowledge and practical applications in healthcare improvement."
                    ],
                },
            ],
            link: [
                {
                    title: "Download the Full Report here",
                    url: "https://www.facebook.com/lyhor.luy.9"
                }
            ]
        },
        {
            title: "Stanford Biomedical Data Science Initiative",
            duration: "March 2023 – February 2024",
            investigators: ["Dr. Sarah Chen (Stanford Medicine)", "Dr. Michael Rodriguez (Stanford Computer Science)"],
            partner: "Advanced Analytics Solutions Consortium",
            funding: "$3.5M joint initiative",
            students: "12 graduate students, 8 undergraduates",
            description:
                "Our Department of Biostatistics and Data Science successfully partnered with Stanford University's Biomedical Data Science Initiative in a groundbreaking collaboration that exemplifies the power of academic-industry partnerships in advancing healthcare research. This transformative project focused on developing next-generation cardiovascular disease prediction models using machine learning approaches applied to one of the largest longitudinal patient datasets in cardiovascular medicine, encompassing over 50,000 patient records with fifteen years of comprehensive clinical observations. The collaboration represented a strategic alignment between Stanford's world-renowned clinical expertise and our department's cutting-edge computational methodologies, creating an innovative research environment that has since become a model for similar partnerships across the university system.",
            lists: [
                {
                    title: "Research Innovation and Academic Excellence",
                    description: [
                        "This interdisciplinary collaboration broke new ground in translational data science by seamlessly integrating clinical domain expertise with advanced computational methods. Our joint research team established innovative protocols for handling sensitive healthcare data while maintaining the highest standards of statistical rigor and clinical relevance. The project served as a living laboratory for graduate students and postdoctoral researchers, providing hands-on experience with real-world healthcare challenges while contributing to peer-reviewed scientific knowledge. Through this partnership, our department strengthened its reputation as a leader in biomedical data science education and research, demonstrating our commitment to solving complex healthcare challenges through innovative analytical approaches.",
                        "The collaborative framework emphasized rigorous methodology development alongside practical clinical applications. Our interdisciplinary team of biostatisticians, computer scientists, and clinical researchers worked in integrated sprint cycles, ensuring that technological innovations remained grounded in medical best practices. Weekly joint seminars fostered knowledge exchange between academic disciplines, creating a rich learning environment that enhanced both undergraduate and graduate curricula. The project's success led to the establishment of a permanent joint seminar series and visiting scholar program, further strengthening institutional ties and research collaboration opportunities."
                    ]
                },
                {
                    title: "Key Project Achievements and Technical Innovation",
                    description: [
                        {
                            title: "Advanced Predictive Modeling Suite",
                            description: "Developed state-of-the-art ensemble machine learning models achieving 87% accuracy in predicting cardiovascular events within 5-year timeframes, utilizing Random Forest, Gradient Boosting, and novel deep learning architectures specifically optimized for longitudinal healthcare data analysis"
                        },
                        {
                            title: "Interactive Research Platform",
                            description: "Created comprehensive visualization and analysis platform featuring real-time dashboard capabilities, enabling clinical researchers to explore patient cohorts, perform risk stratification, and interpret model predictions through intuitive web-based interface with mobile accessibility"
                        },
                        {
                            title: "Statistical Methodology Framework",
                            description: "Implemented innovative survival analysis protocols and longitudinal modeling techniques, including novel time-varying coefficient models and multi-level hierarchical approaches specifically designed for complex time-series medical data with missing value imputation strategies"
                        },
                        {
                            title: "HIPAA-Compliant Data Infrastructure",
                            description: "Established robust, automated ETL pipeline architecture ensuring complete regulatory compliance while enabling continuous model updates, featuring encrypted data transmission, audit logging, and secure multi-institutional data sharing capabilities"
                        },
                        {
                            title: "Open-Source Software Development",
                            description: "Released three R packages and two Python libraries for cardiovascular risk modeling, downloaded over 15,000 times by global research community, contributing to reproducible research practices in medical data science"
                        },
                        {
                            title: "Educational Curriculum Integration",
                            description: "Developed case-based learning modules now incorporated into graduate biostatistics courses at both institutions, providing hands-on experience with real healthcare datasets for over 200 students annually"
                        },
                    ],
                    sub_description: "The collaboration methodology emphasized transparency and knowledge transfer throughout the engagement period. Weekly progress meetings included both technical demonstrations and clinical interpretation sessions, ensuring that our analytical findings aligned with medical best practices and regulatory requirements. We maintained detailed documentation of all methodological decisions and provided comprehensive training to lab personnel on model interpretation and maintenance procedures."
                },
                {
                    title: "Media Coverage and Community Engagement",
                    description: [
                        "The partnership garnered significant attention in both academic and popular media, with features in Stanford Medicine Magazine, Health Data Management, and a special segment on National Public Radio's Science Friday program highlighting the innovative approach to cardiovascular risk prediction. Our joint research team presented findings at community health fairs reaching over 5,000 Bay Area residents, demonstrating the university's commitment to translating research into public benefit. The collaboration was recognized with the American Statistical Association's Excellence in Statistical Collaboration Award and Stanford's Partnership for Innovation Prize, acknowledging its exemplary model of academic-industry cooperation.",
                        "Beyond immediate research outcomes, this partnership established a sustainable framework for ongoing collaboration that continues to generate new research opportunities and strengthen institutional relationships. The success led to the creation of a formal Collaborative Data Science Center, housed jointly between our department and Stanford Medicine, which now supports twelve active research projects and has become a regional hub for healthcare analytics innovation. This enduring impact demonstrates our department's leadership in fostering transformative partnerships that advance both scientific knowledge and practical applications in healthcare improvement."
                    ],
                },
            ],
            link: [
                {
                    title: "Download the Full Report here",
                    url: "https://www.facebook.com/lyhor.luy.9"
                }
            ]
        },
        {
            title: "Stanford Biomedical Data Science Initiative",
            duration: "March 2023 – February 2024",
            investigators: ["Dr. Sarah Chen (Stanford Medicine)", "Dr. Michael Rodriguez (Stanford Computer Science)"],
            partner: "Advanced Analytics Solutions Consortium",
            funding: "$3.5M joint initiative",
            students: "12 graduate students, 8 undergraduates",
            description:
                "Our Department of Biostatistics and Data Science successfully partnered with Stanford University's Biomedical Data Science Initiative in a groundbreaking collaboration that exemplifies the power of academic-industry partnerships in advancing healthcare research. This transformative project focused on developing next-generation cardiovascular disease prediction models using machine learning approaches applied to one of the largest longitudinal patient datasets in cardiovascular medicine, encompassing over 50,000 patient records with fifteen years of comprehensive clinical observations. The collaboration represented a strategic alignment between Stanford's world-renowned clinical expertise and our department's cutting-edge computational methodologies, creating an innovative research environment that has since become a model for similar partnerships across the university system.",
            lists: [
                {
                    title: "Research Innovation and Academic Excellence",
                    description: [
                        "This interdisciplinary collaboration broke new ground in translational data science by seamlessly integrating clinical domain expertise with advanced computational methods. Our joint research team established innovative protocols for handling sensitive healthcare data while maintaining the highest standards of statistical rigor and clinical relevance. The project served as a living laboratory for graduate students and postdoctoral researchers, providing hands-on experience with real-world healthcare challenges while contributing to peer-reviewed scientific knowledge. Through this partnership, our department strengthened its reputation as a leader in biomedical data science education and research, demonstrating our commitment to solving complex healthcare challenges through innovative analytical approaches.",
                        "The collaborative framework emphasized rigorous methodology development alongside practical clinical applications. Our interdisciplinary team of biostatisticians, computer scientists, and clinical researchers worked in integrated sprint cycles, ensuring that technological innovations remained grounded in medical best practices. Weekly joint seminars fostered knowledge exchange between academic disciplines, creating a rich learning environment that enhanced both undergraduate and graduate curricula. The project's success led to the establishment of a permanent joint seminar series and visiting scholar program, further strengthening institutional ties and research collaboration opportunities."
                    ]
                },
                {
                    title: "Key Project Achievements and Technical Innovation",
                    description: [
                        {
                            title: "Advanced Predictive Modeling Suite",
                            description: "Developed state-of-the-art ensemble machine learning models achieving 87% accuracy in predicting cardiovascular events within 5-year timeframes, utilizing Random Forest, Gradient Boosting, and novel deep learning architectures specifically optimized for longitudinal healthcare data analysis"
                        },
                        {
                            title: "Interactive Research Platform",
                            description: "Created comprehensive visualization and analysis platform featuring real-time dashboard capabilities, enabling clinical researchers to explore patient cohorts, perform risk stratification, and interpret model predictions through intuitive web-based interface with mobile accessibility"
                        },
                        {
                            title: "Statistical Methodology Framework",
                            description: "Implemented innovative survival analysis protocols and longitudinal modeling techniques, including novel time-varying coefficient models and multi-level hierarchical approaches specifically designed for complex time-series medical data with missing value imputation strategies"
                        },
                        {
                            title: "HIPAA-Compliant Data Infrastructure",
                            description: "Established robust, automated ETL pipeline architecture ensuring complete regulatory compliance while enabling continuous model updates, featuring encrypted data transmission, audit logging, and secure multi-institutional data sharing capabilities"
                        },
                        {
                            title: "Open-Source Software Development",
                            description: "Released three R packages and two Python libraries for cardiovascular risk modeling, downloaded over 15,000 times by global research community, contributing to reproducible research practices in medical data science"
                        },
                        {
                            title: "Educational Curriculum Integration",
                            description: "Developed case-based learning modules now incorporated into graduate biostatistics courses at both institutions, providing hands-on experience with real healthcare datasets for over 200 students annually"
                        },
                    ],
                    sub_description: "The collaboration methodology emphasized transparency and knowledge transfer throughout the engagement period. Weekly progress meetings included both technical demonstrations and clinical interpretation sessions, ensuring that our analytical findings aligned with medical best practices and regulatory requirements. We maintained detailed documentation of all methodological decisions and provided comprehensive training to lab personnel on model interpretation and maintenance procedures."
                },
                {
                    title: "Media Coverage and Community Engagement",
                    description: [
                        "The partnership garnered significant attention in both academic and popular media, with features in Stanford Medicine Magazine, Health Data Management, and a special segment on National Public Radio's Science Friday program highlighting the innovative approach to cardiovascular risk prediction. Our joint research team presented findings at community health fairs reaching over 5,000 Bay Area residents, demonstrating the university's commitment to translating research into public benefit. The collaboration was recognized with the American Statistical Association's Excellence in Statistical Collaboration Award and Stanford's Partnership for Innovation Prize, acknowledging its exemplary model of academic-industry cooperation.",
                        "Beyond immediate research outcomes, this partnership established a sustainable framework for ongoing collaboration that continues to generate new research opportunities and strengthen institutional relationships. The success led to the creation of a formal Collaborative Data Science Center, housed jointly between our department and Stanford Medicine, which now supports twelve active research projects and has become a regional hub for healthcare analytics innovation. This enduring impact demonstrates our department's leadership in fostering transformative partnerships that advance both scientific knowledge and practical applications in healthcare improvement."
                    ],
                },
            ],
            link: [
                {
                    title: "Download the Full Report here",
                    url: "https://www.facebook.com/lyhor.luy.9"
                }
            ]
        },
        {
            title: "Stanford Biomedical Data Science Initiative",
            duration: "March 2023 – February 2024",
            investigators: ["Dr. Sarah Chen (Stanford Medicine)", "Dr. Michael Rodriguez (Stanford Computer Science)"],
            partner: "Advanced Analytics Solutions Consortium",
            funding: "$3.5M joint initiative",
            students: "12 graduate students, 8 undergraduates",
            description:
                "Our Department of Biostatistics and Data Science successfully partnered with Stanford University's Biomedical Data Science Initiative in a groundbreaking collaboration that exemplifies the power of academic-industry partnerships in advancing healthcare research. This transformative project focused on developing next-generation cardiovascular disease prediction models using machine learning approaches applied to one of the largest longitudinal patient datasets in cardiovascular medicine, encompassing over 50,000 patient records with fifteen years of comprehensive clinical observations. The collaboration represented a strategic alignment between Stanford's world-renowned clinical expertise and our department's cutting-edge computational methodologies, creating an innovative research environment that has since become a model for similar partnerships across the university system.",
            lists: [
                {
                    title: "Research Innovation and Academic Excellence",
                    description: [
                        "This interdisciplinary collaboration broke new ground in translational data science by seamlessly integrating clinical domain expertise with advanced computational methods. Our joint research team established innovative protocols for handling sensitive healthcare data while maintaining the highest standards of statistical rigor and clinical relevance. The project served as a living laboratory for graduate students and postdoctoral researchers, providing hands-on experience with real-world healthcare challenges while contributing to peer-reviewed scientific knowledge. Through this partnership, our department strengthened its reputation as a leader in biomedical data science education and research, demonstrating our commitment to solving complex healthcare challenges through innovative analytical approaches.",
                        "The collaborative framework emphasized rigorous methodology development alongside practical clinical applications. Our interdisciplinary team of biostatisticians, computer scientists, and clinical researchers worked in integrated sprint cycles, ensuring that technological innovations remained grounded in medical best practices. Weekly joint seminars fostered knowledge exchange between academic disciplines, creating a rich learning environment that enhanced both undergraduate and graduate curricula. The project's success led to the establishment of a permanent joint seminar series and visiting scholar program, further strengthening institutional ties and research collaboration opportunities."
                    ]
                },
                {
                    title: "Key Project Achievements and Technical Innovation",
                    description: [
                        {
                            title: "Advanced Predictive Modeling Suite",
                            description: "Developed state-of-the-art ensemble machine learning models achieving 87% accuracy in predicting cardiovascular events within 5-year timeframes, utilizing Random Forest, Gradient Boosting, and novel deep learning architectures specifically optimized for longitudinal healthcare data analysis"
                        },
                        {
                            title: "Interactive Research Platform",
                            description: "Created comprehensive visualization and analysis platform featuring real-time dashboard capabilities, enabling clinical researchers to explore patient cohorts, perform risk stratification, and interpret model predictions through intuitive web-based interface with mobile accessibility"
                        },
                        {
                            title: "Statistical Methodology Framework",
                            description: "Implemented innovative survival analysis protocols and longitudinal modeling techniques, including novel time-varying coefficient models and multi-level hierarchical approaches specifically designed for complex time-series medical data with missing value imputation strategies"
                        },
                        {
                            title: "HIPAA-Compliant Data Infrastructure",
                            description: "Established robust, automated ETL pipeline architecture ensuring complete regulatory compliance while enabling continuous model updates, featuring encrypted data transmission, audit logging, and secure multi-institutional data sharing capabilities"
                        },
                        {
                            title: "Open-Source Software Development",
                            description: "Released three R packages and two Python libraries for cardiovascular risk modeling, downloaded over 15,000 times by global research community, contributing to reproducible research practices in medical data science"
                        },
                        {
                            title: "Educational Curriculum Integration",
                            description: "Developed case-based learning modules now incorporated into graduate biostatistics courses at both institutions, providing hands-on experience with real healthcare datasets for over 200 students annually"
                        },
                    ],
                    sub_description: "The collaboration methodology emphasized transparency and knowledge transfer throughout the engagement period. Weekly progress meetings included both technical demonstrations and clinical interpretation sessions, ensuring that our analytical findings aligned with medical best practices and regulatory requirements. We maintained detailed documentation of all methodological decisions and provided comprehensive training to lab personnel on model interpretation and maintenance procedures."
                },
                {
                    title: "Media Coverage and Community Engagement",
                    description: [
                        "The partnership garnered significant attention in both academic and popular media, with features in Stanford Medicine Magazine, Health Data Management, and a special segment on National Public Radio's Science Friday program highlighting the innovative approach to cardiovascular risk prediction. Our joint research team presented findings at community health fairs reaching over 5,000 Bay Area residents, demonstrating the university's commitment to translating research into public benefit. The collaboration was recognized with the American Statistical Association's Excellence in Statistical Collaboration Award and Stanford's Partnership for Innovation Prize, acknowledging its exemplary model of academic-industry cooperation.",
                        "Beyond immediate research outcomes, this partnership established a sustainable framework for ongoing collaboration that continues to generate new research opportunities and strengthen institutional relationships. The success led to the creation of a formal Collaborative Data Science Center, housed jointly between our department and Stanford Medicine, which now supports twelve active research projects and has become a regional hub for healthcare analytics innovation. This enduring impact demonstrates our department's leadership in fostering transformative partnerships that advance both scientific knowledge and practical applications in healthcare improvement."
                    ],
                },
            ],
            link: [
                {
                    title: "Download the Full Report here",
                    url: "https://www.facebook.com/lyhor.luy.9"
                }
            ]
        },
        {
            title: "Stanford Biomedical Data Science Initiative",
            duration: "March 2023 – February 2024",
            investigators: ["Dr. Sarah Chen (Stanford Medicine)", "Dr. Michael Rodriguez (Stanford Computer Science)"],
            partner: "Advanced Analytics Solutions Consortium",
            funding: "$3.5M joint initiative",
            students: "12 graduate students, 8 undergraduates",
            description:
                "Our Department of Biostatistics and Data Science successfully partnered with Stanford University's Biomedical Data Science Initiative in a groundbreaking collaboration that exemplifies the power of academic-industry partnerships in advancing healthcare research. This transformative project focused on developing next-generation cardiovascular disease prediction models using machine learning approaches applied to one of the largest longitudinal patient datasets in cardiovascular medicine, encompassing over 50,000 patient records with fifteen years of comprehensive clinical observations. The collaboration represented a strategic alignment between Stanford's world-renowned clinical expertise and our department's cutting-edge computational methodologies, creating an innovative research environment that has since become a model for similar partnerships across the university system.",
            lists: [
                {
                    title: "Research Innovation and Academic Excellence",
                    description: [
                        "This interdisciplinary collaboration broke new ground in translational data science by seamlessly integrating clinical domain expertise with advanced computational methods. Our joint research team established innovative protocols for handling sensitive healthcare data while maintaining the highest standards of statistical rigor and clinical relevance. The project served as a living laboratory for graduate students and postdoctoral researchers, providing hands-on experience with real-world healthcare challenges while contributing to peer-reviewed scientific knowledge. Through this partnership, our department strengthened its reputation as a leader in biomedical data science education and research, demonstrating our commitment to solving complex healthcare challenges through innovative analytical approaches.",
                        "The collaborative framework emphasized rigorous methodology development alongside practical clinical applications. Our interdisciplinary team of biostatisticians, computer scientists, and clinical researchers worked in integrated sprint cycles, ensuring that technological innovations remained grounded in medical best practices. Weekly joint seminars fostered knowledge exchange between academic disciplines, creating a rich learning environment that enhanced both undergraduate and graduate curricula. The project's success led to the establishment of a permanent joint seminar series and visiting scholar program, further strengthening institutional ties and research collaboration opportunities."
                    ]
                },
                {
                    title: "Key Project Achievements and Technical Innovation",
                    description: [
                        {
                            title: "Advanced Predictive Modeling Suite",
                            description: "Developed state-of-the-art ensemble machine learning models achieving 87% accuracy in predicting cardiovascular events within 5-year timeframes, utilizing Random Forest, Gradient Boosting, and novel deep learning architectures specifically optimized for longitudinal healthcare data analysis"
                        },
                        {
                            title: "Interactive Research Platform",
                            description: "Created comprehensive visualization and analysis platform featuring real-time dashboard capabilities, enabling clinical researchers to explore patient cohorts, perform risk stratification, and interpret model predictions through intuitive web-based interface with mobile accessibility"
                        },
                        {
                            title: "Statistical Methodology Framework",
                            description: "Implemented innovative survival analysis protocols and longitudinal modeling techniques, including novel time-varying coefficient models and multi-level hierarchical approaches specifically designed for complex time-series medical data with missing value imputation strategies"
                        },
                        {
                            title: "HIPAA-Compliant Data Infrastructure",
                            description: "Established robust, automated ETL pipeline architecture ensuring complete regulatory compliance while enabling continuous model updates, featuring encrypted data transmission, audit logging, and secure multi-institutional data sharing capabilities"
                        },
                        {
                            title: "Open-Source Software Development",
                            description: "Released three R packages and two Python libraries for cardiovascular risk modeling, downloaded over 15,000 times by global research community, contributing to reproducible research practices in medical data science"
                        },
                        {
                            title: "Educational Curriculum Integration",
                            description: "Developed case-based learning modules now incorporated into graduate biostatistics courses at both institutions, providing hands-on experience with real healthcare datasets for over 200 students annually"
                        },
                    ],
                    sub_description: "The collaboration methodology emphasized transparency and knowledge transfer throughout the engagement period. Weekly progress meetings included both technical demonstrations and clinical interpretation sessions, ensuring that our analytical findings aligned with medical best practices and regulatory requirements. We maintained detailed documentation of all methodological decisions and provided comprehensive training to lab personnel on model interpretation and maintenance procedures."
                },
                {
                    title: "Media Coverage and Community Engagement",
                    description: [
                        "The partnership garnered significant attention in both academic and popular media, with features in Stanford Medicine Magazine, Health Data Management, and a special segment on National Public Radio's Science Friday program highlighting the innovative approach to cardiovascular risk prediction. Our joint research team presented findings at community health fairs reaching over 5,000 Bay Area residents, demonstrating the university's commitment to translating research into public benefit. The collaboration was recognized with the American Statistical Association's Excellence in Statistical Collaboration Award and Stanford's Partnership for Innovation Prize, acknowledging its exemplary model of academic-industry cooperation.",
                        "Beyond immediate research outcomes, this partnership established a sustainable framework for ongoing collaboration that continues to generate new research opportunities and strengthen institutional relationships. The success led to the creation of a formal Collaborative Data Science Center, housed jointly between our department and Stanford Medicine, which now supports twelve active research projects and has become a regional hub for healthcare analytics innovation. This enduring impact demonstrates our department's leadership in fostering transformative partnerships that advance both scientific knowledge and practical applications in healthcare improvement."
                    ],
                },
            ],
            link: [
                {
                    title: "Download the Full Report here",
                    url: "https://www.facebook.com/lyhor.luy.9"
                }
            ]
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full">
            <h1 className="text-3xl font-playfair_display text-black font-semibold">
                Previous Collaborations
            </h1>
            <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
            <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />
            <p className="mt-6 text-lg text-[#767676] font-raleway">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            {collaborations.map((item: Collaboration, index: number) => {
                const bgColor = index % 2 === 0 ? "#C41E3A" : "#3A3B5C";

                return (
                <div key={index} className="my-3 border rounded-lg overflow-hidden">
                    <button
                    onClick={() => toggleAccordion(index)}
                    style={{ backgroundColor: bgColor }}
                    className="w-full flex justify-between items-center py-3 px-4 text-left font-semibold text-white hover:opacity-90 transition"
                    >
                    {item.title}
                    {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>

                    <AnimatePresence initial={false}>
                        {openIndex === index && (
                        <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                        <div className="p-4 text-gray-700 font-raleway">
                            <div className="text-[#2E2E2E]/80">
                                <p className="mb-2"><strong>Collaborative Partnership Duration:</strong> {item.duration}</p>
                                <p className="mb-2"><strong>Principal Investigators:</strong> {item.investigators.join(", ")}</p>
                                <p className="mb-2"><strong>Industry Partner:</strong> {item.partner}</p>
                                <p className="mb-2"><strong>Funding:</strong> {item.funding}</p>
                                <p className="mb-2"><strong>Student Involvement:</strong> {item.students}</p>
                            </div>
                            <p className="text-[#2E2E2E]/80">{item.description}</p>
                            {item.lists?.map((listItem, listIndex) => (
                            <div 
                                key={listIndex} 
                                className="mt-4 text-[#2E2E2E]/80"
                            >
                                <h3 className="text-lg font-bold mb-2">{listItem.title}:</h3>

                                {/* Case 1: description is an array of strings */}
                                {Array.isArray(listItem.description) &&
                                typeof listItem.description[0] === "string" &&
                                (listItem.description as string[]).map((desc, descIndex) => (
                                    <p key={descIndex} className="mb-2 text-base">{desc}</p>
                                ))}

                                {/* Case 2: description is an array of objects with title + description */}
                                {Array.isArray(listItem.description) &&
                                typeof listItem.description[0] === "object" &&
                                (listItem.description as { title: string; description: string }[]).map((descObj, descIndex) => (
                                    <ul key={descIndex} className="list-disc list-inside px-5 py-1">
                                        <li><span className="font-bold">{descObj.title}:</span> {descObj.description}</li>
                                    </ul>
                                ))}

                                {/* Case 3: description is a single string */}
                                {typeof listItem.description === "string" && (
                                <p className="mb-2">{listItem.description}</p>
                                )}

                                {listItem.sub_description && (
                                <p className="mt-2 text-gray-600">{listItem.sub_description}</p>
                                )}
                            </div>
                            ))}
                            {/* ✅ Links rendered outside lists loop */}
                            {item.link?.map((linkItem: LinkItem, linkIndex: number) => (
                                <div key={linkIndex} className="mt-4">
                                    <a
                                        href={linkItem.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#C41E3A] hover:underline"
                                    >
                                        {linkItem.title} <i className="fa-solid fa-arrow-up-right-from-square pl-2"></i>
                                    </a>
                                </div>
                            ))}
                        </div>
                        </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                );
            })}

        </section>
    )
}