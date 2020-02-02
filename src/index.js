/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
*/
/*import React from 'react';
import ReactDOM from 'react-dom';
class Header extends React.Component {
renderInfo() {
return (
	//<Header title="Telegram" />,
<div className="header">
<div className="fa fa-more"></div>
<span className="title">Timeline</span>
<input
type="text"
className="searchInput"
placeholder="Search ..." />
<div className="fa fa-search searchIcon"></div>
</div>
)
}
}ReactDOM.renderInfo(<Header title="Telegram" />, document.getElementById('root'));
*/
import './App';
import  {renderInfo} from './render';
import state from './redux/state';


renderInfo(state);