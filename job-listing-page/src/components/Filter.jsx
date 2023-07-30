import React from "react"



import FilterItem from './FilterItem';
const Filter = ({ selectedItems, clearFilter }) => {

    const handleClearFilter = () => {
        clearFilter()
    }
    return (
        <>
            <div className=" sm:w-11/12 sm:px-6 sm:py-4 rounded-md bg-white shadow-xl sm:flex items-center justify-between absolute top-32">
                <div className="sm:flex gap-4 flex-wrap">
                    {selectedItems.map((item, index) => (
                        <FilterItem key={index} item={item} />
                    ))}

                </div>
                <button onClick={handleClearFilter} aria-label="clear filter" className="text-DesaturatedDarkCyan font-semibold cursor-pointer outline-none hover:underline">Clear</button>
            </div >

        </>
    )

}

export default Filter;