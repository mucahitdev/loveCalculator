import * as yup from 'yup';


let Schema = yup.object().shape({
    name: yup.string().required('Bu alan zorunludur.').min(3,"En az üç karakter girilmeli"),
    second: yup.string('Girilen değerler sayı olmamalı').required('Bu alan zorunludur.').min(3,"En az üç karakter girilmeli"),
    
});
export default Schema