import React from 'react'
import Titles from './Titles'
import WorksItens from './WorksItens'
import works from '../data/works'

export default function Works() {
  return (
    <div className='py-12'>
        <Titles id='works'>Projetos realizados</Titles>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {works.map(work => (
                <WorksItens 
                    key={work.title}
                    imgUrl={work.imgUrl}
                    title={work.title}
                    tech={work.tech}
                    workUrl={work.workUrl}
                >
                </WorksItens>
            ))}
        </div>
    </div>
  )
}
