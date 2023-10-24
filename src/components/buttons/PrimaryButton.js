import React from 'react'

const PrimaryButton = ({size, content, margin, method}) => {
    let style = ''
    if(size=='xs'){
        style = margin+' w-24 h-8 text-white rounded-md bg-secondary flex justify-center items-center transition-transform transform active:scale-95'
    }else if(size=='sm'){
        style = margin+' text-xs flex justify-center items-center  w-[100px] block h-10 bg-secondary hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-semibold rounded-[15px] px-4 py-2 transition-transform transform active:scale-95 mt-6'
    }else if(size=='md'){
        style = margin+' h-12 w-64 flex justify-center items-center  h-11 bg-secondary hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-semibold rounded-[15px] px-4 py-2 transition-transform transform active:scale-95'
    }else if(size=='lg'){
        style= margin+' h-12 w-3/5 flex justify-center items-center  h-11 bg-secondary hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-semibold rounded-[15px] px-4 py-2 transition-transform transform active:scale-9'
    }else if(size=='lg2'){
        style= margin+' h-12 w-3/5 flex justify-center items-center  h-11 bg-secondary hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-semibold rounded-[15px] px-4 py-2 transition-transform transform active:scale-9 opacity-50 pointer-events-none'
    }else if(size=='xl'){
        style= margin+' h-12 w-2/3 flex justify-center items-center  h-11 bg-secondary hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-semibold rounded-[15px] px-4 py-2 transition-transform transform active:scale-95'
    }else {
        style = margin+' flex justify-center items-center justify-centre w-[350px] block h-12 bg-secondary hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-semibold rounded-[15px] px-4 py-2 transition-transform transform active:scale-95 mt-6'
    }
    style = style+' cursor-pointer'
  return (
    <div className={style} onClick={method}>
        <div>{content}</div>
    </div>
  )
}

export default PrimaryButton
