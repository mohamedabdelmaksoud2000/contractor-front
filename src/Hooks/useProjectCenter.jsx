import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { useEffect, useState } from 'react';


function useProjectCenter() {
    const [age1, setAge] = useState('');
    const [age2, setAge2] = useState('');

    const [AddProject, setAddProject] = useState(false)


    const HandleAddProject = () => {
        setAddProject(!AddProject)

        console.log(AddProject);
    }


    useEffect(() => {

        if (AddProject) {
            document.querySelector(".BigMain").setAttribute("status", true)
        } else {
            document.querySelector(".BigMain").removeAttribute("status")
        }

    }, [AddProject])


    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));


    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleChange2 = (event) => {
        setAge2(event.target.value);
    };

    return {
        Search,
        SearchIconWrapper,
        StyledInputBase,
        handleChange,
        handleChange2,
        age1,
        age2,
        AddProject,
        HandleAddProject
    }

}

export default useProjectCenter
