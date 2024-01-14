import { FC } from 'react';
import PropTypes from 'prop-types';
import type { LayoutProps } from './types'
import { Outlet } from 'react-router-dom';

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            {children || <Outlet />}
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
