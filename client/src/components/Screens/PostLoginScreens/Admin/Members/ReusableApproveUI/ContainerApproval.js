import React from "react";
import {color2} from '../../../../../constants/colors';

function ContainerApproval(props){

    // console.log(props);
    const userInfo = props.userInfo;

    const main__Container = {
        display: 'flex',
        width: '100%',
        marginBottom: '10px',
        border: 'dashed black 2px',
        padding: '20px',
        background: color2,
        borderRadius: '10px'
    }   

    const image__Container = {
        borderRight: '1px solid black'
    }

    const content__Container = {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        marginLeft: '25px',
        alignItem: 'center',
        width: '100%',
        wordWrap:'break-word',
        textAlign:'left',

        // margin: 'auto'
        // justifyContent: 'center'
    }

    const row__Data = {
        display: 'flex',
        // width: '100%',
        justifyContent: 'space-between',
        flexDirection:'row',
        flexWrap:'wrap',
    }

    return(
        <div style ={main__Container}>
            
            <div style = {image__Container}>
                <h1>User IMAGE</h1>
            </div>

            <div style = {content__Container} >

                <div style = {row__Data} >
                    {/* Sal + Name */}
                    {userInfo.userSalutation}  {userInfo.userName}

                    {/* <div>{userInfo.userSalutation}.</div>
                    <div>{userInfo.userName}</div> */}
                </div>

                <div>
                    {/* Email */}
                    {userInfo.userEmail}
                </div>

                <div style = {row__Data} >
                    {/* Gender + DOB */}
                    <div>Gender: {userInfo.userGender}</div>
                    <div>DOB: {userInfo.userDOB}</div>
                </div>

                <div>
                    {/* City */}
                    City: {userInfo.userCity}
                </div>

                <div style = {row__Data} >
                    {/* Course + Batch */}
                    <div>Course&Branch: {userInfo.userCourseAndBranch}</div>
                    <div>Batch: {userInfo.userBatch}</div>
                </div>

                <div>
                    {/* Roll Number */}
                    Enrollment Number: {userInfo.userEnrollmentNumber}
                </div>

                <div>
                    {/* Mobile Number */}
                    Phone Number: +91-{userInfo.userMobile}
                </div>

            </div>

        </div>
    )
}

export default ContainerApproval;