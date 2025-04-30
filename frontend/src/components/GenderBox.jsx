const GenderCheckbox = () => {
  return (
    <div className="flex mt-2  justify-around">
      <h1 className="mt-2 relative -left-4 ">Gender:</h1>
      <div className="form-control">
        <label className={`label  gap-2 cursor-pointer`}>
          <span className="label-text font-[500] text-secondary">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-secondary border-slate-900"
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text font-[500] text-secondary">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 checkbox-secondary"
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
