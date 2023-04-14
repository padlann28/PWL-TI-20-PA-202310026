import React from 'react'

export default function Widget1(props) {
    return (
        <div className="bg-body rounded shadow-sm p-5">
            <form method='post' autoComplete='off' clas1sName='form w-100' >
                <div className="text-center">
                    <h1 className='text-dark mb-2'>Widget One</h1>
                    <div className="text-secondary mb-3 fw-bold fs-5">
                        Please fill up this form correctly
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label fs-6 fw-bolder text-dark">Type the title of this web</label>
                    <input type="text" name="title" className='form-control form-control-lg form-control-solid' defaultValue={props.title}
                        onChange={(e) => props.setTitle(e.target.value)} />
                </div>

                <div className="text-center">
                    <button type='button' className='btn btn-lg btn-primary w-100 mb-5'>Submit</button>
                </div>
            </form>
        </div>
    )
}