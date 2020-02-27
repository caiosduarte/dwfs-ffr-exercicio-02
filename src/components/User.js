import React from 'react';
export const User = (props) => (
    <>
        <h1>Usuário {props.match.params.name}</h1>
    </>
);
