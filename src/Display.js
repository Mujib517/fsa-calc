// vitual DOM
function Display({ text }) {
    return <div>
        <input disabled={true} dir="rtl"
            value={text} type="text" className="form-control" />
    </div>
}

export default Display;
