import React from "react";
import Icon from "../../icon/icon";

const IconDemo1: React.FunctionComponent = () => {
    return (
        <div className="icon-demo-1">
            <Icon name="wechat" />
            <Icon name="wechat" color="green" />
            <Icon name="wechat" color="green" style={{ fontSize: "2em" }} />
        </div>
    )
}

export default IconDemo1;