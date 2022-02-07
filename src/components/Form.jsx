import { useFormik } from 'formik';
import axios from "axios";
import validationSchema from './validation';

function Form({setRes,setShowCard}) {

    const { handleSubmit, handleChange, handleBlur, values,errors,touched} = useFormik({
        initialValues: {
            name: '',
            second: ""
        },
        onSubmit: values => {
            setShowCard(true)
            const options = {
                method: 'GET',
                url: 'https://love-calculator.p.rapidapi.com/getPercentage',
                params: { sname: values.name, fname: values.second },
                headers: {
                    'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
                    'x-rapidapi-key': '7b2a2aeff8mshe03cc69a9261992p1b83c0jsnf7bdf0e94446'
                }
            };
            axios.request(options).then(function (response) {
                setRes(response.data)
            }).catch(function (error) {
                console.error(error);
            });
        },
        validationSchema,
    });



    return (
        <div>
            <form className='col-8 me-auto ms-auto mt-5' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">1. Kişinin adı</label>
                    <input
                        type="text"
                        className="form-control shadow-none"
                        id="name"
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    { errors.name && touched.name && <div id="name1" className="form-text"> {errors.name} </div> }
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="name2" className="form-label">2. Kişinin adı</label>
                    <input type="text" className="form-control shadow-none" name='second' value={values.second} onChange={handleChange} onBlur={handleBlur}/>
                    { errors.second && touched.second && <div id="name1" className="form-text"> {errors.second} </div> }
                </div>
                <button className="btn btn-primary" type='submit'>Ölçüme başla</button>
            </form>
        </div>
    )
}

export default Form;
