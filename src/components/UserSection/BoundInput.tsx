import React from "react";

interface Props {
    id: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BoundInput = ({id, onInputChange}: Props) => (
    <input
        id={id}
        type="text"
        className="input-box"
        onChange={onInputChange}
    />
);