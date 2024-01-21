/**
 * react-notion view
 */

import React, { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion";
import axios from "axios";
import { useTitle } from "./hooks/useTitle";
import {Link, useParams} from "react-router-dom";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting

function Content(props) {
    const [view, setView] = useState({});
    const [title, setTitle] = useTitle("Lunaut Blog");
    const { notionPageId } = useParams();

    useEffect(() => {
        axios.get(`https://notion-api.splitbee.io/v1/page/
        ${notionPageId ? notionPageId : "4d15d6791b9c4dc2b46d511012f4f28f"}`)
            .then((result) => {
                setView(result.data);
            })
    }, [notionPageId]);

    useEffect(() => {
        setTitle(view[Object.keys(view)[0]]?.value.properties.title[0])
    }, [view])

    return (
        <div style={{width: "80%", margin: "auto"}}>
            {Object.keys(view).length ?
                (<NotionRenderer
                    blockMap={view}
                    fullPage
                    hideHeader
                    customBlockComponents={{
                        page: ({ blockValue, renderComponent }) => (
                            <Link to={`intro/${blockValue.id}`}>
                                {blockValue.properties.title[0]}
                            </Link>
                        )
                    }}
                />)
                : (
                    "불러오는 중입니다.."
                )
            }
        </div>
    );
}

export default Content;