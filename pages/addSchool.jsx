// pages/addSchool.jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router'; // Import useRouter
import styles from '../app/globals.css';

const AddSchool = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter(); // Initialize useRouter

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/addSchool', data);

      console.log(response.data);
      setSuccessMessage('School added successfully');
      reset(); // Reset the form

      // Redirect to showSchools page
      router.push('/showSchools');
    } catch (error) {
      console.error('Error adding school:', error);
      setSuccessMessage('');
    }
  };

  return (
    <div className='p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6 customform justify-center items-center py-20 bg-blue-200'>
      <form onSubmit={handleSubmit(onSubmit)} className='form bg-gray-800 lg:w-4/12 md:w-8/12 sm:10/12 w-full  px-12 py-16   font-medium shadow-2xl'>
        <h1 className="w-full flex-none mt-2 order-1 text-3xl font-bold pb-10 text-slate-200">
          Add School
        </h1>

        {successMessage && (
          <div className="text-green-500 mb-4">{successMessage}</div>
        )}

        <label className='text-gray-300'>
          School Name:
          <input {...register('name', { required: true })} className='rounded outline-none bg-gray-700 p-2 pl-4 mb-10 w-full' />
          {errors.name && <span>This field is required</span>}
        </label>

        <label className='text-gray-300'>
          Address:
          <input {...register('address', { required: true })} className='rounded outline-none bg-gray-700 p-2 pl-4 mb-10 w-full' />
          {errors.address && <span>This field is required</span>}
        </label>

        <label className='text-gray-300'>
          City:
          <input {...register('city', { required: true })} className='rounded outline-none bg-gray-700 p-2 pl-4 mb-10 w-full' />
          {errors.city && <span>This field is required</span>}
        </label>

        <label className='text-gray-300'>
          State:
          <input {...register('state', { required: true })} className='rounded outline-none bg-gray-700 p-2 pl-4 mb-10 w-full' />
          {errors.state && <span>This field is required</span>}
        </label>

        <label className='text-gray-300'>
          Mobile No:
          <input {...register('contact', { required: true })} className='rounded outline-none bg-gray-700 p-2 pl-4 mb-10 w-full' />
          {errors.contact && <span>This field is required</span>}
        </label>

        <label className='text-gray-300'>
          Email:
          <input {...register('email_id', { required: true })} className='rounded outline-none bg-gray-700 p-2 pl-4 mb-10 w-full' />
          {errors.email_id && <span>This field is required</span>}
        </label>

        <button type="submit" className='bg-blue-400 px-6 text-white rounded py-1 w-full'>Add School</button>
      </form>
    </div>
  );
};

export default AddSchool;
