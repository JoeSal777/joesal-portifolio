import React, {Component} from'react';



class Project extends Component{
    render(){
        return (
            <div className='projectArea'>
                <div className='projectWarapper'>
                    <img src={this.props.img} alt={this.props.imgAlt} className='img-fluid projectImg'></img>
                    
                    <div className='text-area'>
                        <h4>{this.props.heading}</h4>
                        <span className='subheading_portifolio'>{this.props.scope} ... {this.props.date}</span>
                        <hr/>
                        <span>{this.props.text}</span>
                        <a className='portifolio_button' href="#" >visit</a>
                    </div>
                    
                </div>
                
            </div>
            );
    }
}

export default Project;