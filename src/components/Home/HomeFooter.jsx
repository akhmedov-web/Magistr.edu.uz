import React from 'react'

export default function HomeFooter() {
  return (
    <div className='homeFooter'>

      <div className="footer">
        <div className="footerLogo"><span>Magistr.edu.uz</span>   </div>
        <li style={{lineHeight:"2rem"}}>   Portalda eʼlon qilingan materiallardan nusxa koʻchirish, <br /> tarqatish va boshqa shakllarda foydalanish faqat <br /> tahririyat yozma roziligi bilan amalga oshirilishi mumkin.</li>

        <li>2021 © Vakansiya edu.uz</li>
      </div>




      <ul>
        <h5>Asosisy</h5>
        <li>Imtiyozlar</li>
        <li>Yangilklar</li>
        <li>Satastitika</li>
      </ul>

      <ul>
        <h5>Biz ijtimoiy tarmoqlarda</h5>
        <li><i class="bi bi-instagram"></i> Instagram</li>
        <li><i class="bi bi-telegram"></i> Telegram</li>
        <li><i class="bi bi-facebook"></i> Facebook</li>

      </ul>

      <ul>
        <h5>Bog’lanish</h5>
        <li><i class="bi bi-telephone"></i> +998336959550</li>
        <li><i class="bi bi-telephone"></i> +998336959650</li>
        <li><i class="bi bi-envelope"></i> aviapack@gmail.com</li>



      </ul>

    </div>
  )
}
