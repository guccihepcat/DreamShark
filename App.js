import React from 'react';
import ReactDOM from 'react-dom';

import Navigator from "./Navigator";


function App() {
    return (
        <div>
            <h1>DreamShark</h1>
            <h3>Welcome to DreamShark, your #1 destination for kickstarter projects!</h3>
            <button variant="btn btn-success" onClick={() => Navigator.push('/Navigator')}>Get Started</button>
        </div>
    );
}

export default App;
