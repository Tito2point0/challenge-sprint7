import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup.string()
    .trim()
    .required('name is required')
    .min(2, 'name must be at least 2 characters'),
    size: yup.string()
        .oneOf(["small", "medium", "large", "extraLarge"], "please select one of these yooo!")
        .required('Pizza size is required'),
  cheese: yup.boolean(),
  pepperoni: yup.boolean(),
  ham: yup.boolean(),
  pinnapple: yup.boolean(),
  specialInstructions: yup.string()
  .trim(),
   
  
});

export default formSchema;
