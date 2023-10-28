import { useQuery } from '@tanstack/react-query';
import React from 'react'

const DashBoard = () => {
  const { data, isLoading, isError, error } = useQuery('post', fetchApiData);

  async function fetchApiData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </div>
      <div className="main-content">
        {
          data.map((post) => {
            return (
              <div>
                <p>{post}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default DashBoard;