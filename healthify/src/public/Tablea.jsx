import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const Tablea = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Ravi', email: 'Ravi@gmail.com', age: 20 }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [showTable, setShowTable] = useState(true);
  
  const columns = [
    { name: 'ID', selector: row => row.id },
    { name: 'Name', selector: row => row.name },
    { name: 'Email', selector: row => row.email },
    { name: 'Age', selector: row => row.age },
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    age: Yup.number().positive('Age must be a positive number').integer('Age must be an integer').required('Age is required')
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      email: '',
      age: '',
    }
  });

  const onSubmit = (FormData) => {
    setData([...data, { id: Date.now(), ...FormData }]);
    setShowForm(false);
    setShowTable(true);
    reset();
  };

  return (
    <div>
     {showTable &&  <div>
      <button onClick={() => {
        setShowForm(true);
        setShowTable(false);
      }}>Create</button>
      <DataTable
        columns={columns}
        data={data}
      />
      </div>}
      {showForm && (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Name</label>
          <input {...register("name")} />
          <p style={{ color: "red", fontSize: "0.8rem" }}>
            {/* {errors.name?.message} */}
          </p>
        </div>
 
        {/* Email Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Email</label>
          <input type="email" {...register("email")} />
          <p style={{ color: "red", fontSize: "0.8rem" }}>
            {/* {errors.email?.message} */}
          </p>
        </div>
 
        {/* Password Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label>age</label>
          <input type="number" {...register("age")} />
          <p style={{ color: "red", fontSize: "0.8rem" }}>
            {/* {errors.password?.message} */}
          </p>
        </div>
          <button type="submit">Submit</button>
</form>
      )}
    </div>
  );
};

export default Tablea;
