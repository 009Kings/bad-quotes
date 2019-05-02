import axios from 'axios';
import Quote from './Quote';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    quote: '',
    headerTitle: 'Quotes'
  }

  kanyeUrl = 'https://api.kanye.rest/'
  dadUrl = 'https://icanhazdadjoke.com/'

  callApi = (url, headers, headerTitle) => {
    let config = {
      headers
    }

    axios.get(url, config)
    .then(response=>{
      this.setState({
        quote: url === this.dadUrl ? response.data.joke : response.data.quote,
        headerTitle
      })
    })
    .catch(err=>console.log('Whoopsie!', err))
  }

  // callKanye = () => {
  //   const URL = 'https://api.kanye.rest/'
  
  //   axios.get(URL)
  //   .then(response=>{
  //     // set quote state
  //     this.setState({ 
  //       quote: response.data.quote,
  //       headerTitle: 'Kanye: the Renaissance Man' 
  //     })
  //   })
  //   .catch(err=>console.log('Yikes', err))
  // }

  // callDad = () => {
  //   // Make a base URL
  //   const URL = 'https://icanhazdadjoke.com/'
  //   // Make a header
  //   let config = {
  //     headers: {'Accept': 'application/json'}
  //   }
  //   // Make the call
  //   axios.get(URL, config)
  //   .then(response=>{
  //     this.setState({
  //       quote: response.data.joke,
  //       headerTitle: 'Puns are the Highest form of humour'
  //     })
  //   })
  //   .catch(err=>console.log('Oh noes', err))
  // }

  // componentDidMount() {
  //   this.callDad()
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>{this.state.headerTitle}</h2>
          <Quote 
            quote={this.state.quote} 
            callKanye={()=>{this.callApi(this.kanyeUrl, {}, "Kanye: the Renaissance Man")}}
            callDad={()=>{this.callApi(this.dadUrl, {'Accept': "application/json"}, "Sup Dad")}} />
            {/* callKanye={this.callKanye}
            callDad={this.callDad} */}
        </header>
      </div>
    );
  }
}

export default App;
