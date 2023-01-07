/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';

function Index() {
    return (
        <html>
            <head>

            </head>
            <body>
                Alexander Pirogov
            </body>
        </html>
    )
}

render(() => <Index />, document.getElementById('root') as HTMLElement);
