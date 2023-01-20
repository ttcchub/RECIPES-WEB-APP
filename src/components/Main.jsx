import { Outlet } from 'react-router-dom';
import React from 'react';
const Main = () => {
    return (
    <main>
       <Outlet />
    </main>
    );
};
export default Main;