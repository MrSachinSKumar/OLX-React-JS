import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from './Firebase/Config'
import Context, {FirebaseContext} from './Store/Context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<FirebaseContext.Provider value={{firebase}}>
    <Context>
        <App />
    </Context>
</FirebaseContext.Provider>
 );