import ViewCoupons from "~/components/coupon/ViewCoupon"
import PageTitle from "~/components/shared/pageTitle"

const Coupon = () => {
    return (
        <div className="container mx-auto p-6">
            <PageTitle title="Coupon" description="Manage all coupons." />
            <ViewCoupons />
        </div>
    )
}

export default Coupon