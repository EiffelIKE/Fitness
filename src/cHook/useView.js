import { useNavigate } from 'react-router-dom';

const useView = url => {
    const navigate = useNavigate()

    return (
     navigate(url)
    );
};

export default useView;