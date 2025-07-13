import PageTitle from "~/components/shared/pageTitle";
import ProfileHeader from "~/components/shared/ProfileHeader";
import { ViewRecord } from "~/components/training-records/ViewRecord";

const userData = {
    "user_id": "86d232d4-9021-707d-70c6-61a38a5212fb",
    "first_name": "Robert ",
    "last_name": "Messenger",
    "initials": "RM",
    "email_id": "bob@vampyrebat.com",
    "role": "member",
    "phone_number": "07747 038 039",
    "address": "8 Hayesford Park Drive",
    "city": "Bromley",
    "country": null,
    "post_code": "BR2 9DB",
    "date_of_birth": null,
    "next_of_kin_name": null,
    "next_of_kin_number": null,
    "license_type": null,
    "license_number": "564212D",
    "wallet_balance": "0",
    "favourite_instructor": null,
    "favourite_aircraft": null,
    "current_medical_file_id": null,
    "current_medical_expiry": "2026-03-17T00:00:00.000Z",
    "gdpr_consent": false,
    "is_license_holder": true,
    "sep_expiry_date": null,
    "mep_expiry_date": null,
    "ir_se_expiry_date": null,
    "ir_me_expiry_date": null,
    "ir_r_expiry_date": null,
    "fi_expiry_date": null,
    "display_authorization_exp_date": null,
    "night_rating": false,
    "aerobatic_rating": false,
    "user_bio": null,
    "profile_image_url": null,
    "medical_file_url": null,
    "pilot_licence_file_url": null,
    "favourite_primary_instructor": null,
    "favourite_secondary_instructor": null,
    "favourite_primary_aircraft": null,
    "favourite_secondary_aircraft": null,
    "user_signature_url": null,
    "organisation_id": [
        "6ce72bae-8ea2-4193-b457-df97889eeba4"
    ],
    "skills": [],
    "hire_rate": null,
    "email_preferences": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13"
    ],
    "subscription_level": 1,
    "hours_in_pack": null,
    "mins_left_in_pack": null,
    "landings_left_in_pack": null,
    "cbga_uid": 3965,
    "gender": 1,
    "created_on": "2021-12-22T00:00:00.000Z",
    "updated_on": "2024-05-16T00:00:00.000Z",
    "created_by": null,
    "updated_by": null,
    "exams_validity_expiry_date": null,
    "medical_certificate_type": "Class 2",
    "fi_restricted": false,
    "exam_portal_registration": false,
    "course_id": [
        "d2d74782-f0de-4fa4-bc75-ebc6575ecd0e",
        "9eef0bba-f32d-49d3-b33d-f9f5c4cbad84",
        "0e8b3fe2-3f63-4038-9b0d-e0382d808c65"
    ],
    "billing_id": null
}

const TrainingRecord = () => {
    return (
        <div className="container mx-auto p-6">
            <PageTitle
                title="Training Record"
                description="Manage your training records."
            />
            {/* <ProfileHeader
                first_name={userData.first_name}
                last_name={userData.last_name}
                role={userData.role}
                email_id={userData.email_id}
                profile_image_url={userData.profile_image_url}
            /> */}
            <ViewRecord
                first_name={userData.first_name}
                last_name={userData.last_name}
                role={userData.role}
                email_id={userData.email_id}
                profile_image_url={userData.profile_image_url}
                course_id={userData.course_id}
            />
        </div>
    );
};

export default TrainingRecord;