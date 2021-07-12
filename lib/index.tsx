import React from 'react'
import ReactDom from 'react-dom'
import Icon from "./icon"

const fn: React.MouseEventHandler = (e) => {
    console.log(e.target);
}

ReactDom.render(<div>
    <Icon
        name="weChat"
        // className="weChat"
        onClick={fn}
        onMouseMove={_ => console.log("move")}
        onMouseLeave={_ => console.log("leave")}
    />
</div>, document.querySelector('#root'));