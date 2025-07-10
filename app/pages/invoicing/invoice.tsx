import React from 'react';
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import {
    ArrowLeft,
    Calendar,
    CreditCard,
    DollarSign,
    FileText,
    CheckCircle,
    XCircle,
    User,
    Building,
    Plane,
    Clock,
    MapPin,
    Fuel,
    PenTool,
    Send,
    Download,
    Printer,
} from "lucide-react";
import { useParams } from 'react-router';
import { mockInvoices } from '.';

export interface InvoiceProps {
    invoice_id: string
    aircraft_id: string
    booking_id: string
    instructor_id: string
    user_id: string
    organisation_id: string
    invoice_type: string
    instructor_charge: number
    flight_rate: number
    number_of_hours: string | number
    airport_name: string
    fuel_surcharge: number
    vat_applied: number
    total_with_vat: number
    total_without_vat: number
    invoice_creation_time: string
    invoice_signed_by_id: string | null
    invoice_signed_by_signature_url: string | null
    invoice_signed_timestamp: string | null
    invoice_sent_timestamp: string | null
    payment_method: string | null
    payment_status: boolean
    transaction_id: string | null
    service?: string
    item_name?: string | null
    item_description?: string | null
    home_airport?: string | null
    away_airport?: string | null
    home_airport_charges?: string | null
    away_airport_charges?: string | null
    is_markup_included?: boolean
    markup_price?: string | null
    stripe_temp_id?: string | null
}

export default function ViewSingleInvoice() {
    const { invoice_id } = useParams();
    const invoice = mockInvoices.find(inv => inv.invoice_id === invoice_id);
    if (!invoice) {
        return (
            <div className="container mx-auto p-6">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900">Invoice Not Found</h1>
                    <p className="text-gray-600">The invoice with ID {invoice_id} was not found.</p>
                </div>
            </div>
        );
    }
    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatDateTime = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    };

    const formatCurrency = (amount: number): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    const getPaymentStatusBadge = (status: boolean) => {
        return status ? (
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                <CheckCircle className="w-4 h-4 mr-2" />
                Paid
            </Badge>
        ) : (
            <Badge variant="destructive" className="bg-red-100 text-red-800 hover:bg-red-200">
                <XCircle className="w-4 h-4 mr-2" />
                Unpaid
            </Badge>
        );
    };

    const handleDownload = () => {
        console.log('Download invoice:', invoice.invoice_id);
    };

    const handlePrint = () => {
        console.log('Print invoice:', invoice.invoice_id);
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Invoice Details</h1>
                        <p className="text-gray-600">Invoice #{invoice.invoice_id}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handlePrint}
                        className="flex items-center gap-2"
                    >
                        <Printer className="w-4 h-4" />
                        Print
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleDownload}
                        className="flex items-center gap-2"
                    >
                        <Download className="w-4 h-4" />
                        Download
                    </Button>
                </div>
            </div>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileText className="w-5 h-5" />
                        Invoice Overview
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Calendar className="w-4 h-4" />
                                Creation Date
                            </div>
                            <div className="font-semibold">
                                {formatDate(invoice.invoice_creation_time)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <CreditCard className="w-4 h-4" />
                                Payment Method
                            </div>
                            <div className="font-semibold capitalize">
                                {invoice.payment_method || 'Not specified'}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4" />
                                Payment Status
                            </div>
                            <div>
                                {getPaymentStatusBadge(invoice.payment_status)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <DollarSign className="w-4 h-4" />
                                Total Amount
                            </div>
                            <div className="font-bold text-lg text-primary">
                                {formatCurrency(invoice.total_with_vat)}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Plane className="w-5 h-5" />
                        Service Details
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Building className="w-4 h-4" />
                                    Service Type
                                </div>
                                <div className="font-semibold capitalize">
                                    {invoice.service || invoice.invoice_type}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Clock className="w-4 h-4" />
                                    Flight Hours
                                </div>
                                <div className="font-semibold">
                                    {invoice.number_of_hours} hours
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <MapPin className="w-4 h-4" />
                                    Airport
                                </div>
                                <div className="font-semibold">
                                    {invoice.airport_name}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {invoice.item_name && (
                                <div className="space-y-2">
                                    <div className="text-sm text-gray-600">Item Name</div>
                                    <div className="font-semibold">{invoice.item_name}</div>
                                </div>
                            )}
                            {invoice.item_description && (
                                <div className="space-y-2">
                                    <div className="text-sm text-gray-600">Description</div>
                                    <div className="font-semibold">{invoice.item_description}</div>
                                </div>
                            )}
                            {(invoice.home_airport || invoice.away_airport) && (
                                <div className="space-y-2">
                                    <div className="text-sm text-gray-600">Route</div>
                                    <div className="font-semibold">
                                        {invoice.home_airport} → {invoice.away_airport}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5" />
                        Cost Breakdown
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Instructor Charge</span>
                            <span className="font-semibold">{formatCurrency(invoice?.instructor_charge || 0)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Flight Rate</span>
                            <span className="font-semibold">{formatCurrency(invoice?.flight_rate || 0)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 flex items-center gap-2">
                                <Fuel className="w-4 h-4" />
                                Fuel Surcharge
                            </span>
                            <span className="font-semibold">{formatCurrency(invoice?.fuel_surcharge || 0)}</span>
                        </div>
                        {invoice.home_airport_charges && (
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Home Airport Charges</span>
                                <span className="font-semibold">{formatCurrency(Number(invoice.home_airport_charges))}</span>
                            </div>
                        )}
                        {invoice.away_airport_charges && (
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Away Airport Charges</span>
                                <span className="font-semibold">{formatCurrency(Number(invoice.away_airport_charges))}</span>
                            </div>
                        )}
                        {invoice.markup_price && (
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Markup</span>
                                <span className="font-semibold">{formatCurrency(Number(invoice.markup_price))}</span>
                            </div>
                        )}
                        <Separator />
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Subtotal (Without VAT)</span>
                            <span className="font-semibold">{formatCurrency(invoice.total_without_vat)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">VAT Applied</span>
                            <span className="font-semibold">{formatCurrency(invoice.vat_applied)}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center text-lg">
                            <span className="font-bold">Total Amount</span>
                            <span className="font-bold text-primary">{formatCurrency(invoice.total_with_vat)}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Invoice Status
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Send className="w-4 h-4" />
                                Sent Date
                            </div>
                            <div className="font-semibold">
                                {invoice.invoice_sent_timestamp
                                    ? formatDateTime(invoice.invoice_sent_timestamp)
                                    : 'Not sent'
                                }
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <PenTool className="w-4 h-4" />
                                Signed Date
                            </div>
                            <div className="font-semibold">
                                {invoice.invoice_signed_timestamp
                                    ? formatDateTime(invoice.invoice_signed_timestamp)
                                    : 'Not signed'
                                }
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <CreditCard className="w-4 h-4" />
                                Transaction ID
                            </div>
                            <div className="font-semibold font-mono">
                                {invoice.transaction_id || 'Not available'}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}