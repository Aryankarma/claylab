type HeadingProps = {
    text: string;
};

const Heading = ({ text }: HeadingProps) => {
    return (
        <h2 className="text-3xl md:text-4xl font-semibold underline underline-offset-4 mb-4">
            {text}
        </h2>
    );
};

export default Heading;
