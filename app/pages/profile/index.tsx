import UserProfileComponent from "~/components/profile/profileDetails";
import PageTitle from "~/components/shared/pageTitle";
import ProfileHeader from "~/components/shared/ProfileHeader";

const profileDetails = {
    "user_id": "a662d264-b051-703d-a029-89aecefc9075",
    "first_name": "Chinmay",
    "last_name": "Anaokar",
    "initials": "CA",
    "email_id": "canaokar@gmail.com",
    "role": "admin",
    "phone_number": "07311 245 235",
    "address": "Flat 3303, 100A, George street ",
    "city": "Croydon",
    "country": "United Kingdom",
    "post_code": "CR0 1GP",
    "date_of_birth": "1995-11-16T00:00:00.000Z",
    "next_of_kin_name": "Juee Anaokar",
    "next_of_kin_number": "+ 44 7440606464",
    "license_type": null,
    "license_number": "XYZ",
    "wallet_balance": "10000.00",
    "favourite_instructor": "Murray Jenkins",
    "favourite_aircraft": "G-LSFT",
    "current_medical_file_id": null,
    "current_medical_expiry": "2025-01-23T00:00:00.000Z",
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
    "user_bio": "I write code",
    "profile_image_url": "https://res.cloudinary.com/doahxfhjj/image/upload/v1734373964/ft5leuhqheqznyotmdjn.jpg",
    "medical_file_url": "notHaving",
    "pilot_licence_file_url": "45666",
    "favourite_primary_instructor": null,
    "favourite_secondary_instructor": null,
    "favourite_primary_aircraft": null,
    "favourite_secondary_aircraft": null,
    "user_signature_url": "https://res.cloudinary.com/doahxfhjj/image/upload/v1740915769/tozm6r7yu6hlebgcktoj.png",
    "organisation_id": [
        "6ce72bae-8ea2-4193-b457-df97889eeba4",
        "3eff1933-981c-46b8-9087-1aaa9e2a6a3a",
        "bd140973-a38f-43b3-84c0-36d4c6de7208"
    ],
    "skills": [],
    "medical_history": "None",
    "billing_rate": null,
    "hire_rate": null,
    "email_preferences": [],
    "subscription_level": 1,
    "hours_in_pack": 0,
    "mins_left_in_pack": 0,
    "landings_left_in_pack": 0,
    "cbga_uid": 5203,
    "gender": 1,
    "created_on": "2023-01-25T00:00:00.000Z",
    "updated_on": "2024-05-14T00:00:00.000Z",
    "created_by": null,
    "updated_by": null,
    "exams_validity_expiry_date": null,
    "medical_certificate_type": "Class 2",
    "fi_restricted": false,
    "exam_portal_registration": false,
    "course_id": [
        "0e8b3fe2-3f63-4038-9b0d-e0382d808c65"
    ],
    "billing_id": null,
    "is_user_consent_signed": null,
    "system_defaults": {
        "rule_id": "7d10a74c-fb46-40d0-a7e2-e7b34a771c40",
        "max_file_size": 25
    },
    "org_details": {
        "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
        "organisation_name": "EFG Flying School",
        "organisation_logo_url": "https://res.cloudinary.com/doahxfhjj/image/upload/v1736427764/hm9xmv6yl7jwzahcbhgc.png",
        "title": [
            "dev",
            "Invoice_FLCN0004"
        ],
        "urls": [
            "https://res.cloudinary.com/doahxfhjj/image/upload/v1734436671/mjpk6fa1bqcv3pdnvfvu.pdf",
            "https://res.cloudinary.com/doahxfhjj/image/upload/v1734720662/yjzhtkr94aomzermebeq.pdf"
        ],
        "address": "London Biggin Hill Airport",
        "slot_time": 2,
        "phone_number": "+44 12334455",
        "email_id": "falcon@aero.com"
    }
}

const Profile = () => {
    return (
        <div className="container mx-auto p-6">
            <PageTitle
                title="Profile"
                description="Your profile information"
            />
            <ProfileHeader
                first_name="Chinmay"
                last_name="Anaokar"
                role="Admin"
                email_id="canaokar@gmail.com"
                profile_image_url="https://res.cloudinary.com/doahxfhjj/image/upload/v1734373964/ft5leuhqheqznyotmdjn.jpg"
            />
            <div className="h-10" />
            <UserProfileComponent
                profileDetails={profileDetails}
            />
        </div>
    );
};

export default Profile;