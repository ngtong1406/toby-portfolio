import PreciseAge from "./PreciseAge";

const Footer = () => {
    return (
        <footer className="w-full flex flex-col gap-3 mb-10 items-center justify-center">
            <hr className="section-break" />
            <div>© 2026 Toby Tran. All rights reserved.</div>
            <PreciseAge />
        </footer>
    );
};

export default Footer;
