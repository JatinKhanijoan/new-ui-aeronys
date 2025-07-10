import { Info, Folder, Save, Edit } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "~/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Input } from "~/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "~/components/ui/dialog";

const mockData = {
    aircrafts: [
        {
            "aircraft_id": "688e5609-029f-4929-a971-eadddd44708e",
            "egll": "220.00",
            "egkk": "220.00",
            "egcc": "220.00",
            "egss": "220.00",
            "eggp": "220.00",
            "egph": "220.00",
            "egnx": "220.00",
            "eggd": "200.00",
            "egff": "200.00",
            "egpf": "200.00",
            "egaa": "200.00",
            "eghi": "258.00",
            "egnm": "322.00",
            "egte": "152.00",
            "egsh": "123.00",
            "egpd": "254.00",
            "egpe": "125.00",
            "egac": "1524.00",
            "egmc": "151.00",
            "egkb": "121.00",
            "egsc": "256.00",
            "aircrafts": {
                "registration_number": "G-BTNH",
                "type": "Piper Warrior PA28"
            }
        },
        {
            "aircraft_id": "5d3c8291-aa0d-4d76-9d2b-ad6c145cc5da",
            "egll": "220.00",
            "egkk": "213.00",
            "egcc": "251.00",
            "egss": "211.00",
            "eggp": "260.00",
            "egph": "260.00",
            "egnx": "260.00",
            "eggd": "260.00",
            "egff": "260.00",
            "egpf": "260.00",
            "egaa": null,
            "eghi": null,
            "egnm": "121.00",
            "egte": "587.00",
            "egsh": "456.00",
            "egpd": "453.00",
            "egpe": "453.00",
            "egac": "453.00",
            "egmc": "453.00",
            "egkb": "121.00",
            "egsc": "121.00",
            "aircrafts": {
                "registration_number": "G-BSVM",
                "type": "Piper Warrior PA28"
            }
        },
        {
            "aircraft_id": "42dcd911-5eb3-4c9c-8349-016806178039",
            "egll": "220.00",
            "egkk": "213.00",
            "egcc": "251.00",
            "egss": "211.00",
            "eggp": "260.00",
            "egph": "260.00",
            "egnx": "260.00",
            "eggd": "260.00",
            "egff": "260.00",
            "egpf": "260.00",
            "egaa": null,
            "eghi": null,
            "egnm": "121.00",
            "egte": "587.00",
            "egsh": "456.00",
            "egpd": "453.00",
            "egpe": "453.00",
            "egac": "453.00",
            "egmc": "453.00",
            "egkb": "121.00",
            "egsc": "121.00",
            "aircrafts": {
                "registration_number": "G-BTID",
                "type": "Piper Warrior PA28"
            }
        },
        {
            "aircraft_id": "4e014cc6-7a56-46ef-9578-d4aaa9760f7c",
            "egll": "220.00",
            "egkk": "213.00",
            "egcc": "251.00",
            "egss": "211.00",
            "eggp": "260.00",
            "egph": "260.00",
            "egnx": "260.00",
            "eggd": "260.00",
            "egff": "260.00",
            "egpf": "260.00",
            "egaa": null,
            "eghi": null,
            "egnm": "121.00",
            "egte": "587.00",
            "egsh": "456.00",
            "egpd": "453.00",
            "egpe": "453.00",
            "egac": "453.00",
            "egmc": "453.00",
            "egkb": "121.00",
            "egsc": "121.00",
            "aircrafts": {
                "registration_number": "G-CLFY",
                "type": "Piper Archer PA28"
            }
        },
        {
            "aircraft_id": "2d3508e8-9f3a-44da-8cd1-b2bad6e0884f",
            "egll": "220.00",
            "egkk": "213.00",
            "egcc": "251.00",
            "egss": "211.00",
            "eggp": "260.00",
            "egph": "260.00",
            "egnx": "260.00",
            "eggd": "260.00",
            "egff": "260.00",
            "egpf": "260.00",
            "egaa": null,
            "eghi": null,
            "egnm": "121.00",
            "egte": "587.00",
            "egsh": "456.00",
            "egpd": "453.00",
            "egpe": "453.00",
            "egac": "453.00",
            "egmc": "453.00",
            "egkb": "121.00",
            "egsc": "121.00",
            "aircrafts": {
                "registration_number": "G-LSFT",
                "type": "Piper Warrior PA28"
            }
        },
        {
            "aircraft_id": "a0549e31-d6e0-4bde-97ed-0738d4e90606",
            "egll": "220.00",
            "egkk": "213.00",
            "egcc": "251.00",
            "egss": "211.00",
            "eggp": "260.00",
            "egph": "260.00",
            "egnx": "260.00",
            "eggd": "260.00",
            "egff": "260.00",
            "egpf": "260.00",
            "egaa": null,
            "eghi": null,
            "egnm": "121.00",
            "egte": "587.00",
            "egsh": "454.00",
            "egpd": "122.00",
            "egpe": "485.00",
            "egac": "485.00",
            "egmc": "485.00",
            "egkb": "121.00",
            "egsc": "121.00",
            "aircrafts": {
                "registration_number": "G-OXFD",
                "type": "Piper Seneca PA34"
            }
        },
        {
            "aircraft_id": "47a8de4a-8015-496d-8ccc-f6eaf22cc8d9",
            "egll": "220.00",
            "egkk": "213.00",
            "egcc": "251.00",
            "egss": "211.00",
            "eggp": "260.00",
            "egph": "260.00",
            "egnx": "260.00",
            "eggd": "260.00",
            "egff": "260.00",
            "egpf": "260.00",
            "egaa": null,
            "eghi": null,
            "egnm": "121.00",
            "egte": "587.00",
            "egsh": "456.00",
            "egpd": "453.00",
            "egpe": "453.00",
            "egac": "453.00",
            "egmc": "453.00",
            "egkb": "121.00",
            "egsc": "121.00",
            "aircrafts": {
                "registration_number": "G-CDEF",
                "type": "Piper Cadet PA28"
            }
        },
        {
            "aircraft_id": "86c15f2b-e690-426d-b452-072e502f5783",
            "egll": "220.00",
            "egkk": "213.00",
            "egcc": "251.00",
            "egss": "211.00",
            "eggp": "260.00",
            "egph": "260.00",
            "egnx": "260.00",
            "eggd": "260.00",
            "egff": "260.00",
            "egpf": "260.00",
            "egaa": null,
            "eghi": null,
            "egnm": "121.00",
            "egte": "587.00",
            "egsh": "456.00",
            "egpd": "453.00",
            "egpe": "453.00",
            "egac": "453.00",
            "egmc": "453.00",
            "egkb": "121.00",
            "egsc": "121.00",
            "aircrafts": {
                "registration_number": "G-ENNA",
                "type": "Piper Warrior PA28"
            }
        },
        {
            "aircraft_id": "81df0cc1-65e5-4940-b947-d38782d1e4c7",
            "egll": "220.00",
            "egkk": "213.00",
            "egcc": "251.00",
            "egss": "211.00",
            "eggp": "260.00",
            "egph": "260.00",
            "egnx": "260.00",
            "eggd": "260.00",
            "egff": "260.00",
            "egpf": "260.00",
            "egaa": null,
            "eghi": null,
            "egnm": "121.00",
            "egte": "587.00",
            "egsh": "456.00",
            "egpd": "453.00",
            "egpe": "453.00",
            "egac": "453.00",
            "egmc": "453.00",
            "egkb": "121.00",
            "egsc": "121.00",
            "aircrafts": {
                "registration_number": "G-CIZO",
                "type": "Piper Cadet PA28"
            }
        }
    ],
    instructors: [
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "86c2c224-7061-707d-a60d-148eeea95e18",
            "users": {
                "first_name": "Joe",
                "last_name": "Hilling"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "76426294-b031-70c8-81ab-f15ba90fb04c",
            "users": {
                "first_name": "Fajr",
                "last_name": "Fahd"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "6672b2b4-9091-70a8-0c6e-9b9d381d369e",
            "users": {
                "first_name": "Ben",
                "last_name": "McCutcheon"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "d6326234-40a1-700a-c959-31c3a5162243",
            "users": {
                "first_name": "Gareth",
                "last_name": "Sunderland"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "56a202b4-60a1-7014-ccc1-591bcdf59930",
            "users": {
                "first_name": "Jon ",
                "last_name": "Nicholas"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "c6123274-a0d1-70f2-8527-8c59b5fd4c80",
            "users": {
                "first_name": "Anna",
                "last_name": "Saunders"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "364212c4-60e1-70dd-27ff-b3f20a6fb4b5",
            "users": {
                "first_name": "Matt",
                "last_name": "Askin-Hawes"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "06e2c224-d0e1-705b-b62c-cbb253b62e91",
            "users": {
                "first_name": "Jamshid",
                "last_name": "Rajabov"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "96a27204-70f1-70d4-c1e5-73d2145bd193",
            "users": {
                "first_name": "Bill",
                "last_name": "Pickard"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "36f26294-7091-701a-deb0-c9f6a6acbdb0",
            "users": {
                "first_name": "Mariano",
                "last_name": "Ripoll"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "9612f2f4-a0e1-7020-a7d0-180fe2ec6652",
            "users": {
                "first_name": "Roger",
                "last_name": "Patterson"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "7642d2e4-b091-7016-1c51-80cad976e15d",
            "users": {
                "first_name": "Aaron",
                "last_name": "Christopher"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "86e27244-3011-703c-de26-0ac97bd4f229",
            "users": {
                "first_name": "Stephen ",
                "last_name": "Niechcial"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "065222b4-5051-70ba-26df-52f401b283a8",
            "users": {
                "first_name": "Stuart James",
                "last_name": "MacDowall"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "36420254-2051-7033-4407-c690635be3fb",
            "users": {
                "first_name": "Colin",
                "last_name": "Cleaver"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "76b252a4-d021-70ee-9f2f-583d0a2c8e33",
            "users": {
                "first_name": "Gary",
                "last_name": "Saint"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "d652d2e4-2021-7075-4226-f469d2de0e41",
            "users": {
                "first_name": "Philippa",
                "last_name": "McIntosh"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "86122214-9071-70a3-958b-9f249797c373",
            "users": {
                "first_name": "Abbas",
                "last_name": "Hussain"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "065202f4-f041-7059-e37c-25e63b5f714f",
            "users": {
                "first_name": "Aaron",
                "last_name": "Colin Bell"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "c6b23294-5031-70d7-cf94-74200f8d9ba7",
            "users": {
                "first_name": "Dan",
                "last_name": "McGinn"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "667262d4-90f1-700a-155f-a57854ac5972",
            "users": {
                "first_name": "James",
                "last_name": "Taylor"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "a6c2e294-70c1-709e-adf0-1c90fce1fbfc",
            "users": {
                "first_name": "John",
                "last_name": "Nairne"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "06f2f214-b031-706b-2f47-27730e8fa1c4",
            "users": {
                "first_name": "Zoltan ",
                "last_name": "Arthoffer"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "265232f4-f0c1-704a-6ab0-20f8c84100bc",
            "users": {
                "first_name": "Neville",
                "last_name": "Mack"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "664232f4-d0c1-7069-3904-076e686d080c",
            "users": {
                "first_name": "Charles",
                "last_name": "Bryant"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "86120254-b0c1-7089-bf57-8650df48c9dc",
            "users": {
                "first_name": "Nat",
                "last_name": "Hiscocks"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "66c2b294-e021-7071-b471-98c707b57c09",
            "users": {
                "first_name": "Bob",
                "last_name": "Marchant"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "a6f24264-b071-7045-928c-77137675cf97",
            "users": {
                "first_name": "Murray",
                "last_name": "Jenkins"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "769232a4-9021-70d0-2266-eeb84784577d",
            "users": {
                "first_name": "Matthew",
                "last_name": "Giles"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "e6027254-e011-701a-a3c3-dc80b2a210ce",
            "users": {
                "first_name": "Neil",
                "last_name": "Passmore (CRI PPLs only)"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "3672b244-60f1-70c3-c76b-9da0e7021e69",
            "users": {
                "first_name": "Mark",
                "last_name": "Harris"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "46b262d4-0051-70c1-9fa5-7427480bfc8d",
            "users": {
                "first_name": "Martin",
                "last_name": "Cain"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "a6b2f204-e0f1-70ec-97e5-c74e6ce66ee7",
            "users": {
                "first_name": "Mark",
                "last_name": "Williams"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "5692a2d4-7021-7022-c002-0648908c9da6",
            "users": {
                "first_name": "Chris",
                "last_name": "Angelis"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "b652c244-20a1-7012-0bed-ebf41a32fbdb",
            "users": {
                "first_name": "Howard",
                "last_name": "Pyke"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "46128214-8071-7060-6e8d-12019dc35501",
            "users": {
                "first_name": "Andy P.",
                "last_name": "Advanced Training"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "3622f264-1011-70af-9e40-848c3d7790d7",
            "users": {
                "first_name": "Akram",
                "last_name": "Bashiruddin"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "3602c224-20e1-70bc-9709-6caea468767e",
            "users": {
                "first_name": "George",
                "last_name": "Lisle"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "b6328284-c001-70a5-9d78-300af244d113",
            "users": {
                "first_name": "Alex",
                "last_name": "Quessy"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "56d2b274-e0d1-7077-f44b-e0bcdac40b67",
            "users": {
                "first_name": "Sebastian",
                "last_name": "Kessler"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "e6d2a234-1091-704f-912d-58eaa52cc2e2",
            "users": {
                "first_name": "Anakin",
                "last_name": "Skywalker"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "c602c254-2001-7086-dd8b-17d1d4a16019",
            "users": {
                "first_name": "Arwyn",
                "last_name": "Jones"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "f682a2a4-2091-70e6-9931-a515eec7a911",
            "users": {
                "first_name": "Obi",
                "last_name": "Wan"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "66325294-4031-708b-48ad-aa73ea61d58b",
            "users": {
                "first_name": "Paul",
                "last_name": "Tambacopoulo"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "d6623294-b001-701e-ca9d-f7629fb66675",
            "users": {
                "first_name": "Seamus",
                "last_name": "Fogarty "
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "a6127284-c081-70aa-bfb2-35192596c994",
            "users": {
                "first_name": "Zahurul",
                "last_name": "Islam"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "760282f4-a051-703a-1967-10acf4eb93f5",
            "users": {
                "first_name": "Paul",
                "last_name": "Sodagar (CRI PPLs only)"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "d68262c4-8091-70bf-f6e5-ed89b42648a6",
            "users": {
                "first_name": "Timothy",
                "last_name": "Nathan"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "86223224-f0b1-7070-cfd4-313304cdc192",
            "users": {
                "first_name": "Jill",
                "last_name": "Develin"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "b662d2e4-3091-705d-8f47-47088b7f40c7",
            "users": {
                "first_name": "Philip",
                "last_name": "Smith"
            }
        },
        {
            "ppl": 40,
            "night": 60,
            "ir": 70,
            "cpl": 70,
            "ground": 27.5,
            "user_id": "a6421234-70e1-7002-8a60-1eb5a8d470f3",
            "users": {
                "first_name": "Rod",
                "last_name": "Boath"
            }
        }
    ]
};

// Airport codes mapping
const airportCodes = {
    egll: "LHR",
    egkk: "LGW",
    egcc: "MAN",
    egss: "STN",
    eggp: "LPL",
    egph: "EDI",
    egnx: "EMA",
    eggd: "BRS",
    egff: "CWL",
    egpf: "GLA",
    egaa: "BFS",
    eghi: "SOU",
    egnm: "LDS",
    egte: "EXT",
    egsh: "NWI",
    egpd: "ABZ",
    egpe: "INV",
    egac: "CTY",
    egmc: "SEN",
    egkb: "BQH",
    egsc: "CBG"
};

interface Aircraft {
    aircraft_id: string;
    aircrafts: {
        registration_number: string;
        type: string;
    };
    [key: string]: any;
}

interface Instructor {
    ppl: number;
    night: number;
    ir: number;
    cpl: number;
    ground: number;
    user_id: string;
    users: {
        first_name: string;
        last_name: string;
    };
}

interface EditDialogProps {
    isOpen: boolean;
    onClose: () => void;
    initialValue: string;
    onSave: (value: string) => void;
    title: string;
}

const EditDialog = ({ isOpen, onClose, initialValue, onSave, title }: EditDialogProps) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue, isOpen]);

    const handleSave = () => {
        onSave(value);
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Input
                        type="number"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Enter rate"
                        autoFocus
                    />
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

const Rates: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [saving, setSaving] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [currentEditCell, setCurrentEditCell] = useState<{
        rowIndex: number;
        cellIndex: number;
        value: string;
        aircraftName?: string;
        airportCode?: string;
        instructorName?: string;
        courseType?: string;
    } | null>(null);
    const [aircraftData, setAircraftData] = useState<Aircraft[]>(mockData.aircrafts);
    const [instructorData, setInstructorData] = useState<Instructor[]>(mockData.instructors);

    const prepareAircraftData = () => {
        const headers = ["Registration", "Type", ...Object.values(airportCodes)];

        const rows = aircraftData
            .filter(aircraft =>
                aircraft.aircrafts.registration_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
                aircraft.aircrafts.type.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map(aircraft => {
                const row = [
                    aircraft.aircrafts.registration_number,
                    aircraft.aircrafts.type,
                    ...Object.keys(airportCodes).map(code => aircraft[code] || "N/A")
                ];
                return row;
            });

        return { headers, rows };
    };

    const prepareInstructorData = () => {
        const headers = ["Instructor", "PPL", "Night", "IR", "CPL", "Ground"];

        const rows = instructorData
            .filter(instructor =>
                `${instructor.users.first_name} ${instructor.users.last_name}`.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map(instructor => [
                `${instructor.users.first_name} ${instructor.users.last_name}`,
                instructor.ppl.toString(),
                instructor.night.toString(),
                instructor.ir.toString(),
                instructor.cpl.toString(),
                instructor.ground.toString()
            ]);

        return { headers, rows };
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
        if (isEditing) {
            setAircraftData(mockData.aircrafts);
            setInstructorData(mockData.instructors);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSaving(false);
        setIsEditing(false);

        console.log("Saving data:", { aircraftData, instructorData });
    };

    const handleReset = () => {
        setAircraftData(mockData.aircrafts);
        setInstructorData(mockData.instructors);
        setSearchTerm("");
        setIsEditing(false);
    };

    const handleSubmit = () => {
        console.log("Submitting organization data");
    };

    const openEditDialog = (rowIndex: number, cellIndex: number, value: string, isAircraftTab: boolean) => {
        if (isAircraftTab) {
            const aircraftName = prepareAircraftData().rows[rowIndex][0];
            const airportCode = prepareAircraftData().headers[cellIndex];

            setCurrentEditCell({
                rowIndex,
                cellIndex,
                value,
                aircraftName,
                airportCode
            });
        } else {
            const instructorName = prepareInstructorData().rows[rowIndex][0];
            const courseType = prepareInstructorData().headers[cellIndex];

            setCurrentEditCell({
                rowIndex,
                cellIndex,
                value,
                instructorName,
                courseType
            });
        }
        setEditDialogOpen(true);
    };

    const handleEditDialogSave = (newValue: string) => {
        if (!currentEditCell) return;

        const { rowIndex, cellIndex } = currentEditCell;

        const isAircraftTab = currentEditCell.aircraftName !== undefined;

        if (isAircraftTab) {
            const newAircraftData = [...aircraftData];
            const aircraftIndex = newAircraftData.findIndex((_, index) =>
                prepareAircraftData().rows[rowIndex] &&
                prepareAircraftData().rows[rowIndex][0] === newAircraftData[index].aircrafts.registration_number
            );

            if (aircraftIndex !== -1) {
                const airportCodeKey = Object.keys(airportCodes)[cellIndex - 2];
                newAircraftData[aircraftIndex] = {
                    ...newAircraftData[aircraftIndex],
                    [airportCodeKey]: newValue
                };
                setAircraftData(newAircraftData);
            }
        } else {
            const newInstructorData = [...instructorData];
            const instructorIndex = newInstructorData.findIndex((_, index) =>
                prepareInstructorData().rows[rowIndex] &&
                prepareInstructorData().rows[rowIndex][0] === `${newInstructorData[index].users.first_name} ${newInstructorData[index].users.last_name}`
            );

            if (instructorIndex !== -1) {
                const fieldMapping = ["", "ppl", "night", "ir", "cpl", "ground"];
                const fieldName = fieldMapping[cellIndex];

                newInstructorData[instructorIndex] = {
                    ...newInstructorData[instructorIndex],
                    [fieldName]: parseFloat(newValue)
                };
                setInstructorData(newInstructorData);
            }
        }

        setCurrentEditCell(null);
    };

    return (
        <div className="container mx-auto p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold">Rates Management</h1>
                <p className="text-gray-600">Manage aircraft and instructor rates.</p>
            </div>

            <Tabs defaultValue="aircraft" className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                        <TabsList className="flex flex-col h-auto w-full bg-transparent space-y-2">
                            <TabsTrigger
                                value="aircraft"
                                className="w-full justify-start rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                            >
                                <Info className="h-5 w-5 mr-3" />
                                Aircraft Rates
                            </TabsTrigger>
                            <TabsTrigger
                                value="instructor"
                                className="w-full justify-start rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                            >
                                <Folder className="h-5 w-5 mr-3" />
                                Instructor Rates
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="bg-card rounded-xl border p-6">
                            <TabsContent value="aircraft" className="mt-0">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-2xl font-bold">Aircraft / Airport Rates</h2>
                                        <div className="flex gap-2">
                                            <Button
                                                variant={isEditing ? "outline" : "default"}
                                                onClick={handleEditToggle}
                                                disabled={saving}
                                            >
                                                {isEditing ? "Cancel" : "Edit Rates"}
                                            </Button>
                                            {isEditing && (
                                                <Button
                                                    onClick={handleSave}
                                                    disabled={saving}
                                                >
                                                    {saving ? "Saving..." : "Save Changes"}
                                                </Button>
                                            )}
                                        </div>
                                    </div>

                                    <Input
                                        placeholder="Search Aircraft..."
                                        className="max-w-sm"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />

                                    {isEditing && (
                                        <p className="text-sm text-muted-foreground">
                                            *Click on rate cells to edit values.
                                        </p>
                                    )}

                                    <div className="border rounded-lg overflow-hidden">
                                        <div className="overflow-x-auto">
                                            <table className="w-full">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        {prepareAircraftData().headers.map((header, index) => (
                                                            <th key={index} className="px-4 py-3 text-center text-sm font-medium text-gray-900 border-b">
                                                                {header}
                                                            </th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    {prepareAircraftData().rows.map((row, rowIndex) => (
                                                        <tr key={rowIndex} className="hover:bg-gray-50">
                                                            {row.map((cell, cellIndex) => (
                                                                <td
                                                                    key={cellIndex}
                                                                    className={`px-4 py-3 text-center text-sm ${cellIndex > 1 && isEditing
                                                                        ? 'cursor-pointer hover:bg-blue-50'
                                                                        : ''
                                                                        } ${cellIndex <= 1 ? 'font-medium' : ''}`}
                                                                    onClick={
                                                                        cellIndex > 1 && isEditing
                                                                            ? () => openEditDialog(rowIndex, cellIndex, cell.toString(), true)
                                                                            : undefined
                                                                    }
                                                                >
                                                                    <div className="flex items-center justify-center">
                                                                        {cell}
                                                                        {cellIndex > 1 && isEditing && (
                                                                            <Edit className="h-3 w-3 ml-2 opacity-50" />
                                                                        )}
                                                                    </div>
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="instructor" className="mt-0">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-2xl font-bold">Instructor Rates</h2>
                                        <div className="flex gap-2">
                                            <Button
                                                variant={isEditing ? "outline" : "default"}
                                                onClick={handleEditToggle}
                                                disabled={saving}
                                            >
                                                {isEditing ? "Cancel" : "Edit Rates"}
                                            </Button>
                                            {isEditing && (
                                                <Button
                                                    onClick={handleSave}
                                                    disabled={saving}
                                                >
                                                    {saving ? "Saving..." : "Save Changes"}
                                                </Button>
                                            )}
                                        </div>
                                    </div>

                                    <Input
                                        placeholder="Search Instructor..."
                                        className="max-w-sm"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />

                                    {isEditing && (
                                        <p className="text-sm text-muted-foreground">
                                            *Click on rate cells to edit values.
                                        </p>
                                    )}

                                    <div className="border rounded-lg overflow-hidden">
                                        <div className="overflow-x-auto">
                                            <table className="w-full">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        {prepareInstructorData().headers.map((header, index) => (
                                                            <th key={index} className="px-4 py-3 text-center text-sm font-medium text-gray-900 border-b">
                                                                {header}
                                                            </th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    {prepareInstructorData().rows.map((row, rowIndex) => (
                                                        <tr key={rowIndex} className="hover:bg-gray-50">
                                                            {row.map((cell, cellIndex) => (
                                                                <td
                                                                    key={cellIndex}
                                                                    className={`px-4 py-3 text-center text-sm ${cellIndex > 0 && isEditing
                                                                        ? 'cursor-pointer hover:bg-blue-50'
                                                                        : ''
                                                                        } ${cellIndex === 0 ? 'font-medium' : ''}`}
                                                                    onClick={
                                                                        cellIndex > 0 && isEditing
                                                                            ? () => openEditDialog(rowIndex, cellIndex, cell.toString(), false)
                                                                            : undefined
                                                                    }
                                                                >
                                                                    <div className="flex items-center justify-center">
                                                                        {cell}
                                                                        {cellIndex > 0 && isEditing && (
                                                                            <Edit className="h-3 w-3 ml-2 opacity-50" />
                                                                        )}
                                                                    </div>
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </div>

                        <div className="mt-6 flex justify-end gap-2">
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

            {currentEditCell && (
                <EditDialog
                    isOpen={editDialogOpen}
                    onClose={() => setEditDialogOpen(false)}
                    initialValue={currentEditCell.value}
                    onSave={handleEditDialogSave}
                    title={
                        currentEditCell.aircraftName
                            ? `Edit Rate for ${currentEditCell.aircraftName} - ${currentEditCell.airportCode}`
                            : `Edit ${currentEditCell.courseType} Rate for ${currentEditCell.instructorName}`
                    }
                />
            )}
        </div>
    );
};

export default Rates;