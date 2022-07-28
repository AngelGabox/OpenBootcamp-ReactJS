import React, {useRef} from 'react'
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TasksForm = ({add}) => {


    const initialValues = {
        name: '',
        description: '',
        level: LEVELS.NORMAL
    }
    const registerSchema = Yup.object().shape({
        name: Yup.string()
            .min(5, 'Too short')
            .max(18, 'Too long')
            .required('is requiered'),
        description: Yup.string()
            .min(12, 'Too short')
            .required(' Please a description'),
        level: Yup.string()
            .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'You must to specefic the level of urgency')
            .required('Role is required'),
    })

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask({name, description, level}){
        const newTask = new Task(
            name,
            description,
            false,
            level
        );
        //Function that receives from the parent to add tasks
        add(newTask);
    }
  return (
    <div>
        <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit= {values => addTask(values)}
        >
            {({touched,
                    errors,}) => (
                        <Form style={{display: 'flex', flexDirection: 'column'}}>
                            <label htmlFor="title">Name</label>
                            <Field id="username" type="text" name="name" placeholder="Name of the Task" />
                            
                            {/* Name Errors */}
                            {
                                errors.name && touched.name && 
                                (
                                    <ErrorMessage name="name" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="description">Description</label>
                            <Field id="description" type="text" name="description" placeholder="description of the task" />

                            {/* Description Errors */}
                            {
                                errors.description && touched.description && 
                                (
                                    <ErrorMessage name="description" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="location">Level of urgency</label>
                            <Field component="select" id="level" name="level" >
                                <option value={LEVELS.NORMAL}>NORMAL</option>
                                <option value={LEVELS.URGENT}>URGENT</option>
                                <option value={LEVELS.BLOCKING}>BLOCKING</option>
                            </Field>
                            {/* Password Errors */}
                            {
                                errors.password && touched.password && 
                                (
                                    <ErrorMessage name="password" component='div'></ErrorMessage>
                                )
                            }
                            <button type="submit">Add Task</button>
                            {/* {isSubmitting ? (<p>Sending your credentials...</p>): null} */}

                        </Form>
                    )
            }
        </Formik>
    </div>
  )
}
TasksForm.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TasksForm