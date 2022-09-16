import { useState } from 'react'
import genString from '~/utils/genString.js'

const Page = ({prefixes}) => {
  const [pfs, setPfs] = useState(prefixes)
  function addPrefix() {
    const p = genString(3);
    const plan = genString(12); 
    let newP = { display: p, planName: plan }
    setPfs([...pfs, newP])
  }
  return (
    <div className="grid grid-cols-3 p-12">
      <div className="col-span-1 row-span-1 flex justify-center">
        <button className="rounded bg-slate-100 hover:bg-slate-300 px-6 h-6" onClick={addPrefix}>
          Add Prefix
        </button>
      </div>
      <div className="col-span-2 row-span-auto">
        <div className="grid grid-cols-3 justify-between gap-12 pr-48">
        { 
          pfs.map((prefix) => (
            <div key={JSON.stringify(prefix)} className="col-span-1 row-span-1 flex-initial py-4 text-right bg-sky-300 rounded min-w-max w-36 p-12 hover:shadow-xl">
              <p className="text-lg">{prefix.display}</p>
              <p className="text-sm">{prefix.planName}</p>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Page
