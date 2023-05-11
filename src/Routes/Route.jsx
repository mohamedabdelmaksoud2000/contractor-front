import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Tasks from '../components/Tasks/Tasks';
import Newtask from '../components/Nwetask/Newtask';
import TaskName from '../components/TaskName/TaskName';
import Projects from '../components/Projects/MainProject/Projects';
import Request from '../components/Request/Request';
import AddNewRequest from '../components/Request/componentsRequests/AddRequest';
import FooterRequset from '../components/Request/componentsRequests/FooterRequset';
import Clients from '../components/Clients/Clients';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Items from '../components/Items/Items';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Invoice from '../components/Invoice/Invoice';
import Expense from '../components/Expense/Expense';
import Job from '../components/Job/Job';
import FirstRoute from '../components/Job/center/RoutesJob/FirstRoute';
import SecoundRoute from '../components/Job/center/RoutesJob/SecoundRoute';
import Payment from '../components/Payment/Payment';
import Reports from '../components/Reports/Reports';
import Messages from '../components/Messages/Messages';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            
            {
                path: "payment",
                element: <Payment />,
            },
            {
                path: "messages",
                element: <Messages />,
            },
            {
                path: "task",
                element: <Tasks />,
            },
            {
                path: "items",
                element: <Items />,
            },
            {
                path: "expense",
                element: <Expense />,
            },
            {
                path: "invoice",
                element: <Invoice />,
            },
            {
                path: "job",
                element: <Job />,
                children: [
                    {index: true , element: <FirstRoute/>},
                    { path: "addJob", element: <SecoundRoute /> }
                ]
            },
            {
                path: "newtask",
                element: <Newtask />
            },
            {
                path: "taskName",
                element: <TaskName />
            },
            {
                path: "project",
                element: <Projects />
            },
            {
                path: "request",
                element: <Request />,
                children: [
                    { index: true, element: <FooterRequset /> },
                    { path: "addrequest", element: <AddNewRequest /> }
                ]
            },
            {
                path: "clients",
                element: <Clients />
            },
            {
                path: "reports",
                element: <Reports />
            },
        ]
    },
    {
        path: "login",
        element : <Login />,
    },
    {
        path: "register",
        element : <Register />,
    },
])
