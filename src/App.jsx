import React from 'react';
import './App.css';

import Header from 'components/header';
import Footer from 'components/footer';
import DownloadApp from 'components/download_app';
import FooterDetails from 'components/footer_details';
import Partner from 'components/partners';

import { authActions } from 'actions/detail';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			details: {}
		}
	}

	componentDidMount() {
		authActions.getDetailsData(data=>{
			this.setState({ details: data })
		});
	}

	render() {

		let { details } = this.state;

		return (
			<div>
				<Header details={details}/>
				<Footer details={details}/>
				<DownloadApp details={details}/>
				<FooterDetails details={details}/>
				<Partner details={details}/>
			</div>
		);
	}
}

export default App;
