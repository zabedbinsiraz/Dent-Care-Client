import React from 'react';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({ specificAppointment }) => {
    console.log(specificAppointment);
    return (
        <div>
            <h2 className="text-brand text-center">Appointments</h2>
            {
                specificAppointment.length ?
                 <AppointmentShortList specificAppointment={specificAppointment} ></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;