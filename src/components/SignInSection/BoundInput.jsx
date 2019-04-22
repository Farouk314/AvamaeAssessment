import React from "react";

export const BoundInput = ({id, onInputChange}) => (
    <input
        id={id}
        type="text"
        className="input-box"
        onChange={onInputChange}
    />
);