export interface CourseHoursProps {
    coursehours_id: string;
    dual_hours: string;
    solo_hours: string;
    navigation_hours: string;
    instruments_hours: string;
    day_time_hours: string;
    night_time_hours: string | null;
    sep_hours: string | null;
    mep_hours: string | null;
    ssat_hours: string | null;
    navigation_total_hours: string;
    navigation_solo_hours: string;
    navigation_dual_hours: string;
}

export interface RequirementRowProps {
    label: string;
    complete: boolean;
}

export interface RequirementSectionProps {
    title: string;
    items: { label: string; complete: boolean }[];
}

export interface RequirementItemProps {
    [key: string]: 'completed' | 'incomplete';
}

export interface RequirementsData {
    [section: string]: RequirementItemProps;
}

export interface RequirementProps {
    userreqstatus_id: string;
    user_id: string;
    requirement_id: string;
    status: string;
    date_completed: string | null;
    requirementitem_id: string;
    requirements: {
        requirement_id: string;
        course_id: string;
        name: string;
        description: string;
    };
}

export interface CourseRequirementsProps {
    data: RequirementProps[] | null;
}

export interface Student {
    id: string;
    name: string;
    phone: string;
    course: string;
    category: string;
}

export interface TrainingHistoryType {
    trainingRecordId: string;
    trainingRecordDate: string;
    instructorName: string;
    exerciseName: string;
    isCompleted: boolean;
    courseId?: string | null;
    courseName?: string | null;
}

export interface LegacyDataProps {
    comments: string;
    recommendations: string;
    date: string;
    day_time: string;
    detailed_exercises_tasks: any[]; // tasks structure is nested
    dual: string;
    exercises: string[];
    instructor: string;
    instruments: string;
    navigation: string;
    night_time: string;
    solo_pic: string;
    ssat: string;
    status: string;
}

export interface RequiredItems {
    requirementitem_id: string;
    description: string;
    type: string;
}

export interface AircraftProps {
    type: string;
    registration_number: string;
}

export interface BookingProps {
    booking_id: string;
    user_id: string[];
    instructor_id: string;
    aircraft_id: string;
    start_time: string;
    end_time: string;
    type: string;
    status: string;
    reason: string | null;
    organisation_id: string | null;
    legacy: number;
}

export interface FlightLogProps {
    flightlog_id: string;
    aircraft_id: string;
    source: string;
    flight_log_date: string;
    device_id: string;
    booking_id: string;
    user_id: string;
    brakes_off_time: string;
    take_off_time: string;
    landing_time: string;
    brakes_on_time: string;
    total_brakes_off_on_duration: number;
    total_airborne_duration: number;
}

export interface StudentUserProps {
    first_name: string;
    last_name: string;
}

export interface InstructorProps {
    first_name: string;
    last_name: string;
}

export interface TrainingRecordProps {
    trainingrecord_id: string;
    booking_id: string;
    instructor_id: string;
    aircraft_id: string;
    flightlog_id: string;
    training_records_date: string;
    exercise_details: string;
    subtasks_ids: string[];
    ratings: number[];
    recommendations: string | null;
    uploaded_files_url: string | null;
    next_recommended_exercise: string | null;
    user_id: string;
    comments: string;
    instructor_sign: string;
    member_sign: string | null;
    day_time: number;
    navigation_time: number;
    dual: number;
    night_time: number;
    instruments: number;
    solo_or_pic: number;
    ssat: number;
    total_hours: number;
    organisation_id: string | null;
    aircrafts: AircraftProps;
    bookings: BookingProps;
    flightlogs: FlightLogProps;
    instructor: InstructorProps;
    student: StudentUserProps;
}
