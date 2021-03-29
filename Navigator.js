import React from 'react';
import ReactDOM from 'react-dom';


function Navigator() {
    const Create = () => {
        console.log("Create");
    };
    const Contribute = () => {
        console.log("Contribute")
    };

    return (
        <div>
            <h1>DreamShark</h1>
            <button onClick={Create}>Create</button>
            <button onClick={Contribute}>Consstribute</button>
        </div>
    );
}

export default Navigator;
