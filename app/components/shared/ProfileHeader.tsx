import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Camera, Calendar, Mail, MapPin } from "lucide-react";

type ProfileHeaderProps = {
    first_name: string;
    last_name: string;
    role: string;
    email_id: string;
    profile_image_url: string | null;
}

export default function ProfileHeader(
    props: ProfileHeaderProps
) {
    const { first_name, last_name, role, email_id, profile_image_url } = props;

    return (
        <Card>
            <div className="flex ml-5 flex-col items-start gap-6 md:flex-row md:items-center">
                <div className="relative">
                    <Avatar className="h-18 w-18">
                        <AvatarImage src={profile_image_url || "/placeholder.svg"} alt="Profile" />
                        <AvatarFallback className="text-2xl">
                            {first_name[0]}{last_name[0]}
                        </AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex-1 space-y-2">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center">
                        <h1 className="text-xl font-bold">
                            {first_name} {last_name}
                        </h1>
                        {/* <Badge variant="secondary">Pro Member</Badge> */}
                    </div>
                    <p className="text-muted-foreground">{role}</p>
                    <div className="text-muted-foreground flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-1">
                            <Mail className="size-4" />
                            {email_id}
                        </div>
                    </div>
                </div>
                {/* <Button variant="default">Edit Profile</Button> */}
            </div>
        </Card>
    );
}