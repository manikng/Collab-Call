import React from 'react';
// import { useForm } from 'react-hook-form';

const ThreadForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <textarea {...register("problemStatement")} placeholder="Problem Statement" className="border p-2 mb-2" required />
      <textarea {...register("motive")} placeholder="Motive or Agenda" className="border p-2 mb-2" required />
      <input {...register("deadline")} type="date" className="border p-2 mb-2" />
      <button type="submit" className="bg-green-500 text-white p-2">Create Thread</button>
    </form>
  );
};

export default ThreadForm;