'use client';
import { useForm } from 'react-hook-form';
import TitleBar from '../components/titlebar';
import Navigation from '../utils/navigation';

export default function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const password = watch("password");

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
          <TitleBar title="form" />
          <Navigation/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table style={{ border: '1px solid black', width: '60%', margin: '50px 0' }}>
          <tbody>
            <tr>
              <td>Full Name:</td>
              <td>
                <input
                  {...register("fullname", {
                    required: true,
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "Full name must contain only alphabets and spaces"
                    }
                  })}
                />
                {errors.fullname && <span>Full name is required</span>}
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <input
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format"
                    }
                  })}
                />
                {errors.email && <span>Email is required</span>}
              </td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long"
                    }
                  })}
                />
                {errors.password && <span>Password is required</span>}
              </td>
            </tr>
            <tr>
              <td>Confirm Password:</td>
              <td>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === password || "Passwords do not match"
                  })}
                />
                {errors.confirmPassword && <span>Please confirm your password</span>}
              </td>
            </tr>
            <tr>
              <td>Date of Birth:</td>
              <td>
                <input
                  type="date"
                  {...register("dob", { required: "Date of Birth is required" })}
                />
                {errors.dob && <span>{errors.dob.message}</span>}
              </td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>
                <select
                  {...register("gender", { required: "Gender is required" })}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && <span>{errors.gender.message}</span>}
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <input type="submit" value="Register" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}
