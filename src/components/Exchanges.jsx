import React from 'react'
import { useGetExchangesQuery } from '../services/cryptoApi'

const Exchanges = () => {
  const {data,exchanges}=useGetExchangesQuery()
  console.log(exchanges);
  return (
    <div>Exchanges</div>
  )
}

export default Exchanges