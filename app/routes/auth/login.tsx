import { useState, type FormEvent } from "react";
import { Form, useNavigate, useActionData, redirect } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { MailIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Route } from "./+types/login";
import { setAuthCookies } from "~/lib/auth";
import api from "~/config/axios";

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long")
});

type LoginFormData = z.infer<typeof loginSchema>;

// Server action for login
export async function action({ request }: Route.ActionArgs) {
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const navigate = useNavigate();

    try {
        const loginResponse = await api.post('/auth/login', {
            loginEmail: email,
            loginPass: password,
        });

        const {
            AccessToken: accessToken,
            RefreshToken: refreshToken,
            user_id: userId,
            role,
            organisation_id: organisations
        } = loginResponse.data;

        // Set cookies and redirect
        const headers = await setAuthCookies({
            accessToken,
            refreshToken,
            userId,
            organisations
        });

        return navigate('/');

    } catch (error: any) {
        console.error('Login error:', error);
        return {
            error: error?.response?.data?.message || 'Login failed'
        };
    }
}

export default function LoginPage() {
    const actionData = useActionData<typeof action>();
    const navigate = useNavigate();

    const form = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = form;

    return (
        <div className="flex min-h-screen items-center justify-center bg-accent p-4 sm:p-6 lg:p-8">
            <Card className="w-full max-w-md">
                <CardHeader className="flex flex-row items-center justify-center gap-4 pb-1">
                    <img
                        src="/aeronys-icon.png"
                        alt=""
                        className="w-14 h-14 object-contain rounded-full"
                        onError={(e) => {
                            e.currentTarget.src = "https://placehold.co/64x64/E0E0E0/333333?text=Logo+Err";
                            e.currentTarget.alt = "Logo failed to load";
                        }}
                    />
                    <div className="flex flex-col items-start">
                        <CardTitle className="text-xl">Login</CardTitle>
                        <CardDescription>Enter your credentials to access your account</CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6 p-6 pt-0">
                    {actionData?.error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                            {actionData.error}
                        </div>
                    )}

                    <div>
                        <Button variant="outline" className="w-full cursor-pointer flex items-center justify-center py-2.5">
                            <MailIcon className="mr-2 h-4 w-4 text-primary" />
                            Continue with Google
                        </Button>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2">Or continue with</span>
                        </div>
                    </div>

                    <Form method="post" className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="w-full px-3 py-2"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                required
                                className="w-full px-3 py-2"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full py-2.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Login with Email
                        </Button>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
