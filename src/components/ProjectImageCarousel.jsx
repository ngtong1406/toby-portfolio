import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectImageCarousel = ({ images = [], title = "" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (images.length <= 1) return;
            if (e.key === "ArrowLeft") {
                setCurrentIndex((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1,
                );
            } else if (e.key === "ArrowRight") {
                setCurrentIndex((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1,
                );
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [images.length]);

    if (!images || images.length === 0) return null;

    const handlePrev = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full h-full overflow-hidden bg-primary select-none">
            <div
                className="flex h-full w-full transition-transform duration-300 ease-out transform-gpu backface-hidden"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((src, idx) => (
                    <div
                        key={idx}
                        className="w-full h-full shrink-0 relative bg-black"
                    >
                        <img
                            src={src}
                            alt={title ? `${title} screenshot ${idx + 1}` : ""}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>

            {images.length > 1 && (
                <>
                    {/* img number badge*/}
                    <div className="absolute top-4 right-4 px-2 py-0.5 rounded-md bg-primary/80 backdrop-blur-md border border-border-main text-secondary pointer-events-none">
                        {currentIndex + 1}/{images.length}
                    </div>

                    {/* prev */}
                    <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Previous image"
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-md bg-primary/80 hover:bg-border-sub border border-border-main text-secondary hover:text-white backdrop-blur-md transition-all hover:cursor-pointer"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>

                    {/* next */}
                    <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next image"
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-md bg-primary/80 hover:bg-border-sub border border-border-main text-secondary hover:text-white backdrop-blur-md transition-all hover:cursor-pointer"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* dot */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/80 backdrop-blur-md border border-border-main">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex(idx);
                                }}
                                aria-label={`Jump to image ${idx + 1}`}
                                className={`h-1.5 rounded-full transition-all duration-300 hover:cursor-pointer ${
                                    idx === currentIndex
                                        ? "w-4 bg-white"
                                        : "w-1.5 bg-date-gray hover:bg-secondary"
                                }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ProjectImageCarousel;
