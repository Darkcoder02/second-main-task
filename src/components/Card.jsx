import React from 'react';
import { FaStar } from "react-icons/fa";

const Card = ({headingtext, basetext}) => {
  return (
        <div className="bg-slate-300 flex gap-8 justify-center border-2 p-2 rounded-lg">
            <div className="flex flex-col gap-4">
                <p>{headingtext}</p>
                <p>{basetext}</p>
                <div className="flex items-center bg-white p-1 rounded-md">
                    <FaStar />
                    <p>reviews</p>
                </div>
            </div>
            <div>
                <img className="h-20" src='https://img.freepik.com/free-vector/emoji-satisfaction-meter-flat_78370-4156.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1716422400&semt=ais_user' alt=''/>
                <p className="text-center">0.50</p>
            </div>
        </div>
  )
}

export default Card