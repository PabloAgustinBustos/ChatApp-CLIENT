import React from 'react'

type Props = {
  selectedGender: string
  onChange: (gender: "male" | "female") => void
}

const index: React.FC<Props> = ({ selectedGender, onChange }) => {
  return (
    <div className="flex">
      <div className="flex items-center">
        <label className="label gap-2 cursor-pointer"><span className="label-text">Male</span></label>
        <input type="checkbox" className="checkbox border-slate-900" checked={selectedGender === "male"} onChange={() => onChange("male")}/>
      </div>
      
      <div className="flex items-center">
        <label className="label gap-2 cursor-pointer"><span className="label-text">Female</span></label>
        <input type="checkbox" className="checkbox border-slate-900" checked={selectedGender === "female"} onChange={() => onChange("female")}/>
      </div>
    </div>
  )
}

export default index