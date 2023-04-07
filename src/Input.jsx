const Input = (props) => {
  return (
    <div className="mt-12">
      <input
        id="main"
        type="text"
        placeholder="Enter Your Task"
        onChange={props.input}
        className={`${
          props.dark ? "bg-slate-700" : "bg-[#edf2f7]"
        } text-lg font-semibold text-slate-900  w-[16rem] md:w-[32rem] h-11 pl-5 rounded-lg`}
      />

      <span
        className={`${
          props.dark ? "bg-slate-700" : "bg-cyan-800 "
        } text-lg font-semibold text-white bg-cyan-800 ml-2 px-5 py-2 md:px-10 rounded-lg cursor-pointer`}
        onClick={props.push}
      >
        Add
      </span>
    </div>
  );
};
export default Input;
