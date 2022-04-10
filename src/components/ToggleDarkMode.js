import { Switch } from '@headlessui/react';
import { BsMoonStarsFill } from "react-icons/bs";
import { IoIosSunny } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { change, darkMode, lightMode } from "../redux/darkMode/darkModeAction";

export default function Example() {

    // redux darkModeState
    const darkModeState = useSelector(state => state.darkModeState.darkMode);

    // redux dispatch
    const dispatch = useDispatch();

  return (
    <div className="flex gap-x-2 select-none">
    
        {
            darkModeState ?
            <div onClick={() => dispatch(lightMode())} className='cursor-pointer bg-gray-600 w-8 h-8 rounded-full flex justify-center items-center'>
                <BsMoonStarsFill className='text-white w-3.5 h-3.5'/>
            </div> :
            <div onClick={() => dispatch(darkMode())} className='cursor-pointer bg-gray-300 w-8 h-8 rounded-full flex justify-center items-center'>
                <IoIosSunny className='w-[22px] h-[22px]' />
            </div>
        }
        
      
    </div>
  )
}
