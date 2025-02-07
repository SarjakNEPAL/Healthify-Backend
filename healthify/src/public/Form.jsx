import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Form = () =>{

    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        email: yup
          .string()
          .email("Invalid email format")
        //   .required("Email is required"),
        // password: yup
        //   .string()
        //   .min(6, "Password must be at least 6 characters")
        //   .required("Password is required"),
      });

    const Validation =()=> { 
        const{
        register, // binding the form to use from
        handleSubmit, //submit bhakoo kura handle
        formState: {errors} // fork ko state k cha bhannae hercha
    } = useForm({resolver:yupResolver(schema)});}


    const onSubmit = (data) => {
        console.log(data);
        alert(`Form Submitted: ${JSON.stringify(data)}`);
    };

    //for tables , react table data component, the datas are then made into tables
    //the datas come in form of array
    return(
<>
        <div>
        <h2>sample form</h2>
        <form onSubmit={handleSubmit(onSubmit)}> 
            {/* form submit bhaesi handlesubmit bata onsubmit function call */}
            <div>
                <label>Name</label>
                <input 
                type="text"
                {...register("name",{required: "Enter Name"})}
                />
                {errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}
                <label>Email</label>
                <input
                    placeholder="Email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Please enter a valid email',
                        },
                    })}
                />
                {errors.email && <p style={{color:"red"}}>{errors.name.message}</p>}
                <button type="submit">Submit</button>
            </div>

        </form>
        </div>
</>
    );
}

export default Form; 