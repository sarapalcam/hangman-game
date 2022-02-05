const SolutionLetters = (props) => {
    const renderSolutionLetters = () => {
        let letter = '';
        return props.wordLetters.map( (eachLetter, index) => {
          if (props.userLetter.includes(eachLetter)) {
            return <li key={index} className="letter">{eachLetter}</li>
          } else {
            return <li key={index} className="letter">{letter}</li>
          }
        } )
      }

    return <div className="solution">
    <h2 className="title">Solución:</h2>
    <ul className="letters">
      {renderSolutionLetters()}
    </ul>
  </div>
}

export default SolutionLetters;