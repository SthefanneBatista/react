import React from 'react';

class App extends React.Component {

  state = {
    nome : ''
  }

  modifyName = (event) => {
    this.setState({
      nome: event.target.value
    })
  }


  render(){
    return(
    <>
    <input type="text" value={this.state.nome} onChange={this.modifyName} />
      <h1>Hello {this.state.nome}</h1>
      </>
    )
  }
}

export default App;
