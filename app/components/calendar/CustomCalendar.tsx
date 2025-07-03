import React, { useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin from '@fullcalendar/interaction';
import type { EventClickArg, EventContentArg } from '@fullcalendar/core';
import { Calendar } from "~/components/ui/calendar";
import { Button } from "~/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import { bookingResponse, instructorResponse, courseResponse, BookingTypeLabels, RESOURCE_COLORS, aircraftResponse, BookingTypes } from './data';
import EventDetailsDialog from './EventDialog';
import { useResolvedTheme } from '~/hooks/use-resolvedTheme';

interface ExtendedProps {
    bookingId: string;
    type: 'aircraft' | 'instructor';
    linkedResourceId: string;
    bookingType: string;
}

interface CalendarEvent {
    id: string;
    title: string;
    start: string;
    end: string;
    resourceId: string;
    backgroundColor: string;
    borderColor: string;
    textColor: string;
    extendedProps: ExtendedProps;
}

interface CalendarResource {
    id: string;
    title: string;
    resourceType?: 'aircraft' | 'instructor';
    order?: number;
}

interface ResourceTimelineCalendarProps {
    resources?: CalendarResource[];
    events?: CalendarEvent[];
}

const createUTCDate = (year: number, month: number, day: number): Date => {
    return new Date(Date.UTC(year, month, day, 0, 0, 0, 0));
};

const getCurrentUTCDate = (): Date => {
    const now = new Date();
    return createUTCDate(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
};

const dateToUTC = (date: Date): Date => {
    return createUTCDate(date.getFullYear(), date.getMonth(), date.getDate());
};

const formatUTCDateForDisplay = (date: Date): string => {
    // Format UTC date for display (no timezone conversion)
    const options: Intl.DateTimeFormatOptions = {
        timeZone: 'UTC',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};

const formatUTCDateForFullCalendar = (date: Date): string => {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const isSameUTCDate = (date1: Date, date2: Date): boolean => {
    return (
        date1.getUTCFullYear() === date2.getUTCFullYear() &&
        date1.getUTCMonth() === date2.getUTCMonth() &&
        date1.getUTCDate() === date2.getUTCDate()
    );
};

const ResourceTimelineCalendar: React.FC<ResourceTimelineCalendarProps> = ({
    resources = [],
    events = []
}) => {
    const calendarRef = useRef<FullCalendar>(null);
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
    const [selectedEventData, setSelectedEventData] = useState<any | null>(null);
    const [selectedBookingData, setSelectedBookingData] = useState<any | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date>(() => getCurrentUTCDate());
    const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false);
    const resolvedTheme = useResolvedTheme()
    console.log(resolvedTheme)


    const handleEventClick = (info: EventClickArg): void => {
        console.log('Event clicked:', info.event);
        if (info.event.extendedProps.bookingType === 'maintenance') {
            return;
        }

        const bookingId = info.event.extendedProps.bookingId;

        const completeBooking = bookingResponse.bookings.find(
            booking => booking.booking_id === bookingId
        );

        setSelectedEventData(info.event);
        setSelectedBookingData(completeBooking || null);
        setDialogOpen(true);
    };

    const closeDialog = (): void => {
        setDialogOpen(false);
        setSelectedEventData(null);
        setSelectedBookingData(null);
    };

    const handleDateSelect = (date: Date | undefined): void => {
        if (date && calendarRef.current) {
            const utcDate = dateToUTC(date);
            setSelectedDate(utcDate);

            const calendarApi = calendarRef.current.getApi();
            const utcDateString = formatUTCDateForFullCalendar(utcDate);
            calendarApi.gotoDate(utcDateString);

            setDatePickerOpen(false);
        }
    };

    const handleTodayClick = (): void => {
        const todayUTC = getCurrentUTCDate();

        setSelectedDate(todayUTC);
        if (calendarRef.current) {
            const calendarApi = calendarRef.current.getApi();
            calendarApi.today();
        }
    };

    const renderEventContent = (eventInfo: EventContentArg): React.ReactElement | string => {
        const bookingType = eventInfo.event.extendedProps.bookingType as string;
        const title = eventInfo.event.title;

        // Special handling for maintenance events
        if (bookingType === 'maintenance') {
            return (
                <div className="flex items-center overflow-hidden">
                    <span className="truncate font-medium">Under Maintenance</span>
                </div>
            );
        }

        if (!bookingType) return title;

        const userNames = title.replace(new RegExp(`^${bookingType}\\s+`), '');

        return (
            <div className="flex items-center overflow-hidden cursor-pointer">
                <span
                    className="inline-flex items-center justify-center w-6 h-6 mr-2 text-xs font-bold text-white bg-black rounded-full flex-shrink-0"
                    style={{ minWidth: '24px' }}
                >
                    {bookingType}
                </span>
                <span className="truncate">{userNames}</span>
            </div>
        );
    };

    return (
        <div>
            <div className="w-full h-full">
                <div className="flex items-center justify-end gap-2 mb-1 p-4">
                    <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                className={cn(
                                    "w-[280px] justify-start text-left font-normal",
                                    !selectedDate && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {selectedDate ? (
                                    <span>
                                        {formatUTCDateForDisplay(selectedDate)}
                                        <span className="ml-2 text-xs text-gray-500"></span>
                                    </span>
                                ) : (
                                    <span>Pick a date</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <div className="p-3 border-b">
                                <div className="text-sm font-medium text-center">
                                    Select Date
                                </div>
                            </div>
                            <Calendar
                                mode="single"
                                selected={selectedDate}
                                onSelect={handleDateSelect}
                                initialFocus
                                defaultMonth={selectedDate}
                                modifiers={{
                                    selected: (date: Date) => {
                                        if (!selectedDate) return false;
                                        return isSameUTCDate(dateToUTC(date), selectedDate);
                                    }
                                }}
                                modifiersStyles={{
                                    selected: {
                                        backgroundColor: 'hsl(var(--primary))',
                                        color: 'hsl(var(--primary-foreground))'
                                    }
                                }}
                            />
                        </PopoverContent>
                    </Popover>

                    <Button
                        variant="default"
                        onClick={handleTodayClick}
                        className=""
                    >
                        Today
                    </Button>
                </div>

                <div className="p-4">
                    <FullCalendar
                        ref={calendarRef}
                        plugins={[resourceTimelinePlugin, interactionPlugin]}
                        initialView="resourceTimelineDay"
                        schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
                        resourceOrder="order"
                        timeZone="UTC"
                        initialDate={formatUTCDateForFullCalendar(selectedDate)}
                        slotLabelFormat={{
                            hour: 'numeric',
                            minute: '2-digit',
                            omitZeroMinute: false,
                            hour12: false,
                            meridiem: 'narrow',
                            timeZone: 'UTC'
                        }}
                        slotMinTime="08:00:00"
                        slotMaxTime="21:00:00"
                        headerToolbar={{
                            left: 'today prev,next',
                            center: 'title',
                            right: '',
                        }}
                        resources={resources}
                        events={events}
                        eventContent={renderEventContent}
                        selectable={false}
                        editable={false}
                        droppable={false}
                        eventResizableFromStart={false}
                        eventClick={handleEventClick}
                        height="600px"
                        resourceAreaWidth="200px"
                        resourceAreaHeaderContent="Resources"
                        slotDuration="00:30:00"
                        slotLabelInterval="01:00:00"
                        resourcesInitiallyExpanded={true}
                        themeSystem=''
                        eventDidMount={(info) => {
                            if (info.event.backgroundColor) {
                                info.el.style.backgroundColor = info.event.backgroundColor;
                                info.el.style.borderColor = info.event.borderColor || info.event.backgroundColor;
                                info.el.style.color = info.event.textColor || '#ffffff';
                            }

                            if (info.event.extendedProps.bookingType === 'maintenance') {
                                info.el.style.cursor = 'default';
                            } else {
                                info.el.style.cursor = 'pointer';
                            }
                        }}
                        handleWindowResize={true}
                        stickyHeaderDates={true}
                        contentHeight="auto"
                        scrollTime="08:00:00"
                        scrollTimeReset={false}
                        datesSet={(dateInfo) => {
                            const fcDate = new Date(dateInfo.start);
                            const utcDate = createUTCDate(
                                fcDate.getUTCFullYear(),
                                fcDate.getUTCMonth(),
                                fcDate.getUTCDate()
                            );
                            setSelectedDate(utcDate);
                        }}
                    />
                </div>
            </div>

            <div className="border rounded-lg shadow-sm p-3">
                <div className="text-sm font-semibold mb-2 text-primary">Booking</div>
                <div className="flex flex-wrap gap-3">
                    {Object.entries(BookingTypes).map(([code, type]) => (
                        <div key={code} className="flex items-center gap-2">
                            <span
                                className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-black rounded-full"
                                style={{ minWidth: '24px' }}
                            >
                                {code}
                            </span>
                            <span className="text-xs">
                                {BookingTypeLabels[type as keyof typeof BookingTypeLabels]}
                            </span>
                        </div>
                    ))}
                </div>

                <EventDetailsDialog
                    isOpen={dialogOpen}
                    onClose={closeDialog}
                    eventData={selectedEventData}
                    completeBookingData={selectedBookingData}
                />
            </div>
        </div>
    );
};

export default ResourceTimelineCalendar;