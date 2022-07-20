import React from 'react'

export default function HomeStatistic() {
  return (
    <div className='col-12 homeStatistic'>
      <div className="row">
        <div className=" homeBox">
          <div className=' d-flex justify-content-between list-unstyled p-2'>
            <li style={{ fontSize: '24px' }}>Filtr</li>
            <li style={{ color: "#FF162E" }}>Filtrni tozalash</li>
          </div>

          <div className='home_input '>

            <select style={{ margin: "10px" }} class="form-select " aria-label="Default select example">
              <option selected>OTM nomini tanlang</option>

            </select>
            <div class="input-group">
              <select style={{ margin: "10px" }} class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                <option selected>Ta’lim tilni tanlang</option>

              </select>
              <button style={{ margin: "10px" }} class="btn text-light bg-primary" type="button"> <i class="bi bi-arrow-clockwise"></i>  Natijani qo‘llash</button>

            </div>

          </div>

        </div>
      </div>




      <table class="table">
        <thead>
          <tr>
            <th scope="col">Mutaxasislik nomi</th>
            <th scope="col">Mutaxasislik shifiri</th>
            <th scope="col">Mutaxasislik sohasi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>New York No. 1 Lake Park</td>
            <td>Invite Brown Delete</td>
            <td>Brown developer</td>
          </tr>
          <tr>
            <td>London No.1 Lake Park</td>
            <td>Invite Brown Delete</td>
            <td>Green  loser</td>
          </tr>
          <tr>
            <td>Sidney No. 1 Lake Park</td>
            <td>Invite Brown Delete</td>
            <td>Black teacher</td>
          </tr>
          <tr>
            <td>Paris No. 1 Lake Park</td>
            <td>Invite Brown Delete</td>
            <td>Brown developer</td>

          </tr>
          <tr>
            <td>Seoul No. 1 Lake Park</td>
            <td>Invite Brown Delete</td>
            <td>Green  loser</td>
          </tr>
          <tr>
            <td>Tokio No. 1 Lake Park</td>
            <td>Invite Brown Delete</td>
            <td>Black teacher</td>
          </tr>


        </tbody>
      </table>

    </div >
  )
}
