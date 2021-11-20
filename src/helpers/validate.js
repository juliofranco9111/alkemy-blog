export const validate = (values,setErrors) => {
    if (!values.email || values.email.length < 1) {
      setErrors({ email: 'Email is required' });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      setErrors({ invalidEmail: 'Invalid email address' });
    }
    if (!values.password || values.password.length < 1) {
      setErrors({ password: 'Password is required' });
    }

    setErrors(null);
  };