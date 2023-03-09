import { useEffect } from "react";

const Document = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return null;
};

export default Document;
