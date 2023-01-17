import * as yup from "yup";

const checkFormErrors = (name, value, schema, obj, setObj ) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setObj({
          ...obj,
          [name]: ""
        });
      })
      .catch((err) => {
        setObj({
          ...obj,
          [name]: err.errors[0]
        });
      });

    return obj;
};
export {checkFormErrors};