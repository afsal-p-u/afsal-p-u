import { skillsItems } from '@/utils/data'
import { backendSkillsData, databaseSkillsData, frontendSkillsData, othersSkillsData, uiuxSkillsData } from '@/utils/skills'
import React, { useState } from 'react'

const Skills = () => {
  const [selected, setSelected] = useState('Frontend')

  return (
    <div className='bg-black text-white'>
      <div className="container mx-auto h-screen flex flex-col justify-center slide-right max-sm:px-5">
        {/* categories */}
        <ul className='flex gap-5 flex-wrap'>
          {skillsItems.map((item, i) => (
            <li key={i} className='cursor-pointer text-xs sm:text-sm md:text-base' onClick={() => setSelected(item.name)}>
              {item.name}

              {item.name === selected && (
                <div className="w-full h-[3px] bg-blue-700 slide-underline"></div>
              )}
            </li>
          ))}
        </ul>
        <hr  className='mt-2 max-sm:block hidden border-gray-900'/>

        {/* categories items */}
        <ul className='mt-5 flex flex-col gap-2'>
          {selected === 'Frontend' && frontendSkillsData.map((item, i) => (
            <li className='text-xs sm:text-sm md:text-base' key={i}>{item.name}</li>
          ))}
          {selected === 'Backend' && backendSkillsData.map((item, i) => (
            <li className='text-xs sm:text-sm md:text-base' key={i}>{item.name}</li>
          ))}
          {selected === 'Database' && databaseSkillsData.map((item, i) => (
            <li className='text-xs sm:text-sm md:text-base' key={i}>{item.name}</li>
          ))}
          {selected === 'UI/UX' && uiuxSkillsData.map((item, i) => (
            <li className='text-xs sm:text-sm md:text-base' key={i}>{item.name}</li>
          ))}
          {selected === 'Others' && othersSkillsData.map((item, i) => (
            <li className='text-xs sm:text-sm md:text-base' key={i}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Skills
