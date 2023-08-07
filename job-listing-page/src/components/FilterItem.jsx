import React from "react";
import remove from '../../public/icon-remove.svg'

const FilterItem = ({ item, handleDeleteFilter }) => {

    const handleDeleteItem = () => {
        handleDeleteFilter(item);
    }
    return (

        <div className="sm:w-fit sm:flex sm: items-center">
            <span className=" bg-LightGrayishCyanFT px-3 py-2 rounded-md  text-DesaturatedDarkCyan font-semibold ">
                {item}
            </span>
            <button onClick={handleDeleteItem} className="sm:px-2 py-3 sm:flex sm:flex-col sm:bg-DesaturatedDarkCyan rounded-e-md cursor-pointer outline-none lg2:px-3 hover:bg-VeryDarkGrayishCyan"><img src={remove} aria-hidden="true" alt=""></img></button>
        </div>

    )
}

export default FilterItem;