import React,{useState,useEffect} from 'react'
import { Button,Menu,Typography,Avatar} from 'antd'
import {Link} from 'react-router-dom'
import { HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined } from '@ant-design/icons'
import cryptocurrency from '../images/cryptocurrency.png'
const Navbar = () => {
    const [activeMenu,setActiveMenu]=useState(true)
    const [screenSize,setScreenSize]=useState(window.innerWidth)

    useEffect(()=>{
        const handleResize=()=>setScreenSize(window.innerWidth)
        window.addEventListener("resize",handleResize)
        return ()=>window.removeEventListener('resize',handleResize)
    },[])
    useEffect(()=>{
            if(screenSize<768){
                setActiveMenu(false)
            }
            else{
                setActiveMenu(true)
            }
    },[screenSize])
  return (
    <div className='nav-container'>
        <div className="logo-container">
            <Avatar src={cryptocurrency} alt="logo" size="large"/>
            <Typography.Title level={2} className="logo">
                <Link to="/">Cryptoverse</Link>
            </Typography.Title>
            <Button className='menu-control-container' onClick={()=>setActiveMenu(prev=>!prev)}>
                <MenuOutlined/>
            </Button>
            </div>
            {(activeMenu || screenSize>768) &&  (
            <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined/>}>
                    <Link to="/" onClick={()=>setActiveMenu(false)}>Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined/>}>
                    <Link to="/cryptocurrencies" onClick={()=>setActiveMenu(false)}>CryptoCurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined/>} >
                    <Link to="/news" onClick={()=>setActiveMenu(false)}>News</Link>
                </Menu.Item>
            </Menu>
            )}
     
    </div>
  )
}

export default Navbar