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
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Eye, Calendar, Clock, Users, User, Plane, SquareDashedMousePointerIcon } from "lucide-react";
import { bookingResponse, instructorResponse } from '../calendar/data';

interface Booking {
    booking_id: string;
    user_id: string[];
    instructor_id: string;
    start_time: string;
    end_time: string;
    type: string;
    status: string;
    aircrafts: {
        registration_number: string;
        type: string;
    };
    users: {
        first_name: string;
        last_name: string;
        email_id: string;
    };
}

interface Member {
    user_id: string;
    first_name: string;
    last_name: string;
    email_id: string;
}

const ITEMS_PER_PAGE = 10;

export default function ViewBookings() {
    const [currentPage, setCurrentPage] = useState(1);
    const { bookings, memberNames } = bookingResponse;

    const totalPages = Math.ceil(bookings.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentBookings = bookings.slice(startIndex, endIndex);

    const getUserName = (userIds: string[]): string => {
        if (userIds.length === 0) return "Unknown User";

        const primaryUser = memberNames.find(member => member.user_id === userIds[0]);
        if (!primaryUser) return "Unknown User";

        if (userIds.length === 1) {
            return `${primaryUser.first_name} ${primaryUser.last_name}`;
        }

        return `${primaryUser.first_name} ${primaryUser.last_name} +${userIds.length - 1}`;
    };

    const formatDateTime = (startTime: string, endTime: string): string => {
        const start = new Date(startTime);
        const end = new Date(endTime);

        const date = start.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

        const timeRange = `${start.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        })} - ${end.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        })}`;

        return `${date} • ${timeRange}`;
    };

    const handleViewDetails = (bookingId: string) => {
        console.log(`View details for booking: ${bookingId}`);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="w-full max-w-7xl mx-autox">
            <div className="rounded-lg shadow-sm overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow className='bg-primary/40 hover:bg-primary/50'>
                            <TableHead className="pl-6 font-semibold">
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4" />
                                    Student Name
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    Instructor
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold">
                                <div className='flex items-center gap-2'>
                                    <Plane className="w-4 h-4" />
                                    Aircraft
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    Type
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold">
                                <div className="flex items-center justify-start gap-2">
                                    <Clock className="w-4 h-4" />
                                    Schedule
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-center">
                                <div className='flex items-center justify-center gap-2'>
                                    <SquareDashedMousePointerIcon className="w-4 h-4" />
                                    Action
                                </div>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentBookings.map((booking: Booking, index: number) => (
                            <TableRow
                                key={booking.booking_id}
                                className={`hover:bg-gray-50 transition-colors 
                                    `}
                                    >
                                {/* ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} */}
                                <TableCell className="pl-6">
                                    <div className="font-medium">
                                        {getUserName(booking.user_id)}
                                    </div>
                                    {booking.user_id.length > 1 && (
                                        <div className="text-sm">
                                            ({booking.user_id.length} members)
                                        </div>
                                    )}
                                </TableCell>
                                <TableCell>
                                    <div className="font-medium">
                                        {booking.users.first_name} {booking.users.last_name}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="space-y-1">
                                        <div className="font-mono text-sm font-semibold text-primary">
                                            {booking.aircrafts.registration_number}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            {booking.aircrafts.type}
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge
                                        variant={booking.type === 'dual' ? 'default' : 'secondary'}
                                        className={booking.type === 'dual' ? 'bg-gray-200 text-primary' : 'bg-green-100 text-green-800'}
                                    >
                                        {booking.type.toUpperCase()}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="text-sm">
                                        {formatDateTime(booking.start_time, booking.end_time)}
                                    </div>
                                </TableCell>
                                <TableCell className="text-center">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleViewDetails(booking.booking_id)}
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