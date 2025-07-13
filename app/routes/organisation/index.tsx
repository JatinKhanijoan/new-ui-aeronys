import PageTitle from "~/components/shared/pageTitle";

export interface Organisation {
    organisation_id: string;
    organisation_name: string;
    organisation_logo_url: string;
    title: string[];
    urls: string[];
    address: string;
    slot_time: string;
    phone_number: string;
    email_id: string;
}

export const data = {
    "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4",
    "organisation_name": "EFG Flying School",
    "organisation_logo_url": "https://res.cloudinary.com/doahxfhjj/image/upload/v1736427764/hm9xmv6yl7jwzahcbhgc.png",
    "title": [
        "dev",
        "Invoice_FLCN0004"
    ],
    "urls": [
        "https://res.cloudinary.com/doahxfhjj/image/upload/v1734436671/mjpk6fa1bqcv3pdnvfvu.pdf",
        "https://res.cloudinary.com/doahxfhjj/image/upload/v1734720662/yjzhtkr94aomzermebeq.pdf"
    ],
    "address": "London Biggin Hill Airport",
    "slot_time": 2,
    "phone_number": "+44 12334455",
    "email_id": "falcon@aero.com"
}

const Organisation = () => {
    return (
        <div className="container mx-auto p-6">
            <PageTitle
                title="Organisation"
                description="Your organisation information"
            />
        </div>
    );
};

export default Organisation;
