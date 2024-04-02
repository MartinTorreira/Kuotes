const ButtonSubmit = ({label, fn}) => {
    return(
        <div className="flex justify-center">
                    <button 
                        className="bg-transparent hover:bg-green-400 font-semibold hover:text-black py-2 px-4 border-2 border-green-400 hover:border-transparent rounded"
                        onSubmit={fn}>
                        {label}
                    </button>
        </div>
    )
}

export default ButtonSubmit;