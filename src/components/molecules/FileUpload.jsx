import React from 'react'
import { useField, useFormikContext } from 'formik'
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const FileUpload = () => {
    const { t } = useTranslation()
    const [field, meta, helpers] = useField('image')
    const { setFieldValue } = useFormikContext()
    const { error, touched } = meta
    const isInvalid = touched && !!error
    const isValid = touched && !error

    return (
        <FormGroup className="mb-3" controlId="image">
            <FormLabel className="block text-gray-700 font-bold mb-2">
                {t('upload_profile_image')}
            </FormLabel>
            <FormControl
                name="image"
                type="file"
                className="shadow appearance-none border border-1 solid rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(event) => {
                    setFieldValue('image', event.currentTarget.files[0])
                }}
                isInvalid={isInvalid}
                isValid={isValid}
            />
            {isInvalid && (
                <FormControl.Feedback type="invalid">
                    {error}
                </FormControl.Feedback>
            )}
        </FormGroup>
    )
}

export default FileUpload
