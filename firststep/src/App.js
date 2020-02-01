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

  createComboBox = () => {
    const options = ["Fulano", "Cicrano"]
    const ComBoxOptions = options.map( option => <option>{option}</option>)

    return (
      <select>
        {ComBoxOptions}
      </select>
    )
  }

  componentDidMount(){
    console.log('Executed the componentDidMount')
  }


  render(){
    console.log('Executed the render')
    
    const MyComboBox = () => this.createComboBox()

    return(
    <>
    <input type="text" value={this.state.nome} onChange={this.modifyName} />
      <h1>Hello {this.props.nome} sua idade é {this.props.idade}</h1>
      <MyComboBox/>
    </>
    )
  }
}

export default App;
