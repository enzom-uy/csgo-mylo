import React from 'react'
import { NavLink } from 'react-router-dom'

const AddNade: React.FC = () => {
    return (
        <div>
            <h1 className="text-text-color drop-shadow-heading text-2xl">
                Todavía no está implementada esa funcionalidad. <br />
                <br />{' '}
                <NavLink
                    to="/"
                    className="text-lg text-red-500 hover:underline"
                >
                    Volver al inicio.
                </NavLink>
            </h1>
        </div>
    )
}

export default AddNade
