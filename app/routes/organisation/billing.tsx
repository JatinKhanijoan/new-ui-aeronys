import { DollarSign, Settings, Save, CreditCard, Calculator } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Input } from "~/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";

interface BillingSettings {
    vat: number;
    fuel_surcharge: number;
    organisation_id: string;
    invoice_prefix: string;
    billing_id: string;
    backend_key: string;
    frontend_key: string;
    salt: string;
    instructor_calculation: number;
    user_calculation: number;
    ground_school_rate: number;
    exam_rate: number;
    deficit_limit: number;
    hours_pack_price: number;
    cancellation_charge: number;
    cancelation_hours: number;
    number_of_hours_pack: number;
    number_of_landings: number;
    markup_type: number;
    markup_value: string;
}

const mockData: BillingSettings = {
    "vat": 0.2,
    "fuel_surcharge": 29,
    "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
    "invoice_prefix": "FLCN",
    "billing_id": "67ce8533-491d-45cf-ba03-b8918457a912",
    "backend_key": "",
    "frontend_key": "",
    "salt": "4aLHlcOIs8UAxplt+lcEMQ==",
    "instructor_calculation": 1,
    "user_calculation": 1,
    "ground_school_rate": 56,
    "exam_rate": 96,
    "deficit_limit": 250,
    "hours_pack_price": 800,
    "cancellation_charge": 50,
    "cancelation_hours": 33,
    "number_of_hours_pack": 5,
    "number_of_landings": 5,
    "markup_type": 0,
    "markup_value": "10"
};

const PageTitle = ({ title, description }: { title: string; description: string }) => (
    <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-gray-600">{description}</p>
    </div>
);

