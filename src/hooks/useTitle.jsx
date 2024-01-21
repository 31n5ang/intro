import { useEffect, useState } from "react";


export const useTitle = (initTitle) => {
    const [title, setTitle] = useState(initTitle);

    useEffect(() => {
        const documentTitle = document.querySelector("title");
        documentTitle.innerText = title;
    }, [title]);

    return [title, setTitle];
}