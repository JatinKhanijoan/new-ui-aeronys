export interface PrfoileDetails {
    user_id: string
    first_name: string
    last_name: string
    initials: string
    email_id: string
    role: string
    phone_number: string
    address: string
    city: string
    country: string
    post_code: string
    date_of_birth: Date | null | string
    next_of_kin_name: string
    next_of_kin_number: string
    license_type: string
    license_number: string
    wallet_balance: number
    favourite_instructor: string
    favourite_aircraft: string
    course_id: string[]
    current_medical_file_id: number
    current_medical_expiry: Date | null
    gdpr_consent: boolean
    is_license_holder: boolean
    sep_expiry_date: Date | null
    mep_expiry_date: Date | null
    ir_se_expiry_date: Date | null
    ir_me_expiry_date: Date | null
    ir_r_expiry_date: Date | null
    fi_expiry_date: Date | null
    display_authorization_exp_date: Date | null
    night_rating: boolean
    aerobatic_rating: boolean
    user_bio: string
    profile_image_url: string
    medical_file_url: string
    pilot_licence_file_url: string
    favourite_primary_instructor: string
    favourite_secondary_instructor: string
    favourite_primary_aircraft: number
    favourite_secondary_aircraft: number
    medical_history: string
    user_signature_url: string
    skills:string[]
}