import React from 'react';
import { TextField, FormControl  } from '@material-ui/core';
class SearchBar extends React.Component{
    state = {
        term : ''
    }
    onInputChange = (e) => {this.setState({term:e.target.value})}
    onFormSubmit = (e) => {
        e.preventDefault();
        //TODO : Make sure we call
        //callback from parent component
    };
    render(){
        return(
            <div>
            <FormControl onSubmit={this.onFormSubmit}>
                <TextField
                id="filled-basic"
                // className={classes.textField}
                label="SearchBar"
                margin="normal"
                variant="filled"
                value = {this.state.term}
                onChange = {this.onInputChange}
                />
            </FormControl>
            </div>
        )
    }
}
export default SearchBar;