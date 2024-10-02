import { signupValidation } from "./signupValidation";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import React from "react";
import axios from "axios";
import './Register.css'
const Register = () => {
  const navigate = useNavigate();
  const initial = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
  };
  const color={
    backgroundColor:'white'
  }

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:5001/users", values);
      navigate("/");
      console.log("Data submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    } finally {
      console.log("axios work finished");
    }
  };

  return (<div style={color} className="register">
  <div className="img"><img className="reg-left"  src="/assets/extra/logo.png"/></div>
    <div className="reg-right font-[sans-serif] bg-white max-w-4xl flex items-center justify-between mx-auto md:h-screen p-4">
      <div className="de md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
        <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r ">
          <div className="reg-image">
           <div className="im"><img  src="/assets/extra/addImage.jpg"></img></div>
          </div>
        </div>

        <Formik className="formik" onSubmit={handleSubmit} initialValues={initial} validationSchema={signupValidation}>
          {({ errors }) => (
            <Form className="md:col-span-2 w-full py-6 px-6 sm:px-16">
              <div className="mb-6">
                <h3 className="text-gray-800 text-2xl font-bold">Create an account</h3>
              </div>

              <div className="space-y-6">
                  <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                    <Field 
                      type="text" 
                      name="name" 
                      className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" 
                      placeholder="Name" 
                    />
                    {errors.name && <small className="text-red-600">{errors.name}</small>}
                  </div>
                  <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                    <Field 
                      type="email" 
                      name="email" 
                      className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" 
                      placeholder="Email" 
                    />
                    {errors.email && <small className="text-red-600">{errors.email}</small>}
                  </div>

                  <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                    <Field 
                      type="password" 
                      name="password" 
                      className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" 
                      placeholder="Password" 
                    />
                    {errors.password && <small className="text-red-600">{errors.password}</small>}
                  </div>
                  <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                    <Field 
                      type="password" 
                      name="cpassword" 
                      className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" 
                      placeholder="Confirm Password" 
                    />
                    {errors.cpassword && <small className="text-red-600">{errors.cpassword}</small>}
                  </div>

               

                <div className="flex items-center">
                  <Field
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                    I accept the{" "}
                    <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              <div className="!mt-12">
                <button type="submit" className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none">
                  Create an account
                </button>
              </div>
              <p className="text-gray-800 text-sm mt-6 text-center">
                Already have an account?{" "}
                <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">
                  Login here
                </a>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
    </div>
  );
};

export default Register;
