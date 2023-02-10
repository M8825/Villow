import React from 'react';


const NewAccountPasswordErrors = ({ valid, color, text }) => {
    return (
        valid ?
        (
            <>
            <svg
                viewBox="0 0 32 32"
                aria-hidden="true"
                focusable="false"
                role="img"
                width={12}
                height={12}
            >
                <title>Checkmark</title>
                <path
                    fill= "green"
                    stroke="none"
                    d="M29.41 6.57a2 2 0 00-2.83 0L11.36 21.32l-5.95-5.77a2 2 0 00-2.83 0 1.9 1.9 0 000 2.74L10 25.43a2 2 0 002.83 0L29.41 9.31a1.9 1.9 0 000-2.74z"
                ></path>
            </svg>
            <p style={{ color: "gray"}}>{text}</p>
            </>
        ) : (
            <>
            <svg
                viewBox="0 0 32 32"
                aria-hidden="true"
                focusable="false"
                role="img"
                width={12}
                height={12}
            >
                <path
                    fill={color}
                    stroke="none"
                    d="M16 2a14 14 0 1014 14A14 14 0 0016 2zm5.71 18.29a1 1 0 010 1.42 1 1 0 01-1.42 0L16 17.41l-4.29 4.3a1 1 0 01-1.42 0 1 1 0 010-1.42l4.3-4.29-4.3-4.29a1 1 0 011.42-1.42l4.29 4.3 4.29-4.3a1 1 0 011.42 1.42L17.41 16z"
                ></path>
            </svg>
            <p style={{ color: color}}>{text}</p>
            </>
        )
    )
};

export default NewAccountPasswordErrors;
