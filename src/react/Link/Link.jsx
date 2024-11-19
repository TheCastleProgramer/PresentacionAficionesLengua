import React from 'react';
import './styles.css'; // Importar el archivo CSS

const Enlace = ({ href, children }) => {
    return (
        <a href={href} className="custom-link">
            {children}
        </a>
    );
};

export default Enlace;
