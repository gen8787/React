import React, {useState} from  'react'; // <~~ Add Imports

const TabComponent = (props) => {

    const allContent = [
        "Tab 1 content is showing here.",
        "Tab 2 content is showing here.",
        "Tab 3 content is showing here.",
        "Tab 4!"
        ];

    // const {allContent} = props;
    const [content, setContent] = useState("");

    const onClickHandler = (e, idx) => {
        const thisContent = allContent[idx];
        setContent(thisContent);
    }

    return (
        <>
        {
            allContent.map((content, idx) =>
            
                <button key={idx} onClick={ (e) => onClickHandler(e, idx) }>
                    Tab {idx + 1}
                </button>
            )
        }
        <p>{content}</p>
        </>
    );
}

export default TabComponent; // <~~ export component