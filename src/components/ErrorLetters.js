const ErrorLetters = (props) => {
    const renderErrorLetters = () => {
        const errorLetters = props.userLetter.filter(eachLetter => !props.wordLetters.includes(eachLetter));
        return errorLetters.map( (eachLetter, index) => 
          <li key={index} className="letter">{eachLetter}</li>
        )
      }
    
    return <div className="error">
    <h2 className="title">Letras falladas:</h2>
    <ul className="letters">
      {renderErrorLetters()}
    </ul>
  </div>
}

export default ErrorLetters;