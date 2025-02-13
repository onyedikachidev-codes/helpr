function Progress({ val = 60 }) {
  return (
    <div className="flex items-center gap-2">
      <progress
        max={100}
        value={val}
        className="progress-bar h-[10px] w-[88%] md:w-[95%] xl:w-[98%] rounded-full bg-[#252525] text-blue-700"
      />
    </div>
  );
}

export default Progress;
