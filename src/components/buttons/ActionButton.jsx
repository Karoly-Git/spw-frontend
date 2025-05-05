export default function ActionButton({ className, type, name, text, onClick }) {
    return (
        <button className={className} type={type} name={name} onClick={onClick}>
            {text}
        </button>
    )
}
