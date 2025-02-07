import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const AddUser = ({addUser}) => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    age: Yup.number().positive('Age must be a positive number').integer('Age must be an integer').required('Age is required'),
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
    const newUser = { id: Date.now(), ...FormData };
    addUser(newUser);
    reset(); // Reset form fields
    navigate('/users');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ marginBottom: "1rem" }}>
        <label>Name</label>
        <input {...register("name")} />
        <p style={{ color: "red", fontSize: "0.8rem" }}>
    
        </p>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label>Email</label>
        <input type="email" {...register("email")} />
        <p style={{ color: "red", fontSize: "0.8rem" }}>
    
        </p>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label>Age</label>
        <input type="number" {...register("age")} />
        <p style={{ color: "red", fontSize: "0.8rem" }}>
          
        </p>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddUser;
