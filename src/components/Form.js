const Form = (props) =>{

    const handleSubmit = (event) => {
        event.preventDefault();
      };

      const handleChangeLetter = (event) => {
        const regex = /^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ]?$/;
        if (event.target.value.match(regex) ){
          props.setLetters("lastLetter", event.target.value);
          if (event.target.value !== ''){
            const newLetter = [...props.userLetter, event.target.value];
            props.setLetters("userLetter", newLetter)
          }
        }
      };

    return <form className="form" onSubmit={handleSubmit}>
    <label className="title" htmlFor="last-letter">
      Escribe una letra:
    </label>
    <input
      autoComplete="off"
      className="form__input"
      maxLength="1"
      type="text"
      name="last-letter"
      id="last-letter"
      onChange={handleChangeLetter}
      value={props.lastLetter}
    />
  </form>
}

export default Form;