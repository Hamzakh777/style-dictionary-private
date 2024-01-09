'use client'

import { ThemeContext } from '@/src/contexts/uds';
import { ChangeEventHandler, useContext } from 'react';

export default function Home() {
  const { scale, theme } = useContext(ThemeContext);

  const handleScaleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    console.log(e.target.value);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>scale: {scale} </div>
      <div>theme: {theme} </div>
      <select name="scale" onChange={handleScaleChange}>
        
      </select>
      <div className='mt-12 nude text-nude bg-blue-1'>
        <div className=''>Some Text</div>
      </div>
    </main>
  )
}
