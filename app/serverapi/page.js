import Scroll from '@/components/Scroll'
import ScrollImages from '@/components/ScrollImages'
import ServerApi from '@/components/ServerApi/ServerApi'
import React from 'react'

function page() {
  return (
    <div className="main pt-[70px]">       
        <ScrollImages/>
        <Scroll/>
        <ServerApi/>
        
    </div>
  )
}

export default page