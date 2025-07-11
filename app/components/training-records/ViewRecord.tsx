import * as RadioGroup from "@radix-ui/react-radio-group";
import { useState } from "react";
import CourseHours from "./CourseHours";
import CourseRequirements from "./CourseRequirements";
import TrainingHistory from "./TrainingHistory";
import type { LegacyDataProps } from "./type";
import { UserCircle } from "lucide-react";

const response = {
    "trainingRecords": [],
    "hoursDetails": [
        {
            "coursehours_id": "70e69cac-1460-4793-8ef7-36f091a9653e",
            "user_id": "86d232d4-9021-707d-70c6-61a38a5212fb",
            "course_id": "d2d74782-f0de-4fa4-bc75-ebc6575ecd0e",
            "dual_hours": "352.2",
            "solo_hours": "48",
            "navigation_hours": "156",
            "instruments_hours": "0",
            "day_time_hours": "0",
            "night_time_hours": "399",
            "sep_hours": "0",
            "mep_hours": "0",
            "ssat_hours": "0",
            "navigation_total_hours": "156",
            "navigation_solo_hours": "0",
            "navigation_dual_hours": "156",
            "courses": {
                "course_id": "d2d74782-f0de-4fa4-bc75-ebc6575ecd0e",
                "name": "UK CAA Night Rating",
                "description": "A night rating allows a pilot to fly at night exercising visual flight rules (VFR). If a pilot wishes to fly at night using instrument flight rules (IFR) they are also required to have an instrument rating.\n\nThe night rating is non-expiring (it has lifetime validity).",
                "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
                "base_course_id": "8969a492-ac27-4a13-ba8d-0ec2c10d2b3c"
            }
        }
    ],
    "userRequirements": [
        {
            "userreqstatus_id": "12584891-dcf9-4b5a-a059-f178849ee2a3",
            "user_id": "86d232d4-9021-707d-70c6-61a38a5212fb",
            "requirement_id": "8fa69017-a9ba-4ef2-8161-dd2745d5f880",
            "status": "complete",
            "date_completed": null,
            "requirementitem_id": "51d6edc9-e8d4-4430-8d53-dc4163dd7b69",
            "requirements": {
                "requirement_id": "8fa69017-a9ba-4ef2-8161-dd2745d5f880",
                "course_id": "d2d74782-f0de-4fa4-bc75-ebc6575ecd0e",
                "name": "Night Solo",
                "description": "This is a requirement for night solo"
            }
        }
    ],
    "userItemsRequirements": [
        {
            "description": "Current Medical",
            "type": "Medical",
            "requirementitem_id": "51d6edc9-e8d4-4430-8d53-dc4163dd7b69"
        }
    ],
    "legacyTrainingRecords": [
        {
            "legacy_record_id": "0b4b224b-b5df-4f81-83a6-e1c35c929cc6",
            "user_id": "86d232d4-9021-707d-70c6-61a38a5212fb",
            "data": {
                "0e8b3fe2-3f63-4038-9b0d-e0382d808c65": [
                    {
                        "date": "27/08/2023",
                        "dual": "0.00",
                        "ssat": "",
                        "course": null,
                        "status": null,
                        "student": null,
                        "comments": "Skill Test. Pass",
                        "day_time": "0.00",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=36088",
                        "solo_pic": "0.00",
                        "exercises": [],
                        "asymmetric": "",
                        "instructor": "Roger Patterson",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "208862",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": []
                    },
                    {
                        "date": "27/08/2023",
                        "dual": "1.10",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "General handling, all good",
                        "day_time": "1.10",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=35976",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Progress Check 4 (mock skills test)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "208823",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Progress Check 4 (mock skills test)",
                                "tasks": [
                                    {
                                        "name": "Ready for skills test?",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Course completion certificate signed",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Progress Check 4 (mock skills test)",
                                "tasks": [
                                    {
                                        "name": "Ready for skills test?",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Course completion certificate signed",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "20/08/2023",
                        "dual": "1.10",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Nav revision, cct revision, did 2 glides, one full flap and flapless, one go around. Very good flying. ",
                        "day_time": "1.10",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=35524",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 18 (navigation)",
                            "Exercise 12e/13e (emergencies in circuit)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "1.10",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "207713",
                        "next_exercise": null,
                        "recommendations": "General handling revision for confidence",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 12e/13e (emergencies in circuit)",
                                "tasks": [
                                    {
                                        "name": "Crosswind takeoff / landing",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Rejected takeoff",
                                        "status": "0"
                                    },
                                    {
                                        "name": "EFATO",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Glide Approach",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Go - around",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Flapless approach",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Short field takeoff",
                                        "status": "0"
                                    },
                                    {
                                        "name": "General nav procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12e/13e (emergencies in circuit)",
                                "tasks": [
                                    {
                                        "name": "Crosswind takeoff / landing",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Rejected takeoff",
                                        "status": "0"
                                    },
                                    {
                                        "name": "EFATO",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Glide Approach",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Go - around",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Flapless approach",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Short field takeoff",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "05/07/2023",
                        "dual": "0.00",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "",
                        "day_time": "0.00",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=32960",
                        "solo_pic": "0.00",
                        "exercises": [
                            "RT PRACTICAL (ready for exam)"
                        ],
                        "asymmetric": "",
                        "instructor": "Roger Patterson",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": null,
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "RT PRACTICAL (ready for exam)",
                                "tasks": [
                                    {
                                        "name": "Ready for exam",
                                        "status": "0"
                                    },
                                    {
                                        "name": "SRG 1171 signed & attached",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "RT PRACTICAL (ready for exam)",
                                "tasks": [
                                    {
                                        "name": "Ready for exam",
                                        "status": "0"
                                    },
                                    {
                                        "name": "SRG 1171 signed & attached",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "02/07/2023",
                        "dual": "0.73",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Did diversion, VOR tracking, position fix, IR. ",
                        "day_time": "0.73",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=32815",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Progress Check 4 (mock skills test)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.73",
                        "night_time": "0.00",
                        "instruments": "0.25",
                        "flight_log_id": "201768",
                        "next_exercise": null,
                        "recommendations": "Ready for test ",
                        "detailed_exercises": [
                            {
                                "name": "Progress Check 4 (mock skills test)",
                                "tasks": [
                                    {
                                        "name": "Ready for skills test?",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Course completion certificate signed",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Progress Check 4 (mock skills test)",
                                "tasks": [
                                    {
                                        "name": "Ready for skills test?",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Course completion certificate signed",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "02/07/2023",
                        "dual": "1.30",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "General handling revision, slow flight, stalls, steep turn, PFL, flapless and glide approach at Lydd in windy conditions. ",
                        "day_time": "1.30",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=32814",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Progress Check 4 (mock skills test)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "201760",
                        "next_exercise": null,
                        "recommendations": "nav mock skills test",
                        "detailed_exercises": [
                            {
                                "name": "Progress Check 4 (mock skills test)",
                                "tasks": [
                                    {
                                        "name": "Ready for skills test?",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Course completion certificate signed",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Progress Check 4 (mock skills test)",
                                "tasks": [
                                    {
                                        "name": "Ready for skills test?",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Course completion certificate signed",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "25/06/2023",
                        "dual": "0.82",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "VOR tracking back from Lydd and talked to 121.5 for a position fix. ",
                        "day_time": "0.82",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=32454",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 18 (navigation)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.82",
                        "night_time": "0.00",
                        "instruments": "0.30",
                        "flight_log_id": "200888",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "25/06/2023",
                        "dual": "0.00",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Solo nav from Lydd to finish solo nav time. ",
                        "day_time": "0.45",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=32452",
                        "solo_pic": "0.45",
                        "exercises": [
                            "Exercise 18 solo (navigation)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.45",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "200869",
                        "next_exercise": "Progress Check 4 (mock skills test)",
                        "recommendations": "Finish mock skills test ",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 18 solo (navigation)",
                                "tasks": [
                                    {
                                        "name": "Pre solo checklist signed",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Solo nav completed",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 18 solo (navigation)",
                                "tasks": [
                                    {
                                        "name": "Pre solo checklist signed",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Solo nav completed",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "25/06/2023",
                        "dual": "1.35",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "First part of Mock skills test. Did all general handling and emergencies. Slow flight, stall with and without flap, stall in turn, steep turns, unusual attitudes, spiral dives, PFLs, flapless landing, 2 glide approaches, go around from flare, EFATO. \nGood and safe handling. Keep track of passenger briefing ",
                        "day_time": "1.35",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=32451",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Progress Check 4 (mock skills test)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "200861",
                        "next_exercise": null,
                        "recommendations": "Finish solo nav and finish mock skills test",
                        "detailed_exercises": [
                            {
                                "name": "Progress Check 4 (mock skills test)",
                                "tasks": [
                                    {
                                        "name": "Ready for skills test?",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Course completion certificate signed",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Progress Check 4 (mock skills test)",
                                "tasks": [
                                    {
                                        "name": "Ready for skills test?",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Course completion certificate signed",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "13/06/2023",
                        "dual": "0.00",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "EGMC, EGKB\nWell done!\n",
                        "day_time": "0.62",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=31754",
                        "solo_pic": "0.62",
                        "exercises": [
                            "QXC"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.62",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "199055",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "QXC",
                                "tasks": [
                                    {
                                        "name": "Grade:",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "QXC",
                                "tasks": [
                                    {
                                        "name": "Grade:",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "13/06/2023",
                        "dual": "0.00",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "EGMD, Ashford, Margate, Sheerness, EGMC",
                        "day_time": "0.88",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=31753",
                        "solo_pic": "0.88",
                        "exercises": [
                            "QXC"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.88",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "199037",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "QXC",
                                "tasks": [
                                    {
                                        "name": "Grade:",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "QXC",
                                "tasks": [
                                    {
                                        "name": "Grade:",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "13/06/2023",
                        "dual": "0.00",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Route EGKB, Eastbourne, Lydd ",
                        "day_time": "1.18",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=31752",
                        "solo_pic": "1.18",
                        "exercises": [
                            "QXC"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "1.18",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "199006",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "QXC",
                                "tasks": [
                                    {
                                        "name": "Grade:",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "QXC",
                                "tasks": [
                                    {
                                        "name": "Grade:",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "04/06/2023",
                        "dual": "0.67",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Diversions back from Lydd and did a glide approach to land at Biggin.",
                        "day_time": "0.67",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=31234",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 12e/13e (emergencies in circuit)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.67",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "197745",
                        "next_exercise": "QXC",
                        "recommendations": "Ready for QXC",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 12e/13e (emergencies in circuit)",
                                "tasks": [
                                    {
                                        "name": "Crosswind takeoff / landing",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Rejected takeoff",
                                        "status": "0"
                                    },
                                    {
                                        "name": "EFATO",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Glide Approach",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Go - around",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Flapless approach",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Short field takeoff",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12e/13e (emergencies in circuit)",
                                "tasks": [
                                    {
                                        "name": "Crosswind takeoff / landing",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Rejected takeoff",
                                        "status": "0"
                                    },
                                    {
                                        "name": "EFATO",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Glide Approach",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Go - around",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Flapless approach",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Short field takeoff",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "04/06/2023",
                        "dual": "0.00",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Route via Lydd - Eastbourne - Tonbridge - Canterbury - Ashford - Lydd",
                        "day_time": "1.43",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=31225",
                        "solo_pic": "1.43",
                        "exercises": [
                            "Exercise 18 solo (navigation)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "1.43",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "197725",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 18 solo (navigation)",
                                "tasks": [
                                    {
                                        "name": "Pre solo checklist signed",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Solo nav completed",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 18 solo (navigation)",
                                "tasks": [
                                    {
                                        "name": "Pre solo checklist signed",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Solo nav completed",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "04/06/2023",
                        "dual": "0.67",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "EFATO at Biggin. Did diversions via Ashford to Lydd. Solo nav next",
                        "day_time": "0.67",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=31218",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 18 (navigation)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.67",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "197697",
                        "next_exercise": "Exercise 18 solo (navigation)",
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "01/06/2023",
                        "dual": "0.62",
                        "ssat": "",
                        "course": null,
                        "status": null,
                        "student": null,
                        "comments": "Flight back from Lydd, did glide approach into Biggin",
                        "day_time": "0.62",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=31064",
                        "solo_pic": "0.00",
                        "exercises": [],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.62",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "197362",
                        "next_exercise": null,
                        "recommendations": "More solo nav",
                        "detailed_exercises": []
                    },
                    {
                        "date": "01/06/2023",
                        "dual": "0.00",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Nav solo from Lydd, Bewl, Hastings, Lydd",
                        "day_time": "0.87",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=31056",
                        "solo_pic": "0.87",
                        "exercises": [
                            "Exercise 18 solo (navigation)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.87",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "197350",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 18 solo (navigation)",
                                "tasks": [
                                    {
                                        "name": "Pre solo checklist signed",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Solo nav completed",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 18 solo (navigation)",
                                "tasks": [
                                    {
                                        "name": "Pre solo checklist signed",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Solo nav completed",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "01/06/2023",
                        "dual": "0.65",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Diversions on the way to Lydd. Ready for solo nav",
                        "day_time": "0.65",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=31053",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Progress Check 3 (pre-nav solo)",
                            "Exercise 18 (navigation)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.65",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "197323",
                        "next_exercise": "Exercise 18 solo (navigation)",
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ready for nav solo?",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Progress Check 3 (pre-nav solo)",
                                "tasks": [
                                    {
                                        "name": "Ready for nav solo?",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "30/05/2023",
                        "dual": "0.57",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Flight back from EGMC did VOR tracking",
                        "day_time": "0.57",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=30964",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 18 (navigation)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.57",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "197079",
                        "next_exercise": null,
                        "recommendations": "solo nav next ",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "30/05/2023",
                        "dual": "0.00",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Solo rejoin via Sheerness and solo circuits",
                        "day_time": "0.77",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=30953",
                        "solo_pic": "0.77",
                        "exercises": [
                            "Exercise 12/13 Solo (circuits)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "197059",
                        "next_exercise": "Exercise 18 solo (navigation)",
                        "recommendations": "Start solo mav next",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 12/13 Solo (circuits)",
                                "tasks": [
                                    {
                                        "name": "Pre solo checklist signed",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Solo circuits completed",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12/13 Solo (circuits)",
                                "tasks": [
                                    {
                                        "name": "Pre solo checklist signed",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Solo circuits completed",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "30/05/2023",
                        "dual": "0.90",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Practiced diversions on the way to Southend. Good headings and timings. RB join for 05 via Sheerness ",
                        "day_time": "0.90",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=30945",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Progress Check 3 (pre-nav solo)",
                            "Exercise 18 (navigation)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.90",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "197042",
                        "next_exercise": "Exercise 12/13 Solo (circuits)",
                        "recommendations": "Solo rejoin via Sheerness and solo circuits",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ready for nav solo?",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Progress Check 3 (pre-nav solo)",
                                "tasks": [
                                    {
                                        "name": "Ready for nav solo?",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "25/05/2023",
                        "dual": "0.45",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "CDEF flight back from Southend, good departure procedures after long flying. Did instrument flying all the way back to Biggin, good job",
                        "day_time": "0.45",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=30705",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 19 (Instrument flying)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.45",
                        "night_time": "0.00",
                        "instruments": "0.45",
                        "flight_log_id": "196342",
                        "next_exercise": null,
                        "recommendations": "Prep for solo nav next and rejoin",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 19 (Instrument flying)",
                                "tasks": [
                                    {
                                        "name": "Instrument flying",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 19 (Instrument flying)",
                                "tasks": [
                                    {
                                        "name": "Instrument flying",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "25/05/2023",
                        "dual": "1.08",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Did nav to Southend, after 3 legs had to divert due to low cloud, practised low level nav to divert, good decision making. Good procedures for nav, just watch heading after you looked at the map. Good join for rwy05 RB for the first time. 3 solid landings",
                        "day_time": "1.08",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=30702",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 18 (navigation)",
                            "Exercise 12/13 (circuits)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "1.08",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "196341",
                        "next_exercise": null,
                        "recommendations": "Solo ccts",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 12/13 (circuits)",
                                "tasks": [
                                    {
                                        "name": "Takeoff procedures",
                                        "status": "28"
                                    },
                                    {
                                        "name": "Circuit procedures",
                                        "status": "28"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "28"
                                    },
                                    {
                                        "name": "Radio procedures",
                                        "status": "28"
                                    },
                                    {
                                        "name": "Joining procedures",
                                        "status": "28"
                                    },
                                    {
                                        "name": "Flare & Landing",
                                        "status": "28"
                                    },
                                    {
                                        "name": "General nav procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12/13 (circuits)",
                                "tasks": [
                                    {
                                        "name": "Takeoff procedures",
                                        "status": "28"
                                    },
                                    {
                                        "name": "Circuit procedures",
                                        "status": "28"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "28"
                                    },
                                    {
                                        "name": "Radio procedures",
                                        "status": "28"
                                    },
                                    {
                                        "name": "Joining procedures",
                                        "status": "28"
                                    },
                                    {
                                        "name": "Flare & Landing",
                                        "status": "28"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "25/05/2023",
                        "dual": "0.00",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "9 ccts, did one go around due being blown sideways, very good decision\nCDEF 25/05/23 approx 1hr",
                        "day_time": "1.15",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=30703",
                        "solo_pic": "1.15",
                        "exercises": [
                            "Exercise 12/13 Solo (circuits)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "196338",
                        "next_exercise": null,
                        "recommendations": "More solo ccts",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 12/13 Solo (circuits)",
                                "tasks": [
                                    {
                                        "name": "Pre solo checklist signed",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Solo circuits completed",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12/13 Solo (circuits)",
                                "tasks": [
                                    {
                                        "name": "Pre solo checklist signed",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Solo circuits completed",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "25/05/2023",
                        "dual": "0.00",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "CDEF 30 min solo ccts 7 ccts southend",
                        "day_time": "1.02",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=30704",
                        "solo_pic": "1.02",
                        "exercises": [
                            "Exercise 12/13 Solo (circuits)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "196333",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 12/13 Solo (circuits)",
                                "tasks": [
                                    {
                                        "name": "Pre solo checklist signed",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Solo circuits completed",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12/13 Solo (circuits)",
                                "tasks": [
                                    {
                                        "name": "Pre solo checklist signed",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Solo circuits completed",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "22/05/2023",
                        "dual": "1.47",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Crosswind practice at Lydd, did 2 flapless, one glide, 2 with partial panel. All good. Did a diversion and go around into headcorn and a go around. Procedure back to Biggin all unassisted, and fitted in with a jet circling for 03, well done! ",
                        "day_time": "1.47",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=30512",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 12e/13e (emergencies in circuit)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "1.47",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "195879",
                        "next_exercise": null,
                        "recommendations": "Solo circuits",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 12e/13e (emergencies in circuit)",
                                "tasks": [
                                    {
                                        "name": "Crosswind takeoff / landing",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Rejected takeoff",
                                        "status": "0"
                                    },
                                    {
                                        "name": "EFATO",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Glide Approach",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Go - around",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flapless approach",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Short field takeoff",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12e/13e (emergencies in circuit)",
                                "tasks": [
                                    {
                                        "name": "Crosswind takeoff / landing",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Rejected takeoff",
                                        "status": "0"
                                    },
                                    {
                                        "name": "EFATO",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Glide Approach",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Go - around",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flapless approach",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Short field takeoff",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "22/05/2023",
                        "dual": "0.57",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Did diversions over to Lydd, need to do a couple more, but good headings and timings. Stay aware of dangers/msa around you on diversions. First time on 03 at Lydd. Too much crosswind for solo",
                        "day_time": "0.57",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=30496",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 18 (navigation)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.57",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "195842",
                        "next_exercise": null,
                        "recommendations": "Practise crosswind controls",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "30/04/2023",
                        "dual": "0.48",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Flight back from Southend, practised IR, good handling",
                        "day_time": "0.48",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=29306",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 19 (Instrument flying)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.25",
                        "flight_log_id": "193236",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 19 (Instrument flying)",
                                "tasks": [
                                    {
                                        "name": "Instrument flying",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 19 (Instrument flying)",
                                "tasks": [
                                    {
                                        "name": "Instrument flying",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "30/04/2023",
                        "dual": "0.00",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "9 circuits Southend well done!",
                        "day_time": "1.13",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=29305",
                        "solo_pic": "1.13",
                        "exercises": [
                            "Exercise 12/13 Solo (circuits)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "193229",
                        "next_exercise": "Exercise 12/13 Solo (circuits)",
                        "recommendations": "More solo circuits",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 12/13 Solo (circuits)",
                                "tasks": [
                                    {
                                        "name": "Pre solo checklist signed",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Solo circuits completed",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12/13 Solo (circuits)",
                                "tasks": [
                                    {
                                        "name": "Pre solo checklist signed",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Solo circuits completed",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "30/04/2023",
                        "dual": "0.60",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Good circuits, go solo! ",
                        "day_time": "0.60",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=29299",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 12/13 (circuits)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "193209",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 12/13 (circuits)",
                                "tasks": [
                                    {
                                        "name": "Takeoff procedures",
                                        "status": "28"
                                    },
                                    {
                                        "name": "Circuit procedures",
                                        "status": "28"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "28"
                                    },
                                    {
                                        "name": "Radio procedures",
                                        "status": "28"
                                    },
                                    {
                                        "name": "Joining procedures",
                                        "status": "28"
                                    },
                                    {
                                        "name": "Flare & Landing",
                                        "status": "28"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12/13 (circuits)",
                                "tasks": [
                                    {
                                        "name": "Takeoff procedures",
                                        "status": "28"
                                    },
                                    {
                                        "name": "Circuit procedures",
                                        "status": "28"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "28"
                                    },
                                    {
                                        "name": "Radio procedures",
                                        "status": "28"
                                    },
                                    {
                                        "name": "Joining procedures",
                                        "status": "28"
                                    },
                                    {
                                        "name": "Flare & Landing",
                                        "status": "28"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "16/04/2023",
                        "dual": "0.63",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Nav back from Lydd, IR turns, get instrument flow going",
                        "day_time": "0.63",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=28487",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 19 (Instrument flying)",
                            "Exercise 18 (navigation)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.63",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "191649",
                        "next_exercise": "Exercise 12/13 Solo (circuits)",
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Instrument flying",
                                        "status": "30"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 19 (Instrument flying)",
                                "tasks": [
                                    {
                                        "name": "Instrument flying",
                                        "status": "30"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "16/04/2023",
                        "dual": "0.00",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "3 circuits, good! ",
                        "day_time": "0.43",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=28483",
                        "solo_pic": "0.43",
                        "exercises": [
                            "Exercise 12/13 Solo (circuits)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "191627",
                        "next_exercise": "Exercise 12/13 Solo (circuits)",
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 12/13 Solo (circuits)",
                                "tasks": [
                                    {
                                        "name": "Pre solo checklist signed",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Solo circuits completed",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12/13 Solo (circuits)",
                                "tasks": [
                                    {
                                        "name": "Pre solo checklist signed",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Solo circuits completed",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "16/04/2023",
                        "dual": "1.37",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Did tracking on the way to Lydd, revised PFLs and EFATO. Then did 2 glide approaches at Lydd and 5 normal circuits. Did 2 go around from flare, all good. ",
                        "day_time": "1.37",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=28479",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 18 (navigation)",
                            "Exercise 16 (PFLs)",
                            "Exercise 12e/13e (emergencies in circuit)",
                            "Exercise 12/13 (circuits)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "191604",
                        "next_exercise": "Exercise 12/13 Solo (circuits)",
                        "recommendations": "Solo circuits ",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 12/13 (circuits)",
                                "tasks": [
                                    {
                                        "name": "Takeoff procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Circuit procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Radio procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Joining procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flare & Landing",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Crosswind takeoff / landing",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Rejected takeoff",
                                        "status": "0"
                                    },
                                    {
                                        "name": "EFATO",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Glide Approach",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Go - around",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flapless approach",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Short field takeoff",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Selecting appropriate field",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Engine restart procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Glide Approach field",
                                        "status": "29"
                                    },
                                    {
                                        "name": "General nav procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12/13 (circuits)",
                                "tasks": [
                                    {
                                        "name": "Takeoff procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Circuit procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Radio procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Joining procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flare & Landing",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12e/13e (emergencies in circuit)",
                                "tasks": [
                                    {
                                        "name": "Crosswind takeoff / landing",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Rejected takeoff",
                                        "status": "0"
                                    },
                                    {
                                        "name": "EFATO",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Glide Approach",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Go - around",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flapless approach",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Short field takeoff",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 16 (PFLs)",
                                "tasks": [
                                    {
                                        "name": "Selecting appropriate field",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Engine restart procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Glide Approach field",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "02/04/2023",
                        "dual": "0.57",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Flight back from EGMC",
                        "day_time": "0.57",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=27724",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 18 (navigation)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.57",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "189944",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "02/04/2023",
                        "dual": "0.98",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Has been a month since last flight, went to southend did circuits with all different flap settings. Turbulent conditions and variable winds. But good handling. Work on pre flight planning so you feel more prepared, but in flight good procedures. ",
                        "day_time": "0.98",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=27722",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 12/13 (circuits)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "189915",
                        "next_exercise": "Exercise 12/13 Solo (circuits)",
                        "recommendations": "Solo circuits",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 12/13 (circuits)",
                                "tasks": [
                                    {
                                        "name": "Takeoff procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Circuit procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Radio procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Joining procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flare & Landing",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12/13 (circuits)",
                                "tasks": [
                                    {
                                        "name": "Takeoff procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Circuit procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Radio procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Joining procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flare & Landing",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "05/03/2023",
                        "dual": "0.42",
                        "ssat": "",
                        "course": null,
                        "status": null,
                        "student": null,
                        "comments": "Flight back from EGMC",
                        "day_time": "0.42",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=26733",
                        "solo_pic": "0.00",
                        "exercises": [],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.42",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "188009",
                        "next_exercise": "Exercise 12/13 Solo (circuits)",
                        "recommendations": "More solo circuits",
                        "detailed_exercises": []
                    },
                    {
                        "date": "05/03/2023",
                        "dual": "0.00",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Well done!",
                        "day_time": "0.27",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=26732",
                        "solo_pic": "0.27",
                        "exercises": [
                            "Exercise 14 (first solo)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "187990",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 14 (first solo)",
                                "tasks": [
                                    {
                                        "name": "Pre solo checklist signed",
                                        "status": "29"
                                    },
                                    {
                                        "name": "First solo completed",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 14 (first solo)",
                                "tasks": [
                                    {
                                        "name": "Pre solo checklist signed",
                                        "status": "29"
                                    },
                                    {
                                        "name": "First solo completed",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "05/03/2023",
                        "dual": "0.98",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "4 consistent circuits ready for first solo",
                        "day_time": "0.98",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=26721",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Progress Check 2 (circuits)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "187984",
                        "next_exercise": "Exercise 14 (first solo)",
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Progress Check 2 (circuits)",
                                "tasks": [
                                    {
                                        "name": "Ready for solo?",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Progress Check 2 (circuits)",
                                "tasks": [
                                    {
                                        "name": "Ready for solo?",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "26/02/2023",
                        "dual": "0.63",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Nav back to EGKB from Southend. gusty conditions, good landing back at biggin with crosswind",
                        "day_time": "0.63",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=26228",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 18 (navigation)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.63",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "187113",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "26/02/2023",
                        "dual": "1.00",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Did 3 flapless circuits at southend. Very good considering the gusty conditions. Just need to build up some confidence, but competent for solo!",
                        "day_time": "1.00",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=26227",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 12/13 (circuits)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "187075",
                        "next_exercise": null,
                        "recommendations": "Circuits & nav for solo ",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 12/13 (circuits)",
                                "tasks": [
                                    {
                                        "name": "Takeoff procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Circuit procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Radio procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Joining procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flare & Landing",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12/13 (circuits)",
                                "tasks": [
                                    {
                                        "name": "Takeoff procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Circuit procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Radio procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Joining procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flare & Landing",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "19/02/2023",
                        "dual": "0.88",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "2 glide approaches at Lydd, go around on the first one, crosswwind landing on the second. Good flying. Did 4 diversions on the way back, again going well. Did acc/stop at Biggin",
                        "day_time": "0.88",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=25964",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 18 (navigation)",
                            "Exercise 12e/13e (emergencies in circuit)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.88",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "186545",
                        "next_exercise": null,
                        "recommendations": "Keep practising nav, and circuits to get ready for solo ",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 12e/13e (emergencies in circuit)",
                                "tasks": [
                                    {
                                        "name": "Crosswind takeoff / landing",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Rejected takeoff",
                                        "status": "29"
                                    },
                                    {
                                        "name": "EFATO",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Glide Approach",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Go - around",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flapless approach",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Short field takeoff",
                                        "status": "0"
                                    },
                                    {
                                        "name": "General nav procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12e/13e (emergencies in circuit)",
                                "tasks": [
                                    {
                                        "name": "Crosswind takeoff / landing",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Rejected takeoff",
                                        "status": "29"
                                    },
                                    {
                                        "name": "EFATO",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Glide Approach",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Go - around",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flapless approach",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Short field takeoff",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "19/02/2023",
                        "dual": "1.38",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Nav down to Lydd, Wadhurst, Seaford, Bexhill, Rye. Good procedures, keep looking ahead, but going well in general. Good join at Lydd, crosswind circuits with flap and flapless. Good flares and crosswind landings. Did 3 EFATo all good procedure and flying.",
                        "day_time": "1.38",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=25961",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 18 (navigation)",
                            "Exercise 12e/13e (emergencies in circuit)",
                            "Exercise 12/13 (circuits)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "1.38",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "186518",
                        "next_exercise": null,
                        "recommendations": "Emergencies in circuits and get ready for solo. Diversions for nav next ",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 12/13 (circuits)",
                                "tasks": [
                                    {
                                        "name": "Takeoff procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Circuit procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Radio procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Joining procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flare & Landing",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Crosswind takeoff / landing",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Rejected takeoff",
                                        "status": "0"
                                    },
                                    {
                                        "name": "EFATO",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Glide Approach",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Go - around",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flapless approach",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Short field takeoff",
                                        "status": "0"
                                    },
                                    {
                                        "name": "General nav procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12/13 (circuits)",
                                "tasks": [
                                    {
                                        "name": "Takeoff procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Circuit procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Radio procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Joining procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flare & Landing",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12e/13e (emergencies in circuit)",
                                "tasks": [
                                    {
                                        "name": "Crosswind takeoff / landing",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Rejected takeoff",
                                        "status": "0"
                                    },
                                    {
                                        "name": "EFATO",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Glide Approach",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Go - around",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flapless approach",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Short field takeoff",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "23/01/2023",
                        "dual": "0.00",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Class 2 valid till 17/03/2024\n564212D",
                        "day_time": "0.00",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=24803",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Medical"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": null,
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Medical",
                                "tasks": [
                                    {
                                        "name": "Valid medical",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Medical",
                                "tasks": [
                                    {
                                        "name": "Valid medical",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "23/01/2023",
                        "dual": "0.72",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Planned a route, go over all pre flight planning again at home including diversion planning, mass and balance and performance. Did a frequency change to Farnborough but had to turn back due to icing conditions. ",
                        "day_time": "0.72",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=24808",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 18 (navigation)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.72",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "184329",
                        "next_exercise": "Exercise 18 (navigation)",
                        "recommendations": "More nav ",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "22/01/2023",
                        "dual": "1.15",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Need to do exams! Wirk on pre flight planning, keep thinking ahead in the flight and use your chart. Did 2 flapless approaches at Southend, first one again keep thinking ahead and set up the plane properly, monitor speed earlier on. Second one was good. Did 3 glide approaches in a busy ish circuit. Good orbits. Glides okay, flare a lite longer, but safe.",
                        "day_time": "1.15",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=24774",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 12e/13e (emergencies in circuit)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "184244",
                        "next_exercise": "Exercise 18 (navigation)",
                        "recommendations": "Nearly ready for solo, need to do exams! Work on nav next ",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 12e/13e (emergencies in circuit)",
                                "tasks": [
                                    {
                                        "name": "Crosswind takeoff / landing",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Rejected takeoff",
                                        "status": "0"
                                    },
                                    {
                                        "name": "EFATO",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Glide Approach",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Go - around",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Flapless approach",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Short field takeoff",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12e/13e (emergencies in circuit)",
                                "tasks": [
                                    {
                                        "name": "Crosswind takeoff / landing",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Rejected takeoff",
                                        "status": "0"
                                    },
                                    {
                                        "name": "EFATO",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Glide Approach",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Go - around",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Flapless approach",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Short field takeoff",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "15/01/2023",
                        "dual": "0.83",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "First time into Southend. Joined RH downwind for rwy 23, very turbulent and gusty. Did 1 T&G, one go around due to traffic and 1 full stop, all flapless. Very good flares considering the turbulence. ",
                        "day_time": "0.83",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=24380",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 12e/13e (emergencies in circuit)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "183449",
                        "next_exercise": "Exercise 12e/13e (emergencies in circuit)",
                        "recommendations": "Emergencies in circuit",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 12e/13e (emergencies in circuit)",
                                "tasks": [
                                    {
                                        "name": "Crosswind takeoff / landing",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Rejected takeoff",
                                        "status": "0"
                                    },
                                    {
                                        "name": "EFATO",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Glide Approach",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Go - around",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Flapless approach",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Short field takeoff",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12e/13e (emergencies in circuit)",
                                "tasks": [
                                    {
                                        "name": "Crosswind takeoff / landing",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Rejected takeoff",
                                        "status": "0"
                                    },
                                    {
                                        "name": "EFATO",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Glide Approach",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Go - around",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Flapless approach",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Short field takeoff",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "05/12/2022",
                        "dual": "0.85",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Went over PFLs with restart procedures and comms. Went over precautionary landings. ",
                        "day_time": "0.85",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=23511",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 17 (precautionary landings)",
                            "Exercise 16 (PFLs)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "181697",
                        "next_exercise": null,
                        "recommendations": "Go over ex 16, 17 again later on in training. Next back in the circuit and emergencies ",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 16 (PFLs)",
                                "tasks": [
                                    {
                                        "name": "Selecting appropriate field",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Engine restart procedures",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Glide Approach field",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Inspection circuit",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Overall procedures",
                                        "status": "30"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 16 (PFLs)",
                                "tasks": [
                                    {
                                        "name": "Selecting appropriate field",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Engine restart procedures",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Glide Approach field",
                                        "status": "30"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 17 (precautionary landings)",
                                "tasks": [
                                    {
                                        "name": "Inspection circuit",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Overall procedures",
                                        "status": "30"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "04/12/2022",
                        "dual": "1.10",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Started with PFLs. Did 4 PFLs and 1 EFATO. Low cloud base so focussed on Aviate/Navigate and setting up correctly for the field. Set up not bad. Go over PFL again to practise engine restart procedures and comms. ",
                        "day_time": "1.10",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=23500",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 16 (PFLs)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "181670",
                        "next_exercise": "Exercise 12e/13e (emergencies in circuit)",
                        "recommendations": "Circuits & emergencies",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 16 (PFLs)",
                                "tasks": [
                                    {
                                        "name": "Selecting appropriate field",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Engine restart procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Glide Approach field",
                                        "status": "30"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 16 (PFLs)",
                                "tasks": [
                                    {
                                        "name": "Selecting appropriate field",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Engine restart procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Glide Approach field",
                                        "status": "30"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "24/10/2022",
                        "dual": "1.43",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Did steep turns, spiral dives and unusual attitudes, all very good handling. Need to work on theory exams!",
                        "day_time": "1.43",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=22242",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 15 (advanced turning)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "178915",
                        "next_exercise": "Exercise 12e/13e (emergencies in circuit)",
                        "recommendations": "Circuits and emergencies next ",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 15 (advanced turning)",
                                "tasks": [
                                    {
                                        "name": "Steep turns (45 / 60 degree)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Spiral dives",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Unusual attitude recovery",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 15 (advanced turning)",
                                "tasks": [
                                    {
                                        "name": "Steep turns (45 / 60 degree)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Spiral dives",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Unusual attitude recovery",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "09/10/2022",
                        "dual": "1.10",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Did 4 flapless circuits with crosswind, not bad at all, consistent flares. Did nav on the way back, keep looking ahead!",
                        "day_time": "1.10",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=21577",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 12e/13e (emergencies in circuit)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "1.10",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "177644",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 12e/13e (emergencies in circuit)",
                                "tasks": [
                                    {
                                        "name": "Crosswind takeoff / landing",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Rejected takeoff",
                                        "status": "0"
                                    },
                                    {
                                        "name": "EFATO",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Glide Approach",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Go - around",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Flapless approach",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Short field takeoff",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12e/13e (emergencies in circuit)",
                                "tasks": [
                                    {
                                        "name": "Crosswind takeoff / landing",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Rejected takeoff",
                                        "status": "0"
                                    },
                                    {
                                        "name": "EFATO",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Glide Approach",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Go - around",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Flapless approach",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Short field takeoff",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "09/10/2022",
                        "dual": "1.43",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Nav on the way to Lydd via Wadhurst  Hailsham  Tenterden. Make sure to check DI and compass after every turn. Keep looking for features, don't presume. Nav is getting there, go over diversions next. \nDid crosswind circuits at Lydd, make sure to keep controls into the wind even in flare. Did all circuits with 10 deg flap. ",
                        "day_time": "1.43",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=21564",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 18 (navigation)",
                            "Exercise 12e/13e (emergencies in circuit)",
                            "Exercise 12/13 (circuits)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "1.43",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "177618",
                        "next_exercise": null,
                        "recommendations": "Diversions, more nav and circuits with different flap settings ",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 12/13 (circuits)",
                                "tasks": [
                                    {
                                        "name": "Takeoff procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Circuit procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Radio procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Joining procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flare & Landing",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Crosswind takeoff / landing",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Rejected takeoff",
                                        "status": "0"
                                    },
                                    {
                                        "name": "EFATO",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Glide Approach",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Go - around",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Flapless approach",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Short field takeoff",
                                        "status": "0"
                                    },
                                    {
                                        "name": "General nav procedures",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12/13 (circuits)",
                                "tasks": [
                                    {
                                        "name": "Takeoff procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Circuit procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Radio procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Joining procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flare & Landing",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12e/13e (emergencies in circuit)",
                                "tasks": [
                                    {
                                        "name": "Crosswind takeoff / landing",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Rejected takeoff",
                                        "status": "0"
                                    },
                                    {
                                        "name": "EFATO",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Glide Approach",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Go - around",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Flapless approach",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Short field takeoff",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "12/09/2022",
                        "dual": "2.13",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Finished stalls and did incipient spins. Good recoveries ready to continue in the circuit, went to Lydd for circuits, circuit procedures are getting there, keep thinking ahead for the set up of the approach. Did dead reconning on the way back from Lydd. Good flight",
                        "day_time": "2.13",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=24804",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 18 (navigation)",
                            "Exercise 12/13 (circuits)",
                            "Progress Check 1 (ex 4-11)",
                            "Exercise 11 (incipient spin)",
                            "Exercise 10b (stalling)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "2.13",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "175150",
                        "next_exercise": "Exercise 12/13 (circuits)",
                        "recommendations": "More circuits next ",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 10b (stalling)",
                                "tasks": [
                                    {
                                        "name": "Stalling without flaps",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Stalling with full flap",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Stalling in turn",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Power on stall",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Incipient spin:",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ready for circuits?",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Takeoff procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Circuit procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Joining procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flare & Landing",
                                        "status": "0"
                                    },
                                    {
                                        "name": "General nav procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 10b (stalling)",
                                "tasks": [
                                    {
                                        "name": "Stalling without flaps",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Stalling with full flap",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Stalling in turn",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Power on stall",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 11 (incipient spin)",
                                "tasks": [
                                    {
                                        "name": "Incipient spin:",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Progress Check 1 (ex 4-11)",
                                "tasks": [
                                    {
                                        "name": "Ready for circuits?",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12/13 (circuits)",
                                "tasks": [
                                    {
                                        "name": "Takeoff procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Circuit procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Joining procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flare & Landing",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "11/09/2022",
                        "dual": "0.00",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "",
                        "day_time": "0.00",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=20190",
                        "solo_pic": "0.00",
                        "exercises": [
                            "GROUND (performance calculations)",
                            "GROUND (mass & balance)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": null,
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "GROUND (mass & balance)",
                                "tasks": [
                                    {
                                        "name": "POH",
                                        "status": "29"
                                    },
                                    {
                                        "name": "CRP unit conversions",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Fuel calculations",
                                        "status": "29"
                                    },
                                    {
                                        "name": "M&B calculations",
                                        "status": "29"
                                    },
                                    {
                                        "name": "POH",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Airport AIP declared distances",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Safety factors",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Performance calculations",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "GROUND (mass & balance)",
                                "tasks": [
                                    {
                                        "name": "POH",
                                        "status": "29"
                                    },
                                    {
                                        "name": "CRP unit conversions",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Fuel calculations",
                                        "status": "29"
                                    },
                                    {
                                        "name": "M&B calculations",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "GROUND (performance calculations)",
                                "tasks": [
                                    {
                                        "name": "POH",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Airport AIP declared distances",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Safety factors",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Performance calculations",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "31/08/2022",
                        "dual": "1.43",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Fly out back from Kemble, used skydemon for nav. ",
                        "day_time": "1.43",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=19682",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 18 (navigation)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "1.43",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "174227",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "24/08/2022",
                        "dual": "1.00",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Did some more circuits at Headcorn, set up and judgment of height was better. Flares are getting there, but can still flare a bit longer. ",
                        "day_time": "1.00",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=19332",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 12/13 (circuits)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "173396",
                        "next_exercise": "Exercise 12/13 (circuits)",
                        "recommendations": "Recommend circuits with different flap settings",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 12/13 (circuits)",
                                "tasks": [
                                    {
                                        "name": "Takeoff procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Circuit procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Radio procedures",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Joining procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Flare & Landing",
                                        "status": "30"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12/13 (circuits)",
                                "tasks": [
                                    {
                                        "name": "Takeoff procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Circuit procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Radio procedures",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Joining procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Flare & Landing",
                                        "status": "30"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "24/08/2022",
                        "dual": "1.03",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Did circuits at Headcorn. Make sure to keep backpressure on the control even after touching down, especially on grass. Use right rudder in the climb out! Good procedures in the circuit.  Approach set up is getting there, monitor height a bit better on base. Flares are not bad, but can flare a bit longer. ",
                        "day_time": "1.03",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=19331",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 12/13 (circuits)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "173366",
                        "next_exercise": "Exercise 12/13 (circuits)",
                        "recommendations": "More circuits",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 12/13 (circuits)",
                                "tasks": [
                                    {
                                        "name": "Takeoff procedures",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Circuit procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Radio procedures",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Joining procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flare & Landing",
                                        "status": "30"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12/13 (circuits)",
                                "tasks": [
                                    {
                                        "name": "Takeoff procedures",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Circuit procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Radio procedures",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Joining procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flare & Landing",
                                        "status": "30"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "21/08/2022",
                        "dual": "1.53",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Did circuits at Lydd, 5 with 20 deg flap, circuits going well, make sure not to loose height at end of downwind. Approaches are going wel, already adjusting for height changes. Flares are going well, no extra input required. Did 2 circuits with 10 deg flap, watch nose attitude on approach. \nDid 4 nav legs back to Biggin, good timings, headings and altitudes. Keep looking out for features, don't presume it's right. Good approach back at Biggin",
                        "day_time": "1.53",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=19153",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 18 (navigation)",
                            "Exercise 12/13 (circuits)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.80",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "173047",
                        "next_exercise": "Exercise 10b (stalling)",
                        "recommendations": "Recommend finishing stalls and incipient spin, then continue circuits",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 12/13 (circuits)",
                                "tasks": [
                                    {
                                        "name": "Takeoff procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Circuit procedures",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Radio procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Joining procedures",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Flare & Landing",
                                        "status": "30"
                                    },
                                    {
                                        "name": "General nav procedures",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 12/13 (circuits)",
                                "tasks": [
                                    {
                                        "name": "Takeoff procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Circuit procedures",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Radio procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Joining procedures",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Flare & Landing",
                                        "status": "30"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 18 (navigation)",
                                "tasks": [
                                    {
                                        "name": "General nav procedures",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Diversion Procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Low level / reduced visibility procedures",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Radio navigation",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Pre-flight planning",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Off-track correction",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "07/08/2022",
                        "dual": "1.27",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Bumpy conditions. Revised clean stall and did full stalls. Did stalls with full flap and stall in turn. Recoveries going well. ",
                        "day_time": "1.27",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=18443",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 10b (stalling)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "171607",
                        "next_exercise": "Exercise 10b (stalling)",
                        "recommendations": "Finish stalls and incipient spins, then start with circuits",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 10b (stalling)",
                                "tasks": [
                                    {
                                        "name": "Stalling without flaps",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Stalling with full flap",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Stalling in turn",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Power on stall",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 10b (stalling)",
                                "tasks": [
                                    {
                                        "name": "Stalling without flaps",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Stalling with full flap",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Stalling in turn",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Power on stall",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "04/08/2022",
                        "dual": "1.32",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Take off procedures are going well, be careful not to pull power back too early after levelling off, let the speed build up. Revised slow flights with and without flaps, bit rusty, but no problems in the end. Then did 4 clean stalls. Be careful not too drop the nose too much in the recovery and use right rudder, not right aileron in the recovery! Did flight back into Biggin pretty much unaided. Just a little help on final to counteract turbulence.  ",
                        "day_time": "1.32",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=18307",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 10b (stalling)",
                            "Exercise 10a (slow flight)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "171158",
                        "next_exercise": "Exercise 10b (stalling)",
                        "recommendations": "Revise clean stalls before continuing with other stalls. ",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 10a (slow flight)",
                                "tasks": [
                                    {
                                        "name": "Slow flight with flaps",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Slow flight without flaps",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Go around procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Stalling without flaps",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Stalling with full flap",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Stalling in turn",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Power on stall",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 10a (slow flight)",
                                "tasks": [
                                    {
                                        "name": "Slow flight with flaps",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Slow flight without flaps",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Go around procedures",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 10b (stalling)",
                                "tasks": [
                                    {
                                        "name": "Stalling without flaps",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Stalling with full flap",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Stalling in turn",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Power on stall",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "01/08/2022",
                        "dual": "0.00",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "",
                        "day_time": "0.00",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=18097",
                        "solo_pic": "0.00",
                        "exercises": [
                            "GROUND (circuit procedures & emergencies)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": null,
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "GROUND (circuit procedures & emergencies)",
                                "tasks": [
                                    {
                                        "name": "General circuit patterns",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Take off procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "ATZ joining procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Overhead join",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Emergencies on take off",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Emergencies on approach",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Windshear",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "GROUND (circuit procedures & emergencies)",
                                "tasks": [
                                    {
                                        "name": "General circuit patterns",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Take off procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Approach procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "ATZ joining procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Overhead join",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Emergencies on take off",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Emergencies on approach",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Windshear",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "31/07/2022",
                        "dual": "0.00",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "",
                        "day_time": "0.00",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=18060",
                        "solo_pic": "0.00",
                        "exercises": [
                            "GROUND (flight planning)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": null,
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "GROUND (flight planning)",
                                "tasks": [
                                    {
                                        "name": "Filling in a VFR log",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Familiarisation with charts and aerodrome layouts",
                                        "status": "29"
                                    },
                                    {
                                        "name": "CRP wind calculations",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Off track corrections",
                                        "status": "29"
                                    },
                                    {
                                        "name": "In flight navigation procedures",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "GROUND (flight planning)",
                                "tasks": [
                                    {
                                        "name": "Filling in a VFR log",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Familiarisation with charts and aerodrome layouts",
                                        "status": "29"
                                    },
                                    {
                                        "name": "CRP wind calculations",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Off track corrections",
                                        "status": "29"
                                    },
                                    {
                                        "name": "In flight navigation procedures",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "31/07/2022",
                        "dual": "0.00",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "",
                        "day_time": "0.00",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=18052",
                        "solo_pic": "0.00",
                        "exercises": [
                            "GROUND (weather, charts & NOTAMs)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": null,
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "GROUND (weather, charts & NOTAMs)",
                                "tasks": [
                                    {
                                        "name": "METAR & TAF",
                                        "status": "29"
                                    },
                                    {
                                        "name": "MetOffice charts",
                                        "status": "29"
                                    },
                                    {
                                        "name": "NOTAMs",
                                        "status": "29"
                                    },
                                    {
                                        "name": "AIP",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "GROUND (weather, charts & NOTAMs)",
                                "tasks": [
                                    {
                                        "name": "METAR & TAF",
                                        "status": "29"
                                    },
                                    {
                                        "name": "MetOffice charts",
                                        "status": "29"
                                    },
                                    {
                                        "name": "NOTAMs",
                                        "status": "29"
                                    },
                                    {
                                        "name": "AIP",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "21/07/2022",
                        "dual": "1.25",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Went through emergencies. Student did take off unassisted, just be mindful of right rudder on climb out. Did slow flights with and without flaps, all good, good holding of attitude and speeds, keep an eye outside on the horizon still. Recovery and go around procedures are okay, worth revising before stalls. ",
                        "day_time": "1.25",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=17667",
                        "solo_pic": "0.00",
                        "exercises": [
                            "GROUND (emergency procedures)",
                            "Exercise 10a (slow flight)",
                            "Exercise 5 (taxiing)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "169660",
                        "next_exercise": "Exercise 10b (stalling)",
                        "recommendations": "Revise slow flights and then start stalls. ",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 5 (taxiing)",
                                "tasks": [
                                    {
                                        "name": "Taxiing",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Emergencies on ground",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Slow flight with flaps",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Slow flight without flaps",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Go around procedures",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Engine fires",
                                        "status": "29"
                                    },
                                    {
                                        "name": "EFATO",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Engine failure in air",
                                        "status": "29"
                                    },
                                    {
                                        "name": "PFLWOP",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Rejected Takeoff",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Undercarriage",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flap failure",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Electrical failure",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Cabin fire",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Radio failure",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Brake failure",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Aircraft evacuation",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Lost procedures",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 5 (taxiing)",
                                "tasks": [
                                    {
                                        "name": "Taxiing",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Emergencies on ground",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 10a (slow flight)",
                                "tasks": [
                                    {
                                        "name": "Slow flight with flaps",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Slow flight without flaps",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Go around procedures",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "GROUND (emergency procedures)",
                                "tasks": [
                                    {
                                        "name": "Engine fires",
                                        "status": "29"
                                    },
                                    {
                                        "name": "EFATO",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Engine failure in air",
                                        "status": "29"
                                    },
                                    {
                                        "name": "PFLWOP",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Rejected Takeoff",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Undercarriage",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Flap failure",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Electrical failure",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Cabin fire",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Radio failure",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Brake failure",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Aircraft evacuation",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Lost procedures",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "19/07/2022",
                        "dual": "1.10",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Student did take off with crosswind. Revised 30 deg turn, keep an eye outside, get a scan flow going between horizon and instruments, find a balance. Climbing and descending turns are good. Keep your hand on the throttle. Student set up the approach, assisted with power and landing as there was turbulence and crosswind. ",
                        "day_time": "1.10",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=17607",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 9 (turning)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "169535",
                        "next_exercise": "Exercise 10a (slow flight)",
                        "recommendations": "Recommend slow flights next",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 9 (turning)",
                                "tasks": [
                                    {
                                        "name": "Ex 9.1 (medium level turn)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 9.2 (climbing/descending turn)",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 9 (turning)",
                                "tasks": [
                                    {
                                        "name": "Ex 9.1 (medium level turn)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 9.2 (climbing/descending turn)",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "18/07/2022",
                        "dual": "1.13",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Student did the take off, be ware of the performance in hot weather, but otherwise good procedures all the way out to sevenoaks. Did medium level turns and rate one turns, very good. Make sure to anticipate leveling off to a heading. Student did all the approach steps, good looking ahead. And set up the plane for landing. Talked through the approach, good flight.",
                        "day_time": "1.13",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=17564",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 9 (turning)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "169475",
                        "next_exercise": "Exercise 9 (turning)",
                        "recommendations": "Climbing and descending turns. ",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 9 (turning)",
                                "tasks": [
                                    {
                                        "name": "Ex 9.1 (medium level turn)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 9.2 (climbing/descending turn)",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 9 (turning)",
                                "tasks": [
                                    {
                                        "name": "Ex 9.1 (medium level turn)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 9.2 (climbing/descending turn)",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "12/07/2022",
                        "dual": "1.12",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Student did take off, good handling and procedures. Talked a bit about the GPS direct to in case of being lost. Revised Vx, Vy climbs and did climbing with flap, very good. Revised glide descends and did descending with flaps. All good. Did the full rejoin procedure at Biggin and set up for approach. ",
                        "day_time": "1.12",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=17371",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 8 (descending)",
                            "Exercise 7 (climbing)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "168786",
                        "next_exercise": "Exercise 9 (turning)",
                        "recommendations": "Ex 9",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 7 (climbing)",
                                "tasks": [
                                    {
                                        "name": "Climbing Vy",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Climbing Vx",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Climbing with flaps",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 8.1 (glide)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 8.2 (powered descent)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 8.3 (with flaps)",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 7 (climbing)",
                                "tasks": [
                                    {
                                        "name": "Climbing Vy",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Climbing Vx",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Climbing with flaps",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 8 (descending)",
                                "tasks": [
                                    {
                                        "name": "Ex 8.1 (glide)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 8.2 (powered descent)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 8.3 (with flaps)",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "10/07/2022",
                        "dual": "0.53",
                        "ssat": "",
                        "course": null,
                        "status": null,
                        "student": null,
                        "comments": "Flight back from EGKH. Good procedures in general, watch heights/altitudes when doing checks and in general. ",
                        "day_time": "0.53",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=17292",
                        "solo_pic": "0.00",
                        "exercises": [],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "168575",
                        "next_exercise": "Exercise 7 (climbing)",
                        "recommendations": "Recommend continuing with 7, 8",
                        "detailed_exercises": []
                    },
                    {
                        "date": "28/06/2022",
                        "dual": "1.10",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Comms are getting there. Did revision of Vy climbs and powered descends. Procedures and anticipating level is going better. Started with Vx climbs which went well and started glide descends. Need to work on anticipating leveling off after glide descend. ",
                        "day_time": "1.10",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=16876",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 8 (descending)",
                            "Exercise 7 (climbing)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "167305",
                        "next_exercise": "Exercise 7 (climbing)",
                        "recommendations": "Ex 7, 8 continue",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 7 (climbing)",
                                "tasks": [
                                    {
                                        "name": "Climbing Vy",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Climbing Vx",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Climbing with flaps",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Ex 8.1 (glide)",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Ex 8.2 (powered descent)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 8.3 (with flaps)",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 7 (climbing)",
                                "tasks": [
                                    {
                                        "name": "Climbing Vy",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Climbing Vx",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Climbing with flaps",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 8 (descending)",
                                "tasks": [
                                    {
                                        "name": "Ex 8.1 (glide)",
                                        "status": "30"
                                    },
                                    {
                                        "name": "Ex 8.2 (powered descent)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 8.3 (with flaps)",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "21/06/2022",
                        "dual": "1.28",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Focused on procedures and comms, very good progression from last flight. Revised powered descends and Vy climbs, much better on the rudder use, attitudes in general and carb heat use. ",
                        "day_time": "1.28",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=16578",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 8 (descending)",
                            "Exercise 7 (climbing)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "166626",
                        "next_exercise": "Exercise 7 (climbing)",
                        "recommendations": "Continuing with ex 7, 8",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 7 (climbing)",
                                "tasks": [
                                    {
                                        "name": "Climbing Vy",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Climbing Vx",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Climbing with flaps",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Ex 8.1 (glide)",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Ex 8.2 (powered descent)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 8.3 (with flaps)",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 7 (climbing)",
                                "tasks": [
                                    {
                                        "name": "Climbing Vy",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Climbing Vx",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Climbing with flaps",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 8 (descending)",
                                "tasks": [
                                    {
                                        "name": "Ex 8.1 (glide)",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Ex 8.2 (powered descent)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 8.3 (with flaps)",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "16/06/2022",
                        "dual": "0.00",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "",
                        "day_time": "0.00",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=16361",
                        "solo_pic": "0.00",
                        "exercises": [
                            "GROUND (communications)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": null,
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "GROUND (communications)",
                                "tasks": [
                                    {
                                        "name": "Airport layout",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Basic comms at airport",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Frequency change",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Rejoin comms",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Noise abatement",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "GROUND (communications)",
                                "tasks": [
                                    {
                                        "name": "Airport layout",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Basic comms at airport",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Frequency change",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Rejoin comms",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Noise abatement",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "13/06/2022",
                        "dual": "1.15",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Focused on checks and procedures on the ground and comms. Talked through the take off, use the right rudder in climb. Watch altitudes when doing check or comms. Worked on recognizing surroundings and airspace awareness. Still be mindfull of rudder in climbs and need to work on leveling off as attitude tends to fluctuate. Turn carb heat off after descending. Only did powered descends. ",
                        "day_time": "1.15",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=16177",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 8 (descending)",
                            "Exercise 7 (climbing)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "165643",
                        "next_exercise": "Exercise 7 (climbing)",
                        "recommendations": "Please work on checks at home and look at google maps. Recommend going through climbing and descending again and do Vx climbs, glide descends. Works on spacial awareness",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 7 (climbing)",
                                "tasks": [
                                    {
                                        "name": "Climbing Vy",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Climbing Vx",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Climbing with flaps",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Ex 8.1 (glide)",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Ex 8.2 (powered descent)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 8.3 (with flaps)",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 7 (climbing)",
                                "tasks": [
                                    {
                                        "name": "Climbing Vy",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Climbing Vx",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Climbing with flaps",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 8 (descending)",
                                "tasks": [
                                    {
                                        "name": "Ex 8.1 (glide)",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Ex 8.2 (powered descent)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 8.3 (with flaps)",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "12/06/2022",
                        "dual": "1.10",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "EX 7&8 FIRST ATTEMPT AT RADIO VERY GOOD GOOD CONTROL  OF AIRCRAFT FREAD CHKS VERYU GOOD",
                        "day_time": "1.10",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=16152",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 8 (descending)",
                            "Exercise 7 (climbing)"
                        ],
                        "asymmetric": "",
                        "instructor": "Gary Saint",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "165608",
                        "next_exercise": null,
                        "recommendations": "NEXT 8PT2",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 7 (climbing)",
                                "tasks": [
                                    {
                                        "name": "Climbing Vy",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Climbing Vx",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Climbing with flaps",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Ex 8.1 (glide)",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Ex 8.2 (powered descent)",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Ex 8.3 (with flaps)",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 7 (climbing)",
                                "tasks": [
                                    {
                                        "name": "Climbing Vy",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Climbing Vx",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Climbing with flaps",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 8 (descending)",
                                "tasks": [
                                    {
                                        "name": "Ex 8.1 (glide)",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Ex 8.2 (powered descent)",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Ex 8.3 (with flaps)",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "07/06/2022",
                        "dual": "1.08",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Worked on A check and procedures and checks on the ground. Go over taxi checks at home. Followed through on take off. FREDA checks are good, straight and level flying is good. Couldn't do climbs and descends due to lower cloud base. Did medium level turns, use attitude to keep turns stable, and remember to use rudder, but good in general. Talked through comms and approach procedures.  ",
                        "day_time": "1.08",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=15982",
                        "solo_pic": "0.00",
                        "exercises": [
                            "GROUND (familiarisation & A-check)",
                            "Exercise 9 (turning)",
                            "Exercise 5 (taxiing)"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "165048",
                        "next_exercise": "Exercise 7 (climbing)",
                        "recommendations": "Go over checks at home and ex 7, 8, 9 next.",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 5 (taxiing)",
                                "tasks": [
                                    {
                                        "name": "Taxiing",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Emergencies on ground",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Ex 9.1 (medium level turn)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 9.2 (climbing/descending turn)",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Familiarisation of aircraft",
                                        "status": "29"
                                    },
                                    {
                                        "name": "A check",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 5 (taxiing)",
                                "tasks": [
                                    {
                                        "name": "Taxiing",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Emergencies on ground",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 9 (turning)",
                                "tasks": [
                                    {
                                        "name": "Ex 9.1 (medium level turn)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 9.2 (climbing/descending turn)",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "GROUND (familiarisation & A-check)",
                                "tasks": [
                                    {
                                        "name": "Familiarisation of aircraft",
                                        "status": "29"
                                    },
                                    {
                                        "name": "A check",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "08/05/2022",
                        "dual": "1.52",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "  EX8pt2 tracked from biggin doing FREDA checks maintaining hight and heading towards lydd climbing to 5000 ft starting with glide at 80 kts selecting aiming point on the ground and ROD,THEN RPM TO 1600 (AIMING POINT & ROD ) ASI WHITE ARK 1ST STAGE FLAP CONTROLING PITCH 80kts then 2nd & third stage flap . GO AROUND procedure good control of aircraft . No R/T on this trip ",
                        "day_time": "1.52",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=14818",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 8 (descending)",
                            "Exercise 7 (climbing)"
                        ],
                        "asymmetric": "",
                        "instructor": "Gary Saint",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "162314",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 7 (climbing)",
                                "tasks": [
                                    {
                                        "name": "Climbing Vy",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Climbing Vx",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Climbing with flaps",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Ex 8.1 (glide)",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Ex 8.2 (powered descent)",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Ex 8.3 (with flaps)",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 7 (climbing)",
                                "tasks": [
                                    {
                                        "name": "Climbing Vy",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Climbing Vx",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Climbing with flaps",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 8 (descending)",
                                "tasks": [
                                    {
                                        "name": "Ex 8.1 (glide)",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Ex 8.2 (powered descent)",
                                        "status": "0"
                                    },
                                    {
                                        "name": "Ex 8.3 (with flaps)",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "25/02/2022",
                        "dual": "0.93",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "EX9 very good  30 deg left and right FREDA cks  next ex 7&8",
                        "day_time": "0.93",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=12233",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 9 (turning)"
                        ],
                        "asymmetric": "",
                        "instructor": "Gary Saint",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "155977",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 9 (turning)",
                                "tasks": [
                                    {
                                        "name": "Ex 9.1 (medium level turn)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 9.2 (climbing/descending turn)",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 9 (turning)",
                                "tasks": [
                                    {
                                        "name": "Ex 9.1 (medium level turn)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 9.2 (climbing/descending turn)",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "28/01/2022",
                        "dual": "1.40",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": " EX 6 1 very good plus EX 9 very good ",
                        "day_time": "1.40",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=12239",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 6 (straight and level)"
                        ],
                        "asymmetric": "",
                        "instructor": "Gary Saint",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "154583",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 6 (straight and level)",
                                "tasks": [
                                    {
                                        "name": "Ex 6.1 (constant power)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 6.2 (changing speed and flaps)",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 6 (straight and level)",
                                "tasks": [
                                    {
                                        "name": "Ex 6.1 (constant power)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 6.2 (changing speed and flaps)",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "21/01/2022",
                        "dual": "1.12",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "EX 4 He is a very  capable student fast learning .every manoeuvre competently compleated first time \nalso doing FREDA chks  , no radio , very good at trimming move on to 6 S&L as next EX",
                        "day_time": "1.12",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=11076",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 4 (effects of controls)"
                        ],
                        "asymmetric": "",
                        "instructor": "Gary Saint",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "154087",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 4 (effects of controls)",
                                "tasks": [
                                    {
                                        "name": "Ex 4.1 (primary effects)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 4.2 (secondary effects)",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 4 (effects of controls)",
                                "tasks": [
                                    {
                                        "name": "Ex 4.1 (primary effects)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 4.2 (secondary effects)",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "14/01/2022",
                        "dual": "1.05",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "",
                        "day_time": "1.05",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=14488",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 4 (effects of controls)"
                        ],
                        "asymmetric": "",
                        "instructor": "Gary Saint",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "153525",
                        "next_exercise": "Exercise 4 (effects of controls)",
                        "recommendations": " EX4 ",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 4 (effects of controls)",
                                "tasks": [
                                    {
                                        "name": "Ex 4.1 (primary effects)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 4.2 (secondary effects)",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 4 (effects of controls)",
                                "tasks": [
                                    {
                                        "name": "Ex 4.1 (primary effects)",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Ex 4.2 (secondary effects)",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "16/12/2021",
                        "dual": "1.17",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "trial lessson",
                        "day_time": "1.17",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=47&user_id=3965&truse=14490",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Exercise 3 (trial lesson)"
                        ],
                        "asymmetric": "",
                        "instructor": "Gary Saint",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "152258",
                        "next_exercise": "Exercise 4 (effects of controls)",
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Exercise 3 (trial lesson)",
                                "tasks": [
                                    {
                                        "name": "Completed",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Exercise 3 (trial lesson)",
                                "tasks": [
                                    {
                                        "name": "Completed",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    }
                ],
                "9eef0bba-f32d-49d3-b33d-f9f5c4cbad84": [
                    {
                        "date": "18/05/2025",
                        "dual": "0.75",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Practise flying from the right hand seat, good coordination and nice alignment with the runway considering it was the first time! Nice landings.",
                        "day_time": "0.75",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=146&user_id=3965&truse=66615",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Dual Training"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "276509",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "11/05/2025",
                        "dual": "0.78",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Flapless and glides approach at Lydd. Nav back to Biggin, crosswind landings at Biggin. ",
                        "day_time": "0.78",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=146&user_id=3965&truse=66268",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Dual Training"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "275395",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "09/03/2025",
                        "dual": "1.27",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Turweston to Bembridge ",
                        "day_time": "1.27",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=146&user_id=3965&truse=62293",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Dual Training"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "1.27",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "265603",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "21/11/2024",
                        "dual": "0.85",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Dual check flight, night ccts at southend and route back to Biggin. Good consistent ccts ",
                        "day_time": "0.00",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=146&user_id=3965&truse=58252",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Dual Training"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.85",
                        "instruments": "0.00",
                        "flight_log_id": "256473",
                        "next_exercise": null,
                        "recommendations": "check complete",
                        "detailed_exercises": [
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "12/09/2024",
                        "dual": "0.00",
                        "ssat": "",
                        "course": null,
                        "status": null,
                        "student": null,
                        "comments": "Flight from Bembridge to Biggin. ",
                        "day_time": "1.25",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=146&user_id=3965&truse=55057",
                        "solo_pic": "0.00",
                        "exercises": [],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "1.25",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "248602",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": []
                    },
                    {
                        "date": "12/09/2024",
                        "dual": "0.00",
                        "ssat": "",
                        "course": null,
                        "status": null,
                        "student": null,
                        "comments": "Goodwood to Bembridge ",
                        "day_time": "0.43",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=146&user_id=3965&truse=55043",
                        "solo_pic": "0.00",
                        "exercises": [],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.43",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "248562",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": []
                    },
                    {
                        "date": "12/09/2024",
                        "dual": "0.90",
                        "ssat": "",
                        "course": null,
                        "status": null,
                        "student": null,
                        "comments": "Flight to Goodwood, did VOR tracking, grass landing, Overhead join for 32",
                        "day_time": "0.90",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=146&user_id=3965&truse=55034",
                        "solo_pic": "0.00",
                        "exercises": [],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.90",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "248533",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": []
                    },
                    {
                        "date": "28/08/2024",
                        "dual": "0.63",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Flight backbfrom lydd, went through unusual attitudes, stalling.",
                        "day_time": "0.63",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=146&user_id=3965&truse=54289",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Dual Training"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.63",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "246909",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "28/08/2024",
                        "dual": "0.97",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Currency flight to Lydd. Did Efato,  glide, full flap and flapless. All good",
                        "day_time": "0.97",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=146&user_id=3965&truse=54259",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Dual Training"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "246866",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "09/06/2024",
                        "dual": "0.78",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Alt failure practise, nav back from Lydd, efato",
                        "day_time": "0.78",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=146&user_id=3965&truse=49148",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Dual Training"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.78",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "235229",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "15/05/2024",
                        "dual": "0.97",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Dual check flight, Gatwick transit into Shorham ",
                        "day_time": "0.97",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=146&user_id=3965&truse=47520",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Dual Training"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.97",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "231858",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "15/10/2023",
                        "dual": "1.10",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Crosswind landings at Southend ",
                        "day_time": "1.10",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=146&user_id=3965&truse=38683",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Dual Training"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "214707",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "08/10/2023",
                        "dual": "0.68",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Gatwick transit into Shoreham",
                        "day_time": "0.68",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=146&user_id=3965&truse=38150",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Dual Training"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.68",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "213894",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "05/10/2023",
                        "dual": "0.68",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": "Back from shoreham, didn't get to do another transit",
                        "day_time": "0.68",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=146&user_id=3965&truse=37908",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Dual Training"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.68",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "213459",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "05/10/2023",
                        "dual": "1.27",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Gatwick transit, 4 ccts at Shoreham ",
                        "day_time": "1.27",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=146&user_id=3965&truse=37901",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Dual Training"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "1.27",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "213434",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "28"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "28"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "07/09/2023",
                        "dual": "1.10",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Farnborough transit back from coventry",
                        "day_time": "1.10",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=146&user_id=3965&truse=37903",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Dual Training"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "1.10",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "210565",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "07/09/2023",
                        "dual": "1.38",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": "Transit through Luton to Coventry,2 landings ",
                        "day_time": "1.38",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=e49ec9f4b729689910bc7a386fd1bf9a03fb3a0f8b2b48f03f2079a4172f8be5&idco=146&user_id=3965&truse=37902",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Dual Training"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "1.38",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": "210532",
                        "next_exercise": null,
                        "recommendations": "",
                        "detailed_exercises": [
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Dual Training",
                                "tasks": [
                                    {
                                        "name": "Dual training",
                                        "status": "0"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    }
                ],
                "d2d74782-f0de-4fa4-bc75-ebc6575ecd0e": [
                    {
                        "date": "28/01/2024",
                        "dual": "1.30",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": null,
                        "day_time": "0.00",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=3c402252ad1b5db2be15c02ec69f37f7efc9e5eea42b22e9dbb884c7830b6c81&idco=128&user_id=3965&truse=42612",
                        "solo_pic": "0.80",
                        "exercises": [
                            "Night Solo",
                            "Night Dual"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "2.08",
                        "instruments": "0.00",
                        "flight_log_id": "222065",
                        "next_exercise": null,
                        "recommendations": null,
                        "detailed_exercises": [
                            {
                                "name": "Night Dual",
                                "tasks": [
                                    {
                                        "name": "Night Dual",
                                        "status": "29"
                                    },
                                    {
                                        "name": "Night Solo",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Night Dual",
                                "tasks": [
                                    {
                                        "name": "Night Dual",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Night Solo",
                                "tasks": [
                                    {
                                        "name": "Night Solo",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "14/01/2024",
                        "dual": "0.50",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": null,
                        "day_time": "0.00",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=3c402252ad1b5db2be15c02ec69f37f7efc9e5eea42b22e9dbb884c7830b6c81&idco=128&user_id=3965&truse=41997",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Night Dual"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.50",
                        "night_time": "0.50",
                        "instruments": "0.00",
                        "flight_log_id": "220904",
                        "next_exercise": null,
                        "recommendations": null,
                        "detailed_exercises": [
                            {
                                "name": "Night Dual",
                                "tasks": [
                                    {
                                        "name": "Night Dual",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Night Dual",
                                "tasks": [
                                    {
                                        "name": "Night Dual",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "14/01/2024",
                        "dual": "0.75",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": null,
                        "day_time": "0.00",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=3c402252ad1b5db2be15c02ec69f37f7efc9e5eea42b22e9dbb884c7830b6c81&idco=128&user_id=3965&truse=41983",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Night Dual"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.75",
                        "instruments": "0.00",
                        "flight_log_id": "220902",
                        "next_exercise": null,
                        "recommendations": null,
                        "detailed_exercises": [
                            {
                                "name": "Night Dual",
                                "tasks": [
                                    {
                                        "name": "Night Dual",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Night Dual",
                                "tasks": [
                                    {
                                        "name": "Night Dual",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "07/01/2024",
                        "dual": "0.27",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": null,
                        "day_time": "0.00",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=3c402252ad1b5db2be15c02ec69f37f7efc9e5eea42b22e9dbb884c7830b6c81&idco=128&user_id=3965&truse=41703",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Night Dual"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.00",
                        "night_time": "0.27",
                        "instruments": "0.00",
                        "flight_log_id": "220318",
                        "next_exercise": null,
                        "recommendations": null,
                        "detailed_exercises": [
                            {
                                "name": "Night Dual",
                                "tasks": [
                                    {
                                        "name": "Night Dual",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Night Dual",
                                "tasks": [
                                    {
                                        "name": "Night Dual",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "28/11/2023",
                        "dual": "1.73",
                        "ssat": "",
                        "course": null,
                        "status": "Complete",
                        "student": null,
                        "comments": null,
                        "day_time": "0.00",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=3c402252ad1b5db2be15c02ec69f37f7efc9e5eea42b22e9dbb884c7830b6c81&idco=128&user_id=3965&truse=40822",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Night Dual"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "1.20",
                        "night_time": "1.73",
                        "instruments": "0.00",
                        "flight_log_id": "218572",
                        "next_exercise": null,
                        "recommendations": null,
                        "detailed_exercises": [
                            {
                                "name": "Night Dual",
                                "tasks": [
                                    {
                                        "name": "Night Dual",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Night Dual",
                                "tasks": [
                                    {
                                        "name": "Night Dual",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "14/11/2023",
                        "dual": "1.32",
                        "ssat": "",
                        "course": null,
                        "status": "Incomplete",
                        "student": null,
                        "comments": null,
                        "day_time": "0.00",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=3c402252ad1b5db2be15c02ec69f37f7efc9e5eea42b22e9dbb884c7830b6c81&idco=128&user_id=3965&truse=40220",
                        "solo_pic": "0.00",
                        "exercises": [
                            "Night Dual"
                        ],
                        "asymmetric": "",
                        "instructor": "Carmen Gardien",
                        "navigation": "0.90",
                        "night_time": "1.32",
                        "instruments": "0.00",
                        "flight_log_id": "217298",
                        "next_exercise": null,
                        "recommendations": null,
                        "detailed_exercises": [
                            {
                                "name": "Night Dual",
                                "tasks": [
                                    {
                                        "name": "Night Dual",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            },
                            {
                                "name": "Night Dual",
                                "tasks": [
                                    {
                                        "name": "Night Dual",
                                        "status": "29"
                                    }
                                ],
                                "status": "Unknown"
                            }
                        ]
                    },
                    {
                        "date": "01/11/2023",
                        "dual": "0.00",
                        "ssat": "0.00",
                        "course": null,
                        "status": null,
                        "student": null,
                        "comments": null,
                        "day_time": "0.00",
                        "edit_url": "https://www.cloudbasega.com/app/tr_student_exercise_edit.php?token=3c402252ad1b5db2be15c02ec69f37f7efc9e5eea42b22e9dbb884c7830b6c81&idco=128&user_id=3965&truse=39717",
                        "solo_pic": "0.00",
                        "exercises": [],
                        "asymmetric": "",
                        "instructor": "NO INSTRUCTOR - HISTORY",
                        "navigation": "0.00",
                        "night_time": "0.00",
                        "instruments": "0.00",
                        "flight_log_id": null,
                        "next_exercise": null,
                        "recommendations": null,
                        "detailed_exercises": []
                    }
                ]
            }
        }
    ],
    "courseDetails": {
        "name": "UK CAA Night Rating",
        "description": "A night rating allows a pilot to fly at night exercising visual flight rules (VFR). If a pilot wishes to fly at night using instrument flight rules (IFR) they are also required to have an instrument rating.\n\nThe night rating is non-expiring (it has lifetime validity)."
    }
}

type UserProps = {
    first_name: string;
    last_name: string;
    role: string;
    email_id: string;
    profile_image_url: string | null;
    course_id: string[];
}

export const ViewRecord = ({ email_id, profile_image_url, course_id, first_name, last_name, role }: UserProps) => {
    const [selectedCourse, setSelectedCourse] = useState(course_id[0]);

    const handleCourseChange = (value: string) => {
        setSelectedCourse(value);
    };

    const legacyData = (() => {
        const legacyRecords = response.legacyTrainingRecords;

        if (!legacyRecords || legacyRecords.length === 0) {
            return [];
        }

        const courseSpecificLegacyData: LegacyDataProps[] = [];

        legacyRecords.forEach((legacyRecord: any) => {
            if (legacyRecord.data && legacyRecord.data[selectedCourse]) {
                const courseData = legacyRecord.data[selectedCourse];

                courseData.forEach((item: any) => {
                    courseSpecificLegacyData.push({
                        comments: item.comments || '',
                        recommendations: item.recommendations || '',
                        date: item.date || '',
                        day_time: item.day_time || '',
                        detailed_exercises_tasks: item.detailed_exercises?.map((exercise: any) => exercise.tasks) || [],
                        dual: item.dual || '',
                        exercises: item.exercises || [],
                        instructor: item.instructor || '',
                        instruments: item.instruments || '',
                        navigation: item.navigation || '',
                        night_time: item.night_time || '',
                        solo_pic: item.solo_pic || '',
                        ssat: item.ssat || '',
                        status: item.status || ''
                    });
                });
            }
        });

        return courseSpecificLegacyData;
    })();

    return (
        <div>
            <div className="mx-auto">
                <div className="flex flex-row gap-36">
                    {role === 'member' ? (
                        <h6 className="text-lg flex items-center mb-4 text-gray-800">
                            <UserCircle className="h-6 w-6 mr-2 text-primary" />
                            {first_name} {last_name}
                        </h6>
                    ) : (
                        <h6 className="text-lg mb-4 text-gray-800 flex items-center">
                            <span>Student Name: {first_name} {last_name}</span>
                            <span className="ml-1">({email_id})</span>
                        </h6>
                    )}
                </div>

                {course_id.length > 0 ? (
                    <div className="flex mb-4">
                        <div className="flex gap-2">
                            <RadioGroup.Root
                                defaultValue={course_id[0]}
                                onValueChange={handleCourseChange}
                                className="w-full grid grid-cols-3 gap-3"
                            >
                                {course_id.map((course) => (
                                    <RadioGroup.Item
                                        key={course}
                                        value={course}
                                        className="ring-[2px] cursor-pointer ring-border rounded py-1 px-3 data-[state=checked]:ring-2 data-[state=checked]:ring-primary"
                                    >
                                        <span className="font-semibold tracking-tight">{response.courseDetails.name}</span>
                                    </RadioGroup.Item>
                                ))}
                            </RadioGroup.Root>
                        </div>
                    </div>
                ) : (
                    <div className="mb-4 text-yellow-600">No course data available.</div>
                )}
                {selectedCourse ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="lg:col-span-2 space-y-4">
                            <CourseHours data={response.hoursDetails[0]} />
                            <TrainingHistory
                                data={response.trainingRecords.map((record: any) => ({
                                    trainingRecordId: record.trainingrecord_id,
                                    trainingRecordDate: record.trainingrecord.date,
                                    instructorName: `${record.instructorName.first_name} ${record.instructorName.last_name}`,
                                    exerciseName: record.exerciseInfo.title,
                                    isCompleted: record.member_sign !== null,
                                })) || []}
                                legacyData={legacyData}
                            />
                        </div>
                        <div>
                            <CourseRequirements
                                data={response.userRequirements}
                                requiredItems={response.userItemsRequirements.map((item: any) => ({
                                    requirementitem_id: item.requirementitem_id,
                                    description: item.description,
                                    type: item.type
                                })) || []}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="text-gray-600">
                        {course_id.length > 0
                            ? "Please select a course to view details."
                            : "No course data available. Please check course enrollments."}
                    </div>
                )}
            </div>
        </div>
    );
};