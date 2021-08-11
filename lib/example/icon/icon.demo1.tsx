import React from "react";
import Icon from "../../icon/icon";

const IconDemo1: React.FunctionComponent = () => {
    return (
        <>
            <Icon name="wechat" />
            <Icon name="wechat" color="green" />
            <Icon name="wechat" color="green" style={{ fontSize: "2em" }} />
        </>
    )
}

export default IconDemo1;