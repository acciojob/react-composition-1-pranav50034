import React, {useState} from "react";

const Tabs = ({tabProps}) => {
    let [content, setContent] = useState('')
    return (
       <div>
          <ul>
             <li onClick={() => setContent(tabProps[0].content)}>
                {tabProps[0].title}: {tabProps[0].content}
             </li>
             <li onClick={() => setContent(tabProps[1].content)}>
                {tabProps[1].title}: {tabProps[1].content}
             </li>
             <li onClick={() => setContent(tabProps[2].content)}>
                {tabProps[2].title}: {tabProps[2].content}
             </li>
          </ul>
          <p>{content}</p>
       </div>
    );
}

export default Tabs