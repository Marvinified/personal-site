import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {firestore} from './firebase'

// firestore.collection("test").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });


ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
