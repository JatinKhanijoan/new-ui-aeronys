import React, { useState } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "~/components/ui/pagination";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";
import { useNavigate } from 'react-router';
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Eye, Calendar, CreditCard, DollarSign, FileText, CheckCircle, XCircle } from "lucide-react";

export interface InvoiceProps {
    invoice_id: string
    aircraft_id: string | null
    booking_id: string | null
    instructor_id: string | null
    user_id: string | null
    organisation_id: string | null
    invoice_type: string | null
    instructor_charge: number | null
    flight_rate: number | null
    number_of_hours: string | number | null
    airport_name: string | null
    fuel_surcharge: number | null
    vat_applied: number | null
    total_with_vat: number | null
    total_without_vat: number | null
    invoice_creation_time: string
    invoice_signed_by_id: string | null
    invoice_signed_by_signature_url: string | null
    invoice_signed_timestamp: string | null
    invoice_sent_timestamp: string | null
    payment_method: string | null
    payment_status: boolean
    transaction_id: string | null
    service?: string | null
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

interface ViewInvoicesProps {
    invoices: InvoiceProps[];
}

const ITEMS_PER_PAGE = 10;

export default function ViewInvoices({ invoices }: ViewInvoicesProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const totalPages = Math.ceil(invoices.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentInvoices = invoices.slice(startIndex, endIndex);

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
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
            <Badge className="bg-green-100 text-green-800">
                <CheckCircle className="w-3 h-3 mr-1" />
                Paid
            </Badge>
        ) : (
            <Badge variant="destructive">
                <XCircle className="w-3 h-3 mr-1" />
                Unpaid
            </Badge>
        );
    };

    const handleViewDetails = (invoiceId: string) => {
        navigate(`/invoicing/${invoiceId}`);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="rounded-lg shadow-sm overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow className='bg-primary/40 hover:bg-primary/50'>
                            <TableHead className="pl-6 font-semibold">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    Invoice Date
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold">
                                <div className="flex items-center gap-2">
                                    <FileText className="w-4 h-4" />
                                    Invoice Number
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold">
                                <div className='flex items-center gap-2'>
                                    <CreditCard className="w-4 h-4" />
                                    Payment Method
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4" />
                                    Status
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold">
                                <div className="flex items-center gap-2">
                                    <DollarSign className="w-4 h-4" />
                                    VAT
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold">
                                <div className="flex items-center gap-2">
                                    <DollarSign className="w-4 h-4" />
                                    Total
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-center">
                                <div className='flex items-center justify-center gap-2'>
                                    <Eye className="w-4 h-4" />
                                    Action
                                </div>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentInvoices.map((invoice: InvoiceProps, index: number) => (
                            <TableRow
                                key={invoice.invoice_id}
                            >
                                <TableCell className="pl-6">
                                    <div className="font-medium">
                                        {formatDate(invoice.invoice_creation_time)}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="font-mono text-sm font-semibold text-primary">
                                        {invoice.invoice_id}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="font-medium capitalize">
                                        {invoice.payment_method || 'Not specified'}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {getPaymentStatusBadge(invoice.payment_status)}
                                </TableCell>
                                <TableCell>
                                    <div className="font-medium">
                                        {formatCurrency(invoice.vat_applied || 0)}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="font-semibold text-lg">
                                        {formatCurrency(invoice.total_with_vat || 0)}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        (Excl. VAT: {formatCurrency(invoice.total_without_vat || 0)})
                                    </div>
                                </TableCell>
                                <TableCell className="text-center">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleViewDetails(invoice.invoice_id)}
                                        className="inline-flex items-center gap-2 hover:bg-primary hover:text-white hover:border-primary"
                                    >
                                        <Eye className="w-4 h-4" />
                                        View Details
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {totalPages > 1 && (
                <div className="mt-6 flex justify-center">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                />
                            </PaginationItem>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <PaginationItem key={page}>
                                    <PaginationLink
                                        onClick={() => handlePageChange(page)}
                                        isActive={currentPage === page}
                                        className="cursor-pointer"
                                    >
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}

                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
    );
}