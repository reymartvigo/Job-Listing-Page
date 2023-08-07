import React from 'react'



const Jobs = ({ openFiltered, id, company, logo, new: isNew, featured, position, role, level, postedAt, contract, location, languages, tools }) => {



    const handleOpenFilter = (languages, tools, role, level) => {
        openFiltered(languages, tools, role, level);
    }

    return (

        <div className={`border-red sm:w-11/12 h-auto rounded-lg shadow-lg lg:w-10/12  ${featured ? 'sm:border-l-4 border-DesaturatedDarkCyan' : 'sm:border-none'}`}>

            <div className=" bg-white sm: flex sm: flex-col items-start sm: px-6 sm:py-6 gap-4 rounded-lg lg:flex-row lg:items-center lg:justify-between lg2:px-10">


                <div className='sm:flex sm:flex-col border-b-2 border-DarkGrayishCyan w-full py-3 gap-3  lg:border-none lg:flex-row lg:w-fit lg:gap-6'>
                    <img className="sm:w-14 sm: -mt-16 lg:mt-0  lg:w-auto" src={logo} alt="" aria-hidden="true" />
                    <div className="sm:flex sm:flex-col gap-3">
                        <div className="sm:flex sm:gap-7 sm:items-center ">
                            <h1 className={`text-DesaturatedDarkCyan font-semibold text-md   ${isNew ? 'sm:w-fit' : 'sm:w-full'}`}>{company}</h1>

                            <div className='sm:flex sm:gap-2 items-center text-LightGrayishCyanBG '>
                                <span className={`text-sm bg-DesaturatedDarkCyan justify-center rounded-full text-center px-4  py-1 pt-2 font-semibold ${isNew ? 'sm:flex' : 'sm:hidden'}`}>NEW!</span>
                                <span className={`text-sm bg-VeryDarkGrayishCyan justify-center rounded-full w-20 py-1 pt-2 text-center font-semibold ${featured ? 'sm:flex' : 'sm:hidden'}`}>FEATURED</span>
                            </div>

                        </div>

                        <div className="sm:flex sm: flex-col gap-1 ">
                            <h2 className="w-fit font-semibold cursor-pointer hover:text-DesaturatedDarkCyan">{position}</h2>
                            <div className="sm:flex gap-3 items-center text-DarkGrayishCyan">
                                <span>{postedAt}</span>
                                <div className="w-1 h-1 bg-DarkGrayishCyan rounded-full"></div>
                                <span>{contract}</span>
                                <div className="w-1 h-1 bg-DarkGrayishCyan rounded-full"></div>
                                <span>{location}</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="sm:flex sm:flex-wrap gap-5 items-center text-DesaturatedDarkCyan font-semibold w-full  lg:items-center lg:justify-end lg:w-fit">
                    <span onClick={() => handleOpenFilter(role)} className=" bg-LightGrayishCyanFT px-3 py-2 rounded-md cursor-pointer  hover:bg-DesaturatedDarkCyan hover:text-white">{role}</span>
                    <span onClick={() => handleOpenFilter(level)} className=" bg-LightGrayishCyanFT px-3  py-2 rounded-md cursor-pointer  hover:bg-DesaturatedDarkCyan hover:text-white">{level}</span>

                    {languages.map((language, index) => (
                        <span key={index} onClick={() => handleOpenFilter(language)} className="languages bg-LightGrayishCyanFT px-3 py-2 rounded-md cursor-pointer hover:bg-DesaturatedDarkCyan hover:text-white">
                            {language}
                        </span>
                    ))}

                    {tools.map((tool, index) => (
                        <span key={index} onClick={() => handleOpenFilter(tool)} className="tools bg-LightGrayishCyanFT px-3 py-2  rounded-md cursor-pointer  hover:bg-DesaturatedDarkCyan hover:text-white" >
                            {tool}
                        </span>

                    ))}

                </div>
            </div>

        </div >
    )
}

export default Jobs