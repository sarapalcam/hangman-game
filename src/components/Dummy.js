const Dummy = (props) => {
	const calculateErorNumber = () => {
		const errorLetters = props.userLetter.filter(
			(eachLetter) => !props.wordLetters.includes(eachLetter)
		);
		if (errorLetters.length <= 13) {
			return errorLetters.length;
		}
	};

	  const handleClickRestart = () => {
	    props.setLetters('lastLetter', '');
	    props.setLetters('userLetter',[]);
		props.restartGame();
	  }

	const endGame = () => {
		const correctLetters = props.wordLetters.filter((eachLetter) =>
			props.userLetter.includes(eachLetter)
		);
		const errorLetters = props.userLetter.filter(
			(eachLetter) => !props.wordLetters.includes(eachLetter)
		);
		if (correctLetters.length === props.wordLetters.length) {
			return (
				<section className="end">
					<p className="end__message">¡Has ganado!</p>
					<button className="end__btn" onClick={handleClickRestart}>Reiniciar juego</button>
				</section>
			);
		}
		if (errorLetters.length === 13) {
			return (
				<section className="end">
					<p className="end__message">{`¡Has perdido! La solución era ${props.word}`}</p>
					<button className="end__btn" onClick={handleClickRestart}>Reiniciar juego</button>
				</section>
			);
		}
	};

	//   Los botones de endGame van con onClick={restartGame}

	return (
		<div className="end__container">
			<section className={`dummy error-${calculateErorNumber()}`}>
				<span className="error-13 eye"></span>
				<span className="error-12 eye"></span>
				<span className="error-11 line"></span>
				<span className="error-10 line"></span>
				<span className="error-9 line"></span>
				<span className="error-8 line"></span>
				<span className="error-7 line"></span>
				<span className="error-6 head"></span>
				<span className="error-5 line"></span>
				<span className="error-4 line"></span>
				<span className="error-3 line"></span>
				<span className="error-2 line"></span>
				<span className="error-1 line"></span>
			</section>
			{endGame()}
		</div>
	);
};

export default Dummy;
