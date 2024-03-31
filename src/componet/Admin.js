import React from 'react'

export default function Admin(props) {
  function deletefun(){
alert("Are you sure!");

  }

     if(props.process ==="user"){

  return (
    <>
  
    <button className='btn btn-primary'  style={{marginTop:"10px",marginBottom:"10px"}}>Add New</button>
<table className='table' id='myTable'>
  <thead>
    <tr>
      <th>Username</th>
      <th>Email</th>
      <th>RentDate</th>
      <th>ReturnDate</th>
      <th>Activity</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>shaizan</td>
    <td>shaizan@gmail.com</td>
    <td>12/3/2023</td>
    <td>18/3/2023</td>
    <td><button className='btn btn-primary' >Edit</button><button className='btn btn-danger' style={{marginLeft:"5px"}} onClick={()=>deletefun()}>Delete</button></td>
    </tr>
    <tr><td>pavan</td>
    <td>pavan@gmail.com</td>
    <td>10/5/2023</td>
    <td>18/5/2023</td>
    <td><button className='btn btn-primary'>Edit</button><button className='btn btn-danger' style={{marginLeft:"5px"}}>Delete</button></td>
    </tr>
    <tr><td>bhavesh</td>
    <td>bhavesh@gmail.com</td>
    <td>18/7/2023</td>
    <td>28/7/2023</td>
    <td><button className='btn btn-primary'>Edit</button><button className='btn btn-danger' style={{marginLeft:"5px"}}>Delete</button></td>
    </tr>
    <tr><td>abc</td>
    <td>abc@gmail.com</td>
    <td>2/4/2023</td>
    <td>10/4/2023</td>
    <td><button className='btn btn-primary'>Edit</button><button className='btn btn-danger' style={{marginLeft:"5px"}}>Delete</button></td>
    </tr>
  </tbody>
</table>
    </>
  )
     }
     if(props.process ==="book"){

        return (
          <>
<>
    <button className='btn btn-primary'  style={{marginTop:"10px",marginBottom:"10px"}}>Add New</button>
<table className='table' id='myTable'>
  <thead>
    <tr>
      <th>BookName</th>
      <th>AuthorName</th>
      <th>Description</th>
      <th>Stock</th>
      <th>Activity</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Java</td>
    <td>shork</td>
    <td>this is java book</td>
    <td>18</td>
    <td><button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#myModal">Edit</button><button className='btn btn-danger' style={{marginLeft:"5px"}} onClick={()=>deletefun()}>Delete</button></td>
    </tr>
    <tr><td>PHP</td>
    <td>jone</td>
    <td>this is php book</td>
    <td>14</td>
    <td><button className='btn btn-primary'>Edit</button><button className='btn btn-danger' style={{marginLeft:"5px"}} >Delete</button></td>
    </tr>
    <tr><td>Web Development</td>
    <td>Dr.sterenge</td>
    <td>this is web Development book</td>
    <td>7</td>
    <td><button className='btn btn-primary'>Edit</button><button className='btn btn-danger' style={{marginLeft:"5px"}}>Delete</button></td>
    </tr>
    <tr><td>MySql</td>
    <td>tony stark</td>
    <td>this is MySql book</td>
    <td>24</td>
    <td><button className='btn btn-primary'>Edit</button><button className='btn btn-danger' style={{marginLeft:"5px"}}>Delete</button></td>
    </tr>
  </tbody>
</table>
    </>          </>
        )
           }
}
