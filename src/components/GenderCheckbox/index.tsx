const index = () => {
  return (
    <div className="flex">
      <div className="flex items-center">
        <label className="label gap-2 cursor-pointer"><span className="label-text">Male</span></label>
        <input type="checkbox" className="checkbox border-slate-900"/>
      </div>
      
      <div className="flex items-center">
        <label className="label gap-2 cursor-pointer"><span className="label-text">Female</span></label>
        <input type="checkbox" className="checkbox border-slate-900"/>
      </div>
    </div>
  )
}

export default index