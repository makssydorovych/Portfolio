import PropTypes from 'prop-types';
import { ReactNode } from 'react';

interface ErrorProps {
    children: ReactNode;
}
interface ErrorProps {
    children: ReactNode;
}
export default function Error({ children}: ErrorProps) {
    return <div className='form-error text-danger '>{children}</div>;
}

Error.proptTypes = {
    children: PropTypes.node.isRequired,
};
