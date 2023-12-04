import React from 'react'

export default function Success() {
  return (
    <div className='flex flex-col justify-around items-center'>
        <h1 className='text-8xl font-bold pb-5'>Catapulting Your Success</h1>
        <div className="grid auto-rows-[192px] grid-cols-3 gap-4 ml-5 w-[60vw] mt-5">
            {[...Array(7)].map((_, i) => (
                <div
                key={i}
                className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${
                    i === 3 || i === 6 ? "col-span-2" : ""
                }`}
                ></div>
            ))}
        </div>

    </div>
  )
}
