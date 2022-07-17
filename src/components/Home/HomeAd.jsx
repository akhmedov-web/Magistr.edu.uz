import React from 'react'

export default function HomeAd() {
  return (
    <div className='col-12 homeAd text-light d-flex flex-xl-row flex-column justify-content-between align-items-center p-xl-4 p-1'>
      <div className='ad_text'>
        <h4>Telegram orqali bildirishnomlarni tez va oson qabul qiling!</h4>
      </div>
      <button className='btn btn-outline-light adBtn p-xl-2 p-1'><i class="bi bi-telegram m-2"></i>Telegramda qabul qiling</button>
    </div>
  )
}