const BillingSettings: React.FC = () => {
    const [formData, setFormData] = useState<BillingSettings>({
        vat: mockData.vat || 0,
        fuel_surcharge: mockData.fuel_surcharge || 0,
        organisation_id: mockData.organisation_id || "",
        invoice_prefix: mockData.invoice_prefix || "",
        billing_id: mockData.billing_id || "",
        backend_key: mockData.backend_key || "",
        frontend_key: mockData.frontend_key || "",
        salt: mockData.salt || "",
        instructor_calculation: mockData.instructor_calculation || 0,
        user_calculation: mockData.user_calculation || 0,
        ground_school_rate: mockData.ground_school_rate || 0,
        exam_rate: mockData.exam_rate || 0,
        deficit_limit: mockData.deficit_limit || 0,
        hours_pack_price: mockData.hours_pack_price || 0,
        cancellation_charge: mockData.cancellation_charge || 0,
        cancelation_hours: mockData.cancelation_hours || 0,
        number_of_hours_pack: mockData.number_of_hours_pack || 0,
        number_of_landings: mockData.number_of_landings || 0,
        markup_type: mockData.markup_type || 0,
        markup_value: mockData.markup_value || ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'vat' ? parseFloat(value) / 100 :
                ['fuel_surcharge', 'ground_school_rate', 'exam_rate', 'deficit_limit',
                    'hours_pack_price', 'cancellation_charge', 'cancelation_hours',
                    'number_of_hours_pack'].includes(name) ? parseFloat(value) || 0 : value
        }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [name]: parseInt(value)
        }));
    };

    const InputField = ({
        label,
        name,
        type = "text",
        placeholder = "",
        required = false,
        unit = "",
        min = undefined
    }: {
        label: string,
        name: keyof BillingSettings,
        type?: string,
        placeholder?: string,
        required?: boolean,
        unit?: string,
        min?: number
    }) => (
        <div className="space-y-2">
            <label htmlFor={name} className="block text-sm font-medium">
                {label} {unit && <span className="text-gray-500">({unit})</span>} {required && <span className="text-red-400">*</span>}
            </label>
            <Input
                type={type}
                id={name}
                name={name}
                value={name === 'vat' ? (formData[name] as number * 100) : formData[name] as string | number}
                onChange={handleInputChange}
                placeholder={placeholder}
                required={required}
                min={min}
                step={type === "number" ? "0.01" : undefined}
            />
        </div>
    );

    const SelectField = ({
        label,
        name,
        options,
        required = false
    }: {
        label: string,
        name: string,
        options: { value: string, label: string }[],
        required?: boolean
    }) => (
        <div className="space-y-2">
            <label htmlFor={name} className="block text-sm font-medium">
                {label} {required && <span className="text-red-400">*</span>}
            </label>
            <Select value={formData[name as keyof BillingSettings]?.toString()} onValueChange={(value) => handleSelectChange(name, value)}>
                <SelectTrigger>
                    <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );

    const handleSubmit = () => {
        const outputData = {
            vat: formData.vat,
            fuel_surcharge: formData.fuel_surcharge,
            organisation_id: formData.organisation_id,
            invoice_prefix: formData.invoice_prefix,
            billing_id: formData.billing_id,
            backend_key: formData.backend_key,
            frontend_key: formData.frontend_key,
            salt: formData.salt,
            instructor_calculation: formData.instructor_calculation,
            user_calculation: formData.user_calculation,
            ground_school_rate: formData.ground_school_rate,
            exam_rate: formData.exam_rate,
            deficit_limit: formData.deficit_limit,
            hours_pack_price: formData.hours_pack_price,
            cancellation_charge: formData.cancellation_charge,
            cancelation_hours: formData.cancelation_hours,
            number_of_hours_pack: formData.number_of_hours_pack,
            number_of_landings: formData.number_of_landings,
            markup_type: formData.markup_type,
            markup_value: formData.markup_value
        };

        console.log('Billing Settings Data:', outputData);
        alert('Billing settings data logged to console! Check the browser console.');
    };

    const handleReset = () => {
        setFormData({
            vat: 0,
            fuel_surcharge: 0,
            organisation_id: "",
            invoice_prefix: "",
            billing_id: "",
            backend_key: "",
            frontend_key: "",
            salt: "",
            instructor_calculation: 0,
            user_calculation: 0,
            ground_school_rate: 0,
            exam_rate: 0,
            deficit_limit: 0,
            hours_pack_price: 0,
            cancellation_charge: 0,
            cancelation_hours: 0,
            number_of_hours_pack: 0,
            number_of_landings: 0,
            markup_type: 0,
            markup_value: ""
        });
    };

    const calculationOptions = [
        { value: "0", label: "Total Airborne Time" },
        { value: "1", label: "Total Brakes On/Off Time" }
    ];

    return (
        <div className="container mx-auto p-6">
            <PageTitle
                title="Billing"
                description="Configure billing rates, charges, and payment settings."
            />
            <div>
                <Tabs defaultValue="generalSettings" className="w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        <div className="lg:col-span-1">
                            <TabsList className="flex flex-col h-20 w-full bg-transparent rounded-xl">
                                <TabsTrigger
                                    value="generalSettings"
                                    className="w-full justify-start mb-1 rounded-lg data-[state=active]:text-white data-[state=active]:bg-primary transition-all duration-200"
                                >
                                    <Settings className="h-5 w-5 mr-3" />
                                    General Settings
                                </TabsTrigger>
                                <TabsTrigger value="paymentSettings"
                                    className="w-full justify-start mb-1 rounded-lg data-[state=active]:text-white data-[state=active]:bg-primary transition-all duration-200">
                                    <CreditCard className="h-5 w-5 mr-3" />
                                    Payment Settings
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        <div className="lg:col-span-3 bg-card rounded-xl">
                            <div className="rounded-xl p-6">
                                <TabsContent value="generalSettings" className="mt-0">
                                    <div className="space-y-6">
                                        <div className="pb-4">
                                            <h2 className="text-2xl font-bold mb-2">General Settings</h2>
                                            <p className="">Configure basic billing rates and charges</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <InputField
                                                label="VAT Rate"
                                                name="vat"
                                                type="number"
                                                placeholder="e.g., 20"
                                                unit="%"
                                                required
                                                min={0}
                                            />
                                            <InputField
                                                label="Fuel Surcharge"
                                                name="fuel_surcharge"
                                                type="number"
                                                placeholder="e.g., 29"
                                                unit="£"
                                                required
                                                min={0}
                                            />
                                            <InputField
                                                label="Invoice Prefix"
                                                name="invoice_prefix"
                                                placeholder="e.g., FLCN"
                                                required
                                            />
                                            <InputField
                                                label="Ground School Rate"
                                                name="ground_school_rate"
                                                type="number"
                                                placeholder="e.g., 56"
                                                unit="£"
                                                required
                                                min={0}
                                            />
                                            <InputField
                                                label="Exam Rate"
                                                name="exam_rate"
                                                type="number"
                                                placeholder="e.g., 96"
                                                unit="£"
                                                required
                                                min={0}
                                            />
                                            <InputField
                                                label="Deficit Limit"
                                                name="deficit_limit"
                                                type="number"
                                                placeholder="e.g., 250"
                                                unit="£"
                                                required
                                                min={0}
                                            />
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-lg font-semibold">Time Calculation Settings</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <SelectField
                                                    label="Instructor Calculation"
                                                    name="instructor_calculation"
                                                    options={calculationOptions}
                                                    required
                                                />
                                                <SelectField
                                                    label="User Calculation"
                                                    name="user_calculation"
                                                    options={calculationOptions}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-lg font-semibold">Package & Cancellation Settings</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <InputField
                                                    label="Hours Pack Price"
                                                    name="hours_pack_price"
                                                    type="number"
                                                    placeholder="e.g., 800"
                                                    unit="£"
                                                    required
                                                    min={0}
                                                />
                                                <InputField
                                                    label="Number of Hours Pack"
                                                    name="number_of_hours_pack"
                                                    type="number"
                                                    placeholder="e.g., 5"
                                                    required
                                                    min={0}
                                                />
                                                <InputField
                                                    label="Cancellation Charge"
                                                    name="cancellation_charge"
                                                    type="number"
                                                    placeholder="e.g., 50"
                                                    unit="£"
                                                    required
                                                    min={0}
                                                />
                                                <InputField
                                                    label="Cancellation Hours"
                                                    name="cancelation_hours"
                                                    type="number"
                                                    placeholder="e.g., 33"
                                                    required
                                                    min={0}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="paymentSettings" className="mt-0">
                                    <div className="space-y-6">
                                        <div className="pb-4">
                                            <h2 className="text-2xl font-bold mb-2">Payment Settings</h2>
                                            <p className="">Configure Stripe payment keys and security settings</p>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-semibold">Stripe Configuration</h3>
                                                <div className="grid grid-cols-1 gap-6">
                                                    <InputField
                                                        label="Backend Key (Encrypted)"
                                                        name="backend_key"
                                                        placeholder="e.g., U2FsdGVkX1/1XsAQgKcuyvY2qNFB2qMjUrQ6Y9MWxAU="
                                                        required
                                                    />
                                                    <InputField
                                                        label="Frontend Key (Encrypted)"
                                                        name="frontend_key"
                                                        placeholder="e.g., U2FsdGVkX19i/7XJG1ZgSYy4zIFKpFPc97h4u+GjK9I="
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0">
                                                        <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <div className="ml-3">
                                                        <h3 className="text-sm font-medium text-yellow-800">
                                                            Security Notice
                                                        </h3>
                                                        <div className="mt-1 text-sm text-yellow-700">
                                                            <p>
                                                                These keys are encrypted for security. Only enter new keys if you need to update your Stripe configuration.
                                                                The salt is used for encryption/decryption processes.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>

                            <div className="mt-6 flex gap-1.5 justify-end m-5">
                                <Button variant="outline" onClick={handleReset}>
                                    Reset
                                </Button>
                                <Button onClick={handleSubmit}>
                                    Save
                                </Button>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default BillingSettings;