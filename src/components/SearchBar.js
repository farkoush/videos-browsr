import React from 'react';
import { TextField  } from '@material-ui/core';
// import FormControl from '@material-ui/core/FormControl';

class SearchBar extends React.Component{
    state = { term : ''}
    onInputChange = e => {
        this.setState({term: e.target.value})
    };
    onFormSubmit = e => {
        e.preventDefault();
        this.props.onFormSubmited(this.state.term);
        //TODO : Make sure we call
        //callback from parent component
        //this.props.onFormSubmited(this.state.term);
    };
    render(){
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
                <TextField
                id="filled-basic"
                // className={classes.textField}
                label="SearchBar"
                margin="normal"
                variant="filled"
                value = {this.state.term}
                onChange = {this.onInputChange}
                />
            </form>
            </div>
        )
    }
}
export default SearchBar;