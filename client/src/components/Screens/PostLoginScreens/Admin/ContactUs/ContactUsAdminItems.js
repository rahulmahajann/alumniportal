import React, { useEffect, useState } from 'react';
import { color2 } from '../../../../constants/colors';
import { getContactUsFormData } from '../../../../service/api';

function ContactUsAdminItems(){

    const [contactUsData, setContactUsData] = useState([]);

    useEffect(async () => {
        const apiInformation = await getContactUsFormData();
        console.log(apiInformation);
        setContactUsData([
            ...apiInformation.contactUsFormData
        ])
    }, [])

    console.log(contactUsData);

    const contactUsAdminItemContainer = {
        display:'flex',
        flexDirection:'column',
        width:'100%',
        alignItems:'left',
        justifyContent:'center',
        margin:'10px 2px',
        borderBottom:`1px solid ${color2}`,
        textDecoration: 'none',
        color: 'inherit'
    }

    return(
        <>
            {
                contactUsData.map((item, ind) => {
                    return(
                        <div style = {contactUsAdminItemContainer}>
                            <p>Name: {item.userName}</p>
                            <p>Email: {item.userEmail}</p>
                            <p>PhoneNumber: {item.userPhoneNo}</p>
                            <p>Subject:{item.subject}</p>
                            <p>Message: {item.message}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ContactUsAdminItems;