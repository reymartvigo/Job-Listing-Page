import React from "react";
import remove from '../images/icon-remove.svg'

const FilterItem = ({ item, handleDelete }) => {
    return (

        <div className=" sm:w-fit sm:flex sm: items-center">
            <span className=" bg-LightGrayishCyanFT px-3 py-2 rounded-md cursor-pointer">
                {item}
            </span>
            <button className="sm:px-4 py-3 sm:flex sm:flex-col sm:bg-DesaturatedDarkCyan rounded-e-md cursor-pointer hover:bg-VeryDarkGrayishCyan"><img src={remove} aria-hidden="true" alt=""></img></button>
        </div>

    )
}

export default FilterItem;