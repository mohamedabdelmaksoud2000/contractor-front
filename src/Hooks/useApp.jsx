import { useEffect, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { ToDarkMode, ToLightMode } from '../Store/Type';


function useApp() {
    const drawerWidth = 240;

    const theme = useTheme();

    const [open, setOpen] = useState(true);

    const [width, setWidth] = useState()

    const [checked, setChecked] = useState(true);



    const ModeDarkMode = useSelector(state => state.modeReducer.mode)


    const dispatch = useDispatch()

    useEffect(() => {
        if(checked){
            dispatch({type: ToDarkMode})
        }else{
            dispatch({type: ToLightMode})
        }
    },[checked , dispatch])
    

    useEffect(() => {
        if (ModeDarkMode) {
            localStorage.setItem("mode", "true")
        }
        else {
            localStorage.setItem("mode", "false")
        }
    }, [ModeDarkMode])


    useEffect(() => {
        if(localStorage.getItem("mode") === "true"){
            setChecked(true)
        }else{
            setChecked(false)
        }
    },[])



    useEffect(() => {
        if (checked) {
            document.querySelector(".BigMain").setAttribute("dark", 'true')
        } else {
            document.querySelector(".BigMain").setAttribute("dark", 'false')
        }
    }, [checked])


    setInterval(() => {
        setWidth(window.innerWidth)
    }, 100)


    useEffect(() => {
        if (width <= 800) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }, [width])


    const handleDrawerOpenAndClose = () => {
        setOpen(!open);
    };


    const openedMixin = (theme) => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
    });

    const closedMixin = (theme) => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
    });

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));


    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            ...(open && {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
            }),
            ...(!open && {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
            }),
        }),
    );

    return { open, handleDrawerOpenAndClose, Drawer, DrawerHeader, theme, checked, setChecked }
}

export default useApp
