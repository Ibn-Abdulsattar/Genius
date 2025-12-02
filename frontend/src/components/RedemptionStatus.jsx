import React from 'react'

export default function RedemptionStatus({title, num, bgcolor, color}) {
  return (
    <div className={`"status relative bg-[${bgcolor}] w-full sm:w-[48%] lg:w-[45%] pointthreerem flex items-center rounded-md rounded-l-2xl shadow-sm hover:shadow-md transition-shadow"`}>
                    <div className={`star relative -left-[10%] pointthreerem bg-white border border-[#d9d9d9] border-2 rounded-full flex-shrink-0`}>
                      <img
                        src="/image/img-22.png"
                        className="w-5 sm:w-8 h-5 sm:h-8"
                        alt="star"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className={`text-[10px] font-thin text-[${color}] whitespace-nowrap overflow-hidden text-ellipsis`}>
                        {title}
                      </p>
                      <p className={`font-medium text-[${color}] text-base sm:text-xl leading-tight`}>{num}</p>
                    </div>
                  </div>
  )
}
