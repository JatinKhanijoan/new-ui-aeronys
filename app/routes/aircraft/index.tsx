import { Plane } from 'lucide-react';
import React from 'react';
import type { Aircraft } from '~/components/aircraft/types';
import PageTitle from '~/components/shared/pageTitle';
import AircraftCard from '~/components/aircraft/aircraftCard';
import { SearchInput, useSearchableData } from '~/components/shared/SearchableList';
import { Button } from '~/components/ui/button';
import { useNavigate } from 'react-router';

const aircraftData: Aircraft[] = [
    {
        "aircraft_id": "42dcd911-5eb3-4c9c-8349-016806178039",
        "registration_number": "G-BTID",
        "type": "Piper Warrior PA28",
        "active_status": true,
        "hire_rate": "180.00",
        "max_takeoff_weight": "2325.00",
        "empty_weight": "1531.00",
        "empty_weight_level_arm": "87.65",
        "row1_seats_level_arm": "80.50",
        "row2_seats_level_arm": "118.10",
        "row3_seats_level_arm": "1.00",
        "row4_seats_level_arm": "1.00",
        "baggage_forward_level_arm": null,
        "baggage_rear_level_arm": "142.80",
        "fuel_level_arm": "95.00",
        "fuel_consumption": "10.00",
        "fuel_capacity": "48.00",
        "envelope_forward_limit": "83.00",
        "envelope_forward_limit_max_weight": "1950.00",
        "max_weight_aft_limit": "95.00",
        "envelope_max_weight_aft_limit_min_weight": null,
        "envelope_empty_weight_aft_limit": null,
        "image_address": "https://res.cloudinary.com/doahxfhjj/image/upload/v1736451714/jgs56sxyvnvhqgfg1gzg.jpg",
        "minimum_charge_time": null,
        "landing_charge": null,
        "tgl_charge": null,
        "approach_charge": null,
        "hours_account_factor": null,
        "time_adjust": null,
        "company_name": null,
        "model_name": null,
        "organisation_id": [
            "6ce72bae-8ea2-4193-b457-df97889eeba4"
        ],
        "files_url": null,
        "billing_id": null,
        "billing_rate": null,
    },
    {
        "aircraft_id": "5d3c8291-aa0d-4d76-9d2b-ad6c145cc5da",
        "registration_number": "G-BSVM",
        "type": "Piper Warrior PA28",
        "active_status": false,
        "hire_rate": "180.00",
        "max_takeoff_weight": "2325.00",
        "empty_weight": "1536.00",
        "empty_weight_level_arm": "87.73",
        "row1_seats_level_arm": "80.50",
        "row2_seats_level_arm": "118.10",
        "row3_seats_level_arm": "34.00",
        "row4_seats_level_arm": "54.00",
        "baggage_forward_level_arm": "43.00",
        "baggage_rear_level_arm": "142.80",
        "fuel_level_arm": "95.00",
        "fuel_consumption": "10.00",
        "fuel_capacity": "48.00",
        "envelope_forward_limit": "83.00",
        "envelope_forward_limit_max_weight": "1950.00",
        "max_weight_aft_limit": "93.00",
        "envelope_max_weight_aft_limit_min_weight": null,
        "envelope_empty_weight_aft_limit": null,
        "image_address": "https://res.cloudinary.com/doahxfhjj/image/upload/v1736451769/ikpfqaqfdybrx4xcgj88.jpg",
        "minimum_charge_time": null,
        "landing_charge": "62.00",
        "tgl_charge": "40.00",
        "approach_charge": "72.00",
        "hours_account_factor": null,
        "time_adjust": "10.00",
        "company_name": null,
        "model_name": null,
        "organisation_id": [
            "6ce72bae-8ea2-4193-b457-df97889eeba4"
        ],
        "files_url": [
            "https://res.cloudinary.com/doahxfhjj/raw/upload/v1735127041/fsapwnm63wvr4kwegzf9.pdf"
        ],
        "billing_id": null,
        "billing_rate": null,
    },
    {
        "aircraft_id": "4e014cc6-7a56-46ef-9578-d4aaa9760f7c",
        "registration_number": "G-CLFY",
        "type": "Piper Archer PA28",
        "active_status": true,
        "hire_rate": "180.00",
        "max_takeoff_weight": "2325.00",
        "empty_weight": "1511.00",
        "empty_weight_level_arm": "86.87",
        "row1_seats_level_arm": "80.50",
        "row2_seats_level_arm": "118.10",
        "row3_seats_level_arm": "0.00",
        "row4_seats_level_arm": "0.00",
        "baggage_forward_level_arm": "0.00",
        "baggage_rear_level_arm": "142.80",
        "fuel_level_arm": "95.00",
        "fuel_consumption": "10.00",
        "fuel_capacity": "48.00",
        "envelope_forward_limit": "83.00",
        "envelope_forward_limit_max_weight": "1950.00",
        "max_weight_aft_limit": "93.00",
        "envelope_max_weight_aft_limit_min_weight": "0.00",
        "envelope_empty_weight_aft_limit": "0.00",
        "image_address": "https://res.cloudinary.com/doahxfhjj/image/upload/v1736451631/ixdag5ld9bdfdasvux2v.jpg",
        "minimum_charge_time": "0.00",
        "landing_charge": "21.00",
        "tgl_charge": "23.00",
        "approach_charge": "12.00",
        "hours_account_factor": "00",
        "time_adjust": "0.00",
        "company_name": null,
        "model_name": null,
        "organisation_id": [
            "6ce72bae-8ea2-4193-b457-df97889eeba4"
        ],
        "files_url": null,
        "billing_id": null,
        "billing_rate": null,
    },
    {
        "aircraft_id": "86c15f2b-e690-426d-b452-072e502f5783",
        "registration_number": "G-ENNA",
        "type": "Piper Warrior PA28",
        "active_status": true,
        "hire_rate": "180.00",
        "max_takeoff_weight": "2325.00",
        "empty_weight": "1511.00",
        "empty_weight_level_arm": "86.87",
        "row1_seats_level_arm": "80.50",
        "row2_seats_level_arm": "118.10",
        "row3_seats_level_arm": null,
        "row4_seats_level_arm": null,
        "baggage_forward_level_arm": null,
        "baggage_rear_level_arm": "142.80",
        "fuel_level_arm": "95.00",
        "fuel_consumption": "10.00",
        "fuel_capacity": "48.00",
        "envelope_forward_limit": "83.00",
        "envelope_forward_limit_max_weight": "1950.00",
        "max_weight_aft_limit": "93.00",
        "envelope_max_weight_aft_limit_min_weight": null,
        "envelope_empty_weight_aft_limit": null,
        "image_address": "https://res.cloudinary.com/doahxfhjj/image/upload/v1728339748/97365_1656080689_rebyon.jpg",
        "minimum_charge_time": "33.00",
        "landing_charge": "63.00",
        "tgl_charge": "40.00",
        "approach_charge": "72.00",
        "hours_account_factor": "34",
        "time_adjust": "12.00",
        "company_name": null,
        "model_name": null,
        "organisation_id": [
            "6ce72bae-8ea2-4193-b457-df97889eeba4"
        ],
        "files_url": null,
        "billing_id": null,
        "billing_rate": null,
    },
    {
        "aircraft_id": "81df0cc1-65e5-4940-b947-d38782d1e4c7",
        "registration_number": "G-CIZO",
        "type": "Piper Cadet PA28",
        "active_status": true,
        "hire_rate": "180.00",
        "max_takeoff_weight": "2325.00",
        "empty_weight": "1511.00",
        "empty_weight_level_arm": "86.87",
        "row1_seats_level_arm": "80.50",
        "row2_seats_level_arm": "118.10",
        "row3_seats_level_arm": "0.00",
        "row4_seats_level_arm": "0.00",
        "baggage_forward_level_arm": "0.00",
        "baggage_rear_level_arm": "142.80",
        "fuel_level_arm": "95.00",
        "fuel_consumption": "10.00",
        "fuel_capacity": "48.00",
        "envelope_forward_limit": "83.00",
        "envelope_forward_limit_max_weight": "1950.00",
        "max_weight_aft_limit": "93.00",
        "envelope_max_weight_aft_limit_min_weight": "0.00",
        "envelope_empty_weight_aft_limit": "0.00",
        "image_address": "https://res.cloudinary.com/doahxfhjj/image/upload/v1736451531/x3xlxgb6lihyt6l7rrlj.jpg",
        "minimum_charge_time": "0.00",
        "landing_charge": "21.00",
        "tgl_charge": "23.00",
        "approach_charge": "12.00",
        "hours_account_factor": "00",
        "time_adjust": "0.00",
        "company_name": null,
        "model_name": null,
        "organisation_id": [
            "6ce72bae-8ea2-4193-b457-df97889eeba4"
        ],
        "files_url": null,
        "billing_id": null,
        "billing_rate": null,
    },
    {
        "aircraft_id": "2d3508e8-9f3a-44da-8cd1-b2bad6e0884f",
        "registration_number": "G-LSFT",
        "type": "Piper Warrior PA28",
        "active_status": null,
        "hire_rate": "180.00",
        "max_takeoff_weight": "2325.00",
        "empty_weight": "1511.00",
        "empty_weight_level_arm": "86.87",
        "row1_seats_level_arm": "80.50",
        "row2_seats_level_arm": "118.10",
        "row3_seats_level_arm": "0.00",
        "row4_seats_level_arm": "0.00",
        "baggage_forward_level_arm": "0.00",
        "baggage_rear_level_arm": "142.80",
        "fuel_level_arm": "95.00",
        "fuel_consumption": "10.00",
        "fuel_capacity": "48.00",
        "envelope_forward_limit": "83.00",
        "envelope_forward_limit_max_weight": "1950.00",
        "max_weight_aft_limit": "93.00",
        "envelope_max_weight_aft_limit_min_weight": "0.00",
        "envelope_empty_weight_aft_limit": "0.00",
        "image_address": "https://res.cloudinary.com/doahxfhjj/image/upload/v1736451592/msfltujd2hruvxp7z1kn.jpg",
        "minimum_charge_time": "0.00",
        "landing_charge": "21.00",
        "tgl_charge": "23.00",
        "approach_charge": "12.00",
        "hours_account_factor": "00",
        "time_adjust": "0.00",
        "company_name": null,
        "model_name": null,
        "organisation_id": [
            "6ce72bae-8ea2-4193-b457-df97889eeba4"
        ],
        "files_url": null,
        "billing_id": null,
        "billing_rate": null,
    },
    {
        "aircraft_id": "a0549e31-d6e0-4bde-97ed-0738d4e90606",
        "registration_number": "G-OXFD",
        "type": "Piper Seneca PA34",
        "active_status": true,
        "hire_rate": "180.00",
        "max_takeoff_weight": "2325.00",
        "empty_weight": "1511.00",
        "empty_weight_level_arm": "86.87",
        "row1_seats_level_arm": "80.50",
        "row2_seats_level_arm": "118.10",
        "row3_seats_level_arm": "0.00",
        "row4_seats_level_arm": "0.00",
        "baggage_forward_level_arm": "0.00",
        "baggage_rear_level_arm": "142.80",
        "fuel_level_arm": "95.00",
        "fuel_consumption": "10.00",
        "fuel_capacity": "48.00",
        "envelope_forward_limit": "83.00",
        "envelope_forward_limit_max_weight": "1950.00",
        "max_weight_aft_limit": "93.00",
        "envelope_max_weight_aft_limit_min_weight": "0.00",
        "envelope_empty_weight_aft_limit": "0.00",
        "image_address": "https://res.cloudinary.com/doahxfhjj/image/upload/v1736451675/trzviprckzx5fvpe50le.jpg",
        "minimum_charge_time": "0.00",
        "landing_charge": "21.00",
        "tgl_charge": "23.00",
        "approach_charge": "12.00",
        "hours_account_factor": "00",
        "time_adjust": "0.00",
        "company_name": null,
        "model_name": null,
        "organisation_id": [
            "6ce72bae-8ea2-4193-b457-df97889eeba4"
        ],
        "files_url": null,
        "billing_id": null,
        "billing_rate": null,
    },
    {
        "aircraft_id": "03b6bbcc-b1e8-44fa-a7f1-c94729f666b1",
        "registration_number": "G-TEST",
        "type": "Piper Warrior PA28",
        "active_status": false,
        "hire_rate": "200.00",
        "max_takeoff_weight": "1800.00",
        "empty_weight": "500.00",
        "empty_weight_level_arm": null,
        "row1_seats_level_arm": null,
        "row2_seats_level_arm": null,
        "row3_seats_level_arm": null,
        "row4_seats_level_arm": null,
        "baggage_forward_level_arm": null,
        "baggage_rear_level_arm": null,
        "fuel_level_arm": null,
        "fuel_consumption": null,
        "fuel_capacity": null,
        "envelope_forward_limit": null,
        "envelope_forward_limit_max_weight": null,
        "max_weight_aft_limit": null,
        "envelope_max_weight_aft_limit_min_weight": null,
        "envelope_empty_weight_aft_limit": null,
        "image_address": null,
        "minimum_charge_time": null,
        "landing_charge": null,
        "tgl_charge": null,
        "approach_charge": null,
        "hours_account_factor": null,
        "time_adjust": null,
        "company_name": "Piper",
        "model_name": "PA28",
        "organisation_id": [
            "6ce72bae-8ea2-4193-b457-df97889eeba4"
        ],
        "files_url": null,
        "billing_id": null,
        "billing_rate": null,
    },
]


