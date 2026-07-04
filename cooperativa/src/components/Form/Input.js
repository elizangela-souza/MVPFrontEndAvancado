import styles from './Input.module.css';
function Input({ type, text, name, placeholder, min, max, step, handleOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input 
            type={type} 
            name={name} 
            id={name} 
            placeholder={placeholder} 
            min={min}
            max={max}
            step={step}
            onChange={handleOnChange}
            value={value} />
        </div>
    )
}

export default Input