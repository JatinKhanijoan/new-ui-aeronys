import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { Copy, Check } from 'lucide-react';

interface Coupon {
    id: string;
    code: string;
    purpose: string;
    discount_type: string;
    discount_value: string;
    max_discount_amount: string | null;
    valid_from: string;
    valid_until: string;
    usage_limit: number;
    is_active: boolean;
    created_at: string;
    organisation_id: string;
}

const ViewCoupons: React.FC = () => {
    const [copiedCodes, setCopiedCodes] = useState<Set<string>>(new Set());

    const coupons: Coupon[] = [
        {
            "id": "540a0f0c-a48d-4ff6-8626-d96d15ab04e8",
            "code": "TRIAL-dke5y1n6",
            "purpose": "trial-lesson",
            "discount_type": "absolute",
            "discount_value": "172",
            "max_discount_amount": null,
            "valid_from": "2024-12-19T12:42:48.637Z",
            "valid_until": "2024-12-29T12:42:48.638Z",
            "usage_limit": 1,
            "is_active": true,
            "created_at": "2024-12-19T12:42:49.536Z",
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4"
        },
        {
            "id": "ca97a3b2-b6f3-4541-a74b-1891a4783f13",
            "code": "TRIAL-mxrpzmkd",
            "purpose": "trial-lesson",
            "discount_type": "percentage",
            "discount_value": "34",
            "max_discount_amount": null,
            "valid_from": "2024-12-23T15:12:40.488Z",
            "valid_until": "2025-01-02T15:12:40.488Z",
            "usage_limit": 1,
            "is_active": true,
            "created_at": "2024-12-23T15:12:40.489Z",
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4"
        },
        {
            "id": "08919b3f-ca88-4f17-98c2-4d93e4d7456d",
            "code": "TRIAL-9khig4b6",
            "purpose": "trial-lesson",
            "discount_type": "absolute",
            "discount_value": "34",
            "max_discount_amount": null,
            "valid_from": "2024-12-23T15:21:14.235Z",
            "valid_until": "2025-01-02T15:21:14.235Z",
            "usage_limit": 1,
            "is_active": true,
            "created_at": "2024-12-23T15:21:14.236Z",
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4"
        },
        {
            "id": "3907a6ee-5485-4859-86d1-3fe29afaa438",
            "code": "TRIAL-pb2rm2r0",
            "purpose": "trial-lesson",
            "discount_type": "percentage",
            "discount_value": "23",
            "max_discount_amount": null,
            "valid_from": "2024-12-23T15:21:23.418Z",
            "valid_until": "2025-01-02T15:21:23.418Z",
            "usage_limit": 1,
            "is_active": true,
            "created_at": "2024-12-23T15:21:23.419Z",
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4"
        },
        {
            "id": "0b228361-4ad0-429c-a1bb-098c0cbfa291",
            "code": "TRIAL-q9p57q4v",
            "purpose": "trial-lesson",
            "discount_type": "absolute",
            "discount_value": "176",
            "max_discount_amount": null,
            "valid_from": "2024-12-23T15:23:03.035Z",
            "valid_until": "2025-01-02T15:23:03.035Z",
            "usage_limit": 1,
            "is_active": true,
            "created_at": "2024-12-23T15:23:03.036Z",
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4"
        },
        {
            "id": "be7e2e45-c6d1-4743-a594-ce9e8089e384",
            "code": "TRIAL-lzzz7buf",
            "purpose": "trial-lesson",
            "discount_type": "absolute",
            "discount_value": "23",
            "max_discount_amount": null,
            "valid_from": "2024-12-23T15:35:39.470Z",
            "valid_until": "2025-01-02T15:35:39.470Z",
            "usage_limit": 1,
            "is_active": true,
            "created_at": "2024-12-23T15:35:39.564Z",
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4"
        },
        {
            "id": "2a049e49-8de1-4a5a-b3f1-8241574dda18",
            "code": "TRIAL-emn2jnwn",
            "purpose": "trial-lesson",
            "discount_type": "absolute",
            "discount_value": "23",
            "max_discount_amount": null,
            "valid_from": "2024-12-23T16:11:56.366Z",
            "valid_until": "2025-01-02T16:11:56.366Z",
            "usage_limit": 1,
            "is_active": true,
            "created_at": "2024-12-23T16:11:56.367Z",
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4"
        },
        {
            "id": "c17d1aea-845a-48e5-b17d-03baa217166e",
            "code": "ASDFG-jokhmtv4",
            "purpose": "trial-lesson",
            "discount_type": "percentage",
            "discount_value": "11",
            "max_discount_amount": null,
            "valid_from": "2024-12-24T10:16:25.047Z",
            "valid_until": "2025-01-03T10:16:25.047Z",
            "usage_limit": 1,
            "is_active": true,
            "created_at": "2024-12-24T10:16:25.162Z",
            "organisation_id": "6ce72bae-8ea2-4193-b457-df97889eeba4"
        }
    ];

    const copyToClipboard = async (code: string) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopiedCodes(prev => new Set(prev).add(code));
            setTimeout(() => {
                setCopiedCodes(prev => {
                    const newSet = new Set(prev);
                    newSet.delete(code);
                    return newSet;
                });
            }, 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString();
    };

    const formatDiscount = (type: string, value: string) => {
        if (type === 'percentage') {
            return `${value}%`;
        } else {
            return `$${value}`;
        }
    };

    return (
        <div className="mx-auto">
            <div className="grid grid-cols-2 gap-4">
                {coupons.map((coupon) => (
                    <Card key={coupon.id} className="w-full">
                        <CardHeader className="pb-3">
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-lg flex gap-2 font-mono">
                                        {coupon.code}
                                        <span className={`px-3 py-1 justify-center rounded-2xl items-center text-xs ${coupon.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                            }`}>
                                            {coupon.is_active ? 'Active' : 'Inactive'}
                                        </span>
                                    </CardTitle>
                                    <p className="text-sm text-gray-600 mt-1">{coupon.purpose}</p>
                                </div>
                                <Button
                                    onClick={() => copyToClipboard(coupon.code)}
                                    variant="outline"
                                    size="sm"
                                    className="flex items-center gap-2"
                                >
                                    {copiedCodes.has(coupon.code) ? (
                                        <>
                                            <Check className="w-4 h-4" />
                                            Copied
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4" />
                                            Copy
                                        </>
                                    )}
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div>
                                    <span className="font-medium">Discount:</span>
                                    <p>{formatDiscount(coupon.discount_type, coupon.discount_value)}</p>
                                </div>
                                <div>
                                    <span className="font-medium">Valid From:</span>
                                    <p>{formatDate(coupon.valid_from)}</p>
                                </div>
                                <div>
                                    <span className="font-medium">Valid Until:</span>
                                    <p>{formatDate(coupon.valid_until)}</p>
                                </div>
                                <div>
                                    <span className="font-medium">Usage Limit:</span>
                                    <p>{coupon.usage_limit}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ViewCoupons;