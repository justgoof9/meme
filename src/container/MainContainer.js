import React, { Component } from 'react';


export default class MainContainer extends Component { 
    constructor() {
      super();
      
      this.state = {
        memes: {},
        num : 0,
      }
      this.APIURL = `http://serv-eu01.prashant.me:1336/api/meme/${this.state.num}`;
    }

    componentDidMount() {
        fetch(this.APIURL)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                const updatedMemes = this.state.memes;
                updatedMemes.push(data);
                this.setState({
                    memes : updatedMemes,
                })
                console.log(this.state.memes);
            }) 
    }

    nextPic = () => {
       if(this.state.num > this.state.id) {
           this.setState({
               num : 0
           })
       } else {
           this.setState({
               num : this.state.num + 1
           })
       }
    }
    
    render() {
        return(
            <div>
            <h1>{this.state.meme.title}</h1>
            <img key={ this.state.num } src={this.state.memes[this.state.num].image} />
            <button onClick={this.nextPic}>Next</button>
        </div>
        )
    }
}
