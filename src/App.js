import React from 'react';
import SearchDialog from './search';
import RemoveAllDialog from './removeAll';
import ReloadDialog from './reload';
import ListDialog from './list';
import {store} from './reducer';

export default class MainDialog extends React.Component {

	constructor(props) {
	   super(props);

       //this.handleUsers = this.handleUsers.bind(this);

	   this.state = {
		   users: [],
	   };
	}

	componentDidMount() {
		store.subscribe(() => this.handleStoreUsers(store.getState()));
	}	

	handleStoreUsers(stores) {
		//this.handleUsers(stores.usersReducer);
		if (stores.usersAPI) {
		   this.handleUsers(stores.usersAPI);	
		}
		if (stores.usersFilter) {
			this.handleUsers(stores.usersFilter);	
		}	
		if (stores.usersRemove) {
			this.handleUsers(stores.usersRemove);	
		}			
	 }
 
	handleUsers(users) {
		this.setState({
			users: users,	
		});
	}

	render() {
	   return (
			<div>
				{/* <SearchDialog handleUsers={this.handleUsers} /> */}
				<SearchDialog />
				{/* <RemoveAllDialog handleUsers={this.handleUsers} /> */}
				<RemoveAllDialog />
				<ReloadDialog />
				{/* <ListDialog users={this.state.users} handleUsers={this.handleUsers} /> */} 
				<ListDialog users={this.state.users} />
			</div>
	   );    	
	}
 
 }
