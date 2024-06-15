import {createRoot} from 'react-dom/client';
import './index.css'
import {StrictMode} from "react";
import App from './App'

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<StrictMode>
        <App/>
    </StrictMode>);
} else {
    console.error("Container element not found!");
}