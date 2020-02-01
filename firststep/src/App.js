import React from 'react';

function App ( props ) {


  const modifyName = event => {
    console.log(event.target.value)
  }

   const createComboBox = () => {
    const options = ["Fulano", "Cicrano"]
    const ComBoxOptions = options.map( option => <option>{option}</option>)

    return (
      <select>
        {ComBoxOptions}
      </select>
    )
  }


    const MyComboBox = () => createComboBox()

    return(
    <>
    <input className="text-centralized" type="text" value={nome} onChange={modifyName} />
      <h1>Hello {props.nome} sua idade é {props.idade}</h1>
      <MyComboBox/>
    </>
    )
  }


export default App;
