import { DollarSign, Image, Plane, Save, Settings, Upload, X, User, Mail, Phone, MapPin, Calendar, FileText, Award, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Input } from "~/components/ui/input";

export interface ProfileDetails {
    user_id: string;
    first_name: string;
    last_name: string;
    initials: string | null;
    email_id: string | null;
    role: string | null;
    phone_number: string | null;
    address: string | null;
    city: string | null;
    country: string | null;
    post_code: string | null;
    date_of_birth: Date | null | string;
    next_of_kin_name: string | null;
    next_of_kin_number: string | null;
    license_type: string | null;
    license_number: string | null;
    wallet_balance: string | null; // Changed from string to match data
    favourite_instructor: string | null;
    favourite_aircraft: string | null;
    course_id: string[];
    current_medical_file_id: number | null;
    current_medical_expiry: string | null;
    gdpr_consent: boolean;
    is_license_holder: boolean;
    sep_expiry_date: Date | string | null; // Added string type
    mep_expiry_date: Date | string | null; // Added string type
    ir_se_expiry_date: Date | string | null; // Added string type
    ir_me_expiry_date: Date | string | null; // Added string type
    ir_r_expiry_date: Date | string | null; // Added string type
    fi_expiry_date: Date | string | null; // Added string type
    display_authorization_exp_date: Date | string | null; // Added string type
    night_rating: boolean;
    aerobatic_rating: boolean;
    user_bio: string;
    profile_image_url: string | null;
    medical_file_url: string | null;
    pilot_licence_file_url: string | null;
    favourite_primary_instructor: string | null;
    favourite_secondary_instructor: string | null;
    favourite_primary_aircraft: string | null; // Changed from number to string
    favourite_secondary_aircraft: string | null; // Changed from number to string
    medical_history: string | null;
    user_signature_url: string | null;
    skills: string[];
    // Add missing properties from the data
    organisation_id?: string[];
    billing_rate?: number | null;
    hire_rate?: number | null;
    email_preferences?: string[];
    subscription_level?: number;
    hours_in_pack?: number;
    mins_left_in_pack?: number;
    landings_left_in_pack?: number;
    cbga_uid?: number;
    gender?: number;
    created_on?: string;
    updated_on?: string;
    created_by?: string | null;
    updated_by?: string | null;
    exams_validity_expiry_date?: string | null;
    medical_certificate_type?: string;
    fi_restricted?: boolean;
    exam_portal_registration?: boolean;
    billing_id?: string | null;
    is_user_consent_signed?: boolean | null;
    system_defaults?: {
        rule_id: string;
        max_file_size: number;
    };
    org_details?: {
        organisation_id: string;
        organisation_name: string;
        organisation_logo_url: string;
        title: string[];
        urls: string[];
        address: string;
        slot_time: number;
        phone_number: string;
        email_id: string;
    };
}

type ProfileDetailsProps = {
    profileDetails: ProfileDetails;
}

