const Instructions = () => {
  return (
    <section className="instructions">
      <p>
        Es muy sencillo. Escribe una letra, si está se colocará en su lugar
        correspondiente en la solución. Si no está, aparecerá en la lista de
        letras falladas y se pintará una parte del pobre ahorcado.
      </p>
      <p>
        El objetivo es acertar la palabra antes de que se pinten todas las
        líneas del ahorcado así que tienes 13 intentos, ¡a por ello!
      </p>
      <p>
        <strong>Importante:</strong> las palabras con tildes en las vocales hay
        que escribirlas con tilde. Por ejemplo, si la palabra a acertar es
        "botón" tendrás que escribir dos veces la letra "o", una sin tilde ("o")
        y otra con ella ("ó").
      </p>
      <p>
        Por último, en el apartado de más opciones puedes añadir una palabra
        para que la acierte quien esté contigo.
      </p>
    </section>
  );
};

export default Instructions;
