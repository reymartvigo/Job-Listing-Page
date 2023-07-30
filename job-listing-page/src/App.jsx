import { useEffect, useState } from 'react'

import Jobs from './components/Jobs';



import headerbg from './images/bg-header-mobile.svg'
import headerbg2 from './images/bg-header-desktop.svg'


import Filter from './components/Filter';
function App() {

  const [data, setData] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/src/data.json")
        const jsonData = await response.json();
        setData(jsonData)

      } catch (err) {
        console.log('Error fetching data', err)
      }
    }
    fetchData()
  }, [])


  const handleOpenFilter = (item) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems(prevItems => [...prevItems, item]);
      setIsFilterVisible(true);
    }
  }


  const filteredJobs = data.filter((job) => {
    if (selectedItems.length === 0) {
      return true
    }

    return job.languages.some(language => selectedItems.includes(language)) ||
      job.tools.some(tool => selectedItems.includes(tool))

  })

  const clearFilterJobs = () => {
    setSelectedItems([]);
    setIsFilterVisible(false);

  }

  return (
    <>
      <div className="sm:w-full sm:h-full sm:flex sm: flex-col sm:items-center border-2 relative">

        <div className="w-full bg-DesaturatedDarkCyan">
          <img src={headerbg} alt="" aria-hidden="true" />
          <img className="sm:hidden" src={headerbg2} alt="" aria-hidden="true" />

        </div>

        {isFilterVisible && (
          <Filter selectedItems={selectedItems}
            clearFilter={clearFilterJobs}
          />
        )

        }

        <div className="sm:w-full sm:flex sm:flex-col min-h-screen sm:items-center sm:py-28 bg-LightGrayishCyanBG gap-16" >


          {filteredJobs.map((job) => (
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

            />
          ))}

        </div>
      </div>
    </>
  )
}

export default App
