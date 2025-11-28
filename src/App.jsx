import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductCard name='Asus Tuf' price='275,000LKR' image='https://www.asus.com/media/Odin/Websites/global/Series/33/P_setting_xxx_0_90_end_185.png?webp'/>
      <ProductCard name='Redmi 13C' price='95,000LKR' image='https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-13c.jpg'/>
      <ProductCard name='Asus Tuf' price='275,000LKR' image='https://www.asus.com/media/Odin/Websites/global/Series/33/P_setting_xxx_0_90_end_185.png?webp'/>
    </>
  )
}

export default App
