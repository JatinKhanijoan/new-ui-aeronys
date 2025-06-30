import { Badge } from "../ui/badge";

type stats = {
    labels: string[];
    values: number[];
};

type PageTitleProps = {
    title: string;
    description: string;
    stats?: stats;
};

type User = {
    user_id: string;
    first_name: string;
    last_name: string;
    role: string;
    email_id: string;
    profile_image_url: string | null;
};

const PageTitle = ({ title, description, stats }: PageTitleProps) => {

    return (
        <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-muted-foreground">
                {description}
            </p>
            <div className="mt-4">
                {stats?.labels.map((label, index) => (
                    <Badge variant="outline" className="mr-2" key={index}>
                        {label}: {stats.values[index]}
                    </Badge>
                ))}
            </div>
        </div>
    );
};

export default PageTitle;