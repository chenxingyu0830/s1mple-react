import React, { useState } from "react";
import Dialog from "./dialog";

const DialogExample: React.FunctionComponent = () => {
    const [x, setX] = useState(false);
    return (
        <div>
            <button onClick={_ => setX(!x)}>click</button>
            <Dialog visible={x} children={"xxx"} />
        </div>
    )
}

export default DialogExample;