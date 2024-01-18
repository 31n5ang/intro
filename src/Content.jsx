/**
 * react-notion view
 */

import React, { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion";
import axios from "axios";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting

function Content(props) {
    const [view, setView] = useState({});

    useEffect(() => {
        const NOTION_PAGE_ID = "23-2-23b504e42eb14854b0d383bf53d16e05";
        axios.get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
            .then((result) => {
                setView(result.data);
            })
    }, []);

    return (
        <div>
            <NotionRenderer
                blockMap={view}
                fullPage={true}
            />
        </div>
    );
}

export default Content;