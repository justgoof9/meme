import React, { Component } from 'react';


export default class MainContainer extends Component { 
    constructor() {
      super();
      
      this.state = {
        meme: {},
        num : 1,
      }
      this.APIURL = `https://serv-eu01.prashant.me:5555/api/`;
    }

    componentDidMount() {
            this.fetchMeme();
      }
    
      fetchMeme = () => {
        
        fetch(this.APIURL+"meme/"+this.state.num)
          .then(resp => resp.json())
          .then(data => {
            this.setState({
              meme: data
            });
          });
      };

      fetchRandomMeme = () => {

        fetch(this.APIURL+"random/")
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            meme: data
          });
        });
      }

      randomMeme = () => {
        this.setState({num : this.state.meme.id
        },this.fetchRandomMeme);
        console.log(this.state.meme);

      }

    nextMeme = () => {
        if(this.state.meme.id + 1 > this.state.meme.totalMemes  ) {
            this.setState({
                num : 1
            }, this.fetchMeme);
        }else {
        this.setState({
            num:  this.state.num + 1
          }, this.fetchMeme);
        }
        console.log(this.state.meme);
    }

    lastMeme = () => {
        if(this.state.num - 1 < 1  ) {
            this.setState({
                num : this.state.meme.totalMemes
            }, this.fetchMeme);
        }else {
        this.setState({
            num:  this.state.num - 1
          }, this.fetchMeme);
        }
        console.log(this.state.meme);
    }
    
    render() {
        return(
            <div>
            <h1>{this.state.meme.title}</h1>
            <img key={ this.state.num } src={this.state.meme.encodedurl} />
            <button onClick={this.lastMeme}>Back</button>
            <button onClick={this.nextMeme}>Next</button>
            <button onClick={this.randomMeme}>Random</button>
        </div>
        )
    }
}
