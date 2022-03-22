import React from 'react';


const User = ({param}) => {

    console.log(param)

  return (
    <>
        <div className='row'>
            <div className='col-md-6 card mx-auto'>
                <div className='card-body d-flex flex-row justify-content-around align-items-center'>
                        <div className='col-md-'>{param.id}</div>
                        <div className='col-md-5'>
                            <img src={param.avatar} alt={param.id} className="rounded-circle"/>
                        </div>
                        
                        <div className='col-md-2'>{param.first_name}</div>
                        <div className='col-md-2'>{param.last_name}</div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default User