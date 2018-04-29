// import React,{Component} from 'react';
// import ReactDOM from 'react-dom';

class SearchHome extends Component{
    
constructor(props){
    super(props);
}

render(){
    return(
        <div>
        <div className="input-group">
            <input type="text" className="search-query form-control form-control-lg" placeholder="Search" />
                <span className="input-group-btn">
                    <button className="btn btn-default btn-lg" type="button">
                        <i className="fa fa-search"></i>
                    </button>
                </span>
            </div>
        </div>
    );
}

}

export default ReactDOM.render(<SearchHome/>,document.getElementById('search_home'));