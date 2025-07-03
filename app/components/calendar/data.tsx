export const aircraftResponse = [
    {
        "aircraft_id": "42dcd911-5eb3-4c9c-8349-016806178039",
        "registration_number": "G-BTID",
        "type": "Piper Warrior PA28",
        "active_status": true,
    },
    {
        "aircraft_id": "4e014cc6-7a56-46ef-9578-d4aaa9760f7c",
        "registration_number": "G-CLFY",
        "type": "Piper Archer PA28",
        "active_status": true,
    },
    {
        "aircraft_id": "81df0cc1-65e5-4940-b947-d38782d1e4c7",
        "registration_number": "G-CIZO",
        "type": "Piper Cadet PA28",
        "active_status": true,
    },
    {
        "aircraft_id": "2d3508e8-9f3a-44da-8cd1-b2bad6e0884f",
        "registration_number": "G-LSFT",
        "type": "Piper Warrior PA28",
        "active_status": null,
    },
    {
        "aircraft_id": "03b6bbcc-b1e8-44fa-a7f1-c94729f666b1",
        "registration_number": "G-TEST",
        "type": "Piper Warrior PA28",
        "active_status": false,
    },
    {
        "aircraft_id": "47a8de4a-8015-496d-8ccc-f6eaf22cc8d9",
        "registration_number": "G-CDEF",
        "type": "Piper Cadet PA28",
        "active_status": false,
    },
    {
        "aircraft_id": "86c15f2b-e690-426d-b452-072e502f5783",
        "registration_number": "G-ENNA",
        "type": "Piper Warrior PA28",
        "active_status": true,
    },
];

export const instructorResponse = [
    {
        "first_name": "Joe",
        "last_name": "Hilling",
        "user_id": "86c2c224-7061-707d-a60d-148eeea95e18",
        "role": "instructor",
    },
    {
        "first_name": "Fajr",
        "last_name": "Fahd",
        "user_id": "76426294-b031-70c8-81ab-f15ba90fb04c",
        "role": "instructor",
    },
    {
        "first_name": "Ben",
        "last_name": "McCutcheon",
        "user_id": "6672b2b4-9091-70a8-0c6e-9b9d381d369e",
        "role": "instructor",
    },
    {
        "first_name": "Rod",
        "last_name": "Boath",
        "user_id": "a6421234-70e1-7002-8a60-1eb5a8d470f3",
        "role": "instructor",
    },
    {
        "first_name": "Bill",
        "last_name": "Pickard",
        "user_id": "96a27204-70f1-70d4-c1e5-73d2145bd193",
        "role": "instructor",
    },
    {
        "first_name": "Mariano",
        "last_name": "Ripoll",
        "user_id": "36f26294-7091-701a-deb0-c9f6a6acbdb0",
        "role": "instructor",
    },
    {
        "first_name": "Roger",
        "last_name": "Patterson",
        "user_id": "9612f2f4-a0e1-7020-a7d0-180fe2ec6652",
        "role": "instructor",
    },
    {
        "first_name": "Arwyn",
        "last_name": "Jones",
        "user_id": "c602c254-2001-7086-dd8b-17d1d4a16019",
        "role": "instructor",
    },
    {
        "first_name": "Aaron",
        "last_name": "Christopher",
        "user_id": "7642d2e4-b091-7016-1c51-80cad976e15d",
        "role": "instructor",
    },
];

