import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import '../UI/SpecificationsList.css'

export default function SpecificationsList({product, setIsReadMoreSpecificationClicked}) {

    const [visibleSpecification, setVisibleSpecification] = useState(1)

    const readMoreSpecifications = () => {
        setVisibleSpecification(preVisibledSpecification => preVisibledSpecification + 50);
        setIsReadMoreSpecificationClicked(true);
    };

  return (
        <div className='outline-1 mt-0.5 outline-gray-200'>
            <div className='w-[100%] p-4'>
            {
                product.Specifications && product.Specifications.length > 0 &&(
                <div>
                {Object.entries(product.Specifications[0]).slice(0, visibleSpecification).map(([sectionTitle, sectionData]) => (
                sectionTitle !== '_id' && <div key={sectionTitle} className={`mb-6`}>
                <h3 className='text-xl font-semibold mb-2 text-blue-600'>{sectionTitle}</h3>
                <table className='w-full text-sm border border-gray-300'>
                <tbody>
                    {
                    Object.entries(sectionData).map(([field, value]) => (
                    <tr key={field} className='border-b border-gray-200'>
                    <td className='p-2 font-medium text-gray-400 w-1/3'>{field}</td>
                    <td className='p-2 text-gray-900'>
                        {Array.isArray(value) ? value.join(', ') : value}
                        </td>
                        </tr>
                    ))
                    }
                  </tbody>
                  </table>
                  </div>
                  ))}
                  {visibleSpecification < Object.entries(product.Specifications[0]).length && (
                        <p id='READ-MORE' onClick={readMoreSpecifications} className='ml-2 text-blue-500 font-medium text-[1.0rem] hover:cursor-pointer'>
                            Read More
                        </p>
                    )}
                  </div>
                )
            }
            </div>
        </div>
    )
}
