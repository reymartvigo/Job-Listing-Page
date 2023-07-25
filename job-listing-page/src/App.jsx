import { useEffect, useState } from 'react'

import Jobs from './components/Jobs';



import headerbg from './images/bg-header-mobile.svg'
import headerbg2 from './images/bg-header-desktop.svg'

function App() {

  const [data, setData] = useState([]);

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

  return (
    <>
      <div className="sm:w-full sm:h-full sm:flex sm: flex-col sm:items-center border-2">

        <div className="w-full bg-DesaturatedDarkCyan">
          <img src={headerbg} alt="" aria-hidden="true" />
          <img className="sm:hidden" src={headerbg2} alt="" aria-hidden="true" />

        </div>

        <div className="sm:w-full sm:flex sm:flex-col min-h-screen sm:items-center sm:py-16 bg-LightGrayishCyanBG gap-16" >


          {data && data.map((job) => (
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
            />
          ))}

        </div>
      </div>
    </>
  )
}

export default App
