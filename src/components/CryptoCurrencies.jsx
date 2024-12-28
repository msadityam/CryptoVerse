import React from 'react'
import millify from 'millify'
import { Card,Row,Col, Input} from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Link } from 'react-router-dom'
import Loader from './Loader'


const CryptoCurrencies = ({simplified}) => {
  const count=simplified?10:100
  const {data:cryptosList,isFetching}=useGetCryptosQuery(count)
  const [cryptos,setCryptos]=React.useState(cryptosList?.data?.coins)
  const [searchTerm,setSearchTerm]=React.useState('')

  React.useEffect(()=>{
        const filteredData=cryptosList?.data?.coins.filter(item=>(item.name.toLowerCase().includes(searchTerm.toLowerCase())))
        setCryptos(filteredData)
  },[cryptosList,searchTerm])

 if(isFetching)
 return <Loader/>
  return (
    <>
    <div className='search-crypto'>
     {count>10 && <Input placeholder='search CryptoCurrency' onChange={(e)=>setSearchTerm(e.target.value)}/>}
    </div>
      <Row gutter={[32,32]} className="crypto-card-container">
        {cryptos?.map((item)=>(
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={item.rank}>
              <Link to={`/crypto/${item.uuid}`}>
                <Card title={`${item.rank}. ${item.name}`} extra={<img className='crypto-image' src={item.iconUrl}/>}
                hoverable
                >
                    <p>Price: {millify(item.price)}</p>
                    <p>MarketCap: {millify(item.marketCap)}</p>
                    <p>Daily Change: {millify(item.change)}%</p>
                </Card>
              </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default CryptoCurrencies