function Button({ children, onClick, type }) {
  const base =
    "inline-block rounded px-auto py-3 text-sm font-semibold font-monts uppercase";

  const styles = {
    square:
      base + " w-10/12 bg-blue-700 text-stone-300 sm:mr-10 hover:bg-blue-600",
    reg: base + " w-10/12 border-[1.5px] text-stone-300 sm:mr-10",
    square2:
      base + " w-4/12 bg-blue-700 text-stone-300 sm:mr-10 hover:bg-blue-600",
    squareSignWhite:
      "inline-block  lg:px-14  px-8 py-3 text-sm font-semibold font-monts uppercase w-10/12 bg-gray-300 hover:bg-gray-400 border border-gray-400 text-stone-800 sm:mr-10 rounded-lg",
    squareSignWhiteLight:
      "inline-block  lg:px-14  px-8 py-3  text-sm font-semibold font-monts uppercase w-10/12 bg-gray-500 hover:bg-gray-400 text-stone-800 sm:mr-10 rounded-lg",
    squareSignBlack:
      "inline-block lg:px-14  px-8 py-3  text-sm font-semibold font-monts uppercase w-10/12 bg-gray-300 hover:bg-gray-400 text-stone-800 border border-gray-400  rounded-lg",
    squareSignBlackLight:
      "inline-block lg:px-14  px-8 py-3  text-sm font-semibold font-monts uppercase w-10/12 bg-gray-500 hover:bg-gray-400 text-stone-800  rounded-lg",
    squareLight: base + " w-10/12 bg-blue-500 text-stone-300 sm:mr-10",
    squareDark: base + " w-10/12 bg-blue-900 text-stone-300 sm:mr-10",
    squareStart:
      base +
      " w-10/12 bg-blue-700 text-stone-300 md:w-6/12 lg:w-3/12 border border-gray-400 hover:bg-blue-600",
    squareWhite:
      base +
      " w-10/12 bg-gray-200 text-stone-800 md:w-6/12 lg:w-3/12 border border border-gray-700 hover:bg-gray-300",
    squareBlue: base + " w-8/12 bg-blue-700 text-stone-300 mx-[20%] my-4",
    squareFund: base + " w-full bg-blue-700 text-stone-300 hover:bg-blue-600",
    squareWhiteFund:
      base +
      " w-full bg-stone-200 text-stone-700 mt-3 border border-blue-400 hover:bg-stone-300",
    exploreMore:
      base +
      " lg:w-[44%] w-[76%] bg-blue-700 text-stone-300 lg:mx-[28%] mx-[12%] mt-8  hover:bg-blue-600",
  };
  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
