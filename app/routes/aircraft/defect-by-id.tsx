import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { Textarea } from '~/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '~/components/ui/dialog';
import { Alert, AlertDescription } from '~/components/ui/alert';
import {
    ArrowLeft,
    AlertTriangle,
    CheckCircle,
    Clock,
    Plane,
    User,
    Calendar,
    FileText,
    Shield,
    Edit3,
    Check,
    X,
    AlertCircle,
    Camera,
    Download
} from 'lucide-react';

interface Aircraft {
    registration_number: string;
    type: string;
    company_name: string | null;
}

interface ReportedUser {
    first_name: string;
    last_name: string;
}

interface Defect {
    defect_id: string;
    aircraft_id: string;
    type_of_defect: string;
    date_time_reported: string;
    details: string;
    reported_by_user_id: string;
    images: string[] | null;
    severity: 'low' | 'medium' | 'high';
    approved: boolean;
    status: boolean;
    organisation_id: string;
    aircrafts: Aircraft;
    users: ReportedUser;
}

interface ConfirmationDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    description: string;
    actionType: 'approve' | 'reject' | 'resolve' | 'reopen';
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
    isOpen,
    onClose,
    onConfirm,
    title,
    description,
    actionType
}) => {
    console.log("here")

    const getActionColor = () => {
        switch (actionType) {
            case 'approve': return 'bg-green-600 hover:bg-green-700';
            case 'resolve': return 'bg-blue-600 hover:bg-blue-700';
            case 'reject': return 'bg-red-600 hover:bg-red-700';
            case 'reopen': return 'bg-orange-600 hover:bg-orange-700';
            default: return 'bg-gray-600 hover:bg-gray-700';
        }
    };

    const getActionIcon = () => {
        switch (actionType) {
            case 'approve': return <Check className="w-4 h-4" />;
            case 'resolve': return <CheckCircle className="w-4 h-4" />;
            case 'reject': return <X className="w-4 h-4" />;
            case 'reopen': return <AlertCircle className="w-4 h-4" />;
            default: return null;
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-orange-600" />
                        {title}
                    </DialogTitle>
                    <DialogDescription className="">
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex gap-2">
                    <Button variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button
                        onClick={onConfirm}
                        className={`text-white ${getActionColor()}`}
                    >
                        {getActionIcon()}
                        {actionType.charAt(0).toUpperCase() + actionType.slice(1)}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

const DefectDetailsPage: React.FC = () => {
    const [defect, setDefect] = useState<Defect>({
        defect_id: "251a2417-5965-456d-9bc3-b0583ad75998",
        aircraft_id: "688e5609-029f-4929-a971-eadddd44708e",
        type_of_defect: "Cracked Windshield",
        date_time_reported: "2025-01-10T12:37:18.000Z",
        details: "The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces. The windshield is shattered into so many pieces",
        reported_by_user_id: "a662d264-b051-703d-a029-89aecefc9075",
        images: [
            "https://res.cloudinary.com/doahxfhjj/image/upload/v1736512327/lq3bxonezidphozzgq1n.jpg"
        ],
        severity: "high",
        approved: true,
        status: false,
        organisation_id: "6ce72bae-8ea2-4193-b457-df97889eeba4",
        aircrafts: {
            registration_number: "G-BTNH",
            type: "Piper Warrior PA28",
            company_name: null
        },
        users: {
            first_name: "Chinmay",
            last_name: "Anaokar"
        }
    });

    const [adminNotes, setAdminNotes] = useState('');
    const [confirmDialog, setConfirmDialog] = useState<{
        isOpen: boolean;
        action: 'approve' | 'reject' | 'resolve' | 'reopen' | null;
        title: string;
        description: string;
    }>({
        isOpen: false,
        action: null,
        title: '',
        description: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const getSeverityColor = (severity: string) => {
        switch (severity) {
            case 'high': return 'bg-red-100 text-red-800 border-red-200';
            case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'low': return 'bg-green-100 text-green-800 border-green-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-GB', {
            weekday: 'long',
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const showConfirmDialog = (action: 'approve' | 'reject' | 'resolve' | 'reopen') => {
        const configs = {
            approve: {
                title: 'Approve Defect Report',
                description: 'Are you sure you want to approve this defect report? This action will mark the defect as verified and ready for maintenance scheduling.'
            },
            reject: {
                title: 'Reject Defect Report',
                description: 'Are you sure you want to reject this defect report? This action will mark the report as invalid and notify the reporter.'
            },
            resolve: {
                title: 'Mark as Resolved',
                description: 'Are you sure you want to mark this defect as resolved? This indicates that the maintenance work has been completed successfully.'
            },
            reopen: {
                title: 'Reopen Defect',
                description: 'Are you sure you want to reopen this defect? This will mark it as requiring additional attention or maintenance.'
            }
        };

        setConfirmDialog({
            isOpen: true,
            action,
            title: configs[action].title,
            description: configs[action].description
        });
    };

    const handleAction = () => {
        if (!confirmDialog.action) return;

        const action = confirmDialog.action;
        let message = '';

        switch (action) {
            case 'approve':
                setDefect(prev => ({ ...prev, approved: true }));
                message = 'Defect report has been approved successfully.';
                break;
            case 'reject':
                setDefect(prev => ({ ...prev, approved: false }));
                message = 'Defect report has been rejected.';
                break;
            case 'resolve':
                setDefect(prev => ({ ...prev, status: true }));
                message = 'Defect has been marked as resolved.';
                break;
            case 'reopen':
                setDefect(prev => ({ ...prev, status: false }));
                message = 'Defect has been reopened for further attention.';
                break;
        }

        setSuccessMessage(message);
        setConfirmDialog({ isOpen: false, action: null, title: '', description: '' });

        setTimeout(() => setSuccessMessage(''), 3000);
    };

    const closeConfirmDialog = () => {
        setConfirmDialog({ isOpen: false, action: null, title: '', description: '' });
    };

    const downloadImage = (imageUrl: string, index: number) => {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = `defect-${defect.defect_id}-image-${index + 1}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen p-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-bold">Defect Details</h1>
                        </div>

                        <div className="flex items-center gap-3">
                            <Badge className={getSeverityColor(defect.severity)} variant="outline">
                                {defect.severity.charAt(0).toUpperCase() + defect.severity.slice(1)} Priority
                            </Badge>

                            <div className="flex items-center gap-2">
                                {defect.approved ? (
                                    <Badge className="bg-green-100 text-green-800 border-green-200" variant="outline">
                                        <Shield className="w-3 h-3 mr-1" />
                                        Approved
                                    </Badge>
                                ) : (
                                    <Badge className="bg-orange-100 text-orange-800 border-orange-200" variant="outline">
                                        <AlertCircle className="w-3 h-3 mr-1" />
                                        Pending Approval
                                    </Badge>
                                )}

                                {defect.status ? (
                                    <Badge className="bg-blue-100 text-blue-800 border-blue-200" variant="outline">
                                        <CheckCircle className="w-3 h-3 mr-1" />
                                        Resolved
                                    </Badge>
                                ) : (
                                    <Badge className="bg-red-100 text-red-800 border-red-200" variant="outline">
                                        <Clock className="w-3 h-3 mr-1" />
                                        Open
                                    </Badge>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Success Message */}
                {successMessage && (
                    <Alert className="mb-6 bg-green-50 border-green-200">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <AlertDescription className="text-green-800">
                            {successMessage}
                        </AlertDescription>
                    </Alert>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-primary" />
                                    Defect Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium">Type of Defect</label>
                                        <p className="mt-1 text-lg font-semibold">{defect.type_of_defect}</p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium">Severity Level</label>
                                        <p className="mt-1">
                                            <Badge className={getSeverityColor(defect.severity)} variant="outline">
                                                {defect.severity.charAt(0).toUpperCase() + defect.severity.slice(1)}
                                            </Badge>
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium">Detailed Description</label>
                                    <div className="mt-2 rounded-lg">
                                        <p className="leading-relaxed">{defect.details}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Plane className="w-5 h-5 text-primary" />
                                    Aircraft Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium">Registration Number</label>
                                        <p className="mt-1 text-lg font-mono font-semibold">
                                            {defect.aircrafts.registration_number}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium">Aircraft Type</label>
                                        <p className="mt-1 text-lg">{defect.aircrafts.type}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {defect.images && defect.images.length > 0 && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Camera className="w-5 h-5 text-primary" />
                                        Defect Images ({defect.images.length})
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {defect.images.map((image, index) => (
                                            <div key={index} className="relative group">
                                                <img
                                                    src={image}
                                                    alt={`Defect evidence ${index + 1}`}
                                                    className="w-full h-48 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                                                    onClick={() => setSelectedImage(image)}
                                                />
                                                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <Button
                                                        size="sm"
                                                        variant="secondary"
                                                        onClick={() => downloadImage(image, index)}
                                                        className="h-8 w-8 p-0"
                                                    >
                                                        <Download className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Report Details */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-primary" />
                                    Report Details
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium">Reported By</label>
                                    <div className="mt-1 flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        <span className="font-medium">
                                            {defect.users.first_name} {defect.users.last_name}
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium">Date & Time</label>
                                    <div className="mt-1 flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span className='text-balance'>{formatDate(defect.date_time_reported)}</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium">Current Status</label>
                                    <div className="mt-1 flex items-center gap-2">
                                        {defect.status ? (
                                            <>
                                                <CheckCircle className="w-4 h-4 text-green-600" />
                                                <span className="text-green-600 font-medium">Resolved</span>
                                            </>
                                        ) : (
                                            <>
                                                <Clock className="w-4 h-4 text-orange-600" />
                                                <span className="text-orange-600 font-medium">Open</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Admin Actions */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-primary" />
                                    Admin Actions
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {!defect.approved && (
                                    <div className="flex gap-2">
                                        <Button
                                            size="sm"
                                            className="flex-1 bg-green-600 hover:bg-green-700"
                                            onClick={() => showConfirmDialog('approve')}
                                        >
                                            <Check className="w-4 h-4 mr-2" />
                                            Approve
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="destructive"
                                            className="flex-1"
                                            onClick={() => showConfirmDialog('reject')}
                                        >
                                            <X className="w-4 h-4 mr-2" />
                                            Reject
                                        </Button>
                                    </div>
                                )}

                                {defect.approved && (
                                    <div className="space-y-2">
                                        {!defect.status ? (
                                            <Button
                                                size="sm"
                                                variant="default"
                                                className='w-full'
                                                onClick={() => showConfirmDialog('resolve')}
                                            >
                                                <CheckCircle className="w-4 h-4 mr-2" />
                                                Mark as Resolved
                                            </Button>
                                        ) : (
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="w-full"
                                                onClick={() => showConfirmDialog('reopen')}
                                            >
                                                <AlertCircle className="w-4 h-4 mr-2" />
                                                Reopen Defect
                                            </Button>
                                        )}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Image Modal */}
                {selectedImage && (
                    <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                            <DialogHeader className="p-6 pb-2">
                                <DialogTitle>Defect Image</DialogTitle>
                            </DialogHeader>
                            <div className="px-6 pb-6">
                                <img
                                    src={selectedImage}
                                    alt="Defect evidence full size"
                                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                                />
                            </div>
                        </DialogContent>
                    </Dialog>
                )}

                {/* Confirmation Dialog */}
                <ConfirmationDialog
                    isOpen={confirmDialog.isOpen}
                    onClose={closeConfirmDialog}
                    onConfirm={handleAction}
                    title={confirmDialog.title}
                    description={confirmDialog.description}
                    actionType={confirmDialog.action || 'approve'}
                />
            </div>
        </div>
    );
};

export default DefectDetailsPage;