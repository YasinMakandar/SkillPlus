import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard06() {

  const chartData = {
    labels: ['Internship', 'CMYKK', 'Other'],
    datasets: [
      {
        label: 'Courses',
        data: [
          35, 30, 35,
        ],
        backgroundColor: [
          tailwindConfig().theme.colors.violet[500],
          tailwindConfig().theme.colors.sky[500],
          tailwindConfig().theme.colors.violet[800],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.violet[600],
          tailwindConfig().theme.colors.sky[600],
          tailwindConfig().theme.colors.violet[900],
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
<div className="flex flex-col w-full max-w-[35rem] col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
  <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
    <h2 className="font-semibold text-gray-800 dark:text-gray-100">Total Courses</h2>
  </header>
  <div className="flex justify-center items-center h-[200px] sm:h-[220px] md:h-[260px]">
    <DoughnutChart data={chartData} width={389} height={260} />
  </div>
</div>

  );
}

export default DashboardCard06;