export default function UserProfileComponent(
    props: ProfileDetailsProps
) {
    const [formData, setFormData] = useState<ProfileDetails>(props.profileDetails);
    const [imagePreview, setImagePreview] = useState<string | null>(props.profileDetails.profile_image_url);
    const [isDragOver, setIsDragOver] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({
                ...prev,
                [name]: checked
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const InputField = ({
        label,
        name,
        type = "text",
        placeholder = "",
        required = false,
        className = ""
    }: {
        label: string;
        name: keyof ProfileDetails;
        type?: string;
        placeholder?: string;
        required?: boolean;
        className?: string;
    }) => (
        <div className={`space-y-2 ${className}`}>
            <label htmlFor={name} className="block text-sm font-medium">
                {label} {required && <span className="text-red-400">*</span>}
            </label>
            <Input
                type={type}
                id={name}
                name={name}
                value={(formData[name] as string) || ""}
                onChange={handleInputChange}
                placeholder={placeholder}
                required={required}
            />
        </div>
    );


    const TextAreaField = ({
        label,
        name,
        placeholder = "",
        required = false,
        rows = 3
    }: {
        label: string;
        name: keyof ProfileDetails;
        placeholder?: string;
        required?: boolean;
        rows?: number;
    }) => (
        <div className="space-y-2">
            <label htmlFor={name} className="block text-sm font-medium">
                {label} {required && <span className="text-red-400">*</span>}
            </label>
            <textarea
                id={name}
                name={name}
                value={formData[name] as string || ""}
                onChange={handleInputChange}
                placeholder={placeholder}
                required={required}
                rows={rows}
                className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
        </div>
    );

    const CheckboxField = ({
        label,
        name,
        description = ""
    }: {
        label: string;
        name: keyof ProfileDetails;
        description?: string;
    }) => (
        <div className="flex items-start space-x-3">
            <input
                type="checkbox"
                id={name}
                name={name}
                checked={Boolean(formData[name])}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <div className="space-y-1">
                <label htmlFor={name} className="text-sm font-medium leading-none">
                    {label}
                </label>
                {description && (
                    <p className="text-xs text-muted-foreground">{description}</p>
                )}
            </div>
        </div>
    );

    const handleFileUpload = (file: File) => {
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result as string;
                setImagePreview(result);
                setFormData(prev => ({
                    ...prev,
                    profile_image_url: result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) {
            handleFileUpload(files[0]);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            handleFileUpload(file);
        }
    };

    const removeImage = () => {
        setImagePreview(null);
        setFormData(prev => ({
            ...prev,
            profile_image_url: ""
        }));
    };

    const handleReset = () => {
        setFormData(props.profileDetails);
        setImagePreview(null);
    };

    const handleSubmit = () => {
        console.log("User profile data:", formData);
        // Handle form submission here
    };

    return (
        <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="personalInfo" className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                        <TabsList className="flex flex-col h-auto w-full bg-transparent rounded-xl">
                            <TabsTrigger
                                value="personalInfo"
                                className="w-full justify-start mb-1 rounded-lg data-[state=active]:text-white data-[state=active]:bg-primary transition-all duration-200"
                            >
                                <User className="h-5 w-5 mr-3" />
                                Personal Info
                            </TabsTrigger>
                            <TabsTrigger
                                value="contactInfo"
                                className="w-full justify-start mb-1 rounded-lg data-[state=active]:text-white data-[state=active]:bg-primary transition-all duration-200"
                            >
                                <Mail className="h-5 w-5 mr-3" />
                                Contact Info
                            </TabsTrigger>
                            <TabsTrigger
                                value="licenses"
                                className="w-full justify-start mb-1 rounded-lg data-[state=active]:text-white data-[state=active]:bg-primary transition-all duration-200"
                            >
                                <Award className="h-5 w-5 mr-3" />
                                Licenses & Ratings
                            </TabsTrigger>
                            <TabsTrigger
                                value="medical"
                                className="w-full justify-start mb-1 rounded-lg data-[state=active]:text-white data-[state=active]:bg-primary transition-all duration-200"
                            >
                                <FileText className="h-5 w-5 mr-3" />
                                Medical & Documents
                            </TabsTrigger>
                            <TabsTrigger
                                value="preferences"
                                className="w-full justify-start mb-1 rounded-lg data-[state=active]:text-white data-[state=active]:bg-primary transition-all duration-200"
                            >
                                <Heart className="h-5 w-5 mr-3" />
                                Preferences
                            </TabsTrigger>
                            <TabsTrigger
                                value="profileImage"
                                className="w-full justify-start mb-1 rounded-lg data-[state=active]:text-white data-[state=active]:bg-primary transition-all duration-200"
                            >
                                <Image className="h-5 w-5 mr-3" />
                                Profile Image
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <div className="lg:col-span-3 bg-card rounded-xl">
                        <div className="rounded-xl p-6">
                            {/* Personal Information Tab */}
                            <TabsContent value="personalInfo" className="mt-0">
                                <div className="space-y-6">
                                    <div className="pb-4">
                                        <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
                                        <p className="">Basic personal details and identification</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputField
                                            label="First Name"
                                            name="first_name"
                                            placeholder="Enter first name"
                                            required
                                        />
                                        <InputField
                                            label="Last Name"
                                            name="last_name"
                                            placeholder="Enter last name"
                                            required
                                        />
                                        <InputField
                                            label="Initials"
                                            name="initials"
                                            placeholder="e.g., J.D."
                                        />
                                        <InputField
                                            label="Role"
                                            name="role"
                                            placeholder="e.g., Student Pilot, Instructor"
                                            required
                                        />
                                        <InputField
                                            label="Date of Birth"
                                            name="date_of_birth"
                                            type="date"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <TextAreaField
                                            label="Bio"
                                            name="user_bio"
                                            placeholder="Tell us about yourself..."
                                            rows={4}
                                        />
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Contact Information Tab */}
                            <TabsContent value="contactInfo" className="mt-0">
                                <div className="space-y-6">
                                    <div className="pb-4">
                                        <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
                                        <p className="">Contact details and address information</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputField
                                            label="Email Address"
                                            name="email_id"
                                            type="email"
                                            placeholder="Enter email address"
                                            required
                                        />
                                        <InputField
                                            label="Phone Number"
                                            name="phone_number"
                                            type="tel"
                                            placeholder="Enter phone number"
                                            required
                                        />
                                        <InputField
                                            label="Address"
                                            name="address"
                                            placeholder="Street address"
                                            className="md:col-span-2"
                                        />
                                        <InputField
                                            label="City"
                                            name="city"
                                            placeholder="Enter city"
                                        />
                                        <InputField
                                            label="Country"
                                            name="country"
                                            placeholder="Enter country"
                                        />
                                        <InputField
                                            label="Post Code"
                                            name="post_code"
                                            placeholder="Enter postal code"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold">Emergency Contact</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <InputField
                                                label="Next of Kin Name"
                                                name="next_of_kin_name"
                                                placeholder="Emergency contact name"
                                            />
                                            <InputField
                                                label="Next of Kin Number"
                                                name="next_of_kin_number"
                                                type="tel"
                                                placeholder="Emergency contact number"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Licenses & Ratings Tab */}
                            <TabsContent value="licenses" className="mt-0">
                                <div className="space-y-6">
                                    <div className="pb-4">
                                        <h2 className="text-2xl font-bold mb-2">Licenses & Ratings</h2>
                                        <p className="">Aviation licenses, ratings, and expiry dates</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputField
                                            label="License Type"
                                            name="license_type"
                                            placeholder="e.g., PPL, CPL, ATPL"
                                        />
                                        <InputField
                                            label="License Number"
                                            name="license_number"
                                            placeholder="Enter license number"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <CheckboxField
                                            label="License Holder"
                                            name="is_license_holder"
                                            description="Check if you currently hold a valid pilot license"
                                        />
                                        <CheckboxField
                                            label="Night Rating"
                                            name="night_rating"
                                            description="Authorized for night flying operations"
                                        />
                                        <CheckboxField
                                            label="Aerobatic Rating"
                                            name="aerobatic_rating"
                                            description="Authorized for aerobatic maneuvers"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold">Rating Expiry Dates</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <InputField
                                                label="SEP Expiry Date"
                                                name="sep_expiry_date"
                                                type="date"
                                            />
                                            <InputField
                                                label="MEP Expiry Date"
                                                name="mep_expiry_date"
                                                type="date"
                                            />
                                            <InputField
                                                label="IR SE Expiry Date"
                                                name="ir_se_expiry_date"
                                                type="date"
                                            />
                                            <InputField
                                                label="IR ME Expiry Date"
                                                name="ir_me_expiry_date"
                                                type="date"
                                            />
                                            <InputField
                                                label="IR R Expiry Date"
                                                name="ir_r_expiry_date"
                                                type="date"
                                            />
                                            <InputField
                                                label="FI Expiry Date"
                                                name="fi_expiry_date"
                                                type="date"
                                            />
                                            <InputField
                                                label="Display Authorization Expiry"
                                                name="display_authorization_exp_date"
                                                type="date"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Medical & Documents Tab */}
                            <TabsContent value="medical" className="mt-0">
                                <div className="space-y-6">
                                    <div className="pb-4">
                                        <h2 className="text-2xl font-bold mb-2">Medical & Documents</h2>
                                        <p className="">Medical information and document references</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputField
                                            label="Current Medical File ID"
                                            name="current_medical_file_id"
                                            type="number"
                                            placeholder="Medical file reference"
                                        />
                                        <InputField
                                            label="Medical Expiry Date"
                                            name="current_medical_expiry"
                                            type="date"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <TextAreaField
                                            label="Medical History"
                                            name="medical_history"
                                            placeholder="Relevant medical history or notes..."
                                            rows={4}
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <CheckboxField
                                            label="GDPR Consent"
                                            name="gdpr_consent"
                                            description="I consent to the processing of my personal data"
                                        />
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Preferences Tab */}
                            <TabsContent value="preferences" className="mt-0">
                                <div className="space-y-6">
                                    <div className="pb-4">
                                        <h2 className="text-2xl font-bold mb-2">Preferences</h2>
                                        <p className="">Favorite instructors, aircraft, and wallet information</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputField
                                            label="Wallet Balance"
                                            name="wallet_balance"
                                            type="text"
                                            placeholder="0.00"
                                        />
                                        <InputField
                                            label="Favourite Instructor"
                                            name="favourite_instructor"
                                            placeholder="Preferred instructor name"
                                        />
                                        <InputField
                                            label="Primary Instructor"
                                            name="favourite_primary_instructor"
                                            placeholder="Primary instructor preference"
                                        />
                                        <InputField
                                            label="Secondary Instructor"
                                            name="favourite_secondary_instructor"
                                            placeholder="Secondary instructor preference"
                                        />
                                        <InputField
                                            label="Favourite Aircraft"
                                            name="favourite_aircraft"
                                            placeholder="Preferred aircraft type"
                                        />
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Profile Image Tab */}
                            <TabsContent value="profileImage" className="mt-0">
                                <div className="space-y-6">
                                    <div className="pb-4">
                                        <h2 className="text-2xl font-bold mb-2">Profile Image</h2>
                                        <p className="">Upload a profile picture</p>
                                    </div>

                                    <div className="space-y-4">
                                        {!imagePreview ? (
                                            <div
                                                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${isDragOver
                                                    ? 'border-blue-500 bg-blue-50'
                                                    : 'border-gray-300 hover:border-gray-400'
                                                    }`}
                                                onDrop={handleDrop}
                                                onDragOver={handleDragOver}
                                                onDragLeave={handleDragLeave}
                                            >
                                                <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                                                <p className="text-lg font-medium mb-2">Drop your image here</p>
                                                <p className="text-gray-500 mb-4">or click to browse</p>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleFileInputChange}
                                                    className="hidden"
                                                    id="image-upload"
                                                />
                                                <label htmlFor="image-upload">
                                                    <Button variant="outline" type="button" className="cursor-pointer">
                                                        Choose File
                                                    </Button>
                                                </label>
                                            </div>
                                        ) : (
                                            <div className="space-y-4">
                                                <div className="relative inline-block">
                                                    <img
                                                        src={imagePreview}
                                                        alt="Profile preview"
                                                        className="max-w-md max-h-64 rounded-lg shadow-lg"
                                                    />
                                                    <button
                                                        onClick={removeImage}
                                                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                                                        type="button"
                                                    >
                                                        <X className="h-4 w-4" />
                                                    </button>
                                                </div>
                                                <div className="flex gap-2">
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={handleFileInputChange}
                                                        className="hidden"
                                                        id="image-replace"
                                                    />
                                                    <label htmlFor="image-replace">
                                                        <Button variant="default" type="button" className="cursor-pointer">
                                                            Replace Image
                                                        </Button>
                                                    </label>
                                                    <Button
                                                        variant="destructive"
                                                        onClick={removeImage}
                                                        type="button"
                                                        className="cursor-pointer"
                                                    >
                                                        Remove Image
                                                    </Button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </TabsContent>
                        </div>

                        <div className="mt-6 flex gap-1.5 justify-end m-5">
                            <Button variant="outline" onClick={handleReset}>
                                Reset
                            </Button>
                            <Button onClick={handleSubmit}>
                                Save Profile
                            </Button>
                        </div>
                    </div>
                </div>
            </Tabs>
        </div>
    );
}