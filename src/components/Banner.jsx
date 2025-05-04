export default function Banner({ content, bannerId }) {
    return (
        <div id={bannerId} className='banner'>
            {content}
        </div>
    )
}