export const bookingResponse = {
    "bookings": [
        {
            "booking_id": "efab1190-3d5e-4f96-8195-c81d68746b98",
            "user_id": [
                "0632e2c4-f0c1-7063-1340-f37fe4afdcdc",
                "a662d264-b051-703d-a029-89aecefc9075"
            ],
            "instructor_id": "7642d2e4-b091-7016-1c51-80cad976e15d",
            "aircraft_id": "47a8de4a-8015-496d-8ccc-f6eaf22cc8d9",
            "start_time": "2025-07-01T15:00:00.000Z",
            "end_time": "2025-07-01T17:00:00.000Z",
            "type": "dual",
            "status": "booked",
            "reason": null,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "legacy": null,
            "course_id": "0e8b3fe2-3f63-4038-9b0d-e0382d808c65",
            "aircrafts": {
                "registration_number": "G-CDEF",
                "type": "Piper Cadet PA28",
                "active_status": false
            },
            "users": {
                "first_name": "Anakin",
                "last_name": "Skywalker",
                "email_id": "65sol@rustyload.com"
            }
        },
        {
            "booking_id": "e731f25d-aa00-4f90-a1f8-38af7de1f1da",
            "user_id": [
                "a662d264-b051-703d-a029-89aecefc9075"
            ],
            "instructor_id": "c602c254-2001-7086-dd8b-17d1d4a16019",
            "aircraft_id": "47a8de4a-8015-496d-8ccc-f6eaf22cc8d9",
            "start_time": "2025-07-01T09:00:00.000Z",
            "end_time": "2025-07-01T10:00:00.000Z",
            "type": "dual",
            "status": "booked",
            "reason": null,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "legacy": null,
            "course_id": null,
            "aircrafts": {
                "registration_number": "G-CDEF",
                "type": "Piper Cadet PA28",
                "active_status": false
            },
            "users": {
                "first_name": "Anakin",
                "last_name": "Skywalker",
                "email_id": "65sol@rustyload.com"
            }
        },
        {
            "booking_id": "740f6099-8ea9-4e96-9e9c-e6661de25c3e",
            "user_id": [
                "a662d264-b051-703d-a029-89aecefc9075"
            ],
            "instructor_id": "7642d2e4-b091-7016-1c51-80cad976e15d",
            "aircraft_id": "47a8de4a-8015-496d-8ccc-f6eaf22cc8d9",
            "start_time": "2025-07-01T12:00:00.000Z",
            "end_time": "2025-07-01T14:00:00.000Z",
            "type": "dual",
            "status": "booked",
            "reason": null,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "legacy": null,
            "course_id": "0e8b3fe2-3f63-4038-9b0d-e0382d808c65",
            "aircrafts": {
                "registration_number": "G-CDEF",
                "type": "Piper Cadet PA28",
                "active_status": false
            },
            "users": {
                "first_name": "Anakin",
                "last_name": "Skywalker",
                "email_id": "65sol@rustyload.com"
            }
        },
        {
            "booking_id": "40b51539-8058-473b-9bcd-9381bd18a73a",
            "user_id": [
                "0632e2c4-f0c1-7063-1340-f37fe4afdcdc"
            ],
            "instructor_id": "36f26294-7091-701a-deb0-c9f6a6acbdb0",
            "aircraft_id": "688e5609-029f-4929-a971-eadddd44708e",
            "start_time": "2025-07-01T13:00:00.000Z",
            "end_time": "2025-07-01T15:00:00.000Z",
            "type": "dual",
            "status": "booked",
            "reason": null,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "legacy": null,
            "course_id": "d2d74782-f0de-4fa4-bc75-ebc6575ecd0e",
            "aircrafts": {
                "registration_number": "G-BTNH",
                "type": "Piper Warrior PA28",
                "active_status": null
            },
            "users": {
                "first_name": "Anakin",
                "last_name": "Skywalker",
                "email_id": "65sol@rustyload.com"
            }
        },
        {
            "booking_id": "75c3d3ec-d7bc-4589-8423-139a6638948e",
            "user_id": [
                "0632e2c4-f0c1-7063-1340-f37fe4afdcdc"
            ],
            "instructor_id": "36f26294-7091-701a-deb0-c9f6a6acbdb0",
            "aircraft_id": "47a8de4a-8015-496d-8ccc-f6eaf22cc8d9",
            "start_time": "2025-07-01T14:00:00.000Z",
            "end_time": "2025-07-01T16:00:00.000Z",
            "type": "dual",
            "status": "booked",
            "reason": null,
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
            "legacy": null,
            "course_id": null,
            "aircrafts": {
                "registration_number": "G-CDEF",
                "type": "Piper Cadet PA28",
                "active_status": false
            },
            "users": {
                "first_name": "Anakin",
                "last_name": "Skywalker",
                "email_id": "65sol@rustyload.com"
            }
        },
    ],
    "memberNames": [
        {
            "user_id": "0632e2c4-f0c1-7063-1340-f37fe4afdcdc",
            "first_name": "Leia",
            "last_name": "Skywalker",
            "email_id": "fosyqyvo@logsmarter.net",
            "profile_image_url": "https://res.cloudinary.com/doahxfhjj/image/upload/v1727877164/z0pqscodt3u5dd0wg1gn.jpg"
        },
        {
            "user_id": "a662d264-b051-703d-a029-89aecefc9075",
            "first_name": "Chinmay",
            "last_name": "Anaokar",
            "email_id": "canaokar@gmail.com",
            "profile_image_url": "https://res.cloudinary.com/doahxfhjj/image/upload/v1734373964/ft5leuhqheqznyotmdjn.jpg",
        }
    ],
};

export const courseResponse = {
    "courses": [
        {
            "course_id": "d2d74782-f0de-4fa4-bc75-ebc6575ecd0e",
            "name": "UK CAA Night Rating",
            "description": "A night rating allows a pilot to fly at night exercising visual flight rules (VFR). If a pilot wishes to fly at night using instrument flight rules (IFR) they are also required to have an instrument rating.\n\nThe night rating is non-expiring (it has lifetime validity)."
        },
        {
            "course_id": "0e8b3fe2-3f63-4038-9b0d-e0382d808c65",
            "name": "UK CAA PPL(A)",
            "description": "A PPL for aeroplanes will allow you to act as pilot in command (PIC) in non-commercial operations on aeroplanes or touring motor gliders (TMGs)"
        },
    ]
};

export const RESOURCE_COLORS = {
    aircraft: {
        primary: '#cbd5e1', // slate-200
        secondary: '#f5f3ff', // violet-50
    },
    instructor: {
        primary: '#facc15', // orange-200
        secondary: '#fff7ed', // orange-50
    }
};

export const BookingTypes = {
    'D': 'dual',
    'S': 'solo',
    'G': 'ground-school',
    'E': 'exam',
    'P': 'private-hire',
}

export const BookingTypeLabels = {
    'dual': 'Dual',
    'solo': 'Solo',
    'ground-school': 'Ground School',
    'exam': 'Exam',
    'private-hire': 'Private Hire',
}