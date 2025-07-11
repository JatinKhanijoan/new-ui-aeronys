import ViewCourses from "~/components/courses/ViewCourses"
import PageTitle from "~/components/shared/pageTitle"

const Courses = () => {
    return (
        <div className="container mx-auto p-6">
            <PageTitle title="Courses" description="Explore our comprehensive flight training programs" />
            <ViewCourses />
        </div>
    )
}

export default Courses;