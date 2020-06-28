import React from "react";

function StatesInfo(props) {
  const data = props.statesData;
  return (
    <>
      <div className='tb'>
        <div className='h2 text-center text-muted tablehead'>
          Statewise Data
        </div>
        <table className='table table-sm'>
          <thead>
            <tr>
              <th scope='col'>States</th>
              <th scope='col' className='text-danger'>
                Cases
              </th>
              <th scope='col' className='text-success'>
                Recovered
              </th>
              <th scope='col' className='text-muted'>
                Deaths
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.state}</td>
                  <td className='text-danger'>{data.confirmed}</td>
                  <td className='text-success'>{data.recovered}</td>
                  <td className='text-muted'>{data.deaths}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StatesInfo;
