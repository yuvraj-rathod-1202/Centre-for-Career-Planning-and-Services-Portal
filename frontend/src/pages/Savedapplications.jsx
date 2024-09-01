import React from 'react';
import Sidebar from '../components/Sidebar';

const SavedApplications = () => {
  const savedJobs = [
    {
      id: 1,
      title: 'Networking Engineer',
      location: 'Washington',
      salary: '$50k-80k/month',
      type: 'Remote',
      dateSaved: 'Feb 2, 2019 19:28',
    },
    {
      id: 2,
      title: 'Product Designer',
      location: 'Dhaka',
      salary: '$50k-80k/month',
      type: 'Full Time',
      dateSaved: 'Dec 7, 2019 23:26',
    },
    {
      id: 3,
      title: 'Junior Graphic Designer',
      location: 'Brazil',
      salary: '$50k-80k/month',
      type: 'Temporary',
      dateSaved: 'Feb 2, 2019 19:28',
    },
  ];

  const handleRemove = (id) => {
    // Logic to remove the job from the saved list
    console.log(`Job with ID ${id} removed.`);
  };

  const handleApply = (id) => {
    // Logic to apply for the job
    console.log(`Applied for job with ID ${id}.`);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow p-8">
        <h1 className="text-2xl font-montserrat mb-6">Saved Applications</h1>
        <div className="bg-white shadow-lg rounded-lg">
          <table className="w-full table-auto">
            <thead className="text-left">
              <tr>
                <th className="px-6 py-3 text-gray-500">Job</th>
                <th className="px-6 py-3 text-gray-500">Location</th>
                <th className="px-6 py-3 text-gray-500">Salary</th>
                <th className="px-6 py-3 text-gray-500">Type</th>
                <th className="px-6 py-3 text-gray-500">Date Saved</th>
                <th className="px-6 py-3 text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {savedJobs.map((job) => (
                <tr key={job.id} className="border-t">
                  <td className="px-6 py-4 font-montserrat text-[#0367A6]">
                    {job.title}
                  </td>
                  <td className="px-6 py-4 font-roboto text-gray-700">
                    {job.location}
                  </td>
                  <td className="px-6 py-4 font-roboto text-gray-700">
                    {job.salary}
                  </td>
                  <td className="px-6 py-4 font-roboto text-gray-700">
                    {job.type}
                  </td>
                  <td className="px-6 py-4 font-roboto text-gray-700">
                    {job.dateSaved}
                  </td>
                  <td className="px-6 py-4 flex items-center space-x-4">
                    <button
                      className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                      onClick={() => handleRemove(job.id)}
                    >
                      Remove
                    </button>
                    <button
                      className="text-white bg-[#05F2DB] px-4 py-2 rounded hover:bg-[#05F2C7]"
                      onClick={() => handleApply(job.id)}
                    >
                      Apply
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SavedApplications;
