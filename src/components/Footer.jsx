import React from 'react'
import { VscGithubInverted } from 'react-icons/vsc';

export default function Footer() {
  return (
    <div className='py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg'>
        <a href="#home" className='block text-xl md:text-2xl font-semibold'>Rafael Moreira</a>
        
        <a href="https://github.com/RafaeltiMoreira"
            className='text-lg md:text-md hover:text-indigo-500' target='_blank' title='GitHub'
        ><VscGithubInverted className='inline-block mb-1' /> RafaeltiMoreira</a>
        <p className='text-lg mt-2 text-gray-500 dark:'>&copy; Feito com 💚💛 por Rafael Moreira &middot; {new Date().getFullYear()} &middot; Todos os direitos reservados.</p>
    </div>
  )
}