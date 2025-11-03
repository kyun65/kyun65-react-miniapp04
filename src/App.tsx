import React, { useEffect, useState } from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import NewPost from './pages/NewPost'
import type { Kiji } from './types/kiji'
import Detail from './pages/Detail'


export default function App() {

  const [form,setForm] = useState<Kiji[]>(()=> {
    const saved = localStorage.getItem("kijis");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(()=> {
    localStorage.setItem("kijis",JSON.stringify(form))
  },[form])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home form={form} setForm={setForm} />} />
        <Route path='/newpost' element={<NewPost setForm={setForm} />} />
        <Route path='/detail/:id' element={<Detail form={form}/>} />
      </Routes>
    </BrowserRouter>
  )
}
