import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterDoctorComponent} from "./register-doctor/register-doctor.component";
import {UnregisteredIndexComponent} from "./unregistered-index/unregistered-index.component";
import {AboutComponent} from "./about/about.component";
import {LoginDoctorComponent} from "./login-doctor/login-doctor.component";
import {LoginPatientComponent} from "./login-patient/login-patient.component";
import {RegisterPatientComponent} from "./register-patient/register-patient.component";
import {DoctorProfileComponent} from "./doctor-profile/doctor-profile.component";
import {DoctorsComponent} from "./doctors/doctors.component";
import {DoctorViewsComponent} from "./doctor-views/doctor-views.component";
import {DoctorAnyComponent} from "./doctor-any/doctor-any.component";
import {PatientProfileComponent} from "./patient-profile/patient-profile.component";
import {PatientCalendarComponent} from "./patient-calendar/patient-calendar.component";
import {PatientDoctorComponent} from "./patient-doctor/patient-doctor.component";
import {PatientDoctorsComponent} from "./patient-doctors/patient-doctors.component";
import {PatientNotificationsComponent} from "./patient-notifications/patient-notifications.component";
import {ManagerRegisterDoctorComponent} from "./manager-register-doctor/manager-register-doctor.component";
import {ManagerProfileComponent} from "./manager-profile/manager-profile.component";
import {ManagerPromotionsComponent} from "./manager-promotions/manager-promotions.component";
import {ManagerMedicineChangesComponent} from "./manager-medicine-changes/manager-medicine-changes.component";

const routes: Routes = [
    {path: "", component: UnregisteredIndexComponent},
    {path: "about", component: AboutComponent},
    {path: "doctors", component: DoctorsComponent},
    {path: "loginDoctor", component: LoginDoctorComponent},
    {path: "loginPatient", component: LoginPatientComponent},
    {path: "registerDoctor", component: RegisterDoctorComponent},
    {path: "registerPatient", component: RegisterPatientComponent},

    {path: "doctor", component: DoctorProfileComponent},
    {path: "doctor/profile", component: DoctorProfileComponent},
    {path: "doctor/views", component: DoctorViewsComponent},
    {path: "doctor/any", component: DoctorAnyComponent},

    {path: "patient", component: PatientProfileComponent},
    {path: "patient/profile", component: PatientProfileComponent},
    {path: "patient/calendar", component: PatientCalendarComponent},
    {path: "patient/doctor", component: PatientDoctorComponent},
    {path: "patient/doctors", component: PatientDoctorsComponent},
    {path: "patient/notifications", component: PatientNotificationsComponent},


    {path: "manager", component: ManagerProfileComponent},
    {path: "manager/profile", component: ManagerProfileComponent},
    {path: "manager/registerDoctor", component: ManagerRegisterDoctorComponent},
    {path: "manager/promotions", component: ManagerPromotionsComponent},
    {path: "manager/medicineChanges", component: ManagerMedicineChangesComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
