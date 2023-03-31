import React from 'react'
import Footers from './Components/Footers/Footers'
import HeaderNav from './Components/Headers/Header'

export default function Layouts(props) {
  return (
    <div id="main-Layout">
        <HeaderNav />

        <main className='mt-20 py-10'>
            {props.children}
        </main>

        <Footers />
    </div>
  )
}
