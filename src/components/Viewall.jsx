import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const [userData,changeUserData]=useState(
        {
            "page": 1,
            "per_page": 6,
            "total": 12,
            "total_pages": 2,
            "data": [],
            "support": {
              "url": "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
              "text": "Tired of writing endless social media content? Let Content Caddy generate it for you."
            }
          }
    )
    const fetchData=()=>{
        axios.get("https://reqres.in/api/users?page=1").then(
            (response)=>{
                changeUserData(response.data)
            }
        ).catch()
    }
    useEffect(
        ()=>{
            fetchData(),[]
        }
    )
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Sl.No</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">Email</th>
      <th scope="col">Avatar</th>

    </tr>
  </thead>
  <tbody>
   {userData.data.map(
    (value,index)=>{
        return  <tr>
        <th scope="row">{value.id}</th>
        <td>{value.first_name}</td>
        <td>{value.last_name}</td>
        <td>{value.email}</td>
        <td>{value.avatar}</td>
      </tr>
    }
   )}
  
  </tbody>
</table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Viewall
