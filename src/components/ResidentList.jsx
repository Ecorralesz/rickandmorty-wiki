import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({list = []}) =>{
    //console.log(list);
    return(
        <div  className='cont_list'>
            {
                list.map((item, index)=>(
                    <div key={index}>
                        <ResidentInfo link={item}/>
                    </div>
                ))
            }
        </div>
    );
}

export default ResidentsList;