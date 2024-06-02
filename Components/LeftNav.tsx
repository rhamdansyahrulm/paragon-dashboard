import React, { useState } from 'react'
import { RxDashboard } from "react-icons/rx";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

function DropDownPage({ title, listPage }: { title: string, listPage: Array<{ value: string, link: string }> }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
        <div className='flex flex-row pl-5 pt-3 cursor-pointer' onClick={handleToggle}>
          <RxDashboard className='text-[18px] mt-1 text-slate-100' />
          <h1 className='text-[18px] pl-2 font-bold text-slate-100 mb-3'>{title}</h1>
          {isOpen ? (
            <FaAngleUp className='text-[12px] mt-3 text-slate-100 ml-[5vw]' />
          ) : (
            <FaAngleDown className='text-[12px] mt-3 text-slate-100 ml-[5vw]' />
          )}
        </div>
        {isOpen && (
          <div>
            {listPage.map((page, index) => (
              <div
                key={index}
                className='w-[20vw] h-[6vh] cursor-pointer pl-[3vw] flex items-center hover:bg-white hover:bg-opacity-5 hover:font-bold transition-all duration-100'
              > <a href={page.link}>
                <h2 className='text-[16px] font-bold text-slate-100'>{page.value}</h2>
                </a>
              </div>
            ))}
          </div>
        )}
      </>
    );
  }

function LeftNav() {
  const linkHref= [
    {value : "Product Review", link : "/"},
    {value : "Customer Information", link : "/customer"}
  ]
  return (
    <div className='w-[15vw] h-[93vh] flex flex-col pt-[18vh] bg-gradient-to-b from-slate-700 to-slate-500'>
        <div className='border-t-4 border-slate-100 border-opacity-10'></div>
        < DropDownPage title="DASHBOARD" listPage={linkHref} />
        < DropDownPage title="SKIN REVIEW" listPage={linkHref} />
        <title/>
    </div>
  )
}

export default LeftNav