import React from 'react';
import SearchBar from './SearchBar'
class App extends React.Component{

    
    render(){
        return(
            <div><SearchBar onFormSubmited ={(term) => console.log(term)}  /></div>
       ) 
    }
}
export default App;