import React, { Component } from 'react';
import './App.css';

export default class Artist extends Component {
  state = {
    artistData: null,
  }



  componentDidMount() {


    let artist = 'eminem'
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artist}`, {
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "09d597bf4emshb05af7aa47cbdfdp1f8fe5jsnc7ddf187322b"
      }
    })
      .then(results => results.json())
      .then(json => this.setState({ artistData: json }))

  }

  render() {
    console.log(29, this.state.artistData)

    return (
      <div>
        <div>sup {this.props.name}</div>
        {this.state.artistData != null ?
          <div>

            <ul>
              {this.state.artistData.data.map(element =>

                <li>{element.title}</li>
              )}
            </ul>
          </div>
          :
          <div><div className="lds-dual-ring"></div></div>
        }
      </div>
    );

  }
}
