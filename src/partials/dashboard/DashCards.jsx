import React from 'react'
import DashboardCard01 from './DashboardCard01'
import DashboardCard02 from './DashboardCard02'
import DashboardCard03 from './DashboardCard03'
import DashboardCard05 from './DashboardCard05'
import DashboardCard06 from './DashboardCard06'
import DashboardCard14 from './DashboardCard14'

const DashCards = () => {
  return (
    <>
      <div className="grid grid-cols-8 gap-9">

{/* Line chart (Total Students) */}
<DashboardCard01 />
{/* Line chart (Total Trainers) */}
<DashboardCard02 />
{/* Line chart (Total Institutes) */}
<DashboardCard03 />
{/* Bar chart (Online Students) */}
{/* <DashboardCard03 /> */}
{/* Bar chart (Total Courses) */}
<DashboardCard14/>
{/* <DashboardCard05 /> */}
{/* Doughnut chart (Top Courses) */}
{/* <DashboardCard04 /> */}


</div>

    </>
  )
}

export default DashCards
