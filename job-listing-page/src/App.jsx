import { useEffect, useState } from 'react'

/*******  Components  **********/
import Filter from './components/Filter';
import Jobs from './components/Jobs';
/*******  Components  **********/

import JobsData from '../public/data.json'

/*******  Headers Images  **********/
import headerbg from '../public/bg-header-mobile.svg'
import headerbg2 from '../public/bg-header-desktop.svg'
/*******  Headers Images  **********/


function App() {

  const [data, setData] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);



  /*******  Fetching Data From the data.json **********/
  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(JobsData)
      } catch (err) {
        console.log('Error fetching data', err)
      }
    }
    fetchData()
  }, [])

  /*******  Fetching Data From the data.json **********/



  /*******  Open Filter Component When Item is Selected **********/
  const handleOpenFilter = (item) => {

    if (!selectedItems.includes(item)) {
      setSelectedItems(prevItems => [...prevItems, item]);

    }
    setIsFilterVisible(true);
  };

  /*******  Open Filter Component When Item is Selected **********/


  /*******  Filtering Data based on Role , Level , Language & Tools **********/
  const filteredData = selectedItems.length > 0
    ? data.filter((job) => {
      const roleMatch = selectedItems.includes(job.role)
      const levelMatch = selectedItems.includes(job.level)

      const languageExist = job.languages && Array.isArray(job.languages)
      const toolsExist = job.tools && Array.isArray(job.tools)


      const languagesMatch = languageExist && job.languages.some((language) => selectedItems.includes(language))
      const toolsMatch = toolsExist && job.tools.some((tool) => selectedItems.includes(tool))


      return roleMatch || levelMatch || languagesMatch || toolsMatch
    }) : data

  /*******  Filtering Data based on Role , Level , Language & Tools **********/


  /*******  Handle Delete Item of Filter Component **********/
  const handleDeleteItem = (item) => {
    const filterIndex = selectedItems.indexOf(item)
    if (filterIndex !== -1) {
      const updatedItems = [...selectedItems]
      updatedItems.splice(filterIndex, 1)
      setSelectedItems(updatedItems)
      if (updatedItems.length === 0) {
        setIsFilterVisible(false)
      }
    }
  }
  /*******  Handle Delete Item of Filter Component **********/


  /*******  Clear All Filter **********/
  const clearFilterJobs = () => {
    setSelectedItems([]);
    setIsFilterVisible(false);
  }
  /*******  Clear All Filter **********/




  return (
    <>
      <div className="sm:w-full sm:h-full sm:flex sm: flex-col sm:items-center  relative">

        <div className="w-full bg-DesaturatedDarkCyan sm:h-auto ">
          <img src={headerbg} alt="" aria-hidden="true" className="sm:w-full md:hidden" />
          <img className="sm:hidden md:w-full md:flex" src={headerbg2} alt="" aria-hidden="true" />

        </div>


        <div className="sm:w-full sm:flex sm:flex-col min-h-screen justify-start sm:items-center sm:py-28 bg-LightGrayishCyanBG sm:gap-16 lg:gap-10" >

          {isFilterVisible && (

            /*******  Filter Component **********/

            <Filter
              selectedItems={selectedItems}
              clearFilter={clearFilterJobs}
              deleteFilter={handleDeleteItem}
            />

            /*******  Filter Component **********/
          )

          }
          {filteredData.map((job) => (

            /*******  Jobs Component **********/

            <Jobs
              key={job.id}
              id={job.id}
              company={job.company}
              logo={job.logo}
              new={job.new}
              featured={job.featured}
              position={job.position}
              role={job.role}
              level={job.level}
              postedAt={job.postedAt}
              contract={job.contract}
              location={job.location}
              languages={job.languages}
              tools={job.tools}
              openFiltered={handleOpenFilter}

            /*******  Jobs Component **********/
            />
          ))}

        </div>
      </div>
    </>
  )
}

export default App
