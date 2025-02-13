import React, { useEffect, useState } from 'react';
import { deleteDepartment, getAllDepartments } from '../services/DepartmentService';
import { Link, useNavigate} from 'react-router-dom';

const ListDepartmentComponent = () => { 

  const[departments, setDepartments] = useState([]);

  const navigator=useNavigate();

     
  useEffect(() =>{
    ListDepartmentComponent();
    
  }, [])

  
   function ListDepartmentComponent(){
    getAllDepartments().then((response)=>{
      console.log(response.data);
      setDepartments(response.data);
  }). catch(error => {
      console.error(error);

  })

   }
  function updateDepartment(id){
    navigator(`/edit-department/${id}`)

  }
  function removeDepartment(id){
    deleteDepartment(id).then((response) =>{
      console.log(response.data);
      ListDepartmentComponent();

    }).catch(error => {
      console.error(error);
    })

  }
    
  return (
    <div className='container'>
      <h2 className='text-center'>List of Department</h2>
      <Link to='/add-department' className='btn btn-primary mb-2'>Add Department</Link>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Department Id</th>
            <th>Department Name</th>
            <th>Department Description</th>
            <th>Actions</th>          
          </tr>
        </thead>
        <tbody>
          {
            departments.map(departments =>
              <tr key={departments.id}>
                <td>{departments.id}</td>
                <td>{departments.departmentName}</td>
                <td>{departments.departmentDescription}</td>
                <td>
                  <button onClick={()=> updateDepartment(department.id)} className='btn btn-info' >Update</button>
                  <button onClick={() => removeDepartment(department.id)} className='btn btn-danger'
                    style={{marginLeft: "10px"}}>
                    Delete</button>
                </td>

              </tr>
            )
          }
        </tbody>

      </table>

    </div>
  )
}

export default ListDepartmentComponent