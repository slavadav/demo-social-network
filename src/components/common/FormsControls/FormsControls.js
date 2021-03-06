import React from 'react'
import style from './FormsControls.module.css'

export const Textarea = ({input, meta: {error, touched}, ...props}) => {
    const errorControl = error && touched
    return (
        <div className={style.formControl + ' ' + (errorControl && style.error)}>
            <div>
                <textarea {...input} {...props} />
            </div>
            <div>
                { errorControl && <span>{error}</span> }
            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const errorControl = meta.error && meta.touched
    return (
        <div className={style.formControl + ' ' + (errorControl && style.error)}>
            <div>
                <input {...input} {...props} />
            </div>
            <div>
                { errorControl && <span>{meta.error}</span> }
            </div>
        </div>
    )
}