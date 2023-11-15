
const SectionTitle = ({Heading,SubHeading}) => {
    return (
        <div className="text-center mt-10 mb-16">
            <p className="text-[#D99904] mb-6 text-lg">---{SubHeading}---</p>
            <h1 className="uppercase text-4xl border-y-4 py-2 inline px-5">{Heading}</h1>
        </div>
    );
};

export default SectionTitle;