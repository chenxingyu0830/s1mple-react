import React from "react";
import { Icon } from "../index";
import { scopedClassMaker } from "../helpers/index";

import "./dialog.scss";

interface DialogProps {
    visible: boolean;
}

const scopedClass = scopedClassMaker("simple-dialog");
const sc = scopedClass;

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
    return (
        props.visible
            ? (
                <>
                    <div className={sc("mask")}>

                    </div>
                    <div className={sc()}>
                        <div className={sc("close")}>
                            <Icon name="close" />
                        </div>
                        <header className={sc("header")}>
                            提示
                        </header>
                        <main className={sc("main")}>{props.children}</main>
                        <footer className={sc("footer")}>
                            <button>ok</button>
                            <button>cencel</button>
                        </footer>
                    </div>
                </>
            )
            : null
    )
}

export default Dialog;