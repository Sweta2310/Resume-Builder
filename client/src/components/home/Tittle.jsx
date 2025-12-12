import React from 'react';

const Tittle = ({tittle,description}) =>{
    return (
        <div className="text-center text-slate-700 mb-4">
        <h2 className="text-3xl sm:text-4xl font-medium">{tittle}</h2>
        <p className="max-w-2xl mx-auto mt-2 text-slate-500">{description}</p>
        </div>
    );
}
export default Tittle;