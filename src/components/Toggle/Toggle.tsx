import React, {FC, useState} from "react";
import {useToggle} from "../../customHooks/useToggle";

const Toggle: FC = () => {
    const [trigger, setTrigger] = useState(0);
    let toggleValue = useToggle(trigger);
    return (<div>
            <h3>1. Toggle asigmnt</h3>
            <button
                onClick={() => {
                    setTrigger(Math.random());
                }}
            >
                Toggle: value - {`${toggleValue}`}
            </button>
        </div>

    );
};

export default Toggle;
