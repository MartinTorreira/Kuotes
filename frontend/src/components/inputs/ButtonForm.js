import { useNavigate } from 'react-router-dom'

export const ButtonForm = ({label, path}) => {
    
    const navigate = useNavigate();

    const handleNavigate = (route) => {
        navigate(route)
    }
    
    return (
        <>
            <button onClick={() => handleNavigate(path)} 
                className="font-bold text-blue-500 hover:underline mb-10">{label}
            </button>
        </>
    )
}