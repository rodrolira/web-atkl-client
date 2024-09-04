import Select from 'react-select'
import { useTranslation } from 'react-i18next'

const MultiSelect = ({
    field,
    form,
    options,
    isMulti = false,
    placeholder = 'Select',
}) => {
    const { t } = useTranslation()

    const onChange = (option) => {
        form.setFieldValue(
            field.name,
            option ? option.map(item => item.value) : []
        )
    }

    const getValue = () => {
        if (options) {
            return isMulti
                ? options.filter(option => field.value.indexOf(option.value) >= 0)
                : options.find(option => option.value === field.value)
        }
        return isMulti ? [] : ''
    }

    return (
        <Select
            className={isMulti ? 'react-select-container' : ''}
            classNamePrefix={isMulti ? 'react-select' : ''}
            options={options}
            name={field.name}
            value={getValue()}
            onChange={isMulti ? onChange : (option) => form.setFieldValue(field.name, option.value)}
            onBlur={field.onBlur}
            isMulti={isMulti}
            placeholder={t(placeholder)} // Traducir el placeholder
        />
    )
}

export default MultiSelect
