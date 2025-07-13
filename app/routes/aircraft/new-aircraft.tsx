import { DollarSign, Image, Plane, Save, Settings, Upload, X } from "lucide-react";
import { useState } from "react";
import PageTitle from "~/components/shared/pageTitle";
import { Button } from "~/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Input } from "~/components/ui/input";
import type { Aircraft } from "~/components/aircraft/types";

const NewAircraftPage: React.FC = () => {
    const [formData, setFormData] = useState<Aircraft>({
        aircraft_id: "",
        registration_number: "",
        type: "",
        active_status: false,
        billing_rate: "",
        hire_rate: "",
        max_takeoff_weight: "",
        empty_weight: "",
        empty_weight_level_arm: "",
        row1_seats_level_arm: "",
        row2_seats_level_arm: "",
        row3_seats_level_arm: "",
        row4_seats_level_arm: "",
        baggage_forward_level_arm: "",
        baggage_rear_level_arm: "",
        fuel_level_arm: "",
        fuel_consumption: "",
        fuel_capacity: "",
        envelope_forward_limit: "",
        envelope_forward_limit_max_weight: "",
        max_weight_aft_limit: "",
        envelope_max_weight_aft_limit_min_weight: "",
        envelope_empty_weight_aft_limit: "",
        image_address: "",
        minimum_charge_time: "",
        landing_charge: "",
        tgl_charge: "",
        approach_charge: "",
        hours_account_factor: "",
        time_adjust: "",
        company_name: "",
        model_name: "",
        organisation_id: [],
        files_url: [],
        billing_id: "",
    });

    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isDragOver, setIsDragOver] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const InputField = ({ label, name, type = "text", placeholder = "", required = false }: { label: string, name: keyof typeof formData, type?: string, placeholder?: string, required?: boolean }) => (
        <div className="space-y-2">
            <label htmlFor={name} className="block text-sm font-medium">
                {label} {required && <span className="text-red-400">*</span>}
            </label>
            <Input
                type={type}
                id={name}
                name={name}
                value={formData[name] as string}
                onChange={handleInputChange}
                placeholder={placeholder}
                required={required}
            />
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
                    image_address: result
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
            image_address: ""
        }));
    };

    const handleSubmit = () => {
        console.log('Aircraft Registration Data:', formData);
        alert('Aircraft data logged to console! Check the browser console.');
    };

    const handleReset = () => {
        setFormData({
            aircraft_id: "",
            registration_number: "",
            type: "",
            active_status: false,
            billing_rate: "",
            hire_rate: "",
            max_takeoff_weight: "",
            empty_weight: "",
            empty_weight_level_arm: "",
            row1_seats_level_arm: "",
            row2_seats_level_arm: "",
            row3_seats_level_arm: "",
            row4_seats_level_arm: "",
            baggage_forward_level_arm: "",
            baggage_rear_level_arm: "",
            fuel_level_arm: "",
            fuel_consumption: "",
            fuel_capacity: "",
            envelope_forward_limit: "",
            envelope_forward_limit_max_weight: "",
            max_weight_aft_limit: "",
            envelope_max_weight_aft_limit_min_weight: "",
            envelope_empty_weight_aft_limit: "",
            image_address: "",
            minimum_charge_time: "",
            landing_charge: "",
            tgl_charge: "",
            approach_charge: "",
            hours_account_factor: "",
            time_adjust: "",
            company_name: "",
            model_name: "",
            organisation_id: [],
            files_url: [],
            billing_id: "",
        });
    }

    return (
        <div className="container mx-auto p-6">
            <PageTitle
                title="Add New Aircraft"
                description="Add a new aircraft to the fleet."
            />
            <div>
                <Tabs defaultValue="generalInformation" className="w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        <div className="lg:col-span-1">
                            <TabsList className="flex flex-col h-40 w-full bg-transparent rounded-xl">
                                <TabsTrigger
                                    value="generalInformation"
                                    className="w-full justify-start mb-1 rounded-lg data-[state=active]:text-white data-[state=active]:bg-primary transition-all duration-200"
                                >
                                    <Plane className="h-5 w-5 mr-3" />
                                    General Information
                                </TabsTrigger>
                                <TabsTrigger
                                    value="invoicing"
                                    className="w-full justify-start mb-1 rounded-lg data-[state=active]:text-white data-[state=active]:bg-primary transition-all duration-200"
                                >
                                    <Settings className="h-5 w-5 mr-3" />
                                    Invoicing
                                </TabsTrigger>
                                <TabsTrigger
                                    value="massBalance"
                                    className="w-full justify-start mb-1 rounded-lg data-[state=active]:text-white data-[state=active]:bg-primary transition-all duration-200"
                                >
                                    <DollarSign className="h-5 w-5 mr-3" />
                                    Mass and Balance
                                </TabsTrigger>
                                <TabsTrigger
                                    value="image"
                                    className="w-full justify-start mb-1 rounded-lg data-[state=active]:text-white data-[state=active]:bg-primary transition-all duration-200"
                                >
                                    <Image className="h-5 w-5 mr-3" />
                                    Upload Image
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        <div className="lg:col-span-3 bg-card rounded-xl">
                            <div className="rounded-xl p-6">
                                <TabsContent value="generalInformation" className="mt-0">
                                    <div className="space-y-6">
                                        <div className="pb-4">
                                            <h2 className="text-2xl font-bold mb-2">General Information</h2>
                                            <p className="">Basic information about the aircraft</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <InputField
                                                label="Registration Number"
                                                name="registration_number"
                                                placeholder="e.g., N123AB"
                                                required
                                            />
                                            <InputField
                                                label="Aircraft Type"
                                                name="type"
                                                placeholder="e.g., Commercial, Private, Charter"
                                                required
                                            />
                                            <InputField
                                                label="Billing Rate"
                                                name="billing_rate"
                                                placeholder="e.g., 150.00"
                                                required
                                            />
                                            <InputField
                                                label="Company Name"
                                                name="company_name"
                                                placeholder="e.g., ABC Aviation"
                                                required
                                            />
                                            <div className="md:col-span-2">
                                                <InputField
                                                    label="Model Name"
                                                    name="model_name"
                                                    placeholder="e.g., Boeing 737-800, Cessna Citation"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="invoicing" className="mt-0">
                                    <div className="space-y-6">
                                        <div className="pb-4">
                                            <h2 className="text-2xl font-bold mb-2">Invoicing</h2>
                                            <p className="">Billing and invoicing related settings</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <InputField
                                                label="Time Adjust"
                                                name="time_adjust"
                                                placeholder="e.g., 0.1"
                                            />
                                            <InputField
                                                label="Minimum Charge Time"
                                                name="minimum_charge_time"
                                                placeholder="e.g., 1.0"
                                            />
                                            <InputField
                                                label="Landing Charge"
                                                name="landing_charge"
                                                placeholder="e.g., 75.00"
                                            />
                                            <InputField
                                                label="TGL Charge"
                                                name="tgl_charge"
                                                placeholder="e.g., 25.00"
                                            />
                                            <InputField
                                                label="Approach Charge"
                                                name="approach_charge"
                                                placeholder="e.g., 50.00"
                                            />
                                            <InputField
                                                label="Hours Account Factor"
                                                name="hours_account_factor"
                                                placeholder="e.g., 1.0"
                                            />
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="massBalance" className="mt-0">
                                    <div className="space-y-6">
                                        <div className="pb-4">
                                            <h2 className="text-2xl font-bold mb-2">Mass and Balance</h2>
                                            <p className="">Weight and balance specifications</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <InputField
                                                label="Max Takeoff Weight"
                                                name="max_takeoff_weight"
                                                placeholder="e.g., 79000"
                                            />
                                            <InputField
                                                label="Empty Weight"
                                                name="empty_weight"
                                                placeholder="e.g., 45000"
                                            />
                                            <InputField
                                                label="Empty Weight Level Arm"
                                                name="empty_weight_level_arm"
                                                placeholder="e.g., 25.5"
                                            />
                                            <InputField
                                                label="Row 1 Seats Level Arm"
                                                name="row1_seats_level_arm"
                                                placeholder="e.g., 12.0"
                                            />
                                            <InputField
                                                label="Row 2 Seats Level Arm"
                                                name="row2_seats_level_arm"
                                                placeholder="e.g., 18.5"
                                            />
                                            <InputField
                                                label="Row 3 Seats Level Arm"
                                                name="row3_seats_level_arm"
                                                placeholder="e.g., 25.0"
                                            />
                                            <InputField
                                                label="Row 4 Seats Level Arm"
                                                name="row4_seats_level_arm"
                                                placeholder="e.g., 31.5"
                                            />
                                            <InputField
                                                label="Baggage Forward Level Arm"
                                                name="baggage_forward_level_arm"
                                                placeholder="e.g., 8.5"
                                            />
                                            <InputField
                                                label="Baggage Rear Level Arm"
                                                name="baggage_rear_level_arm"
                                                placeholder="e.g., 45.0"
                                            />
                                            <InputField
                                                label="Fuel Level Arm"
                                                name="fuel_level_arm"
                                                placeholder="e.g., 20.0"
                                            />
                                            <InputField
                                                label="Fuel Consumption"
                                                name="fuel_consumption"
                                                placeholder="e.g., 2500"
                                            />
                                            <InputField
                                                label="Fuel Capacity"
                                                name="fuel_capacity"
                                                placeholder="e.g., 26020"
                                            />
                                            <InputField
                                                label="Envelope Forward Limit"
                                                name="envelope_forward_limit"
                                                placeholder="e.g., 15.0"
                                            />
                                            <InputField
                                                label="Envelope Forward Limit Max Weight"
                                                name="envelope_forward_limit_max_weight"
                                                placeholder="e.g., 79000"
                                            />
                                            <InputField
                                                label="Max Weight Aft Limit"
                                                name="max_weight_aft_limit"
                                                placeholder="e.g., 35.0"
                                            />
                                            <InputField
                                                label="Envelope Max Weight Aft Limit Min Weight"
                                                name="envelope_max_weight_aft_limit_min_weight"
                                                placeholder="e.g., 45000"
                                            />
                                            <InputField
                                                label="Envelope Empty Weight Aft Limit"
                                                name="envelope_empty_weight_aft_limit"
                                                placeholder="e.g., 32.0"
                                            />
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="image" className="mt-0">
                                    <div className="space-y-6">
                                        <div className="pb-4">
                                            <h2 className="text-2xl font-bold mb-2">Upload Image</h2>
                                            <p className="">Add an image of the aircraft</p>
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
                                                            alt="Aircraft preview"
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
                                                            <Button type="button" className="cursor-pointer">
                                                                Replace Image
                                                            </Button>
                                                        </label>
                                                        <Button
                                                            variant="outline"
                                                            onClick={removeImage}
                                                            className="bg-red-500 hover:bg-red-600"
                                                            type="button"
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
                                    Save Aircraft
                                </Button>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default NewAircraftPage;