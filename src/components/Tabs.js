import React, {useState} from "react";

const Tabs = ({tabProps}) => {
    let [content, setContent] = useState('')
    return (
       <div>
           <ul>
              <li onClick={() => setContent(tabProps[0].content)}>
                 {tabProps[0].title}
              </li>
              <li onClick={() => setContent(tabProps[1].content)}>
                 {tabProps[1].title}
              </li>
              <li onClick={() => setContent(tabProps[2].content)}>
                 {tabProps[2].title}
              </li>
           </ul>
           <p>{content}</p>
       </div>

    );
}

export default Tabs