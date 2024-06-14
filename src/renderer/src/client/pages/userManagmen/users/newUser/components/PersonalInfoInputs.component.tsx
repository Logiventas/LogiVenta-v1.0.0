
const PersonalInfoInputs = ({ data, handleChange, prefix }) => {
    const fields = [
        { label: 'Nombres', ids: [`${prefix}firstName`, `${prefix}secondName`] },
        { label: 'Apellidos', ids: [`${prefix}surname`, `${prefix}secondSurname`] },
        { label: 'Teléfonos', ids: [`${prefix}phone1`, `${prefix}phone2`] }
    ];

    return (
        <>
            {fields.map(({ label, ids }) => (
                <div className="d-flex flex-column  flex-md-row" key={label}>
                   <div className="col-4 col-md-4 col-xl-3 "> <label className="col-form-label me-1" htmlFor={ids[0]}>{label}</label></div>
                    {ids.map(id => (
                        <input
                            key={id}
                            type="text"
                            className="form-control mb-2 ms-2 mb-lg-1"
                            id={id}
                            value={data[id] || ''}
                            onChange={handleChange}
                        />
                    ))}
                </div>
            ))}
            <div className="d-flex flex-column flex-md-row">
                <div className="col-4 col-xl-3">  <label className=" form-label me-1" htmlFor={`${prefix}email`}>Email</label></div>
                <input
                    type="email"
                    className=" form-control  my-1 ms-1 "
                    id={`${prefix}email`}
                    value={data[`${prefix}email`] || ''}
                    onChange={handleChange}
                />
            </div>
        </>
    );
};

export default PersonalInfoInputs;
