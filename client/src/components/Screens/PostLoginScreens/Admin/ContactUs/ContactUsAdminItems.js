import React, { useEffect, useState } from 'react';
import { getContactUsFormData } from '../../../../service/api';

function ContactUsAdminItems(){

    const [contactUsData, setContactUsData] = useState([]);

    useEffect(async () => {
        const apiInformation = await getContactUsFormData();
        setContactUsData([
            ...apiInformation.contactUsFormData
        ])
    }, [])

    console.log(contactUsData);

    return(
        <h1>hello</h1>
        
    )
}

export default ContactUsAdminItems;