const AircraftPage: React.FC = () => {
    const navigate = useNavigate();

    const handleAircraftClick = (aircraft: Aircraft) => {
        console.log('Aircraft clicked:', aircraft);
    };

    const { searchTerm, setSearchTerm, filteredData } = useSearchableData(
        aircraftData,
        ['registration_number', 'type', 'active_status']
    );

    return (
        <div className="container mx-auto p-6">
            <PageTitle
                title="Aircraft Fleet"
                description="Click on any aircraft to view detailed specifications and information."
                stats={{
                    labels: ['Total Aircraft', 'Active', 'Inactive'],
                    values: [
                        aircraftData.length,
                        aircraftData.filter(a => a.active_status).length,
                        aircraftData.filter(a => !a.active_status).length,
                    ],
                }}
            />

            <div className='flex items-start justify-between'>
                <div className='flex-1'>
                    <SearchInput
                        searchTerm={searchTerm}
                        onSearchChange={setSearchTerm}
                        placeholder="Search aircraft by registration, type, or status..."
                        className="mb-6 w-1/2"
                    />
                    {searchTerm && (
                        <p className="text-sm text-gray-500 mb-4">
                            {filteredData.length} result{filteredData.length !== 1 ? 's' : ''} found
                        </p>
                    )}
                </div>
                <Button onClick={() => navigate('/aircraft/new')} variant="default" className="ml-4">
                    New Aircraft
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredData.map((aircraft) => (
                    <AircraftCard
                        key={aircraft.aircraft_id}
                        aircraft={aircraft}
                        onClick={handleAircraftClick}
                    />
                ))}
            </div>

            {
                filteredData.length === 0 && (
                    <div className="text-center py-12">
                        <Plane className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-slate-900 mb-2">
                            {searchTerm ? 'No Aircraft Found' : 'No Aircraft Available'}
                        </h3>
                        <p className="text-slate-600">
                            {searchTerm
                                ? 'No aircraft match your search criteria.'
                                : 'There are currently no aircraft in the fleet.'
                            }
                        </p>
                    </div>
                )
            }
        </div >
    );
};

export default AircraftPage;