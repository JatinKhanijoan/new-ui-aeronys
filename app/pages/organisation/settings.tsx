import { DollarSign, Image, Plane, Save, Settings, Upload, X, FileText, Download, Eye, Info, Paperclip, Folder } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Input } from "~/components/ui/input";

interface Organisation {
    organisation_id: string;
    organisation_name: string;
    organisation_logo_url: string;
    title: string[];
    urls: string[];
    address: string;
    slot_time: string;
    phone_number: string;
    email_id: string;
}

const mockData: Organisation = {
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
    "slot_time": "2",
    "phone_number": "+44 12334455",
    "email_id": "falcon@aero.com"
};

const PageTitle = ({ title, description }: { title: string; description: string }) => (
    <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-gray-600">{description}</p>
    </div>
);

const OrganisationForm: React.FC = () => {
    const [formData, setFormData] = useState<Organisation>({
        organisation_id: mockData.organisation_id || "",
        organisation_name: mockData.organisation_name || "",
        organisation_logo_url: mockData.organisation_logo_url || "",
        title: mockData.title || [],
        urls: mockData.urls || [],
        address: mockData.address || "",
        slot_time: mockData.slot_time || "",
        phone_number: mockData.phone_number || "",
        email_id: mockData.email_id || "",
    });

    const [logoPreview, setLogoPreview] = useState<string | null>(mockData.organisation_logo_url || null);
    const [isDragOver, setIsDragOver] = useState(false);
    const [newDocumentTitle, setNewDocumentTitle] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const InputField = ({ label, name, type = "text", placeholder = "", required = false }: { label: string, name: keyof Organisation, type?: string, placeholder?: string, required?: boolean }) => (
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
                setLogoPreview(result);
                setFormData(prev => ({
                    ...prev,
                    organisation_logo_url: result
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

    const removeLogo = () => {
        setLogoPreview(null);
        setFormData(prev => ({
            ...prev,
            organisation_logo_url: ""
        }));
    };

    const handleDocumentUpload = (file: File) => {
        if (file && newDocumentTitle.trim()) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result as string;
                setFormData(prev => ({
                    ...prev,
                    title: [...prev.title, newDocumentTitle.trim()],
                    urls: [...prev.urls, result]
                }));
                setNewDocumentTitle("");
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDocumentInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && newDocumentTitle.trim()) {
            handleDocumentUpload(file);
        }
    };

    const removeDocument = (index: number) => {
        setFormData(prev => ({
            ...prev,
            title: prev.title.filter((_, i) => i !== index),
            urls: prev.urls.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = () => {
        const outputData = {
            organisation_id: formData.organisation_id,
            organisation_name: formData.organisation_name,
            organisation_logo_url: formData.organisation_logo_url,
            title: formData.title,
            urls: formData.urls,
            address: formData.address,
            slot_time: parseInt(formData.slot_time) || 0,
            phone_number: formData.phone_number,
            email_id: formData.email_id
        };

        console.log('Organisation Data:', outputData);
        alert('Organisation data logged to console! Check the browser console.');
    };

    const handleReset = () => {
        setFormData({
            organisation_id: "",
            organisation_name: "",
            organisation_logo_url: "",
            title: [],
            urls: [],
            address: "",
            slot_time: "",
            phone_number: "",
            email_id: "",
        });
        setLogoPreview(null);
        setNewDocumentTitle("");
    };

    return (
        <div className="container mx-auto p-6">
            <PageTitle
                title="Settings"
                description="Manage organisation details and documents."
            />
            <div>
                <Tabs defaultValue="generalInformation" className="w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        <div className="lg:col-span-1">
                            <TabsList className="flex flex-col h-20 w-full bg-transparent rounded-xl">
                                <TabsTrigger
                                    value="generalInformation"
                                    className="w-full justify-start mb-1 rounded-lg data-[state=active]:text-white data-[state=active]:bg-primary transition-all duration-200"
                                >
                                    <Info className="h-5 w-5 mr-3" />
                                    General Information
                                </TabsTrigger>
                                <TabsTrigger value="documents"
                                    className="w-full justify-start mb-1 rounded-lg data-[state=active]:text-white data-[state=active]:bg-primary transition-all duration-200">
                                    <Folder className="h-5 w-5 mr-3" />
                                    Documents
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        <div className="lg:col-span-3 bg-card rounded-xl">
                            <div className="rounded-xl p-6">
                                <TabsContent value="generalInformation" className="mt-0">
                                    <div className="space-y-6">
                                        <div className="pb-4">
                                            <h2 className="text-2xl font-bold mb-2">General Information</h2>
                                            <p className="">Basic information about the organisation</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <InputField
                                                label="Organisation Name"
                                                name="organisation_name"
                                                placeholder="e.g., EFG Flying School"
                                                required
                                            />
                                            <InputField
                                                label="Address"
                                                name="address"
                                                placeholder="e.g., London Biggin Hill Airport"
                                                required
                                            />
                                            <InputField
                                                label="Slot Time"
                                                name="slot_time"
                                                type="number"
                                                placeholder="e.g., 2"
                                                required
                                            />
                                            <InputField
                                                label="Phone Number"
                                                name="phone_number"
                                                placeholder="e.g., +44 12334455"
                                                required
                                            />
                                            <InputField
                                                label="Email ID"
                                                name="email_id"
                                                type="email"
                                                placeholder="e.g., falcon@aero.com"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-lg font-semibold">Organisation Logo</h3>
                                            {!logoPreview ? (
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
                                                    <p className="text-lg font-medium mb-2">Drop your logo here</p>
                                                    <p className="text-gray-500 mb-4">or click to browse</p>
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={handleFileInputChange}
                                                        className="hidden"
                                                        id="logo-upload"
                                                    />
                                                    <label htmlFor="logo-upload">
                                                        <Button variant="outline" type="button" className="cursor-pointer">
                                                            Choose File
                                                        </Button>
                                                    </label>
                                                </div>
                                            ) : (
                                                <div className="space-y-4">
                                                    <div className="relative inline-block">
                                                        <img
                                                            src={logoPreview}
                                                            alt="Organisation logo preview"
                                                            className="max-w-md max-h-64 rounded-lg shadow-lg"
                                                        />
                                                        <button
                                                            onClick={removeLogo}
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
                                                            id="logo-replace"
                                                        />
                                                        <label htmlFor="logo-replace">
                                                            <Button type="button" className="cursor-pointer">
                                                                Replace Logo
                                                            </Button>
                                                        </label>
                                                        <Button
                                                            variant="outline"
                                                            onClick={removeLogo}
                                                            className="bg-red-500 hover:bg-red-600 text-white"
                                                            type="button"
                                                        >
                                                            Remove Logo
                                                        </Button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="documents" className="mt-0">
                                    <div className="space-y-6">
                                        <div className="pb-4">
                                            <h2 className="text-2xl font-bold mb-2">Documents</h2>
                                            <p className="">Manage organisation documents</p>
                                        </div>

                                        {formData.title.length > 0 && (
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-semibold">Existing Documents</h3>
                                                <div className="space-y-3">
                                                    {formData.title.map((title, index) => (
                                                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                                                            <div className="flex items-center gap-3">
                                                                <FileText className="h-5 w-5 text-blue-600" />
                                                                <div>
                                                                    <p className="font-medium">{title}</p>
                                                                    <p className="text-sm text-gray-500">Document {index + 1}</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <Button
                                                                    variant="outline"
                                                                    size="sm"
                                                                    onClick={() => window.open(formData.urls[index], '_blank')}
                                                                >
                                                                    <Eye className="h-4 w-4 mr-1" />
                                                                    View
                                                                </Button>
                                                                <Button
                                                                    variant="outline"
                                                                    size="sm"
                                                                    onClick={() => removeDocument(index)}
                                                                    className="text-red-600 hover:text-red-700"
                                                                >
                                                                    <X className="h-4 w-4" />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className="space-y-4">
                                            <h3 className="text-lg font-semibold">
                                                {formData.title.length > 0 ? 'Upload More Documents' : 'Upload Documents'}
                                            </h3>
                                            <div className="space-y-4">
                                                <div>
                                                    <label htmlFor="document-title" className="block text-sm font-medium mb-2">
                                                        Document Title <span className="text-red-400">*</span>
                                                    </label>
                                                    <Input
                                                        id="document-title"
                                                        value={newDocumentTitle}
                                                        onChange={(e) => setNewDocumentTitle(e.target.value)}
                                                        placeholder="e.g., Invoice_FLCN0004"
                                                        required
                                                    />
                                                </div>
                                                <div className="border-2 border-dashed rounded-lg p-8 text-center border-gray-300 hover:border-gray-400 transition-colors">
                                                    <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                                                    <p className="text-lg font-medium mb-2">Drop your document here</p>
                                                    <p className="text-gray-500 mb-4">or click to browse</p>
                                                    <input
                                                        type="file"
                                                        accept=".pdf,.doc,.docx,.txt"
                                                        onChange={handleDocumentInputChange}
                                                        className="hidden"
                                                        id="document-upload"
                                                        disabled={!newDocumentTitle.trim()}
                                                    />
                                                    <label htmlFor="document-upload">
                                                        <Button
                                                            variant="outline"
                                                            type="button"
                                                            className="cursor-pointer"
                                                            disabled={!newDocumentTitle.trim()}
                                                        >
                                                            Choose File
                                                        </Button>
                                                    </label>
                                                    {!newDocumentTitle.trim() && (
                                                        <p className="text-sm text-red-500 mt-2">Please enter a document title first</p>
                                                    )}
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
                                    <Save className="h-4 w-4 mr-2" />
                                    Save Organisation
                                </Button>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default OrganisationForm;
