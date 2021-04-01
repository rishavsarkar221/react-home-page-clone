import React from 'react';
import './index.css';
import Promises from './Promises';
import OurPromises from './OurPromises';
import CodeData from './CodeData';
import Code from './Code';

function App() {    
	return(
		<React.Fragment>
			<div className="header">
				<img className="logo" alt="React Logo" src="https://cubettech.com/wp-content/uploads/2018/09/1280px-React-icon.svg_.png" />
				<h1 className="heading">React</h1>
				<h3 className="content">A JavaScript library for building user interfaces</h3>
				<button className="headerButton">Get Started</button>
				<a className="headerLink" href="">Take the Tutorial <span className="arrow">=&gt;</span></a>
			</div>

			<div className="responsivePromises">
				{OurPromises.map(val => {
					return <Promises heading={val.heading} content={val.content} />;
				})}
			</div>

			<hr noshade />

			{CodeData.map(val => {
				return <Code codeHeading={val.codeHeading} codeContent={val.codeContent} codeImg={val.codeImg} />
			})}
		</React.Fragment>
	);
}

export default App;