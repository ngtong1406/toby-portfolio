import pridhamHallPhoto from "../assets/photos/pridham_hall.jpg";
import EducationCard from "../components/EducationCard";

const EducationSection = () => {
    return (
        <div className="section-container grid grid-cols-7 gap-17">
            <div className="w-full col-span-3">
                <img
                    className="w-full h-auto object-cover"
                    src={pridhamHallPhoto}
                    alt=""
                />
            </div>
            <div className="col-span-4 flex flex-col">
                <div className="h-1/3 flex flex-col items-start">
                    <div className="text-2xl">
                        GRADUATION CEREMONY // FEB. 2026
                    </div>
                    <a
                        href="https://adelaide.edu.au/"
                        target="_blank"
                        className="font-serif text-white font-bold text-9xl hover:underline"
                    >
                        @UniSA
                    </a>
                </div>
                <div className="h-1/3">
                    <h1 className="section-heading">education-in-aus</h1>
                    <hr className="section-break" />
                    <EducationCard />
                </div>
            </div>
        </div>
    );
};

export default EducationSection;
