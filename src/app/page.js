'use client';

import { Box, Button, Input, TextField } from '@mui/material'
import { Field, Form, Formik, useFormik } from 'formik'
import { SignUpValidation } from './SignUpValidation';

const initialValues = {
  firstName: '',
  lasteName: '',
  email: '',
  password: '',
  confirmPassword: '',

}


export default function Home() {

  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: SignUpValidation,
    onSubmit: (value) => {
      console.log(value)
    }
  })


  return (
    <Box sx={{
      height: '100vh',
      width: '100%',
      background: 'white',
      color: 'black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

    }}>
      <Formik initialValues={initialValues}
        validationSchema={SignUpValidation}>
        {({ errors }) => (
          <Form >

            <Box sx={{ margin: '30px', display: 'flex', flexDirection: 'column' }}>
              <Field type="text" name="firstName"></Field>
              {/* <TextField
                id="outlined-basic"
                label="First Name"
                values={values.firstName}
                name='firsName'
                variant="outlined"
                onBlur={handleBlur}
                onChange={handleChange} /> */}
              {errors.firstName && <small>{errors.firstName}</small>}
            </Box>
            <Box sx={{ margin: '30px', display: 'flex', flexDirection: 'column' }}>
              <Field type="text" name="lasteName"></Field>
              {/* <TextField
                id="outlined-basic"
                label="Last Nmae"
                values={values.lasteName}
                name='lasteName'
                variant="outlined"
                onBlur={handleBlur}
                onChange={handleChange} /> */}
              {errors.lasteName && <small>{errors.lasteName}</small>}

            </Box>
            <Box sx={{ margin: '30px', display: 'flex', flexDirection: 'column' }}>
              <Field type="text" name="email"></Field>
              {/* <TextField
                id="outlined-basic"
                label="Email"
                values={values.email}
                name='email'
                variant="outlined"
                onBlur={handleBlur}
                onChange={handleChange} /> */}
              {errors.email && <small>{errors.email}</small>}

            </Box>
            <Box sx={{ margin: '30px', display: 'flex', flexDirection: 'column' }}>
              <Field type="text" name="password"></Field>
              {/* <TextField
                id="outlined-basic"
                label="Password"
                values={values.password}
                name='password'
                variant="outlined"
                onBlur={handleBlur}
                onChange={handleChange} /> */}
              {errors.password && <small>{errors.password}</small>}

            </Box>
            <Box sx={{ margin: '30px', display: 'flex', flexDirection: 'column' }}>
              <Field type="text" name="confirmPassword"></Field>
              {/* <TextField
                id="outlined-basic"
                label="ConfirmPassword"
                values={values.confirmPassword}
                name='confirmPassword'
                variant="outlined"
                onBlur={handleBlur}
                onChange={handleChange} /> */}
              {errors.confirmPassword && <small>{errors.confirmPassword}</small>}

            </Box>
            <Box sx={{ margin: '30px', display: 'flex', flexDirection: 'column' }}>
              <Button variant="contained" type='submit'>Text</Button>
            </Box>

          </Form >
        )}
        {/* <Form></Form> */}

      </Formik>

    </Box>
  )
}


// 'use client';

// import { Box, Button, Input, TextField } from '@mui/material'
// import { Form, useFormik } from 'formik'
// import { SignUpValidation } from './SignUpValidation';

// const initialValues = {
//   firstName: '',
//   lasteName: '',
//   email: '',
//   password: '',
//   confirmPassword: '',

// }


// export default function Home() {
//   const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
//     initialValues: initialValues,
//     validationSchema: SignUpValidation,
//     onSubmit: (value) => {
//       console.log(value)
//     }
//   })
//   // console.log("hallo", formik);
//   return (
//     <Box sx={{
//       height: '100vh',
//       width: '100%',
//       background: 'white',
//       color: 'black',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',

//     }}>
//       {/* <Form></Form> */}
//       <form onSubmit={handleSubmit}>

//         <Box sx={{ margin: '30px', display: 'flex', flexDirection: 'column' }}>
//           <TextField
//             id="outlined-basic"
//             label="First Name"
//             values={values.firstName}
//             name='firsName'
//             variant="outlined"
//             onBlur={handleBlur}
//             onChange={handleChange} />
//           {errors.firstName && <small>{errors.firstName}</small>}
//         </Box>
//         <Box sx={{ margin: '30px', display: 'flex', flexDirection: 'column' }}>
//           <TextField
//             id="outlined-basic"
//             label="Last Nmae"
//             values={values.lasteName}
//             name='lastName'
//             variant="outlined"
//             onBlur={handleBlur}
//             onChange={handleChange} />
//           {errors.lasteName && <small>{errors.lasteName}</small>}

//         </Box>
//         <Box sx={{ margin: '30px', display: 'flex', flexDirection: 'column' }}>
//           <TextField
//             id="outlined-basic"
//             label="Email"
//             values={values.email}
//             name='email'
//             variant="outlined"
//             onBlur={handleBlur}
//             onChange={handleChange} />
//           {errors.email && <small>{errors.email}</small>}

//         </Box>
//         <Box sx={{ margin: '30px', display: 'flex', flexDirection: 'column' }}>
//           <TextField
//             id="outlined-basic"
//             label="Password"
//             values={values.password}
//             name='password'
//             variant="outlined"
//             onBlur={handleBlur}
//             onChange={handleChange} />
//           {errors.password && <small>{errors.password}</small>}

//         </Box>
//         <Box sx={{ margin: '30px', display: 'flex', flexDirection: 'column' }}>
//           <TextField
//             id="outlined-basic"
//             label="ConfirmPassword"
//             values={values.confirmPassword}
//             name='confirm'
//             variant="outlined"
//             onBlur={handleBlur}
//             onChange={handleChange} />
//           {errors.confirmPassword && <small>{errors.confirmPassword}</small>}

//         </Box>
//         <Box sx={{ margin: '30px', display: 'flex', flexDirection: 'column' }}>
//           <Button variant="contained" type='submit'>Text</Button>
//         </Box>

//       </form >
//     </Box>
//   )
// }
