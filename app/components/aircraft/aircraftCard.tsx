import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { Badge } from '~/components/ui/badge';
import { Plane, Settings, Hash, Activity, PlaneIcon } from 'lucide-react';
import type { Aircraft } from './types';
import PageTitle from '../shared/pageTitle';
import { aircraft_placeholder } from '~/constants';

interface AircraftCardProps {
    aircraft: Aircraft;
    onClick: (aircraft: Aircraft) => void;
}

const AircraftCard: React.FC<AircraftCardProps> = ({ aircraft, onClick }) => {
    const handleCardClick = () => {
        onClick(aircraft);
    };

    return (
        <Card>
            <CardHeader className='flex items-center justify-between'>
                <div className="flex items-center gap-3">
                    <PlaneIcon className={`w-8 h-8 ${aircraft.active_status ? 'text-green-500' : 'text-red-500'}`} />
                    <div>
                        <h2 className="text-lg font-semibold">{aircraft.registration_number}</h2>
                        <p className="text-sm text-muted-foreground">{aircraft.type}</p>
                    </div>
                </div>
                <Badge variant={aircraft.active_status ? 'outline' : 'destructive'} className={`${aircraft.active_status ? 'border border-green-500 text-green-500' : 'border border-red-500 text-red-500'} bg-transparent`}>
                    {aircraft.active_status ? 'Active' : 'Inactive'}
                </Badge>
            </CardHeader>
            <CardContent className="pt-0">
                {aircraft.image_address ? (
                    <img
                        className="h-40 w-full rounded-md object-cover object-center"
                        src={aircraft.image_address}
                        alt={aircraft.registration_number + ' - ' + aircraft.type}
                    />
                ) : (
                    aircraft_placeholder
                )}
            </CardContent>
        </Card>
    );
};

export default AircraftCard;