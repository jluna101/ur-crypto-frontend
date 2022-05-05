import React from 'react';

function Footer(props) {
    return (
        <div className='border-top border-grey mt-5'>
            <div className='w-25 mx-3'>
                <p className='text-primary fs-3 fw-bold'>urCrypto</p>
            </div>
            <p className=" fs-6 w-responsive text-muted mx-auto p-3 pt-3 mt-3 mb-1">© 2022 urCrypto. All rights reserved</p>
        </div>
    );
}

export default Footer;