import React from "react"



import FilterItem from './FilterItem';
const Filter = ({ selectedItems, clearFilter, deleteFilter, }) => {

    const handleClearFilter = () => {
        clearFilter()
    }

    const handleDeleteFilter = (item) => {
        deleteFilter(item)
    }


    const uniqueFilteredItems = Array.from(new Set(selectedItems))


    return (
        <>
            <div className=" sm:w-11/12 sm:px-5 sm:py-6 rounded-md bg-white shadow-xl sm:flex items-center justify-between -mt-40 lg:w-10/12  lg2:px-10 ">
                <div className="sm:flex gap-4 flex-wrap">
                    {uniqueFilteredItems.map((item, index) => (
                        <FilterItem key={index} item={item} handleDeleteFilter={handleDeleteFilter} />
                    ))}

                </div>
                <button onClick={handleClearFilter} aria-label="clear filter" className="text-DarkGrayishCyan font-semibold cursor-pointer outline-none hover:underline hover:text-DesaturatedDarkCyan">Clear</button>
            </div>

        </>
    )

}

export default Filter;